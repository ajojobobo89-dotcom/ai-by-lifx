// Inisialisasi Global
let chatHistory = [];
let searchEngine;
let currentCategory = 'all';
let settings = {
    strictMode: false,
    shortcutDetection: true,
    typingIndicator: true,
    maxMessages: 100,
    soundEnabled: false,
    desktopNotification: false,
    saveHistory: true,
    theme: 'dark'
};

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi mesin pencari
    searchEngine = new SearchEngine(responseDatabase);
    
    // Muat pengaturan dari localStorage
    loadSettings();
    
    // Terapkan tema
    applyTheme(settings.theme);
    
    // Tampilkan statistik
    updateStats();
    
    // Tambahkan pesan sambutan
    addBotMessage("Halo! Selamat datang di AI Asisten Manual dengan **2000+ respons**. Saya bisa menjawab berbagai pertanyaan tentang teknologi, pendidikan, kesehatan, motivasi, dan masih banyak lagi! Coba ketik 'halo' atau klik saran pertanyaan di bawah. 🤖");
    
    // Render kategori di sidebar
    renderCategories();
    
    // Render saran pertanyaan
    refreshSuggestions();
    
    // Update statistik di header
    updateHeaderStats();
    
    // Setup event listeners
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Input user - detect enter
    const userInput = document.getElementById('userInput');
    if (userInput) {
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        // Typing indicator
        if (settings.typingIndicator) {
            userInput.addEventListener('input', function() {
                showTypingIndicator();
            });
        }
    }
    
    // Kategori filter
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterByCategory(category);
        });
    });
}

// ============= FUNGSI CHAT =============

// Kirim pesan
function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Tambah pesan user
    addUserMessage(message);
    
    // Tampilkan typing indicator
    if (settings.typingIndicator) {
        showTypingIndicator(true);
    }
    
    // Proses pencarian respons
    setTimeout(() => {
        // Cari respons terbaik
        const result = searchEngine.findBestResponse(message);
        
        // Sembunyikan typing indicator
        if (settings.typingIndicator) {
            hideTypingIndicator();
        }
        
        // Tambah pesan bot
        let botResponse = result ? result.response : "Maaf, saya tidak menemukan jawaban untuk pertanyaan tersebut.";
        
        // Tambahkan info kategori jika ada
        if (result && result.category && result.category !== 'umum' && Math.random() > 0.7) {
            const categoryName = getCategoryName(result.category);
            botResponse += `\n\n📌 *Kategori: ${categoryName}*`;
        }
        
        addBotMessage(botResponse);
        
        // Update statistik
        updateStats();
        
        // Kosongkan input
        input.value = '';
        
        // Simpan ke history jika diaktifkan
        if (settings.saveHistory) {
            saveChatHistory();
        }
        
        // Notifikasi jika diaktifkan
        if (settings.soundEnabled) {
            playNotificationSound();
        }
    }, 500); // Simulasi proses berpikir
}

// Tambah pesan user
function addUserMessage(message) {
    chatHistory.push({
        type: 'user',
        message: message,
        timestamp: getCurrentTime()
    });
    
    renderMessages();
}

// Tambah pesan bot
function addBotMessage(message) {
    chatHistory.push({
        type: 'bot',
        message: message,
        timestamp: getCurrentTime()
    });
    
    renderMessages();
}

// Render semua pesan
function renderMessages() {
    const container = document.getElementById('chatMessages');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Batasi jumlah pesan sesuai pengaturan
    const messagesToShow = settings.maxMessages > 0 
        ? chatHistory.slice(-settings.maxMessages) 
        : chatHistory;
    
    messagesToShow.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${msg.type === 'user' ? 'user-message' : 'bot-message'}`;
        
        const wrapper = document.createElement('div');
        wrapper.className = 'message-wrapper';
        
        // Avatar
        const avatar = document.createElement('div');
        avatar.className = `avatar ${msg.type === 'user' ? 'user-avatar' : 'bot-avatar'}`;
        avatar.textContent = msg.type === 'user' ? '👤' : '🤖';
        
        // Konten pesan
        const content = document.createElement('div');
        content.className = 'message-content';
        
        // Support markdown sederhana
        let formattedMessage = msg.message
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>');
        
        content.innerHTML = formattedMessage;
        
        if (msg.type === 'user') {
            wrapper.appendChild(content);
            wrapper.appendChild(avatar);
        } else {
            wrapper.appendChild(avatar);
            wrapper.appendChild(content);
        }
        
        messageDiv.appendChild(wrapper);
        
        // Timestamp
        const timeDiv = document.createElement('div');
        timeDiv.className = 'timestamp';
        timeDiv.textContent = msg.timestamp;
        messageDiv.appendChild(timeDiv);
        
        container.appendChild(messageDiv);
    });
    
    // Scroll ke bawah
    container.scrollTop = container.scrollHeight;
}

// Format timestamp
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('id-ID', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
    });
}

// ============= TYPING INDICATOR =============

function showTypingIndicator(show = false) {
    const indicator = document.getElementById('typingIndicator');
    if (!indicator) return;
    
    if (show) {
        indicator.innerHTML = '🤖 Asisten sedang mengetik...';
        indicator.style.display = 'block';
    } else {
        indicator.style.display = 'none';
    }
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.style.display = 'none';
    }
}

// ============= FUNGSI KATEGORI =============

// Render kategori di sidebar
function renderCategories() {
    const container = document.getElementById('categoryList');
    if (!container) return;
    
    const categories = searchEngine.getAllCategories();
    
    // Urutkan kategori
    categories.sort();
    
    // Hitung jumlah per kategori
    const categoryCounts = {};
    responseDatabase.forEach(item => {
        if (item.category) {
            categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
        }
    });
    
    // Tampilkan kategori
    categories.forEach(category => {
        if (category === 'umum' || category === 'default') return;
        
        const categoryItem = document.createElement('div');
        categoryItem.className = `category-item ${currentCategory === category ? 'active' : ''}`;
        categoryItem.setAttribute('data-category', category);
        
        const categoryName = getCategoryName(category);
        const count = categoryCounts[category] || 0;
        
        categoryItem.innerHTML = `
            <span>${categoryName}</span>
            <span class="category-count">${count}</span>
        `;
        
        categoryItem.addEventListener('click', function() {
            filterByCategory(category);
        });
        
        container.appendChild(categoryItem);
    });
}

// Dapatkan nama kategori yang bagus
function getCategoryName(category) {
    const categoryNames = {
        'sapaan': '👋 Sapaan',
        'perkenalan': '🤝 Perkenalan',
        'teknologi': '💻 Teknologi',
        'pendidikan': '📚 Pendidikan',
        'kesehatan': '🏥 Kesehatan',
        'motivasi': '🔥 Motivasi',
        'makanan': '🍜 Makanan',
        'hewan': '🐾 Hewan',
        'wisata': '🏖️ Wisata',
        'matematika': '➕ Matematika',
        'fisika': '⚡ Fisika',
        'kimia': '🧪 Kimia',
        'biologi': '🧬 Biologi',
        'bahasa': '🗣️ Bahasa',
        'olahraga': '⚽ Olahraga',
        'seni': '🎨 Seni',
        'bisnis': '💼 Bisnis',
        'hukum': '⚖️ Hukum',
        'agama': '🕊️ Agama',
        'psikologi': '🧠 Psikologi',
        'astronomi': '🌌 Astronomi',
        'geografi': '🌍 Geografi',
        'sejarah': '📜 Sejarah',
        'budaya': '🎭 Budaya',
        'otomotif': '🚗 Otomotif',
        'game': '🎮 Game',
        'film': '🎬 Film',
        'musik': '🎵 Musik',
        'fashion': '👗 Fashion',
        'kecantikan': '💄 Kecantikan',
        'pertanian': '🌾 Pertanian',
        'peternakan': '🐄 Peternakan',
        'perikanan': '🐟 Perikanan',
        'lingkungan': '🌱 Lingkungan',
        'energi': '⚡ Energi',
        'transportasi': '🚆 Transportasi',
        'komunikasi': '📡 Komunikasi',
        'militer': '🎖️ Militer',
        'politik': '🏛️ Politik',
        'ekonomi': '💰 Ekonomi',
        'sosial': '👥 Sosial',
        'filsafat': '🤔 Filsafat',
        'logika': '🔍 Logika',
        'umum': '📌 Umum'
    };
    
    return categoryNames[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

// Filter berdasarkan kategori
function filterByCategory(category) {
    currentCategory = category;
    
    // Update active class
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-category') === category) {
            item.classList.add('active');
        }
    });
    
    // Refresh suggestions berdasarkan kategori
    refreshSuggestions();
}

// ============= FUNGSI SUGGESTIONS =============

// Refresh saran pertanyaan
function refreshSuggestions() {
    const container = document.getElementById('suggestionChips');
    if (!container) return;
    
    container.innerHTML = '';
    
    let suggestions = [];
    
    if (currentCategory === 'all') {
        // Ambil saran dari semua kategori
        suggestions = searchEngine.getSuggestions(12);
    } else {
        // Ambil dari kategori tertentu
        const categoryResponses = searchEngine.getResponsesByCategory(currentCategory);
        suggestions = categoryResponses
            .filter(item => !item.keywords.includes('default'))
            .slice(0, 8)
            .map(item => ({
                keyword: item.keywords[0],
                category: item.category
            }));
    }
    
    // Tambahkan ke container
    suggestions.forEach(suggestion => {
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.textContent = suggestion.keyword;
        chip.addEventListener('click', function() {
            document.getElementById('userInput').value = suggestion.keyword;
            sendMessage();
        });
        container.appendChild(chip);
    });
    
    // Update kategori yang ditampilkan
    const categoryDisplay = document.getElementById('currentCategoryDisplay');
    if (categoryDisplay) {
        if (currentCategory === 'all') {
            categoryDisplay.textContent = 'Semua Kategori';
        } else {
            categoryDisplay.textContent = getCategoryName(currentCategory);
        }
    }
}

// Quick question dari chip
function quickQuestion(question) {
    document.getElementById('userInput').value = question;
    sendMessage();
}

// ============= FUNGSI STATISTIK =============

// Update statistik
function updateStats() {
    const stats = searchEngine.getStats();
    
    const chatCount = document.getElementById('chatCount');
    if (chatCount) {
        chatCount.textContent = Math.floor(chatHistory.length / 2);
    }
}

// Update header stats
function updateHeaderStats() {
    const stats = searchEngine.getStats();
    
    const totalResponses = document.getElementById('totalResponses');
    if (totalResponses) {
        totalResponses.textContent = stats.totalResponses;
    }
    
    const totalCategories = document.getElementById('totalCategories');
    if (totalCategories) {
        totalCategories.textContent = stats.totalCategories;
    }
    
    const popularCount = document.getElementById('popularCount');
    if (popularCount) {
        popularCount.textContent = stats.validResponses;
    }
}

// ============= FUNGSI PENGATURAN =============

// Muat pengaturan dari localStorage
function loadSettings() {
    const savedSettings = localStorage.getItem('aiSettings');
    if (savedSettings) {
        try {
            settings = { ...settings, ...JSON.parse(savedSettings) };
        } catch (e) {
            console.error('Gagal memuat settings:', e);
        }
    }
}

// Simpan pengaturan
function saveSettings() {
    localStorage.setItem('aiSettings', JSON.stringify(settings));
    
    // Terapkan pengaturan
    if (settings.theme) {
        applyTheme(settings.theme);
    }
}

// Terapkan tema
function applyTheme(theme) {
    const body = document.body;
    
    if (theme === 'light') {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    } else if (theme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    } else {
        // Sistem
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
        } else {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
        }
    }
}

// ============= FUNGSI UTILITY =============

// Reset chat
function resetChat() {
    if (confirm('Apakah Anda yakin ingin mereset semua percakapan?')) {
        chatHistory = [];
        addBotMessage('Percakapan telah direset. Silakan mulai percakapan baru! 🤖');
        
        if (settings.saveHistory) {
            localStorage.removeItem('chatHistory');
        }
    }
}

// Clear chat
function clearChat() {
    if (confirm('Hapus semua pesan?')) {
        chatHistory = [];
        renderMessages();
    }
}

// Export chat ke file
function exportChat() {
    let text = "=== AI Asisten Manual - Export Chat ===\n";
    text += "Tanggal: " + new Date().toLocaleString() + "\n";
    text += "Total Pesan: " + chatHistory.length + "\n\n";
    
    chatHistory.forEach(msg => {
        text += `[${msg.timestamp}] ${msg.type === 'user' ? '👤 User' : '🤖 AI'}: ${msg.message}\n`;
    });
    
    // Buat file download
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat-export-' + new Date().toISOString().slice(0,10) + '.txt';
    a.click();
    URL.revokeObjectURL(url);
}

// Simpan chat history
function saveChatHistory() {
    if (settings.saveHistory) {
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }
}

// Muat chat history
function loadChatHistory() {
    const saved = localStorage.getItem('chatHistory');
    if (saved && settings.saveHistory) {
        try {
            chatHistory = JSON.parse(saved);
            renderMessages();
        } catch (e) {
            console.error('Gagal memuat history:', e);
        }
    }
}

// Mainkan suara notifikasi
function playNotificationSound() {
    // Implementasi suara jika diinginkan
    // Bisa menggunakan Web Audio API
}

// Toggle sidebar (untuk mobile)
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('collapsed');
    }
}

// Handle key press (dari global)
window.handleKeyPress = function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
};

// Export fungsi ke global
window.sendMessage = sendMessage;
window.resetChat = resetChat;
window.clearChat = clearChat;
window.exportChat = exportChat;
window.quickQuestion = quickQuestion;
window.refreshSuggestions = refreshSuggestions;
window.toggleSidebar = toggleSidebar;

// ============= INISIALISASI CHAT =============

// Cek apakah ada chat history tersimpan
loadChatHistory();
