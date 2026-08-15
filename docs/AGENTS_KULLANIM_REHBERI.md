# RADPYS V3 — AI Ajanları (Skills) Kullanım Rehberi

Bu doküman, **RADPYS V3 (PySide6 / Python)** projesinde aktif olarak kullanabileceğiniz tüm yapay zeka ajanlarının (skills) listesini, ne zaman ve nasıl çağrılacaklarını, örnek tetikleme cümlelerini ve sundukları yetenekleri açıklamaktadır.

---

## 📌 Genel Bakış ve Çalışma Prensibi

RADPYS V3 projesinde tanımlı olan ajanlar, jenerik (genel geçer) kod yazımı yerine belirli uzmanlık alanlarına odaklanarak çalışır. Ajanlar projenizdeki `.agents/skills/` dizininde tanımlıdır ve doğal dildeki talimatlarınıza göre otomatik olarak devreye girer.

---

## 🤖 Aktif Ajanlar Listesi

### 1. 🖥️ Desktop App Engineer (`desktop-app-engineer`)

* **Uzmanlık Alanı:** PySide6 / Qt masaüstü uygulaması mimarisi, non-blocking UI tasarımı, asenkron `QThread` / `Worker` işlemleri, PyInstaller (`.spec`) derlemesi ve InnoSetup paketleme.
* **Ne Zaman Kullanılmalı?**
  * Uygulama arayüzü kilitlendiğinde veya donduğunda.
  * Ağır veritabanı/dosya işlemlerini arka plana (`QThread`) taşımak istediğinizde.
  * PyInstaller EXE veya InnoSetup installer paketlerinde hata aldığınızda.
* **Örnek Tetikleme Cümleleri:**
  > *"Masaüstü uygulamasının donma sorununu asenkron thread ile çöz."*  
  > *"PyInstaller derleme hatalarını incele."*  
  > *"PySide6 UI ile Controller katmanının asenkron iletişimini düzenle."*

---

### 2. 🪡 Minimal Change Engineer (`minimal-change-engineer`)

* **Uzmanlık Alanı:** Nokta atışı kod düzeltmesi (minimum-viable diff). Gereksiz refactoring veya scope creep yapmadan sadece istenen hatayı/özelliği en az kod değişikliğiyle çözer.
* **Ne Zaman Kullanılmalı?**
  * RADPYS'nin hassas nöbet hesaplama, lisanslama veya dozimetre mantığında sadece tek bir bug'ı düzeltmek istediğinizde.
  * Mevcut kod yapısının bozulmasını istemediğiniz durumlarda.
* **Örnek Tetikleme Cümleleri:**
  > *"Bu hatayı sadece ilgili satıra dokunarak nokta atışı fix et, başka hiçbir yeri değiştirme."*  
  > *"Minimum değişiklik prensibiyle bu bug'ı çöz."*  
  > *"Gereksiz refactor yapmadan sadece isteneni yap."*

---

### 3. 🗄️ Database Optimizer (`database-optimizer`)

* **Uzmanlık Alanı:** RADPYS'nin `SQLCipher (AES-256)` şifreli SQLite veritabanında sorgu planlama, B-tree indeksleme, N+1 sorgu tespiti, transaction güvenliği ve schema migration optimizasyonu.
* **Ne Zaman Kullanılmalı?**
  * Veritabanı sorguları yavaşladığında veya donmalara sebep olduğunda.
  * Tablolara yeni alanlar eklendiğinde veya indeks ihtiyacı doğduğunda.
  * Şifreli veritabanı taşıma/migration işlemlerinde.
* **Örnek Tetikleme Cümleleri:**
  > *"SQLCipher veritabanındaki yavaş nöbet sorgusunu optimize et."*  
  > *"Personel tablosuna uygun indeksleri ekle ve N+1 sorgularını temizle."*  
  > *"Migration script'ini transaction güvenli hale getir."*

---

### 4. 👁️ Code Reviewer (`code-reviewer`)

* **Uzmanlık Alanı:** PySide6/Python kod kalitesini, UI-Controller katman ayrımını, güvenlik açıklarını (SQLCipher anahtar sızıntısı vb.) ve unhandled exception risklerini denetleme.
* **Ne Zaman Kullanılmalı?**
  * Yeni bir özellik geliştirdikten sonra yayına almadan önce.
  * Katmanlı mimariye (View-Controller) uyumu kontrol etmek istediğinizde.
* **Örnek Tetikleme Cümleleri:**
  > *"Son yazdığım Controller kodunu mimari ve güvenlik açısından incele."*  
  > *"Code review yap, sessizce yutulan hata var mı bak."*  
  > *"UI ile Controller ayrımını denetle."*

---

### 5. 🔘 PySide Button & Navigation Audit (`pyside-button-audit`)

* **Uzmanlık Alanı:** PySide6/Qt arayüzündeki buton tıklama davranışlarını (`QPushButton`, `QAction`), `QStackedWidget` sayfa navigasyon haritasını ve sinyal-slot kopukluklarını AST taraması ile tespit eder.
* **Ne Zaman Kullanılmalı?**
  * Arayüzdeki bir butona tıklandığında hiçbir şey olmadığında.
  * Sayfa geçişleri yanlış ekrana gittiğinde veya tıklandığında çökme yaşandığında.
* **Örnek Tetikleme Cümleleri:**
  > *"Projedeki tüm buton bağlantılarını ve sayfa geçişlerini denetle."*  
  > *"Bu ekrandaki buton neden çalışmıyor, sinyal-slot kopukluğunu bul."*  
  > *"PySide buton audit başlat."*

---

### 6. 🚀 Yayın Öncesi Hata Denetimi (`yayin-oncesi-hata-denetimi`)

* **Uzmanlık Alanı:** RADPYS uygulamasını canlıya almadan veya EXE paketini üretmeden önce unhandled exception'ları, loglama eksiklerini, test kapsamasını ve mimari kuralları bütünsel olarak denetler.
* **Ne Zaman Kullanılmalı?**
  * Yeni bir versiyon etiketi (v3.x) çıkarmadan önce.
  * Müşteriye/sahaya kurulum paketi göndermeden hemen önce.
* **Örnek Tetikleme Cümleleri:**
  > *"Yayın öncesi hata denetimini başlat."*  
  > *"Uygulamayı EXE paketine almadan önce tüm kritik kontrolleri yap."*

---

### 7. 🌐 React View Audit (`react-view-audit`)

* **Uzmanlık Alanı:** RADPYS Web Portal modüllerinde (React / TypeScript) buton tıklamaları, `useState` sayfa geçişleri, temizlenmeyen `useEffect` bellek sızıntıları ve sessiz catch bloklarını denetler.
* **Ne Zaman Kullanılmalı?**
  * Web portalındaki `.tsx` / `.ts` bileşenlerini incelerken.
* **Örnek Tetikleme Cümleleri:**
  > *"Web portal bileşeninde React view audit çalıştır."*

---

### 8. ✍️ Reklam ve Tanıtım Stratejisti (`ad-creative-strategist`)

* **Uzmanlık Alanı:** RADPYS V3 için B2B reklam metin yazarlığı (Google Ads, LinkedIn B2B, Meta), tanıtım videoları ve broşürler için KVKK yasal sorumluluk reddi (disclaimer) metinleri ve reklam kampanyası stratejisi.
* **Ne Zaman Kullanılmalı?**
  * RADPYS için reklam metinleri, başlıklar veya sosyal medya tanıtımları hazırlarken.
  * Tanıtım materyalleri için yasal KVKK uyarı metinleri veya disclaimer gerektiğinde.
* **Örnek Tetikleme Cümleleri:**
  > *"RADPYS V3 B2B pazarlaması için Google Ads reklam metinleri hazırla."*  
  > *"Tanıtım videosu için KVKK yasal sorumluluk reddi metni yaz."*  
  > *"LinkedIn B2B reklam kampanyası başlıkları oluştur."*

---

### 9. 🩺 Sağlık ve NDK Mevzuat Ajanı (`radiation-health-compliance`)

* **Uzmanlık Alanı:** RADPYS V3 projesinde NDK (Nükleer Düzenleme Kurumu) ve Sağlık Bakanlığı mevzuatlarına uyum, dozimetre yıllık limit aşımları ve anomali uyarı dili, periyodik sağlık taramaları (kan tahlili vb.), DÖF (Düzeltici Önleyici Faaliyet) tutanakları ve KVKK özel nitelikli kişisel sağlık verisi koruma prensipleri.
* **Ne Zaman Kullanılmalı?**
  * Dozimetre risk ve anomali uyarı metinlerini düzenlerken.
  * Periyodik muayene takip mantığı ve NDK/Sağlık Bakanlığı mevzuat kontrolünde.
  * DÖF (Düzeltici Önleyici Faaliyet) ve kaza bildirimi şablonlarında.
* **Örnek Tetikleme Cümleleri:**
  > *"Dozimetre yıllık limit aşımında ekranda görünecek uyarı metnini NDK mevzuatına uygun hazırla."*  
  > *"Radyasyon kazası Olay Bildirimi ve DÖF tutanak şablonunu oluştur."*  
  > *"Periyodik muayene ve kan tahlili takip uyarılarını denetle."*

---

### 10. 📖 Kılavuz & İş Akışı Yazım Ajanı (`radpys-manual-sync`)

* **Uzmanlık Alanı:** RADPYS V3 kullanma kılavuzunu (`docs/Kullanim_Kilavuzu.md`) kod tabanına bakarak günceller. Formdaki alanları kuru kuru listelemek **kesinlikle yasaktır**. Bunun yerine **"Neyi, Neden ve Nasıl" (İş Akışı)** ilkesiyle adım adım operasyonel kullanım senaryosu yazar.
* **Ne Zaman Tetiklenir:** "kılavuzu güncelle", "kılavuz senkronize et", "kullanım talimatı yaz" taleplerinde.
* **Gelişmiş Algoritma:** UI alanlarını tek tek tarar, iş kuralları servisleriyle eşleştirir, Markdown tablosu, Mermaid diyagramı ve adım adım numarasız/numaralı senaryo rehberi üretir.

#### 13. `diagram-design` (Diyagram & Mimari Görselleştirme)
* **Uzmanlık Alanı:** Standalone HTML + SVG olarak mimari, veri akışı, sequence ve state machine şemaları çizer.
* **Ne Zaman Tetiklenir:**
  * Dokümantasyona (`Kullanim_Kilavuzu.md` vb.) teknik mimari şemalar, süreç akışları veya veritabanı ER modelleri eklenmek istendiğinde., Gantt vb.) üretir. Çıktılar bağımsız, sıfır harici bağımlılıkla doğrudan tarayıcıda açılabilen HTML ve inline SVG formatındadır.
* **Ne Zaman Kullanılmalı?**
  * Dokümantasyona (`Kullanim_Kilavuzu.md` vb.) teknik mimari şemalar, süreç akışları veya veritabanı ER modelleri eklenmek istendiğinde.
  * Karmaşık nöbet algoritmalarını veya NDK mevzuat akışlarını editoryal görsellerle anlatmak gerektiğinde.
  * Sunum, B2B tanıtım ve mimari dokümantasyon görselleri hazırlanırken.
* **Örnek Tetikleme Cümleleri:**
  > *"RADPYS V3 veritabanı ER şemasını editoryal HTML diyagram olarak çiz."*  
  > *"Nöbet kısıt hiyerarşisi katmanlarını Layer Stack şeması ile üret."*  
  > *"Dozimetre anomali uyarısı ve DÖF iş akış şemasını (Flowchart) oluştur."*

---

### 12. 🎨 Tasarım ve Ürün Süreç Ajanları (Designer Skills Paket)

* **Uzmanlık Alanı:** Ürün tasarımı, UI/UX kararları, tasarım sistemleri (`design-tokens`), bilgi mimarisi (`information-architecture`), mülakat ve fikir zorlama (`grill-me`), tasarım denetimi (`design-review`) ve tüm tasarım sürecini orkestre eden akış (`design-flow`).
* **Paket İçindeki Ajanlar:**
  * **Tasarım Özeti Ajanı (`design-brief`):** Yeni bir sayfa/özellik geliştirmeden önce hedef kitleyi ve tasarımı dokümante eder.
  * **Fikir Mülakat Ajanı (`grill-me`):** Tasarım kararlarınızı sorgulayarak açmazları netleştirir.
  * **Tasarım Sistemi Ajanı (`design-tokens`):** Renk paletlerini (açık/koyu tema), tipografi ve boşluk sistemlerini belirler.
  * **Bilgi Mimarisi Ajanı (`information-architecture`):** Ekran geçişlerini, navigasyonu ve sayfa hiyerarşisini kurgular.
  * **Özetten Göreve Ajanı (`brief-to-tasks`):** Tasarım özetini uygulanabilir kod ve tasarım görevlerine dönüştürür.
  * **Frontend Tasarım Ajanı (`frontend-design`):** Estetik ve tutarlı UI/UX bileşenleri kurgular.
  * **Tasarım Denetçisi (`design-review`):** Kullanılabilirlik, erişilebilirlik (WCAG AA) ve temasal uyumu denetler.
  * **Tasarım Orkestratörü (`design-flow`):** Tüm bu 7 adımı sırayla çalıştırır.

---

## 🎯 Kullanım Örnekleri ve Matris

| Sorun / Senaryo | İlgili Uzman Ajan | Örnek Komut |
| :--- | :--- | :--- |
| Butona tıklayınca sayfa değişmiyor | Buton & Navigasyon Denetçisi | *"Buton bağlantılarını ve QStackedWidget navigasyonunu denetle."* |
| UI kilitleniyor / donuyor | Masaüstü Uygulama Mimarisi | *"UI thread'ini kilitleyen işlemi QThread asenkron yapısına al."* |
| Veritabanı sorgusu yavaş yanıt veriyor | Veritabanı Optimizasyonu | *"SQLCipher veritabanı sorgusunu ve indekslerini optimize et."* |
| Sadece spesifik 1 hatayı düzeltmek istiyorsunuz | Nokta Atışı Kod Düzeltme | *"Sadece istenen hatayı nokta atışı minimum diff ile çöz."* |
| Kod yazımı bitti, denetim gerekiyor | Kod İnceleme ve Güvenlik | *"Yazdığım son değişiklikler için kod incelemesi yap."* |
| Sürüme/EXE'ye çıkmadan hemen önce | Yayın Öncesi Hata Denetçisi | *"Yayın öncesi hata denetimini çalıştır."* |
| Reklam, B2B tanıtım veya KVKK metni gerekiyor | Reklam ve Tanıtım Stratejisti | *"RADPYS için B2B reklam metinleri ve KVKK uyarıları hazırla."* |
| Dozimetre riski, NDK mevzuat uyumu gerekiyorsa | Sağlık ve NDK Mevzuat Ajanı | *"Dozimetre limit aşımı uyarısını NDK mevzuatına uygun yaz."* |
| Kullanma kılavuzu ve iş akışı yazılacaksa | Kılavuz & İş Akışı Yazım Ajanı | *"Kullanma kılavuzunu alan listelemek yerine iş akışıyla yaz."* |
| Mimari şema, iş akış veya ER diyagramı üretilecekse | Görsel Mimari & Diyagram Ajanı | *"Nöbet kısıt hiyerarşisini editoryal HTML diyagram olarak üret."* |
| Yeni bir sayfa/özellik tasarımı planlanırken | Tasarım ve Ürün Süreç Ajanı | *"Yeni nöbet ayarları ekranı için design-brief ve design-flow başlat."* |

---

*Doküman Güncellenme Tarihi: 11 Ağustos 2026*  
*Proje: RADPYS V3 (Lite)*
