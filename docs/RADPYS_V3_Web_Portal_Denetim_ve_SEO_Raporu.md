# RADPYS V3 Web Portalı Kapsamlı Denetim & SEO Raporu

**Tarih:** 18 Ağustos 2026  
**İncelenen Proje:** RADPYS V3 Resmi Web Portalı (`RADPYS_V3_WEB` / `radpys.com.tr`)  
**İnceleyen Ajanlar:** SEO & Teknik Analiz Ajanı, İçerik & UX/CRO Analiz Ajanı  

---

## 🚀 1. Özet & Genel Değerlendirme

RADPYS V3 resmi web portalı (`https://radpys.com.tr`), modern web standartlarına, **local-first** güvenlik yaklaşımına, güncel sağlık ve radyasyon mevzuatlarına (NDK, TENMAK, SKS 6.1, KVKK, 3153 Sayılı Kanun) tam uyumlu olarak tasarlanmış yüksek kaliteli bir statik web uygulamasıdır.

Yapılan detaylı teknik, içerik ve SEO denetimlerinde web sitesinin güçlü yönleri ile tespit edilen kritik iyileştirme noktaları aşağıda kategorize edilmiştir.

---

## 🔍 2. SEO & Yapay Zeka Arama Motoru (GEO / LLM) Analizi

### 2.1. Meta Etiketler ve Başlık Yapısı
- **Başlık (Title) Etiketleri:** Tüm HTML sayfalarında (`index.html`, `moduller.html`, `fiyatlandirma.html`, `kaynaklar.html`, `dokumanlar.html`, `changelog.html`, `hakkimizda.html`, `iletisim.html`, `referanslar.html`) özgün ve anahtar kelime odaklı `[Sayfa Adı] — RADPYS V3` yapısı kullanılmıştır.
- **Meta Açıklamaları (Description):** Hedef anahtar kelimeleri (NDK, TENMAK, SKS 6.1, KVKK, dozimetre takibi, adil nöbet) içeren açıklama etiketleri eksiksizdir.
- **Robot Yönergeleri:** Tüm ana sayfalarda `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />` kuralı mevcuttur.
- **Canonical Bağlantılar:** Tüm sayfalarda `https://radpys.com.tr/...` formatında özgün canonical URL'ler tanımlanmıştır.

### 2.2. Zengin Yapısal Veri (Schema.org JSON-LD)
Sitede gelişmiş Schema.org şemaları uygulanmıştır:
- **`index.html`:** `@graph` yapısında `SoftwareApplication`, `Organization` ve `WebSite` şemaları.
- **`fiyatlandirma.html`:** `BreadcrumbList` ve `FAQPage` şemaları.
- **`dokumanlar.html`:** `TechArticle` ve `BreadcrumbList` şemaları.
- **`hakkimizda.html`:** `AboutPage` ve `BreadcrumbList` şemaları.
- **`iletisim.html`:** `ContactPage` şemaları.
- **`moduller.html`**, **`kaynaklar.html`**, **`changelog.html`**, **`referanslar.html`:** `BreadcrumbList` şemaları.

### 2.3. Arama Motoru & Yapay Zeka İndeksleme Yapısı
- **`sitemap.xml`:** 8 ana sayfayı içermektedir (`lastmod: 2026-08-18`).
- **`robots.txt`:** Geleneksel botların yanında yapay zeka botlarına da (**GPTBot**, **ClaudeBot**, **PerplexityBot**, **Google-Extended**) tam tarama izni verilmiştir.
- **`llms.txt`:** Yapay zeka ve LLM arama motorları için hazırlanmış özel indeks dosyası mevcuttur.

---

## 🎨 3. Kullanıcı Deneyimi (UX), İçerik ve CRO Analizi

### 3.1. Marka ve Ürün İletişimi
- **8 Aktif Modül:** Platformun v3.9.0 itibarıyla büyüyen 8 aktif modülü (*Nöbet Planlaması, Dozimetre Takibi, İzin Yönetimi, Fiili Hizmet / Şua İzni, Sağlık Muayeneleri, Olay Bildirimi / DÖF, Gebelik Bildirimi & Yasal Muafiyet, NDK Resmi Bildirim Süreçleri*) tüm sayfalarda tutarlı şekilde işlenmiştir.
- **Mevzuat Dayanakları:** NDK Resmi Rehberleri (KLV-001 - KLV-020), 3153 Sayılı Kanun (haftalık 35 saat ve 30 gün Şua izni), SKS 6.1 (SRG 18) ve KVKK (6698) detayları ile desteklenmiştir.
- **Yerel Veri Güvenliği (Local-First):** Verilerin buluta çıkmadığı, AES-256 SQLCipher veritabanı şifrelemesi vurgulanarak kurumların veri mahremiyeti güvenceye alınmıştır.

### 3.2. Dönüşüm Optimizasyonu (CRO) ve Bağlantılar
- **Demo İndirme:** Ana navigasyonda ve kahraman (hero) alanında doğrudan `https://download.radpys.com.tr/releases/RADPYS_Setup_latest.exe` demo indirme bağlantısı mevcuttur.
- **Shopier Ödeme:** `fiyatlandirma.html` sayfasında Başlangıç (`49366089`), Standart (`49366028`) ve Pro (`49366367`) paketleri için 1, 3, 6 ve 12 aylık periyot indirimli (%10, %20, %30) ödeme bağlantıları entegre edilmiştir.
- **İletişim Formu:** Google Apps Script API isteği başarısız olursa otomatik `mailto:radpys.iletisim@gmail.com` fallback mekanizması çalışmaktadır.

---

## ⚠️ 4. Kritik Bulgular ve Düzeltme Önerileri

| # | Bulgu / Sorun | Etki Derecesi | Açıklama ve Çözüm Önerisi |
|---|---|---|---|
| **1** | **`referanslar.html` Yetim Sayfa (Orphan Page)** | 🔴 Yüksek | 84+ kurum ve müşteri yorumlarının bulunduğu sayfa menüye (`layout.js`), footer'a, `sitemap.xml` ve `llms.txt` dosyalarına eklenmemiş. Kullanıcılar erişemiyor. |
| **2** | **`llms.txt` Kırık Bağlantı (404 Error)** | 🔴 Yüksek | `llms.txt` 23. satırındaki `https://radpys.com.tr/Kullanim_Kilavuzu.md` bağlantısı kırık. `docs/RADPYS_V3_Kullanim_Kilavuzu.md` olarak düzeltilmeli. |
| **3** | **`fiyatlandirma.html` Mükerrer Kod Yüklemesi** | 🟡 Orta | 338-340. satırlarda `<div id="site-footer"></div>`, `data.js` ve `layout.js` ikinci kez eklenmiş. Temizlenmesi gerekiyor. |
| **4** | **`og:image` Görsel Boyutu (Yavaş Sosyal Kartlar)** | 🟡 Orta | Open Graph kartlarındaki `images/main_logo.PNG` dosyası **3.96 MB** boyutundadır. WhatsApp/LinkedIn paylaşımları için 500 KB altına düşürülmeli. |
| **5** | **Yardımcı Sayfa İndekslemesi (`resize.html`)** | 🟢 Düşük | Geliştirici aracı olan `resize.html` dosyasına `<meta name="robots" content="noindex, nofollow" />` eklenmelidir. |

---

## 🛠️ 5. Uygulama ve Kontrol Listesi (Action Plan)

- [x] **`assets/js/layout.js`:** `NAV_LINKS` dizisine `{ href: "referanslar.html", label: "Referanslar" }` ve footer'a link eklenmesi.
- [x] **`sitemap.xml`:** `<loc>https://radpys.com.tr/referanslar.html</loc>` URL'sinin ve `lastmod` tarihlerinin kontrolü/güncellenmesi.
- [x] **`llms.txt`:** Kırık Kullanım Kılavuzu linkinin `docs/RADPYS_V3_Kullanim_Kilavuzu.md` dizinine yönlendirilmesi ve Referanslar/Changelog/SSS sayfalarının eklenmesi.
- [x] **`fiyatlandirma.html`:** Satır 338-340 arasındaki mükerrer div ve scriptlerin silinmesi.
- [x] **`images/main_logo.PNG`:** Sosyal medya önizleme görsellerinin (PNG/JPG) sıkıştırılması (3.96 MB -> 598 KB / 94 KB).
- [x] **`resize.html`:** `noindex, nofollow` meta etiketinin eklenmesi.

---
*Rapor RADPYS V3 AI pair programming asistanı Antigravity tarafından otomatik oluşturulmuştur.*
