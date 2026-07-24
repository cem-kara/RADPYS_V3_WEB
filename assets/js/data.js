/* ==========================================================================
   RADPYS V3 — Static Site Shared Data
   Blog yazıları, testimonial'lar ve stats burada tutuluyor.
   Yeni yazı eklemek için sadece BLOG_POSTS listesine bir obje ekleyin.
   ========================================================================== */

(function () {
    const STATS = {
        institutions: 84,
        users: 6200,
        years: 8,
        modules: 6,
    };

    const TESTIMONIALS = [
        {
            quote:
                "RADPYS'i kullanmaya başladıktan sonra dozimetre takibinde harcadığımız süre %70 azaldı. Denetimlere hazırlık artık iki gün değil, iki saat.",
            author: "Prof. Dr. M. Aydın",
            role: "Radyoloji Bölüm Başkanı",
            org: "Anadolu Üniversite Hastanesi",
            avatar:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTc4NDcyMjY5N3ww&ixlib=rb-4.1.0&q=85",
        },
        {
            quote:
                "Nöbet çizelgesi tartışmaları bitti. Algoritmanın şeffaflığı ekipte güven yarattı. İzin süreçleri de birleşince kurum içi intranete gerek kalmadı.",
            author: "Dr. Ece K.",
            role: "Nükleer Tıp Uzmanı",
            org: "Mavi Görüntüleme Merkezi",
            avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTc4NDcyMjY5N3ww&ixlib=rb-4.1.0&q=85",
        },
        {
            quote:
                "KVKK uyumu için ayrı süreç kurmak zorunda kalmadık. RADPYS ile yerleşik geldi. Olay bildirimlerinde NDK'ya sunulacak raporları saniyeler içinde hazır hale getiriyoruz.",
            author: "Uzm. S. Yılmaz",
            role: "Radyasyondan Sorumlu Uzman",
            org: "Beyaz Diş Hastaneleri",
            avatar:
                "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNoJTIwb2ZmaWNlJTIwdGVhbXxlbnwwfHx8fDE3ODQ3MjI2OTd8MA&ixlib=rb-4.1.0&q=85",
        },
    ];

    const BLOG_POSTS = [
        {
            slug: "radyoloji-hizmetleri-yonetmeligi-degisiklik-16-aralik-2025",
            title: "Radyoloji Hizmetleri Yönetmeliğinde Değişiklik Yapılmasına Dair Yönetmelik (16 Aralık 2025)",
            excerpt: "Özel radyoloji merkezlerinin taşınma kuralları, mesul müdürlük ve çalışma kadrolarına dair en güncel değişiklikleri içerir.",
            content: [
                "Özel radyoloji merkezlerinin taşınma kuralları, mesul müdürlük ve çalışma kadrolarına dair en güncel değişiklikleri içerir.",
                "Bu yönetmelik değişikliğiyle serbest radyoloji uzmanlarının açtığı merkezlerin il dışı taşınmaları sınırlandırılmış, il içi birleşme koşulları netleştirilmiş ve mesul müdürlüğün tam zamanlı çalışma esası getirilmiştir.",
                "Ayrıca, merkez çalışanlarının karekodlu kimlik kartı taşıması zorunlu hale getirilmiştir.",
                "Doğrudan Link: <a href=\"https://www.resmigazete.gov.tr/eskiler/2025/12/20251216-1.htm\" target=\"_blank\" class=\"text-neon-teal underline\">16 Aralık 2025 Tarihli Resmi Gazete Metni 📄</a>"
            ],
            category: "Mevzuat",
            cover: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=940",
            author: "Mevzuat Analiz",
            readTime: 3
        },
        {
            slug: "radyoloji-hizmetleri-yonetmeligi-degisiklik-25-nisan-2023",
            title: "Radyoloji Hizmetleri Yönetmeliğinde Değişiklik Yapılmasına Dair Yönetmelik (25 Nisan 2023)",
            excerpt: "Kamu, üniversite ve özel sektöre ait radyoloji birimlerinin denetim ve usul esaslarındaki revizyonları kapsar.",
            content: [
                "Kamu, üniversite ve özel sektöre ait radyoloji birimlerinin denetim ve usul esaslarındaki revizyonları kapsar.",
                "Yönetmelik değişikliği ile sağlık kuruluşlarındaki radyoloji ünitelerinin açılış, lisanslama, denetleme ve çalışma koşullarına ilişkin usul ve esaslar yeniden düzenlenmiştir.",
                "Doğrudan Link: <a href=\"https://www.resmigazete.gov.tr/eskiler/2023/04/20230425-7.htm\" target=\"_blank\" class=\"text-neon-teal underline\">25 Nisan 2023 Tarihli Resmi Gazete Metni 📄</a>"
            ],
            category: "Mevzuat",
            cover: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=940",
            author: "Mevzuat Analiz",
            readTime: 3
        },
        {
            slug: "radyoloji-hizmetleri-yonetmeligi-ana-metin-26-nisan-2022",
            title: "Radyoloji Hizmetleri Yönetmeliği - Ana Metin (26 Nisan 2022)",
            excerpt: "Haftalık 35 saat çalışma süresi, cihaz odası standartları ve 10-20 yıllık arşivleme zorunluluklarını getiren temel ana yönetmeliktir.",
            content: [
                "Haftalık 35 saat çalışma süresi, cihaz odası standartları ve 10-20 yıllık arşivleme zorunluluklarını getiren temel ana yönetmeliktir.",
                "Radyasyon çalışanlarının haftalık mesai sürelerini 35 saat ile sınırlandıran ve sağlık kuruluşlarındaki radyasyon ünitelerinin yapısal/fiziksel standartlarını, personel yeterliliklerini belirleyen ana mevzuat kaynağıdır.",
                "Doğrudan Link: <a href=\"https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=39534&MevzuatTur=7&MevzuatTertip=5\" target=\"_blank\" class=\"text-neon-teal underline\">Mevzuat Bilgi Sistemi - Güncel Yönetmelik Tam Metni 📄</a>"
            ],
            category: "Mevzuat",
            cover: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=940",
            author: "Mevzuat Analiz",
            readTime: 5
        },
        {
            slug: "iyonlastirici-radyasyon-saglik-hizmetleri-yonetmeligi-5-temmuz-2022",
            title: "İyonlaştırıcı Radyasyon ve Radyonüklit Kullanılarak Sunulan Sağlık Hizmetleri Hakkında Yönetmelik (5 Temmuz 2022)",
            excerpt: "BT, röntgen ve anjiyo gibi alanlarda çalışanların radyasyon güvenliği ve lisanslama süreçlerini düzenler.",
            content: [
                "BT, röntgen ve anjiyo gibi alanlarda çalışanların radyasyon güvenliği ve lisanslama süreçlerini düzenler.",
                "Sağlık kuruluşlarında kullanılan iyonlaştırıcı radyasyon kaynaklarının ve radyoaktif maddelerin güvenli kullanımını, cihaz ruhsatlandırma prosedürlerini ve çalışanların korunma tedbirlerini kapsamlı şekilde ele alır.",
                "Doğrudan Link: <a href=\"https://www.resmigazete.gov.tr/eskiler/2022/07/20220705-1.htm\" target=\"_blank\" class=\"text-neon-teal underline\">5 Temmuz 2022 Tarihli Resmi Gazete Metni 📄</a>"
            ],
            category: "Mevzuat",
            cover: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=940",
            author: "Mevzuat Analiz",
            readTime: 4
        },
        {
            slug: "1939-tarihli-tarihi-nizamnamenin-kaldirilmasi-karari-25-haziran-2021",
            title: "1939 Tarihli Tarihi Nizamnamenin Kaldırılması Kararı (25 Haziran 2021)",
            excerpt: "Eski şua izni ve çalışma kurallarını düzenleyen 82 yıllık nizamnameyi resmi olarak yürürlükten kaldıran Cumhurbaşkanı Kararıdır.",
            content: [
                "Eski şua izni ve çalışma kurallarını düzenleyen 82 yıllık nizamnameyi resmi olarak yürürlükten kaldıran Cumhurbaşkanı Kararıdır.",
                "1939 tarihli ve 2/11568 sayılı 'Radyoterapi ve Radyum Şubeleriyle Tedavi Müesseseleri Hakkında Nizamname' bu kararla resmen maziye karışmış ve modern radyasyon mevzuatının önü tamamen açılmıştır.",
                "Doğrudan Link: <a href=\"https://www.resmigazete.gov.tr/eskiler/2021/06/20210625-11.htm\" target=\"_blank\" class=\"text-neon-teal underline\">25 Haziran 2021 Tarihli Resmi Gazete İptal Kararı 📄</a>"
            ],
            category: "Mevzuat",
            cover: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=940",
            author: "Mevzuat Analiz",
            readTime: 2
        },
        {
            slug: "kvkk-ve-radyasyon-verilerinin-korunmasi",
            title: "KVKK ve Radyasyon Verilerinin Korunması",
            excerpt:
                "Sağlık verileri özel nitelikli kişisel veri kategorisindedir. Radyasyon dozimetri kayıtlarını nasıl KVKK uyumlu tutarsınız?",
            content: [
                "Kişisel Verilerin Korunması Kanunu (KVKK), sağlık verilerini özel nitelikli kişisel veri olarak sınıflandırır.",
                "RADPYS V3, tüm personel, dozimetre ve sağlık muayenesi verilerini AES-256 ile şifreler ve rol bazlı erişim kontrolü sağlar.",
                "Temel prensipler: veri minimizasyonu, amaç sınırlaması, şeffaflık, güvenlik önlemleri.",
                "RADPYS altyapısı bunları kolaylaştırır.",
            ],
            category: "Mevzuat",
            cover:
                "https://images.pexels.com/photos/9404662/pexels-photo-9404662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            author: "Hukuk Ekibi",
            readTime: 6,
        },
        {
            slug: "Olay-Bildirimleri-otomasyon-neden-kritik",
            title: "Olay Bildirimleri: Otomasyon Neden Kritik?",
            excerpt:
                "Radyasyon kaynaklı olay bildirimlerinin manuel takibi hataya açıktır. Doğru otomasyon nasıl kurulur?",
            content: [
                "Kurum içi kaliteyi ve standartları takibi önemlidir. Yapılacak bildirimlerde doğruluk ve zamanındalık kritiktir.",
                "RADPYS olay bildirim modülü, olay tespitinden bildirim gönderimine kadar tüm süreci dijitalleştirir. Zaman damgalı loglar ve otomatik hatırlatıcılar ile sıfır kaçırılan bildirim garantisi.",
                "Radyasyon güvenlik uzmanları için olay analizi, yasal zorunluluktan çok kalite iyileştirme aracıdır. RADPYS, bu geçişi dijital altyapıyla destekler."
            ],
            category: "Radyasyon Güvenliği",
            cover:
                "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            author: "Güvenlik Ekibi",
            readTime: 5,
        },
        {
            slug: "dozimetre-verilerini-anlamlandirmak",
            title: "Dozimetre Verilerini Anlamlandırmak",
            excerpt:
                "Aylık dozimetre okumaları rakamdan öte içgörü olmalıdır. RADPYS analitik motoru nasıl çalışır?",
            content: [
                "Kümülatif doz, birim başına dağılım, riskli çalışan tespiti.",
                "RADPYS dashboardu; birim, rol ve çalışan bazında karşılaştırmalı analitikler sunar. Eşik değer aşımlarında anlık uyarı alırsınız.",
            ],
            category: "Ürün",
            cover:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXRhJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDB8fHx8MTc4NDcyMjY5N3ww&ixlib=rb-4.1.0&q=85",
            author: "Ürün Ekibi",
            readTime: 7,
        },
        {
            slug: "nobet-planlamasi-adil-ve-seffaf",
            title: "Nöbet Planlaması: Adil ve Şeffaf",
            excerpt:
                "Radyoloji nöbet çizelgeleri kurum içi anlaşmazlıkların başlıca kaynağıdır. Şeffaf algoritma ile çözüm.",
            content: [
                "RADPYS nöbet motoru, kısıtlar (izin, hamilelik, fiili hizmet) ve tercihleri girdi alarak eşit iş yükü dağıtır.",
                "Değişiklik istekleri iş akışı ile yönetilir.",
            ],
            category: "Ürün",
            cover:
                "https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            author: "Ürün Ekibi",
            readTime: 4,
        },
    ];

    const MODULES = [
        { icon: "M13 3 6 12h5l-1 9 7-9h-5l1-9Z", name: "Nöbet Planlaması", desc: "Şeffaf algoritma ile adil, kısıt-bilinçli çizelgeler.", tag: "01" },
        { icon: "M12 2v6M12 16v6M4 12h6M14 12h6M6.34 6.34l4.24 4.24M13.42 13.42l4.24 4.24M6.34 17.66l4.24-4.24M13.42 10.58l4.24-4.24", name: "Dozimetre Takibi", desc: "Kümülatif doz analitiği ve eşik aşım uyarıları.", tag: "02" },
        { icon: "M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z", name: "İzin Yönetimi", desc: "Onay akışı, bakiye ve fiili hizmet entegrasyonu.", tag: "03" },
        { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z", name: "Fiili Hizmet", desc: "Yıpranma payı otomasyonu, NDK ile uyumlu kayıt.", tag: "04" },
        { icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z", name: "Sağlık Muayeneleri", desc: "Periyodik muayene planı, hatırlatma ve raporlama.", tag: "05" },
        { icon: "M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z", name: "Olay Bildirimi", desc: "Çok kullanıcılı olay bildirim altyapısı, NDK bildirim şablonu ve delil zinciri.", tag: "06" },
    ];

    window.RADPYS = { STATS, TESTIMONIALS, BLOG_POSTS, MODULES };
})();
