// Mesin pencari respons dengan deteksi singkatan dan variasi kata
class SearchEngine {
    constructor(database) {
        this.database = database;
        this.cache = new Map();
        this.initShortcuts();
    }

    // Inisialisasi kamus singkatan
    initShortcuts() {
        this.shortcuts = {
            // Singkatan umum
            "hlo": "halo",
            "helo": "halo", 
            "hai": "halo",
            "hi": "halo",
            "mksh": "terima kasih",
            "thx": "terima kasih",
            "tq": "terima kasih",
            "mkasih": "terima kasih",
            "trims": "terima kasih",
            "mf": "maaf",
            "maap": "maaf",
            "sori": "maaf",
            "iya": "ya",
            "y": "ya",
            "ga": "tidak",
            "gk": "tidak",
            "nggak": "tidak",
            "tdk": "tidak",
            "gpp": "tidak apa apa",
            "ok": "oke",
            "udh": "sudah",
            "blm": "belum",
            "jg": "juga",
            "aja": "saja",
            "dgn": "dengan",
            "utk": "untuk",
            "krn": "karena",
            "kpd": "kepada",
            "pd": "pada",
            "dr": "dari",
            "ttg": "tentang",
            "bgmn": "bagaimana",
            "gmna": "gimana",
            "kpn": "kapan",
            "dmn": "dimana",
            "knp": "kenapa",
            "ngapain": "apa"
        };
    }

    // Normalisasi input (lowercase, hapus tanda baca)
    normalizeInput(input) {
        return input.toLowerCase()
            .replace(/[^\w\s]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    // Deteksi singkatan
    expandShortcuts(input) {
        let words = input.split(' ');
        let expanded = words.map(word => {
            return this.shortcuts[word] || word;
        });
        return expanded.join(' ');
    }

    // Hitung similarity sederhana
    calculateSimilarity(str1, str2) {
        if (str1.includes(str2) || str2.includes(str1)) return 1.0;
        
        let words1 = str1.split(' ');
        let words2 = str2.split(' ');
        
        let matches = 0;
        for (let w1 of words1) {
            for (let w2 of words2) {
                if (w1 === w2 || w2.includes(w1) || w1.includes(w2)) {
                    matches++;
                    break;
                }
            }
        }
        
        return matches / Math.max(words1.length, words2.length);
    }

    // Cari respons terbaik
    findBestResponse(input) {
        // Cek cache
        if (this.cache.has(input)) {
            return this.cache.get(input);
        }

        let normalized = this.normalizeInput(input);
        let expanded = this.expandShortcuts(normalized);
        
        let bestMatch = null;
        let highestScore = 0;
        
        // Cari di database
        for (let item of this.database) {
            for (let keyword of item.keywords) {
                let keywordNorm = this.normalizeInput(keyword);
                
                // Cek exact match
                if (normalized === keywordNorm || expanded === keywordNorm) {
                    bestMatch = item;
                    highestScore = 1.0;
                    break;
                }
                
                // Cek partial match
                if (normalized.includes(keywordNorm) || keywordNorm.includes(normalized)) {
                    let score = 0.9;
                    if (score > highestScore) {
                        highestScore = score;
                        bestMatch = item;
                    }
                }
                
                // Cek similarity
                let similarity = this.calculateSimilarity(normalized, keywordNorm);
                if (similarity > 0.7 && similarity > highestScore) {
                    highestScore = similarity;
                    bestMatch = item;
                }
            }
            if (highestScore === 1.0) break;
        }
        
        // Jika tidak ada yang cocok, cari default
        if (!bestMatch) {
            bestMatch = this.database.find(item => 
                item.keywords.includes("default") || 
                item.keywords.includes("unknown")
            );
        }
        
        // Simpan ke cache
        this.cache.set(input, bestMatch);
        
        return bestMatch;
    }

    // Dapatkan semua kategori
    getAllCategories() {
        let categories = new Set();
        for (let item of this.database) {
            if (item.category) {
                categories.add(item.category);
            }
        }
        return Array.from(categories);
    }

    // Dapatkan respons per kategori
    getResponsesByCategory(category) {
        return this.database.filter(item => item.category === category);
    }

    // Dapatkan saran pertanyaan
    getSuggestions(limit = 10) {
        let suggestions = [];
        let categories = {};
        
        // Ambil dari setiap kategori
        for (let item of this.database) {
            if (item.category && !item.keywords.includes("default")) {
                if (!categories[item.category]) {
                    categories[item.category] = true;
                    suggestions.push({
                        keyword: item.keywords[0],
                        category: item.category
                    });
                }
            }
        }
        
        // Acak dan batasi
        return this.shuffleArray(suggestions).slice(0, limit);
    }

    // Acak array
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Dapatkan statistik
    getStats() {
        let total = this.database.length;
        let categories = this.getAllCategories().length;
        let defaultCount = this.database.filter(item => 
            item.keywords.includes("default")
        ).length;
        
        return {
            totalResponses: total,
            totalCategories: categories,
            validResponses: total - defaultCount,
            defaultResponses: defaultCount
        };
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SearchEngine;
}
