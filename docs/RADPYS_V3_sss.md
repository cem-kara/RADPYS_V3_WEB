# RADPYS V3 — Sıkça Sorulan Sorular (SSS) ve Sistem Uyarıları Rehberi

Bu doküman, RADPYS V3 (Radyoloji & Radyasyon Personeli Yönetim Sistemi) masaüstü ve web portalı kullanımı sırasında karşılaşılabilecek tüm **Sık Karşılaşılan Uyarılar, Hata Mesajları, Sistem Kısıtları ve Çözüm Yollarını** modül modül derlemektedir.

---

## 📑 İçindekiler
1. [Giriş, Güvenlik & Oturum Yönetimi](#1-giris-guvenlik--oturum-yonetimi)
2. [Personel & Özlük Yönetimi Modülü](#2-personel--ozluk-yonetimi-modulu)
3. [Periyodik Sağlık Muayeneleri & Taramaları](#3-periyodik-saglik-muayeneleri--taramalari)
4. [İzin Takip & Şua İzni Modülü](#4-izin-takip--sua-izni-modulu)
5. [Dozimetre Takip & NDK Limit Uyarısı Modülü](#5-dozimetre-takip--ndk-limit-uyarisi-modulu)
6. [Nöbet Yönetimi & Otomatik Dağıtım Modülü](#6-nobet-yonetimi--otomatik-dagitim-modulu)
7. [Kalite, Olay Bildirim & DÖF (CAPA) Modülü](#7-kalite-olay-bildirim--dof-capa-modulu)
8. [Evrensel Onay Bekleyen Görevler Paneli](#8-evrensel-onay-bekleyen-gorevler-paneli)
9. [Raporlar Modülü (Rapor Merkezi)](#9-raporlar-modulu-rapor-merkezi)
10. [Tanımlamalar (Lookup / Sabit Veri) Modülü](#10-tanimlamalar-lookup--sabit-veri-modulu)
11. [Web Portalı & REST API Senkronizasyon Modülü](#11-web-portali--rest-api-senkronizasyon-modulu)
12. [Merkezi Bildirim ve Durum Çubuğu Sistemi](#12-merkezi-bildirim-ve-durum-cubugu-sistemi)
13. [Program Ayarları & Temalar](#13-program-ayarlari--temalar)
14. [Veritabanı, Bakım & SQLCipher Şifreleme](#14-veritabani-bakim--sqlcipher-sifreleme)
15. [Toplu İçe Aktarma (Excel / CSV Import) Sihirbazı](#15-toplu-ice-aktarma-excel--csv-import-sihirbazi)

---

<a id="1-giris-guvenlik--oturum-yonetimi"></a>
## 1. Giriş, Güvenlik & Oturum Yönetimi

### ❓ 1.1 Kurulumda "Windows kişisel bilgisayarınızı korudu" (SmartScreen) uyarısı alıyorum, ne yapmalıyım?
* **Neden Olur?:** Windows SmartScreen mekanizmasının henüz dijital imzası tanınmayan yeni EXE dosyaları için varsayılan güvenlik uyarısıdır. RADPYS V3 tamamen güvenlidir.
* **Çözüm:** 
  1. Mavi renkli *"Windows kişisel bilgisayarınızı korudu"* uyarısında **"Daha fazla bilgi"** (*More info*) bağlantısına tıklayın.
  2. Pencerenin altında açılan **"Yine de çalıştır"** (*Run anyway*) butonuna basarak kurulumu başlatın.
  3. Windows Defender karantinaya alırsa: *Windows Güvenliği > Virüs ve tehdit koruması > Koruma geçmişi* sekmesinden `RADPYS.exe` kaydını bulup **"Cihazda İzin Ver"** deyin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 1), `build_installer.bat`

### ❓ 1.2 İlk kurulumda varsayılan Yönetici (Admin) hesabı şifresi nedir ve nerededir?
* **Neden Olur?:** RADPYS V3 ilk kez yüklendiğinde veritabanı otomatik olarak bir `admin` hesabı oluşturur ve rastgele geçici bir şifre atar.
* **Çözüm:** Uygulama dizinindeki `data/ilk_admin_bilgileri.txt` dosyasını Not Defteri ile açarak tek seferlik geçici `admin` şifrenizi görebilirsiniz. İlk girişte sistem sizi otomatik olarak şifre yenilemeye yönlendirir. Güvenlik amacıyla bu dosyayı ilk girişten sonra siliniz.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 2.1), `app/database.py`

### ❓ 1.3 "Eksik Bilgi: Kullanıcı adı ve şifre zorunludur" veya "Giriş Başarısız" uyarısı.
* **Neden Olur?:** Kullanıcı adı veya şifre boş bırakılmış ya da yanlış girilmiştir (*Caps Lock* açık olabilir).
* **Çözüm:** Kullanıcı adı ve şifrenizi kontrol edin. Karakterleri kontrol etmek için **"Şifreyi Göster"** kutucuğunu işaretleyin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 2)

### ❓ 1.4 "Hesabınız Geçici Olarak Kilitlendi" uyarısı alıyorum, ne yapmalıyım?
* **Neden Olur?:** Güvenlik protokolü gereği **5 kez üst üste hatalı şifre** girildiğinde hesap kilitlenir.
* **Çözüm:** Giriş ekranındaki **"Şifremi Unuttum"** butonunu kullanarak kayıtlı e-posta adresinizle yeni şifre oluşturabilir veya Sistem Yöneticinize başvurarak *Yönetim > Kullanıcı Yönetimi* panelinden kilidin kaldırılmasını talep edebilirsiniz.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 2 & 16.5)

---

<a id="2-personel--ozluk-yonetimi-modulu"></a>
## 2. Personel & Özlük Yönetimi Modülü

### ❓ 2.1 "Bu TC Kimlik Numarası İle Kayıtlı Başka Bir Personel Var" uyarısı.
* **Neden Olur?:** Girilen T.C. Kimlik Numarası veritabanında başka bir personele zaten kayıtlıdır.
* **Çözüm:** Personel arama çubuğundan TC kimlik numarasını aratarak mevcut kaydı güncelleyin veya yeni kayıttaki TC numarasını kontrol edin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 3)

### ❓ 2.2 "Personel Silinemez: Geçmiş Nöbet Kayıtları / Doz Ölçümleri Mevcut" uyarısı.
* **Neden Olur?:** Veri bütünlüğü ve denetim izi gereğince geçmiş nöbeti, dozimetre ölçümü veya sağlık muayenesi olan personel silinemez.
* **Çözüm:** Personeli veritabanından silmek yerine durumunu **🔴 Pasif** olarak güncelleyin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 3)

### ❓ 2.3 "Personel Pasife Alınamaz: Aktif Nöbet veya İzin Kaydı Bulunmaktadır" uyarısı.
* **Neden Olur?:** Gelecek tarihe atanmış nöbet veya onaylanmış izni bulunan personel doğrudan pasife alınamaz.
* **Çözüm:** Önce nöbet çizelgesinden veya izin modülünden personelin aktif kayıtlarını iptal/devir edin, ardından personeli pasife alın.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 3)

---

<a id="3-periyodik-saglik-muayeneleri--taramalari"></a>
## 3. Periyodik Sağlık Muayeneleri & Taramaları

### ❓ 3.1 🔴 "Süresi Geçmiş Muayene" Uyarısı (Kırmızı Satır Vurgusu).
* **Neden Olur?:** Radyasyon çalışanının son periyodik muayenesinin üzerinden 1 yıl (365 gün) veya daha fazla süre geçmiştir.
* **Çözüm:** Personeli derhal periyodik sağlık taramasına (Kan/Hemogram, Dahiliye, Dermatoloji, Göz) sevk edip muayene sonuçlarını veritabanına işleyin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 3 & NDK Mevzuatı)

### ❓ 3.2 🟡 "Yaklaşan Muayene" Uyarısı (Sarı Satır Vurgusu).
* **Neden Olur?:** Personelin yıllık periyodik muayene son tarihine 30 günden az kalmıştır.
* **Çözüm:** Randevu sürecini başlatmak için sağlık kurumu sevkiyatını planlayın.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 3)

### ❓ 3.3 "Eksik Branş Muayenesi" uyarısı nedir?
* **Neden Olur?:** Dahiliye, Dermatoloji, Göz veya Periferik Yayma (Kan) muayene branşlarından biri henüz sisteme girilmemiştir.
* **Çözüm:** Muayene penceresinde eksik branş sekmesini açarak doktordan alınan muayene sonucunu girip kaydedin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 3)

---

<a id="4-izin-takip--sua-izni-modulu"></a>
## 4. İzin Takip & Şua İzni Modülü

### ❓ 4.1 "İzin Bakiyesi Yetersiz / Süresi Kalan Bakiyeyi Aşıyor" uyarısı.
* **Neden Olur?:** Talep edilen izin günü sayısı personelin kalan yıllık izin veya mazeret izni bakiyesini aşmaktadır.
* **Çözüm:** Personelin izin bakiyesini *İzin Takip > Personel İzin Özeti* ekranından kontrol edin veya mazeret izni olarak düzenleyin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 4)

### ❓ 4.2 "Şua İzni Kesintisiz Kullanılmalıdır" uyarısı.
* **Neden Olur?:** Sağlık Bakanlığı ve NDK mevzuatı gereği 4 haftalık Şua İzni (Sağlık İzni) parçalı kullanılamaz; tek seferde blok olarak kullandırılmalıdır.
* **Çözüm:** İzin başlangıç ve bitiş tarihlerini 4 haftalık blok olarak ayarlayın.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 4 & NDK Mevzuatı)

### ❓ 4.3 "Seçili Dönem Kilitli Olduğu İçin İşlem Yapılamaz" uyarısı.
* **Neden Olur?:** İlgili çalışma dönemi önceden **"Dönemi Kilitle"** veya **"Yılı Kilitle"** butonuyla kilitlenmiştir.
* **Çözüm:** Sistem yöneticisine başvurarak ilgili dönemin kilidini geçici olarak kaldırtın.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 4)

### ❓ 4.4 Web Portalından iletilen İzin Talepleri masaüstü veritabanına ve yöneticiye nasıl yansır?
* **Neden Olur?:** Saha çalışanı Web Portalındaki *İzin Talep Formu* üzerinden izin başvurusunu ilettiğinde `POST /api/izin/talep` endpoint'i çalışır.
* **Çözüm:** Masaüstü RADPYS V3 `WebSyncService` servisi kaydı otomatik alarak `radpys.db` `personel_izinler` tablosuna ve **Yönetim > Onay Bekleyen Görevler > İzin Talepleri** paneline işler. Yönetici onayladığında izin kaydı kesinleşir ve bakiyeden düşer.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 4.4 & 11.2.5), `web_portal/server.ts`

---

<a id="5-dozimetre-takip--ndk-limit-uyarisi-modulu"></a>
## 5. Dozimetre Takip & NDK Limit Uyarısı Modülü

### ❓ 5.1 ☢️ "NDK Yıllık Limit Aşımı (>20 mSv)" uyarısı alındığında ne yapılmalıdır?
* **Neden Olur?:** Personelin 12 aylık kümülatif tümdücut dozu NDK ve Sağlık Bakanlığı yasal sınırı olan 20 mSv (veya 5 yıllık 100 mSv) limitini aşmıştır.
* **Çözüm:**
  1. Sistem personeli otomatik 🔴 **"Yüksek Riskli / Limit Aşıldı"** statüsüne alır.
  2. Personeli derhal radyasyonlu alandan (BT/Röntgen/Nükleer Tıp) çıkarıp radyasyonsuz birime (MR/Poliklinik/İdari) çekin.
  3. *Kalite & Güvenlik > Olay Bildirim / DÖF* panelinden otomatik oluşturulan DÖF kaydını işleyin ve Sağlık Bakanlığı sağlık tarama tutanağını sisteme yükleyin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 5 & 16.2), NDK Mevzuat Engine

### ❓ 5.2 "Mükerrer Dozimetre Ölçüm Kaydı" uyarısı.
* **Neden Olur?:** Aynı personel ve aynı ölçüm periyodu (örn: *2026/03*) için sistemde zaten kayıtlı bir dozimetre doz verisi bulunmaktadır.
* **Çözüm:** Var olan ölçüm kaydını düzenleyin veya periyot bilgisini kontrol edin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 5)

---

<a id="6-nobet-yonetimi--otomatik-dagitim-modulu"></a>
## 6. Nöbet Yönetimi & Otomatik Dağıtım Modülü

### ❓ 6.1 🚨 Nöbet Otomatik Dağıtım Sihirbazı boş slot bırakıyor (🔴 "Kadro Yetersiz / Boş Slot"), nasıl çözülür?
* **Neden Olur?:** Birimdeki personel azlığı, 24 saatlik nöbet ertesi zorunlu dinlenme kuralı, emzirme/gebelik muafiyetleri veya yıllık fazla mesai tavan sınırının aşılması nedeniyle matematiksel kısıtlar çakışmaktadır.
* **Çözüm:**
  1. Nöbet Sihirbazı ekranında **"Çapraz Görevlendirme"** butonuna basarak komşu birimlerden geçici personel çekin.
  2. *Nöbet Ayarları > Yasal Kısıtlar* ekranından yumuşak kısıt limitlerini esnetin.
  3. Kırmızı hücreye çift tıklayarak amir yetkisiyle manuel atama yapın.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 6 & 16.1)

### ❓ 6.2 "Yasal Nöbet Ertesi Dinlenme İhlali" uyarısı alıyorum.
* **Neden Olur?:** Personel 24 saatlik nöbetten çıktıktan sonra en az 24 saat geçmeden tekrar nöbet yazılmaya çalışılmıştır. Sert kısıt engeller.
* **Çözüm:** Personelin aradaki dinlenme süresini gözeterek nöbet gününü değiştirin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 6)

### ❓ 6.3 İki personel peş peşe 2 gün üst üste nöbet tutabilir mi?
* **Yanıt:** Hayır. Sistemde *Nöbet Ertesi Dinlenme* sert kısıtı aktif olduğu için 24 saatlik nöbet sonrası en az 24 saat zorunlu dinlenme verilir.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 6.16)

### ❓ 6.4 Yayınlanmış planda nöbet devri veya isim değişikliği yapıldığında hakediş saatleri ne olur?
* **Yanıt:** Eğer *Onayda Otomatik Çizelge Güncelle* seçeneği aktifse, devir onaylandığı anda nöbet çizelgesindeki isim otomatik güncellenir ve personellerin aylık hakediş/fazla mesai saatleri anında yeniden hesaplanır.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 6.16)

### ❓ 6.5 🤰 Personel gebelik bildirimi yaptığında mevcut ve gelecek ay nöbetleri nasıl etkilenir?
* **Yanıt:** 
  * **Radyasyonlu Alan Personeli (`radyasyonlu_alan = 1`):** Mevcut ve hazırlanmış gelecek ay nöbet çizelgesindeki **GÜNDÜZ VE GECE TÜM NÖBETLERİ** otomatik olarak `IPTAL_MAZERET` yapılır.
  * **Radyasyonsuz Alan Personeli (`radyasyonlu_alan = 0`):** Gündüz mesaileri saklı tutulur, **SADECE GECE VE 24 SAATLİK NÖBETLERİ** `IPTAL_MAZERET` yapılır.
  * **Yönetici Aksiyonu:** Yönetici **🎯 Yönetici Aksiyon Merkezi** (Masaüstünde *Onay Bekleyen Görevler > Gebelik & İdari Aksiyonlar*) üzerinden tek tıkla personelin yeni radyasyonsuz birim atamasını, boşalan nöbetlerin ikamelerini ve 160 saatlik gündüz mesai dengelemesini 3 adımlı sihirbazla tamamlar.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 3.6 & 8.4)

---

<a id="7-kalite-olay-bildirim--dof-capa-modulu"></a>
## 7. Kalite, Olay Bildirim & DÖF (CAPA) Modülü

### ❓ 7.1 "Olay Tanımı / Detaylı Açıklaması Boş Bırakılamaz" uyarısı.
* **Neden Olur?:** Olay Bildirim Sihirbazında zorunlu olan olay detayı girilmeden bildirim gönderilmeye çalışılmıştır.
* **Çözüm:** Olay açıklama alanını en az 10 karakter olacak şekilde doldurun.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 7)

### ❓ 7.2 Anonim olay bildirimlerinde kişisel bilgilerim görünür mü?
* **Yanıt:** Hayır. *Anonim Bildirim Yap* seçeneği işaretlendiğinde sistem veritabanında bildiren personelin kimliğini anonimleştirir; yönetici panelinde isim görünmez.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 7)

### ❓ 7.3 ☢️ Radyasyon kazası veya ihlalinde "NDK 3 Günlük Yasal Bildirim Takibi" nasıl çalışır?
* **Neden Olur?:** Olay kategorisi "RADYASYON" içerdiğinde veya manuel *NDK Bildirimi Gerekli* olarak işaretlendiğinde, NDK (Nükleer Düzenleme Kurumu) mevzuatı gereği 3 takvim günü (72 saat) içinde resmi bildirim yapılması yasal zorunluluktur.
* **Çözüm:**
  1. Sistem bildirim tarihine otomatik 3 gün ekleyerek `ndk_bildirim_son_tarih` alanını hesaplar ve takip durumunu `bekliyor` statüsüne alır.
  2. NDK'ya resmi bildirim yapıldığında olay detay sayfasından veya Web Portalından NDK bildirim tarihini sisteme işleyin. Takip durumu otomatik `yapildi` olarak güncellenir.
  3. Süresi yaklaşan veya geciken bildirimler panelde 🔴 **"NDK Bildirimi Bekliyor / Gecikmiş"** rozetiyle uyarılır.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 7.4 & NDK Mevzuatı)

---

<a id="8-evrensel-onay-bekleyen-gorevler-paneli"></a>
## 8. Evrensel Onay Bekleyen Görevler Paneli

### ❓ 8.1 "Reddetme Gerekçesi Zorunludur" uyarısı.
* **Neden Olur?:** Onay bekleyen bir izin, nöbet devri veya veri değişikliği reddedilirken açıklama alanı boş bırakılmıştır.
* **Çözüm:** Reddetme dialog penceresine açıklayıcı bir gerekçe yazarak onaylayın.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 8)

### ❓ 8.2 "Değişiklik Uygulanamadı / Kaynak Veri Silinmiş" uyarısı.
* **Neden Olur?:** Onay bekleyen veri, başka bir yönetici tarafından veritabanında silinmiş veya değiştirilmiştir.
* **Çözüm:** Onay listesini yenileyip güncel durumunu kontrol edin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 8)

---

<a id="9-raporlar-modulu-rapor-merkezi"></a>
## 9. Raporlar Modülü (Rapor Merkezi)

### ❓ 9.1 🖨️ PDF / Excel rapor alırken "İzin Engeli / Dosya Açık" veya "PDF Oluşturma Hatası" uyarısı.
* **Neden Olur?:** Üretilecek rapor dosyası bilgisayarınızda başka bir programda (Excel, Adobe Reader vb.) halihazırda açıktır.
* **Çözüm:** Açık olan PDF/Excel dosyasını kapatın ve *Rapor Oluştur* butonuna tekrar basın.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 9 & 16.4)

### ❓ 9.2 "Seçilen Kriterlere Uygun Kayıt Bulunamadı" uyarısı.
* **Neden Olur?:** Filtrelediğiniz tarih aralığında veya departmanda herhangi bir veri bulunmamaktadır.
* **Çözüm:** Tarih aralığını veya departman filtre kriterlerini esneterek tekrar deneyin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 9)

---

<a id="10-tanimlamalar-lookup--sabit-veri-modulu"></a>
## 10. Tanımlamalar (Lookup / Sabit Veri) Modülü

### ❓ 10.1 "Silinemez: Bu Departmana/Ünvana Bağlı Aktif Personel Bulunmaktadır" uyarısı.
* **Neden Olur?:** Veri bütünlüğü gereği aktif personeli olan bir birim veya ünvan doğrudan silinemez.
* **Çözüm:** Önce bağlı personellerin birimini/ünvanını değiştirin veya pasife alın, ardından departmanı silin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 10)

### ❓ 10.2 "Aynı İsimde veya Kodda Kayıt Zaten Mevcut" uyarısı.
* **Neden Olur?:** Aynı departman kural kodu (örn: `BT-01`) veya ünvan adı ikinci kez tanımlanamaz.
* **Çözüm:** Mevcut kodları *Tanımlamalar* sekmesinden kontrol ederek farklı bir kod belirleyin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 10)

---

<a id="11-web-portali--rest-api-senkronizasyon-modulu"></a>
## 11. Web Portalı & REST API Senkronizasyon Modülü

### ❓ 11.1 🌐 Web Portalına tarayıcıdan erişilemiyor ("Sunucu Bağlantı Hatası / REST API Servisine Ulaşılamıyor").
* **Neden Olur?:** Masaüstü uygulamasındaki REST API arka plan servisi kapalıdır veya ağ güvenlik duvarı (Firewall) portu engellemektedir.
* **Çözüm:**
  1. Masaüstü uygulamasında *Yönetim > Web Portal & API Ayarları* sekmesine gidin.
  2. 🟢 **"REST API Servisini Başlat"** butonuna basarak servisi aktif yapın (Varsayılan Port: 8000).
  3. Sunucu IP adresini (örn: `http://192.168.1.X:8000`) kontrol edin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 11 & 16.3), `web_portal`

### ❓ 11.2 "Oturum Süresi Doldu / Lütfen Yeniden Giriş Yapın" uyarısı.
* **Neden Olur?:** Güvenlik protokolü gereğince 8 saat boyunca işlem yapılmayan web oturumları otomatik sonlandırılır.
* **Çözüm:** Kullanıcı adı ve şifrenizi girerek yeniden oturum açın.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 11)

### ❓ 11.3 "Yetkisiz Erişim / Bu İşlem İçin Yetkiniz Bulunmamaktadır" uyarısı.
* **Neden Olur?:** Saha çalışanlarının masaüstü yönetici paneline veya yetkisiz birimlerin verilerine erişimi rol bazlı olarak kısıtlanmıştır.
* **Çözüm:** Kullanıcı rolünüzün erişim yetkilerini kontrol etmek veya yetki yükseltme talebinde bulunmak için Sistem Yöneticinize başvurun.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 11 & 16)

---

<a id="12-merkezi-bildirim-ve-durum-cubugu-sistemi"></a>
## 12. Merkezi Bildirim ve Durum Çubuğu Sistemi

### ❓ 12.1 "Okunmamış Bildiriminiz Bulunmaktadır" uyarısı.
* **Neden Olur?:** Onay kuyruğunda bekleyen acil izin veya nöbet devri talebi olduğunda sistem zil simgesinde kırmızı bildirim yakar.
* **Çözüm:** Sağ üst köşedeki Bildirim Zili simgesine tıklayarak okunmamış bildirimleri inceleyin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 12)

### ❓ 12.2 "Bildirim Servisi Bağlantı Hatası" uyarısı.
* **Neden Olur?:** Yerel bildirim servisi veya anlık iletişim kanalı geçici olarak durduğunda veya bağlantı koptuğunda belirir.
* **Çözüm:** Sayfayı / uygulamayı yenileyin. Bağlantı otomatik olarak yeniden kurulacaktır.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 12)

---

<a id="13-program-ayarlari--temalar"></a>
## 13. Program Ayarları & Temalar

### ❓ 13.1 "Yönetici Yetkisi Gereklidir" uyarısı.
* **Neden Olur?:** Program genel ayarlarını değiştirme yetkisi yalnızca *Sistem Yöneticisi* rolüne tanınmıştır.
* **Çözüm:** Sistem Yöneticisi hesabıyla oturum açın.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 13)

### ❓ 13.2 Yanlış bir ayar girildiğinde fabrika ayarlarına nasıl dönülür?
* **Çözüm:** *Program Ayarları* ekranındaki **"Varsayılan Ayarları Yükle"** butonuna basarak sistem konfigürasyonunu fabrika ayarlarına döndürebilirsiniz.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 13)

---

<a id="14-veritabani-bakim--sqlcipher-sifreleme"></a>
## 14. Veritabanı, Bakım & SQLCipher Şifreleme

### ❓ 14.1 "Yedek Dosyası Bozuk / Geri Yüklenemedi" uyarısı.
* **Neden Olur?:** Seçilen yedek dosyasının 256-bit AES şifreleme anahtarı uyumsuzdur veya dosya bütünlüğü bozulmuştur.
* **Çözüm:** Farklı bir tarihli yedek noktasını seçerek tekrar deneyin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 14)

### ❓ 14.2 🔓 Veriler başka bir sisteme aktarılmak istendiğinde SQLCipher şifrelemesi kaldırılabilir mi?
* **Çözüm:** 
  1. *Yönetim > Veritabanı & Bakım* sekmesine gelin.
  2. **`🔓 Şifresiz Veritabanı Dışa Aktar (Unencrypted Export)`** butonuna basın.
  3. Sudo şifresini girerek `radpys_unencrypted_YYYYMMDD.zip` paketini indirin. İçindeki SQLite veritabanı tüm standart SQLite istemcileriyle açılabilir.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 14.4)

---

<a id="15-toplu-ice-aktarma-excel--csv-import-sihirbazi"></a>
## 15. Toplu İçe Aktarma (Excel / CSV Import) Sihirbazı

### ❓ 15.1 "Format Uyumsuzluğu / Sütun Başlıkları Bulunamadı" uyarısı.
* **Neden Olur?:** Yüklenen Excel dosyasındaki sütun başlıkları sistem formatından farklıdır.
* **Çözüm:** Import Sihirbazı 1. Adımındaki **"Örnek Şablon İndir"** butonuna basarak standart şablonu indirin ve verilerinizi bu şablona yapıştırıp tekrar yükleyin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 15 & 16)

### ❓ 15.2 "Demo Sürüm Limiti (Maksimum 6 Personel Kaydı)" uyarısı.
* **Neden Olur?:** Uygulamanız Demo modundaysa, Excel dosyanızdaki personel sayısı 6 sınırını aştığı için aktarım durdurulur.
* **Çözüm:** Lisans anahtarınızı *Hakkında > Lisans Aktifleştir* ekranından girerek Tam Sürüme geçin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 1.3 & 15)

### ❓ 15.3 "Geçersiz Departman Kodu" veya "Önce Tanımlamaları Yapınız" uyarısı.
* **Neden Olur?:** Excel dosyasındaki departman adı sistemdeki *Tanımlamalar > Departmanlar* listesiyle uyuşmamaktadır.
* **Çözüm:** Excel'deki departman isimlerini sistemdeki tanımlı isimlerle birebir aynı olacak şekilde güncelleyin veya önce Tanımlamalar modülünden departmanı ekleyin.
* *🔍 Kaynak:* `docs/Kullanim_Kilavuzu.md` (Bölüm 15)
