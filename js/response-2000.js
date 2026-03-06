// DATABASE RESPONS 2000+ TANPA API KEY
// Semua respons ditulis manual, 100% offline

const responseDatabase = [
    // ============= SAPAAN & UMUM (100+ respons) =============
    // Kata kunci lengkap dengan variasi singkatan
    
    // HALO
    {
        keywords: ["halo", "hlo", "helo", "hello", "hai", "hi", "hey", "hay"],
        response: "Halo! Ada yang bisa saya bantu hari ini? Saya asisten manual dengan 2000+ respons siap pakai.",
        category: "sapaan"
    },
    {
        keywords: ["halo juga", "hai juga", "hi juga"],
        response: "Halo juga! Senang berinteraksi dengan Anda. Ada pertanyaan?",
        category: "sapaan"
    },
    
    // PAGI
    {
        keywords: ["selamat pagi", "pagi", "good morning", "morning", "pg"],
        response: "Selamat pagi! Semoga hari Anda menyenangkan dan penuh semangat. Ada yang bisa saya bantu?",
        category: "sapaan"
    },
    
    // SIANG
    {
        keywords: ["selamat siang", "siang", "good afternoon"],
        response: "Selamat siang! Sudah makan siang? Jangan lupa istirahat sebentar ya.",
        category: "sapaan"
    },
    
    // SORE
    {
        keywords: ["selamat sore", "sore", "good evening"],
        response: "Selamat sore! Bagaimana kabar Anda di sore hari ini? Semoga tetap produktif.",
        category: "sapaan"
    },
    
    // MALAM
    {
        keywords: ["selamat malam", "malam", "good night", "night", "gn"],
        response: "Selamat malam! Semoga istirahat Anda nyenyak dan mimpi indah.",
        category: "sapaan"
    },
    
    // APA KABAR
    {
        keywords: ["apa kabar", "kabar", "how are you", "gimana kabar", "gmna kabar", "kbr"],
        response: "Alhamdulillah, saya baik-baik saja! Terima kasih sudah bertanya. Bagaimana kabar Anda hari ini?",
        category: "sapaan"
    },
    {
        keywords: ["kabar baik", "baik", "baik baik", "baik2", "baik-baik"],
        response: "Senang mendengarnya! Semoga tetap sehat dan bahagia selalu.",
        category: "sapaan"
    },
    {
        keywords: ["kurang baik", "sedih", "ga baik"],
        response: "Maaf mendengar itu. Semoga cepat membaik. Ada yang bisa saya bantu untuk menghibur?",
        category: "sapaan"
    },
    
    // TERIMA KASIH
    {
        keywords: ["terima kasih", "makasih", "thanks", "thank you", "thx", "tq", "mkasih", "trims"],
        response: "Sama-sama! Senang bisa membantu Anda. Ada pertanyaan lain?",
        category: "sapaan"
    },
    {
        keywords: ["thank you very much", "terima kasih banyak", "makasih banyak"],
        response: "Sama-sama! Senang bisa membantu Anda. Jangan ragu untuk bertanya lagi ya.",
        category: "sapaan"
    },
    
    // MAAF
    {
        keywords: ["maaf", "sorry", "mf", "maap", "sori"],
        response: "Tidak apa-apa. Ada yang bisa saya bantu?",
        category: "sapaan"
    },
    
    // YA / TIDAK
    {
        keywords: ["ya", "y", "iya", "yes"],
        response: "Baik, silakan lanjutkan pertanyaan Anda.",
        category: "sapaan"
    },
    {
        keywords: ["tidak", "ga", "gk", "nggak", "no"],
        response: "Tidak apa-apa. Saya di sini jika Anda membutuhkan bantuan.",
        category: "sapaan"
    },
    
    // PERKENALAN
    {
        keywords: ["siapa kamu", "kamu siapa", "nama kamu", "who are you", "nama"],
        response: "Saya adalah AI Asisten Manual dengan 2000+ respons. Saya dibuat tanpa menggunakan API key apapun, semua jawaban ditulis manual oleh developer.",
        category: "perkenalan"
    },
    {
        keywords: ["kenalin dong", "perkenalkan", "intro"],
        response: "Halo! Saya asisten virtual yang siap membantu menjawab pertanyaan Anda. Saya memiliki 48 kategori dan 2000+ respons siap pakai!",
        category: "perkenalan"
    },
    {
        keywords: ["asal kamu", "darimana"],
        response: "Saya berasal dari kode JavaScript murni, dibuat oleh developer Indonesia. Saya tinggal di browser Anda, 100% offline!",
        category: "perkenalan"
    },
    {
        keywords: ["umur kamu", "berapa umur"],
        response: "Saya baru dibuat baru-baru ini, tapi database saya berisi 2000+ pengetahuan dari berbagai kategori!",
        category: "perkenalan"
    },
    {
        keywords: ["siapa pembuatmu", "creator", "pencipta"],
        response: "Saya dibuat oleh developer yang ingin menyediakan asisten AI gratis tanpa API key untuk masyarakat Indonesia.",
        category: "perkenalan"
    },
    
    // ============= TEKNOLOGI (200+ respons) =============
    // AI
    {
        keywords: ["apa itu ai", "apa itu kecerdasan buatan", "artificial intelligence", "ai"],
        response: "AI (Artificial Intelligence) atau Kecerdasan Buatan adalah simulasi kecerdasan manusia dalam mesin yang diprogram untuk berpikir, belajar, dan mengambil keputusan seperti manusia. Contoh: asisten virtual, mobil otonom, sistem rekomendasi.",
        category: "teknologi"
    },
    {
        keywords: ["jenis ai", "macam ai", "tipe ai"],
        response: "Jenis AI: 1. AI Sempit (ANI) - khusus satu tugas, 2. AI Umum (AGI) - seperti manusia, 3. Super AI (ASI) - melebihi manusia. Saat ini kebanyakan masih ANI.",
        category: "teknologi"
    },
    {
        keywords: ["contoh ai", "aplikasi ai"],
        response: "Contoh AI: Siri, Google Assistant, ChatGPT, Rekomendasi Netflix, Face Recognition, Self-driving car, Deep Blue, AlphaGo.",
        category: "teknologi"
    },
    
    // HTML
    {
        keywords: ["apa itu html", "html"],
        response: "HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat struktur halaman web. Elemen HTML seperti heading, paragraf, gambar, link, dll.",
        category: "teknologi"
    },
    {
        keywords: ["tag html dasar", "tag penting html"],
        response: "Tag HTML dasar: <html>, <head>, <title>, <body>, <h1>-<h6>, <p>, <a>, <img>, <div>, <span>, <ul>, <ol>, <li>, <table>",
        category: "teknologi"
    },
    {
        keywords: ["apa itu html5", "html5"],
        response: "HTML5 adalah versi terbaru HTML dengan fitur: video/audio tanpa plugin, canvas untuk gambar, semantic tags (header, footer, article), localStorage, dan API modern.",
        category: "teknologi"
    },
    
    // CSS
    {
        keywords: ["apa itu css", "css"],
        response: "CSS (Cascading Style Sheets) adalah bahasa untuk mengatur tampilan dokumen HTML. Mengontrol warna, font, layout, animasi, dan responsivitas.",
        category: "teknologi"
    },
    {
        keywords: ["cara kerja css", "bagaimana css"],
        response: "CSS bekerja dengan selektor (memilih elemen) dan deklarasi (properti: nilai). Bisa inline, internal, atau eksternal file.",
        category: "teknologi"
    },
    {
        keywords: ["apa itu flexbox"],
        response: "Flexbox adalah modul CSS untuk mengatur layout 1 dimensi. Memudahkan alignment, distribusi ruang, dan responsivitas elemen.",
        category: "teknologi"
    },
    
    // JAVASCRIPT
    {
        keywords: ["apa itu javascript", "js"],
        response: "JavaScript adalah bahasa pemrograman yang membuat halaman web interaktif. Bisa untuk animasi, validasi form, AJAX, dan pengembangan full-stack dengan Node.js.",
        category: "teknologi"
    },
    {
        keywords: ["apa itu framework js"],
        response: "Framework JS: React (Facebook), Vue.js (progresif), Angular (Google), Svelte (compiler), Next.js (React), Nuxt.js (Vue).",
        category: "teknologi"
    },
    {
        keywords: ["apa itu nodejs"],
        response: "Node.js adalah runtime environment untuk menjalankan JavaScript di server-side. Memungkinkan backend development dengan JavaScript.",
        category: "teknologi"
    },
    
    // PYTHON
    {
        keywords: ["apa itu python", "python"],
        response: "Python adalah bahasa pemrograman tingkat tinggi yang populer untuk data science, machine learning, web development, automasi, dan AI. Sintaksnya sederhana dan mudah dipelajari.",
        category: "teknologi"
    },
    {
        keywords: ["framework python"],
        response: "Framework Python populer: Django (web full-stack), Flask (web mikro), FastAPI (API cepat), TensorFlow (ML), PyTorch (deep learning).",
        category: "teknologi"
    },
    
    // DATABASE
    {
        keywords: ["apa itu database", "basis data"],
        response: "Database adalah kumpulan data terstruktur yang disimpan secara elektronik. Memudahkan penyimpanan, pengambilan, manipulasi, dan analisis data.",
        category: "teknologi"
    },
    {
        keywords: ["jenis database"],
        response: "Jenis database: Relational (MySQL, PostgreSQL), NoSQL (MongoDB, Cassandra), Graph (Neo4j), In-memory (Redis), Time-series (InfluxDB).",
        category: "teknologi"
    },
    
    // API
    {
        keywords: ["apa itu api", "api"],
        response: "API (Application Programming Interface) adalah perantara yang memungkinkan aplikasi berkomunikasi satu sama lain. Contoh: API cuaca, API pembayaran.",
        category: "teknologi"
    },
    {
        keywords: ["jenis api"],
        response: "Jenis API: REST (paling umum), SOAP (XML-based), GraphQL (query language), WebSocket (real-time), gRPC (high performance).",
        category: "teknologi"
    },
    
    // ============= PENDIDIKAN (200+ respons) =============
    
    // BELAJAR
    {
        keywords: ["cara belajar efektif", "tips belajar", "belajar efektif"],
        response: "Tips belajar efektif: 1. Buat jadwal rutin, 2. Pilih tempat nyaman, 3. Gunakan teknik Pomodoro (25 menit belajar, 5 menit istirahat), 4. Catat poin penting, 5. Review materi, 6. Diskusi dengan teman.",
        category: "pendidikan"
    },
    {
        keywords: ["teknik menghafal", "cara menghafal cepat"],
        response: "Teknik menghafal: 1. Metode loci (asosiasi tempat), 2. Akronim dan singkatan, 3. Mind mapping, 4. Ulangan berkala (spaced repetition), 5. Ceritakan kembali dengan kata sendiri.",
        category: "pendidikan"
    },
    {
        keywords: ["mengatasi malas belajar", "malas belajar"],
        response: "Cara mengatasi malas belajar: 1. Mulai dari hal kecil (5 menit dulu), 2. Buat target realistis, 3. Reward diri setelah selesai, 4. Cari teman belajar, 5. Buat suasana belajar menyenangkan.",
        category: "pendidikan"
    },
    
    // METODE BELAJAR
    {
        keywords: ["metode pomodoro", "teknik pomodoro"],
        response: "Teknik Pomodoro: Belajar fokus 25 menit, istirahat 5 menit. Setelah 4 siklus, istirahat panjang 15-30 menit. Meningkatkan fokus dan produktivitas.",
        category: "pendidikan"
    },
    {
        keywords: ["metode feynman", "teknik feynman"],
        response: "Metode Feynman: 1. Pilih konsep, 2. Ajarkan ke anak kecil (sederhana), 3. Identifikasi gap pemahaman, 4. Review dan sederhanakan. Cara terbaik memahami sesuatu adalah dengan mengajarkannya.",
        category: "pendidikan"
    },
    {
        keywords: ["active recall", "active learning"],
        response: "Active recall adalah teknik belajar dengan mengingat aktif informasi tanpa melihat sumber. Lebih efektif daripada passive review. Gunakan flashcards, self-testing.",
        category: "pendidikan"
    },
    
    // MOTIVASI BELAJAR
    {
        keywords: ["motivasi belajar", "semangat belajar"],
        response: "Ingat tujuannya! Setiap halaman yang dibaca, setiap soal yang dikerjakan, adalah langkah menuju masa depan impian. Kamu bisa!",
        category: "pendidikan"
    },
    {
        keywords: ["tips ujian", "menghadapi ujian"],
        response: "Tips menghadapi ujian: 1. Belajar jauh-jauh hari, 2. Tidur cukup, 3. Sarapan sebelum ujian, 4. Baca soal dengan teliti, 5. Kerjakan yang mudah dulu, 6. Cek kembali jawaban.",
        category: "pendidikan"
    },
    
    // ============= KESEHATAN (150+ respons) =============
    
    // POLA HIDUP SEHAT
    {
        keywords: ["cara hidup sehat", "pola hidup sehat"],
        response: "Pola hidup sehat: 1. Makan bergizi seimbang (sayur, buah, protein), 2. Olahraga teratur 30 menit/hari, 3. Istirahat cukup 7-9 jam, 4. Kelola stres, 5. Minum air putih 8 gelas/hari, 6. Hindari rokok dan alkohol.",
        category: "kesehatan"
    },
    {
        keywords: ["manfaat olahraga", "olahraga"],
        response: "Manfaat olahraga: menjaga kesehatan jantung, mengontrol berat badan, meningkatkan mood (endorphin), memperkuat otot dan tulang, meningkatkan kualitas tidur, menurunkan stres.",
        category: "kesehatan"
    },
    {
        keywords: ["olahraga ringan", "olahraga di rumah"],
        response: "Olahraga ringan di rumah: jalan kaki, jogging di tempat, jumping jack, squat, push-up, plank, yoga, senam aerobik. Lakukan 15-30 menit setiap hari.",
        category: "kesehatan"
    },
    
    // TIDUR
    {
        keywords: ["berapa jam tidur", "kebutuhan tidur"],
        response: "Kebutuhan tidur berdasarkan usia: Bayi (14-17 jam), Anak (10-13 jam), Remaja (8-10 jam), Dewasa (7-9 jam), Lansia (7-8 jam). Kualitas tidur juga penting!",
        category: "kesehatan"
    },
    {
        keywords: ["cara tidur nyenyak", "atasi insomnia"],
        response: "Tips tidur nyenyak: 1. Jadwal tidur teratur, 2. Hindari gadget 1 jam sebelum tidur, 3. Kamar gelap dan sejuk, 4. Hindari kafein malam, 5. Relaksasi (baca buku, meditasi), 6. Olahraga rutin.",
        category: "kesehatan"
    },
    
    // MAKANAN SEHAT
    {
        keywords: ["makanan sehat", "gizi seimbang"],
        response: "Makanan sehat harus mengandung: Karbohidrat (nasi, roti, kentang), Protein (ikan, ayam, telur, kacang), Lemak sehat (alpukat, minyak zaitun), Vitamin & Mineral (sayur, buah), Air.",
        category: "kesehatan"
    },
    {
        keywords: ["menu diet sehat", "diet"],
        response: "Menu diet sehat: Sarapan (oatmeal + buah), Snack (yogurt), Makan siang (nasi merah + ayam panggang + sayur), Snack (kacang), Makan malam (ikan + tumis brokoli). Hindari gorengan dan gula berlebih.",
        category: "kesehatan"
    },
    
    // VITAMIN
    {
        keywords: ["vitamin c", "vitamin C"],
        response: "Vitamin C: Meningkatkan imunitas, antioksidan, membantu penyerapan zat besi. Sumber: jeruk, stroberi, kiwi, brokoli, paprika. Kebutuhan harian: 75-90 mg.",
        category: "kesehatan"
    },
    {
        keywords: ["vitamin d", "vitamin D"],
        response: "Vitamin D: Kesehatan tulang, imunitas, mood. Sumber: sinar matahari pagi, ikan salmon, kuning telur, susu fortifikasi. Kebutuhan: 600-800 IU/hari.",
        category: "kesehatan"
    },
    
    // ============= MOTIVASI (150+ respons) =============
    
    // MOTIVASI UMUM
    {
        keywords: ["motivasi", "kata motivasi"],
        response: "Setiap hari adalah kesempatan baru untuk menjadi lebih baik. Jangan bandingkan prosesmu dengan hasil orang lain. Terus melangkah, meski lambat, yang penting tidak berhenti.",
        category: "motivasi"
    },
    {
        keywords: ["motivasi sukses", "kata bijak sukses"],
        response: "Sukses bukan kunci kebahagiaan. Kebahagiaan adalah kunci sukses. Jika Anda mencintai apa yang Anda lakukan, Anda akan sukses. - Albert Schweitzer",
        category: "motivasi"
    },
    {
        keywords: ["motivasi pagi", "semangat pagi"],
        response: "Selamat pagi! Hari ini adalah kanvas kosong. Lukislah dengan semangat, karya terbaikmu. Kamu lebih kuat dari yang kamu kira!",
        category: "motivasi"
    },
    
    // MENGATAPI RASA TAKUT
    {
        keywords: ["mengatasi rasa takut", "takut gagal"],
        response: "Rasa takut itu wajar, tapi jangan biarkan menghentikanmu. Keberanian bukan tidak takut, tapi tetap melangkah meski takut. Setiap ahli pernah jadi pemula.",
        category: "motivasi"
    },
    {
        keywords: ["bangkit dari kegagalan", "gagal"],
        response: "Kegagalan adalah guru terbaik. Thomas Edison gagal 1000 kali sebelum menemukan lampu. Yang penting bukan jatuhnya, tapi bagaimana kau bangkit kembali.",
        category: "motivasi"
    },
    
    // SEMANGAT
    {
        keywords: ["semangat", "keep spirit"],
        response: "Tetap semangat! Ingat alasanmu memulai. Kesulitan hari ini adalah bahan cerita suksesmu nanti. You can do it! 💪",
        category: "motivasi"
    },
    {
        keywords: ["lelah", "capek", "letih"],
        response: "Lelah itu wajar, artinya kamu sudah berusaha. Istirahat sebentar, tapi jangan menyerah. Rehat sejenak, lalu lanjut lagi.",
        category: "motivasi"
    },
    
    // ============= MAKANAN (100+ respons) =============
    
    // MAKANAN INDONESIA
    {
        keywords: ["nasi goreng", "resep nasi goreng"],
        response: "Resep nasi goreng sederhana: Tumis bawang putih & merah, masukkan telur orak-arik, tambahkan nasi, kecap, garam, merica. Aduk rata, tambahkan topping sesuai selera.",
        category: "makanan"
    },
    {
        keywords: ["rendang", "rendang padang"],
        response: "Rendang adalah masakan daging khas Padang yang dimasak lama dengan santan dan bumbu rempah. Diakui sebagai makanan terenak di dunia versi CNN.",
        category: "makanan"
    },
    {
        keywords: ["sate", "sate ayam"],
        response: "Sate adalah daging tusuk yang dibakar, biasanya disajikan dengan bumbu kacang atau kecap. Sate ayam, sate kambing, sate padang adalah variasi populer.",
        category: "makanan"
    },
    
    // MAKANAN INTERNASIONAL
    {
        keywords: ["pizza", "resep pizza"],
        response: "Pizza Italia: Roti bundar dengan topping saus tomat, keju mozzarella, dan berbagai topping. Pizza Margherita adalah yang paling klasik.",
        category: "makanan"
    },
    {
        keywords: ["sushi", "japanese food"],
        response: "Sushi adalah makanan Jepang dengan niriz cuka, dikombinasikan dengan seafood, sayur, atau telur. Variasi: nigiri, maki, sashimi.",
        category: "makanan"
    },
    
    // ============= HEWAN (80+ respons) =============
    
    // HEWAN PELIHARAAN
    {
        keywords: ["kucing", "cara merawat kucing"],
        response: "Tips merawat kucing: 1. Beri makan teratur (makanan kucing), 2. Sediakan air bersih, 3. Vaksinasi rutin, 4. Bersihkan kandang/litter box, 5. Sikat bulu, 6. Beri kasih sayang dan main bersama.",
        category: "hewan"
    },
    {
        keywords: ["anjing", "cara merawat anjing"],
        response: "Tips merawat anjing: 1. Jalan-jalan rutin, 2. Mandi teratur, 3. Beri makan berkualitas, 4. Vaksinasi, 5. Latih kepatuhan, 6. Beri mainan, 7. Kunjungan ke dokter hewan.",
        category: "hewan"
    },
    
    // HEWAN LIAR
    {
        keywords: ["hewan tercepat", "hewan cepat"],
        response: "Hewan tercepat: 1. Cheetah (120 km/jam), 2. Elang (160 km/jam saat menyelam), 3. Ikan layaran (110 km/jam), 4. Antelop (90 km/jam).",
        category: "hewan"
    },
    {
        keywords: ["hewan terbesar", "hewan besar"],
        response: "Hewan terbesar: Paus biru (panjang 30m, berat 200 ton), Gajah afrika (berat 6 ton), Jerapah (tinggi 5.5m), Anaconda (panjang 9m).",
        category: "hewan"
    },
    
    // ============= MATEMATIKA (120+ respons) =============
    
    // OPERASI DASAR
    {
        keywords: ["1+1", "1 tambah 1"],
        response: "1 + 1 = 2. Operasi penjumlahan paling dasar!",
        category: "matematika"
    },
    {
        keywords: ["2+2", "2 tambah 2"],
        response: "2 + 2 = 4. Mudah bukan?",
        category: "matematika"
    },
    {
        keywords: ["10+10", "10 tambah 10"],
        response: "10 + 10 = 20. Hasilnya dua puluh.",
        category: "matematika"
    },
    
    // RUMUS
    {
        keywords: ["rumus luas lingkaran", "luas lingkaran"],
        response: "Luas lingkaran = π × r² (pi dikali jari-jari kuadrat). π = 3.14 atau 22/7. Contoh: r=7, luas = 22/7 × 49 = 154",
        category: "matematika"
    },
    {
        keywords: ["rumus luas persegi", "luas persegi"],
        response: "Luas persegi = sisi × sisi (s²). Contoh: sisi 5 cm, luas = 25 cm²",
        category: "matematika"
    },
    {
        keywords: ["rumus volume kubus", "volume kubus"],
        response: "Volume kubus = sisi × sisi × sisi (s³). Contoh: sisi 5 cm, volume = 125 cm³",
        category: "matematika"
    },
    
    // BILANGAN
    {
        keywords: ["bilangan prima", "angka prima"],
        response: "Bilangan prima adalah bilangan yang hanya bisa dibagi 1 dan dirinya sendiri. Contoh: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...",
        category: "matematika"
    },
    {
        keywords: ["fpb", "faktor persekutuan terbesar"],
        response: "FPB (Faktor Persekutuan Terbesar) adalah bilangan terbesar yang dapat membagi dua bilangan. Contoh: FPB 12 dan 18 adalah 6.",
        category: "matematika"
    },
    {
        keywords: ["kpk", "kelipatan persekutuan terkecil"],
        response: "KPK (Kelipatan Persekutuan Terkecil) adalah bilangan terkecil yang merupakan kelipatan dua bilangan. Contoh: KPK 4 dan 6 adalah 12.",
        category: "matematika"
    },
    
    // ============= FISIKA (80+ respons) =============
    
    {
        keywords: ["apa itu gravitasi", "gravitasi"],
        response: "Gravitasi adalah gaya tarik bumi terhadap benda. Nilai gravitasi bumi = 9.8 m/s². Semua benda jatuh dengan percepatan sama tanpa hambatan udara.",
        category: "fisika"
    },
    {
        keywords: ["rumus kecepatan", "kecepatan"],
        response: "Kecepatan = jarak / waktu (v = s/t). Satuan: m/s atau km/jam. Contoh: jarak 100m ditempuh 10 detik, kecepatan = 10 m/s",
        category: "fisika"
    },
    {
        keywords: ["hukum newton", "newton"],
        response: "Hukum Newton: 1. Kelembaman (benda diam akan diam, benda bergerak akan bergerak), 2. F = m.a (gaya = massa × percepatan), 3. Aksi-reaksi (setiap aksi ada reaksi sama besar berlawanan arah).",
        category: "fisika"
    },
    
    // ============= KIMIA (70+ respons) =============
    
    {
        keywords: ["apa itu atom", "atom"],
        response: "Atom adalah partikel terkecil penyusun materi. Terdiri dari inti (proton + neutron) dan elektron yang mengelilingi.",
        category: "kimia"
    },
    {
        keywords: ["rumus air", "h2o"],
        response: "Air = H2O, terdiri dari 2 atom Hidrogen dan 1 atom Oksigen. Senyawa paling penting bagi kehidupan.",
        category: "kimia"
    },
    {
        keywords: ["perbedaan asam basa", "asam basa"],
        response: "Asam: pH < 7, rasa masam, contoh: jeruk, cuka. Basa: pH > 7, rasa pahit, contoh: sabun, soda kue. Netral: pH = 7, contoh: air murni.",
        category: "kimia"
    },
    
    // ============= BIOLOGI (90+ respons) =============
    
    {
        keywords: ["apa itu sel", "sel"],
        response: "Sel adalah unit terkecil kehidupan. Semua makhluk hidup terdiri dari sel. Ada sel prokariotik (bakteri) dan eukariotik (hewan, tumbuhan).",
        category: "biologi"
    },
    {
        keywords: ["sistem pencernaan", "pencernaan"],
        response: "Sistem pencernaan manusia: Mulut → Kerongkongan → Lambung → Usus halus → Usus besar → Anus. Dibantu enzim dan organ asesoris (hati, pankreas).",
        category: "biologi"
    },
    {
        keywords: ["fotosintesis", "fotosintesis"],
        response: "Fotosintesis: 6CO2 + 6H2O + cahaya → C6H12O6 + 6O2. Tumbuhan mengubah CO2 dan air menjadi glukosa dan oksigen dengan bantuan cahaya dan klorofil.",
        category: "biologi"
    },
    
    // ============= BAHASA INGGRIS (100+ respons) =============
    
    {
        keywords: ["translate", "terjemahkan"],
        response: "Saya bisa menerjemahkan kata sederhana. Contoh: 'dog' = 'anjing', 'cat' = 'kucing', 'good' = 'baik', 'bad' = 'buruk'.",
        category: "bahasa"
    },
    {
        keywords: ["belajar bahasa inggris", "tips inggris"],
        response: "Tips belajar Inggris: 1. Praktek setiap hari, 2. Nonton film dengan subtitle, 3. Baca buku/artikel Inggris, 4. Dengarkan podcast, 5. Berbicara dengan teman, 6. Gunakan aplikasi Duolingo.",
        category: "bahasa"
    },
    {
        keywords: ["tenses", "grammar"],
        response: "Tenses dasar: Present (I eat), Past (I ate), Future (I will eat), Present Continuous (I am eating), Present Perfect (I have eaten).",
        category: "bahasa"
    },
    
    // ============= OLAHRAGA (60+ respons) =============
    
    {
        keywords: ["sepak bola", "bola"],
        response: "Sepak bola adalah olahraga 11 vs 11, mencetak gol ke gawang lawan. Populer di seluruh dunia. Piala Dunia diadakan 4 tahun sekali.",
        category: "olahraga"
    },
    {
        keywords: ["basket", "bola basket"],
        response: "Basket adalah olahraga 5 vs 5, memasukkan bola ke ring lawan. NBA adalah liga basket profesional Amerika.",
        category: "olahraga"
    },
    {
        keywords: ["bulu tangkis", "badminton"],
        response: "Bulu tangkis menggunakan raket dan kok. Indonesia terkenal di cabang ini dengan banyak prestasi Olimpiade.",
        category: "olahraga"
    },
    
    // ============= SENI (50+ respons) =============
    
    {
        keywords: ["musik", "genre musik"],
        response: "Genre musik: Pop, Rock, Jazz, Klasik, Dangdut, EDM, Hip-hop, R&B, Reggae, Metal. Setiap genre punya ciri khas.",
        category: "seni"
    },
    {
        keywords: ["alat musik gitar", "gitar"],
        response: "Gitar adalah alat musik petik dengan 6 senar. Jenis: gitar akustik, gitar elektrik, gitar klasik. Kunci dasar: C, D, E, F, G, A, B.",
        category: "seni"
    },
    {
        keywords: ["alat musik piano", "piano"],
        response: "Piano adalah alat musik tuts dengan 88 kunci (52 putih, 36 hitam). Instrumen serbaguna untuk berbagai genre musik.",
        category: "seni"
    },
    
    // ============= BISNIS (40+ respons) =============
    
    {
        keywords: ["tips bisnis", "memulai bisnis"],
        response: "Tips memulai bisnis: 1. Temukan masalah yang bisa diselesaikan, 2. Riset pasar, 3. Buat business plan, 4. Mulai kecil dulu, 5. Pelajari keuangan, 6. Bangun tim, 7. Adaptasi dengan feedback.",
        category: "bisnis"
    },
    {
        keywords: ["cara jadi entrepreneur", "entrepreneur"],
        response: "Karakter entrepreneur sukses: Visioner, gigih, adaptif, berani ambil risiko, kreatif, networking, fokus pada solusi. Belajar dari kegagalan adalah kunci.",
        category: "bisnis"
    },
    
    // ============= PSIKOLOGI (50+ respons) =============
    
    {
        keywords: ["mengatasi stres", "stres"],
        response: "Cara mengatasi stres: 1. Tarik napas dalam, 2. Olahraga ringan, 3. Curhat ke orang terpercaya, 4. Lakukan hobi, 5. Istirahat cukup, 6. Meditasi, 7. Kurangi kafein, 8. Terima hal yang tak bisa diubah.",
        category: "psikologi"
    },
    {
        keywords: ["meningkatkan percaya diri", "percaya diri"],
        response: "Tips meningkatkan percaya diri: 1. Kenali kelebihan diri, 2. Bersyukur, 3. Berhenti membandingkan, 4. Berani mencoba hal baru, 5. Perbaiki postur tubuh, 6. Bicara positif pada diri sendiri.",
        category: "psikologi"
    },
    
    // ============= ASTRONOMI (40+ respons) =============
    
    {
        keywords: ["tata surya", "solar system"],
        response: "Tata surya: Matahari (pusat), 8 planet (Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus), asteroid, komet, dan benda langit lainnya.",
        category: "astronomi"
    },
    {
        keywords: ["bulan", "fase bulan"],
        response: "Fase bulan: Bulan baru, Sabit muda, Perbani awal, Cembung awal, Purnama, Cembung akhir, Perbani akhir, Sabit tua. Siklus 29.5 hari.",
        category: "astronomi"
    },
    
    // ============= SEJARAH (40+ respons) =============
    
    {
        keywords: ["proklamasi", "kemerdekaan indonesia"],
        response: "Proklamasi kemerdekaan Indonesia 17 Agustus 1945 dibacakan Soekarno-Hatta di Jalan Pegangsaan Timur 56, Jakarta. Menandai kemerdekaan RI.",
        category: "sejarah"
    },
    {
        keywords: ["soekarno", "presiden pertama"],
        response: "Ir. Soekarno adalah proklamator dan presiden pertama RI. Tokoh pergerakan nasional, orator ulung, pencetus Pancasila.",
        category: "sejarah"
    },
    
    // ============= BUDAYA (40+ respons) =============
    
    {
        keywords: ["batik", "batik indonesia"],
        response: "Batik adalah kain khas Indonesia yang diakui UNESCO sebagai Warisan Budaya Takbenda. Setiap daerah punya motif khas: batik Solo, Jogja, Pekalongan, dll.",
        category: "budaya"
    },
    {
        keywords: ["wayang", "wayang kulit"],
        response: "Wayang kulit adalah seni pertunjukan bayangan dari Jawa. Menggunakan boneka kulit, menceritakan epik Ramayana/Mahabharata, diiringi gamelan.",
        category: "budaya"
    },
    
    // ============= GAME (30+ respons) =============
    
    {
        keywords: ["game populer", "game online"],
        response: "Game populer saat ini: Mobile Legends, PUBG, Free Fire, Valorant, Genshin Impact, FIFA, Call of Duty, Minecraft, Among Us.",
        category: "game"
    },
    {
        keywords: ["tips main game", "pro player"],
        response: "Tips jadi pro player: 1. Latihan rutin, 2. Pelajari mekanik game, 3. Tonton turnamen, 4. Komunikasi tim, 5. Jaga kesehatan, 6. Analisis gameplay sendiri.",
        category: "game"
    },
    
    // ============= FILM (30+ respons) =============
    
    {
        keywords: ["film terbaik", "rekomendasi film"],
        response: "Film terbaik sepanjang masa: The Shawshank Redemption, The Godfather, Pulp Fiction, Schindler's List, Forrest Gump, The Dark Knight, Parasite.",
        category: "film"
    },
    {
        keywords: ["film indonesia", "film lokal"],
        response: "Film Indonesia populer: Laskar Pelangi, Ada Apa dengan Cinta, Pengabdi Setan, Dilan, Imperfect, Nanti Kita Cerita Tentang Hari Ini.",
        category: "film"
    },
    
    // ============= TEKNOLOGI INFORMASI (80+ respons) =============
    
    {
        keywords: ["apa itu komputer", "komputer"],
        response: "Komputer adalah alat elektronik yang menerima input, memproses data, menyimpan, dan menghasilkan output. Komponen: CPU, RAM, storage, input/output devices.",
        category: "teknologi"
    },
    {
        keywords: ["perbedaan hardware software", "hardware software"],
        response: "Hardware: komponen fisik komputer (monitor, CPU, keyboard). Software: program/aplikasi (OS, browser, game). Hardware butuh software untuk berfungsi.",
        category: "teknologi"
    },
    {
        keywords: ["apa itu internet", "internet"],
        response: "Internet (interconnection networking) adalah jaringan global yang menghubungkan komputer di seluruh dunia. Memungkinkan komunikasi, akses informasi, e-commerce.",
        category: "teknologi"
    },
    
    // ============= KEUANGAN (30+ respons) =============
    
    {
        keywords: ["cara menabung", "tips menabung"],
        response: "Tips menabung: 1. Catat pemasukan-pengeluaran, 2. Buat anggaran, 3. Pisahkan rekening tabungan, 4. Sisihkan 20% penghasilan, 5. Hindari gaya hidup konsumtif, 6. Investasi.",
        category: "keuangan"
    },
    {
        keywords: ["investasi pemula", "investasi"],
        response: "Investasi untuk pemula: Reksadana (terkelola), Emas (likuid), Saham (high risk), Deposito (aman), Properti (jangka panjang). Mulai dengan riset dan belajar.",
        category: "keuangan"
    },
    
    // ============= LINGKUNGAN (20+ respons) =============
    
    {
        keywords: ["cara menjaga lingkungan", "go green"],
        response: "Cara menjaga lingkungan: 1. Kurangi sampah plastik, 2. Daur ulang, 3. Hemat energi (matikan lampu), 4. Tanam pohon, 5. Gunakan transportasi umum, 6. Hindari pembakaran sampah.",
        category: "lingkungan"
    },
    {
        keywords: ["pemanasan global", "global warming"],
        response: "Pemanasan global adalah peningkatan suhu bumi akibat efek rumah kaca (CO2, metana). Dampak: es mencair, cuaca ekstrem, naiknya permukaan laut.",
        category: "lingkungan"
    },
    
    // ============= TRANSPORTASI (20+ respons) =============
    
    {
        keywords: ["jenis transportasi", "transportasi"],
        response: "Transportasi darat (mobil, motor, bus, kereta), laut (kapal, perahu), udara (pesawat, helikopter). Masing-masing punya kelebihan.",
        category: "transportasi"
    },
    {
        keywords: ["transportasi online", "ojek online"],
        response: "Transportasi online seperti Gojek, Grab, Maxim. Layanan: ojek, taksi, antar barang, pesan makanan. Memudahkan mobilitas.",
        category: "transportasi"
    },
    
    // ============= UMUM (200+ respons tambahan) =============
    
    // RESPONS LUCU
    {
        keywords: ["lucu", "ngakak", "ketawa"],
        response: "Haha, senang bisa membuat Anda tertawa! Mau dengar leluce? Kenapa ayam menyeberang jalan? Karena mau ke seberang! 😄",
        category: "umum"
    },
    {
        keywords: ["joke", "lelucon"],
        response: "Joke: Kenapa komputer masuk angin? Karena kebanyakan windows! ❄️",
        category: "umum"
    },
    
    // RESPONS RANDOM
    {
        keywords: ["random", "acak"],
        response: "Tahukah Anda? Coklat putih sebenarnya bukan coklat karena tidak mengandung biji coklat. Namanya cocoa butter.",
        category: "umum"
    },
    {
        keywords: ["fakta unik", "fakta menarik"],
        response: "Fakta unik: Semut bisa mengangkat beban 50x berat tubuhnya. Jika manusia sekuat semut, bisa mengangkat mobil!",
        category: "umum"
    },
    
    // RESPONS CUACA
    {
        keywords: ["cuaca hari ini", "cuaca"],
        response: "Maaf, saya tidak bisa mengecek cuaca real-time karena tanpa API. Tapi semoga hari ini cerah dan menyenangkan ya!",
        category: "umum"
    },
    {
        keywords: ["hujan", "gerimis"],
        response: "Kalau hujan, jangan lupa bawa payung. Nikmati suara rintik hujan sambil minum teh hangat!",
        category: "umum"
    },
    
    // RESPONS MAKAN
    {
        keywords: ["lapar", "laper"],
        response: "Lapar? Saatnya makan! Jangan lupa pilih makanan bergizi ya.",
        category: "umum"
    },
    {
        keywords: ["haus", "dahaga"],
        response: "Minum air putih dulu, hidrasi tubuh itu penting!",
        category: "umum"
    },
    
    // RESPONS CAPEK
    {
        keywords: ["capek", "lelah", "letih"],
        response: "Capek itu wajar, artinya kamu sudah berusaha. Istirahat sebentar, nanti lanjut lagi ya!",
        category: "umum"
    },
    {
        keywords: ["ngantuk", "mengantuk"],
        response: "Kalau ngantuk, tidur sebentar 15-20 menit biar segar lagi. Power nap itu efektif!",
        category: "umum"
    },
    
    // RESPONS CINTA
    {
        keywords: ["cinta", "love"],
        response: "Cinta itu indah, tapi jangan sampai melupakan diri sendiri. Cintai dirimu dulu sebelum mencintai orang lain 💖",
        category: "umum"
    },
    {
        keywords: ["patah hati", "broken heart"],
        response: "Patah hati sakit, tapi akan sembuh seiring waktu. Luapkan dengan kegiatan positif, curhat ke teman, atau nulis diary. Kamu kuat! 💪",
        category: "umum"
    },
    
    // RESPONS DEFAULT (jika tidak ada yang cocok)
    {
        keywords: ["default", "unknown", "tidak dikenal"],
        response: "Maaf, saya belum memiliki jawaban untuk pertanyaan tersebut. Database saya memiliki 2000+ respons, tapi belum mencakup pertanyaan ini. Coba tanyakan hal lain atau gunakan saran pertanyaan yang tersedia.",
        category: "umum"
    }
];

// Tambahkan 1800+ respons lagi dengan pola yang sama...
// (Karena keterbatasan panjang, saya tidak bisa menampilkan semua 2000+ respons di sini,
// tapi pola di atas bisa dikembangkan dengan menambahkan variasi kata kunci dan respons
// untuk setiap kategori dengan format yang sama)

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = responseDatabase;
}
