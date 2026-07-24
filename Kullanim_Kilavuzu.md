# RADPYS V3 — Kullanım Kılavuzu

*Radyasyonla Çalışan Sağlık Personeli Operasyonel Süreç Yönetim Uygulaması*

*Haziran 2026*

---

## İçindekiler

1. Kurulum & Giriş
2. Sisteme Giriş (Login Ekranı)
3. Kullanıcı Modülü
4. Personel Modülü
5. İzin Modülü
6. Fiili Hizmet Modülü
7. Sağlık Muayene Modülü
8. Dozimetre Modülü
9. Tanımlamalar (Lookup) Modülü
10. Raporlar Modülü
11. Nöbet Modülü (Planlama ve Ayarlar)
12. Radyasyon Güvenliği ve Olay Bildirim / DÖF Modülü
13. Onay Bekleyen Görevler Paneli (Evrensel Onay Sistemi)
14. Merkezi Bildirim ve Durum Çubuğu Sistemi
15. Program Ayarları
16. Veritabanı Modülü
17. Toplu İçe Aktarma (Import) İşlemleri
18. Lisans ve Aktivasyon Sistemi (Demo Sürüm)
19. Sık Karşılaşılan Durumlar ve İpuçları
20. Update Log

---

## 1. Kurulum & Giriş

RADPYS V3, Windows 10 (Sürüm 1809 ve üzeri) ve Windows 11 (64-bit) işletim sistemlerini destekleyen, tüm verileri yerel veritabanında saklayan (local-first) bir masaüstü uygulamasıdır. İnternet bağlantısı sadece lisans doğrulama aşamasında gereklidir.

### 1.1 Sistem Gereksinimleri

- **İşletim Sistemi:** Windows 10 (Sürüm 1809 ve üzeri) veya Windows 11 (64-bit)
- **Bellek (RAM):** 4 GB (8 GB önerilen)
- **Disk Alanı:** En az 500 MB boş alan

### 1.2 Genel Bakış

RADPYS V3, radyasyonla çalışan sağlık personelinin operasyonel süreçlerini yönetmek amacıyla geliştirilmiş bir masaüstü uygulamasıdır. Bu kılavuz, RADPYS V3 üzerinde yer alan tüm modüllerin nasıl kullanılacağını adım adım açıklamak amacıyla hazırlanmıştır. Uygulama; kullanıcı ve yetki yönetimi, personel özlük bilgileri, izin takibi, fiili hizmet süresi zammı, sağlık muayeneleri ve dozimetre ölçümleri gibi birbiriyle ilişkili birçok modülden oluşmaktadır.

Kılavuzdaki bölümler, uygulamadaki menü sıralamasını takip etmektedir. Her bölümde ilgili ekranın ne işe yaradığı, hangi alanların doldurulması gerektiği ve adım adım nasıl işlem yapılacağı anlatılmaktadır.

**Kullanıcı tipleri:** Uygulamadaki ekranlar ve butonlar, oturum açan kullanıcının rolüne tanımlı yetkilere göre değişiklik gösterebilir. Bu kılavuzda anlatılan tüm işlemler, ilgili yetkiye sahip bir kullanıcı tarafından gerçekleştirilebilir. Bir ekranı veya butonu göremiyorsanız, sistem yöneticinizden ilgili yetkinin rolünüze tanımlanmasını talep edebilirsiniz.

> **Not:** Roller ve yetkilerin tam olarak neye karşılık geldiğini öğrenmek için 3.4 Rol Yetkileri bölümüne bakabilirsiniz.

### 1.3 Temel Özellikler

- **Masaüstü uygulaması:** RADPYS V3, bilgisayarınıza kurularak çalıştırılan bir masaüstü uygulamasıdır; internet tarayıcısı gerektirmez.
- **Yerel veri saklama:** Tüm veriler, uygulamayla birlikte çalışan yerel bir veritabanı dosyasında saklanır. Bu yapı, Veritabanı Modülü altındaki yedekleme ve geri yükleme işlemlerinin temelini oluşturur (bkz. Bölüm 16).

> **Not:** Bu kılavuzdaki "ekran" ve "menü" ifadeleri, web tarayıcısı değil RADPYS V3 masaüstü uygulamasının kendi pencere ve sekmelerini ifade etmektedir.

---

## 2. Sisteme Giriş (Login Ekranı)

Sisteme giriş ekranı, uygulamayı açtığınızda karşınıza gelen ilk ekrandır.

![Sisteme giriş ekranı](images/login.png)

### 2.1 Oturum Açma

1. RADPYS V3 masaüstü uygulamasını bilgisayarınızdaki kısayoldan veya yükleme dizininden başlatın.
2. Kullanıcı Adı alanına size tanımlanan kullanıcı adını girin.
3. Şifre alanına şifrenizi girin.
4. Bir sonraki girişlerde kullanıcı adınızın otomatik hatırlanmasını isterseniz "Beni Hatırla" kutucuğunu işaretleyin.
5. "Giriş Yap" butonuna tıklayın.

### 2.2 Şifremi Unuttum

"Şifremi Unuttum" bağlantısına tıkladığınızda, sistem şifrenizi sıfırlamak için açılan pencerede e-posta, kullanıcı adı ve yeni şifrenizi girmeniz gerekmektedir. Bu bilgilerle sistem şifrenizi sıfırlayabilirsiniz. Eğer bu ekran gelmez ise, sistem yöneticinizle iletişime geçmeniz gerekmektedir.

![Şifremi unuttum ekranı](images/sifre_unut.png)

### 2.3 İlk Girişte Şifre Değiştirme

Sisteme ilk kez giriş yaptığınızda veya sistem yöneticiniz şifrenizi sıfırladığında, sistem giriş sonrasında otomatik olarak şifre değiştirme ekranını açar. Bu ekranda:

1. Mevcut (geçici) şifrenizi girin.
2. Belirlenen şifre kurallarına (minimum uzunluk, harf/rakam/özel karakter kullanımı gibi) uygun yeni bir şifre oluşturun.
3. Yeni şifrenizi tekrar girerek onaylayın ve kaydedin.

Şifre kuralları sağlanmadan kayıt işlemi tamamlanmaz; ekranda hangi kuralın karşılanmadığı belirtilir.

![Şifremi unuttum ekranı](images/sifre_unut.png)

### 2.4 Hatalı Giriş Kısıtlaması

Güvenlik amacıyla, art arda beş kez hatalı şifre girilmesi durumunda hesabınız geçici olarak kilitlenir. Hesabınızın kilitlendiğini gösteren bir uyarı mesajı görürseniz, hesabınızın tekrar açılması için sistem yöneticinizle iletişime geçmeniz gerekir.

### 2.5 Gösterge Paneli Merkezi (Dashboard)

Oturum açtığınızda sizi karşılayan ana ekrandır. Sol dikey navigasyon menüsü üzerinden sistemin farklı modüllerine ait özet analiz panelleri arasında geçiş yapabilirsiniz:

- **Genel Bakış:** Sistem genel durumunu, aktif çalışan sayısını, bekleyen izin taleplerini, yaklaşan/geciken periyodik sağlık muayenelerini gösterir. Ayrıca **"Birim Bazlı Personel Dağılımı"** çubuk grafiği, personelin rollerini gösteren **"Ünvan Dağılımı"** halka grafiği ve modüller arası çapraz kontrollerle beslenen **"Dikkat Gerekiyor"** (kritik uyarı listesi) alanı yer alır. Çift tıklayarak ilgili modüle hızlıca geçiş yapabilirsiniz.
- **Nöbet Analizi:** Birimlerin aylık nöbet saati yüklerini, nöbetçi yoğunluk sıralamalarını ve nöbet/fazla mesai trend grafiklerini içerir. Grafiklerden birim nöbet yükü sütununa tıklandığında, doğrudan o birimin nöbet plan listesine yönlendirme yapılır. Ayrıca **"Ay İçi Doluluk Takvimi"** grafiğiyle nöbet doluluk yoğunluğu gün gün izlenebilir. Onay bekleyen nöbet devir talepleri bu panelden satır seçilerek "Seçileni Onayla" veya "Seçileni Reddet" butonlarıyla kolayca yönetilebilir.
- **Dozimetre Analizi:** Dozimetre ölçümlerine ait en yüksek değerler yarım daire şeklinde bir **"Maksimum Doz Seviyesi"** göstergesiyle gösterilir. Birim risk grafiği, ekrandaki bir seçim listesi yardımıyla **"Çubuk Grafik"** veya **"Risk Dağılımı"** görünümleri arasında dinamik olarak değiştirilebilir.
- **Olay & DÖF Analizi:** Olay bildirim kategorileri ve şiddet dereceleri yığılmış çubuk grafikte listelenmektedir. Açılan DÖF (Düzeltici Önleyici Faaliyet) oranı ise halka grafikle görselleştirilmiştir.
- **Eğitim Analizi:** Hizmet içi eğitim tanımları, toplam atamalar ve tamamlanma oranları ile ortalama sınav başarı puanları gibi grafiksel özetleri sunar.

---

## 3. Kullanıcı Modülü

Kullanıcı Modülü; sistem kullanıcılarının, rollerin, yetkilerin ve rol-yetki eşleştirmelerinin yönetildiği bölümdür. Bu modül genellikle sistem yöneticileri tarafından kullanılır.

### 3.1 Kullanıcı Listesi

![Kullanıcı listesi](images/kullanici.png)

**Listeleme:** Sol menüden Kullanıcı Modülü > Kullanıcı Listesi yolunu izleyerek kayıtlı tüm kullanıcıları görüntüleyebilirsiniz.

**Kullanıcı Ekleme:** "Yeni Ekle" butonuna tıklayın; açılan formda kullanıcı adını, ilişkilendirilecek personeli, rolünü ve gerekli diğer bilgileri girip kaydedin.

1. Kullanıcı Listesi ekranında "Yeni Ekle" butonuna tıklayın.
2. Kullanıcı adı, ilişkili personel ve rol bilgilerini seçin/girin.
3. Formu "Kaydet" ile onaylayın.
4. Kullanıcıya ait geçici şifre, ilk girişte değiştirilmek üzere tanımlanır.

**Kullanıcı Silme (Pasife Alma):** Bir kullanıcı kaydını sildiğinizde, kayıt veritabanından kalıcı olarak silinmez; kullanıcı "Pasif" duruma alınır.

> **Not:** İlgili personelin durumu (örneğin işten ayrılış nedeniyle) pasif olarak değiştirildiğinde, o personele bağlı kullanıcı hesabı da otomatik olarak pasife alınır. Bu işlemi ayrıca manuel yapmanıza gerek yoktur.

**Kullanıcı Detay:** İlgili satırdaki detay simgesine tıklayarak kullanıcının bilgilerini, bağlı olduğu personeli ve rolünü görüntüleyebilirsiniz.

**Excel'e Aktarma:** Liste ekranındaki "Excel'e Aktar" butonuyla kullanıcı listesini Excel dosyası olarak bilgisayarınıza indirebilirsiniz.

**Kullanıcı İçe Aktarma:** Toplu kullanıcı oluşturma işlemi, genellikle Personel İçe Aktarma işlemiyle birlikte dolaylı olarak gerçekleşir; personel içe aktarılırken ilgili kullanıcı hesapları da otomatik oluşturulabilir.

### 3.2 Roller

Bu ekrandan sistemde kullanılacak rolleri (örn. Yönetici, Personel, İnsan Kaynakları vb.) tanımlayabilirsiniz.

![Rol listesi](images/roller.png)

1. Rol Listesi ekranına Kullanıcı Modülü > Roller yolundan ulaşın.
2. Yeni bir rol tanımlamak için "Yeni Ekle" butonuna tıklayın. Açılan formda rol adı, rolün aktiflik durumu ve **Rol Kapsamı** bilgisini girin.
3. Mevcut bir rolü düzenlemek için Düzenle simgesini veya incelemek için satırdaki Detay simgesini kullanın.
4. Rol listesini Excel olarak indirmek için "Excel'e Aktar" butonunu, toplu rol tanımlamak için "İçe Aktar" özelliğini kullanın.

**Rol Kapsamı (Görüş ve Yetki Sınırı):**

Rol oluştururken veya güncellerken seçebileceğiniz üç farklı kapsam seçeneği bulunmaktadır:

- **Sadece Kendisi:** Bu role sahip kullanıcılar, Personel, İzin, Sağlık Muayene, Dozimetre ve Fiili Hizmet sayfalarında yalnızca kendi personel kayıtlarını görebilir ve yönetebilirler (örn. sıradan kullanıcı ve izleyici rolleri).
- **Kendi Departmanı:** Kullanıcılar sadece bağlı oldukları alt departmandaki çalışanların kayıtlarını görebilir ve yönetebilirler. Bu kontrol, isim benzerliğine değil, personelin bağlı olduğu departman bilgisine göre güvenli bir şekilde yapılır.
- **Tümü:** Kullanıcılar sistemdeki tüm departman ve personellerin verilerine tam yetkiyle erişebilirler (örn. sistem yöneticisi rolleri).

**Rol Silme (Pasife Alma):**

Bir rolü sildiğinizde rol pasif duruma alınır.

> **Not:** Pasif edilen bir roldeki kullanıcılar otomatik olarak hiyerarşide bir alt role atanır; bu nedenle bir rolü pasife almadan önce, o roldeki kullanıcıların hangi role aktarılacağını göz önünde bulundurun.

### 3.3 Yetkiler

Yetkiler ekranında, sistemdeki işlem bazlı erişim haklarını (örn. "Personel Ekleyebilir", "İzin Onaylayabilir" gibi) tanımlayabilir ve yönetebilirsiniz.

![Yetki listesi](images/modül_yetki.png)

1. Yetki Listesi ekranına Kullanıcı Modülü > Yetkiler yolundan ulaşın.
2. Yeni bir yetki tanımlamak için "Yeni Ekle" butonunu kullanın.
3. Bir yetkiyi görüntülemek için Detay simgesine tıklayın.
4. Excel'e Aktar ve İçe Aktar butonlarıyla toplu işlemler yapabilirsiniz.

**Yetki Silme:** Silme işlemi yetkiyi kalıcı olarak kaldırmaz, pasif duruma alır.

### 3.4 Rol Yetkileri

Bu ekran, her bir role hangi modül ve eylem yetkilerinin tanımlı olduğunu belirlediğiniz ana yetkilendirme panelidir. Yetki matrisi ekranı iki sekmeden oluşur:

- **Modül Yetkileri Sekmesi:** Her bir rol için modüller bazında standart Okuma, Yazma, Güncelleme ve Silme haklarının atandığı tablodur.
  - **Kapsam (Yetki Alanı) Seçimi:** Her modül satırında, onay kutularının yanı sıra **Miras**, **Kendisi**, **Departman** ve **Tümü** şeklinde yan yana konumlandırılmış bir seçenek grubu yer alır.
  - **Dinamik Açıklama Sütunu:** Seçilen seçeneğe göre modülün sağ tarafındaki **Açıklama** alanında ilgili kapsam kuralının gerçek Türkçe karşılığı anlık olarak gösterilir (örn. *Sadece Kendisi (kendi kayıtları)* veya *Miras Al (Rolün genel ayarı)*).
  - **Akıllı Toplu İşlemler:**
    - **Tümünü Temizle** butonu tüm modüllerdeki yetki onay kutularını kaldırırken kapsam sınırlarını da **Miras** (varsayılan) durumuna geri döndürür.
    - **Şablon Uygula** ile hazır bir yetki grubu uygulandığında (örn. *Tam Yetki*, *Sadece Okuma*), matrisin kapsamları temiz bir başlangıç için otomatik olarak **Miras** moduna sıfırlanır.
- **İnce Ayarlı Yetkiler (Butonlar) Sekmesi:** Sayfa içlerindeki kritik operasyonel butonların ve aksiyonların (örn. Nöbet devir talebi, Puantaj dışa aktarma, Excel'den toplu personel yükleme) rol bazında açılıp kapatılabileceği ince ayarlı kontrol tablosudur.

**Rol Yetki Karşılaştırma (Ayrıntılı Karşılaştırma Ekranı):**

Üst paneldeki **"Karşılaştır"** seçim listesinden hedef bir rol seçilip **"Karşılaştır"** butonuna basıldığında, ana ekranı bozmadan yan yana detay sunan modern bir **Rol Karşılaştırma Detay** penceresi açılır. Bu pencerede:

- İki rolün yetkileri ve kapsam detayları (**Okuma, Yazma (Kendi Departmanı)** şeklinde) 3 sütunlu temiz bir matriste karşılaştırılır.
- Matrisin sol tarafında (Rol A sütunu), o an ekran üzerinde yaptığınız henüz kaydedilmemiş taslak (yerel) değişiklikler de dahil olmak üzere güncel ekran durumu gösterilirken, sağ tarafta (Rol B sütunu) karşılaştırılan rolün veritabanındaki kayıtlı durumu gösterilir. Bu sayede değişikliklerinizi kaydetmeden önce diğer rollerle olan farkını önizleyebilirsiniz.
- Yetki ve kapsam yönünden farklılık gösteren modül satırları belirgin bir renkle vurgulanarak yöneticilere anlık analiz imkanı tanır.
- Kapsam değeri belirtilmeyen modüller matriste net bir şekilde **"Miras Al (Rolün Genel Kapsamını Alır)"** olarak etiketlenerek gösterilir.

![Rol yetki karşılaştırma](images/rol_yetki.png)

**İşlem Adımları:**

1. Rol Yetkileri ekranına Kullanıcı Modülü > Rol Yetkileri yolundan ulaşın.
2. Üst kısımdaki seçim listesinden yetkilerini düzenlemek istediğiniz rolü seçin.
3. İlgili yetki sekmelerindeki (Modül Yetkileri veya İnce Ayarlı Yetkiler) onay kutularını ve kapsam seçeneklerini düzenleyin.
4. "Kaydet" butonuna basarak tüm değişiklikleri kaydedin. Değişiklikleri kaydetmeden geri almak isterseniz "Değişiklikleri Geri Al" butonuna tıklayabilirsiniz.

**Varsayılan Özel Eylemler:**

- **Nöbet Devir Talebi:** Nöbet çizelgesinde "Nöbet Devir Talebi" butonunun aktif kalmasını sağlar.
- **Nöbet Planı Onaylama:** Nöbet plan detay ekranında planın durumunun "Taslak"tan "Onaylandı" veya "Yayında" durumuna getirilmesine izin verir.
- **Personel Toplu İçe Aktarım:** Personel listesinde Excel'den toplu içe aktarım eylemini yönetir.
- **Dozimetre Aksiyon Başlatma:** Dozimetre erken uyarı listesinde sağ tık menüsünden yeni aksiyon başlatma haklarını denetler.

> **Not:** Yeni bir kurulumda rol-yetki eşleştirmeleri sistemle birlikte önceden tanımlanmış olarak gelir; bu nedenle kurulum sonrasında temel rollerin yetkilerini ayrıca tanımlamanıza genellikle gerek kalmaz.

### 3.5 Kullanıcı Şifre Değiştirme

Kendi şifrenizi değiştirmek için profil menüsünden şifre değiştirme ekranına ulaşabilirsiniz.

![Şifre değiştirme ekranı](images/sifre_edit.png)

1. Sağ üst köşedeki kullanıcı/profil menüsünü açın.
2. "Şifre Değiştir" seçeneğine tıklayın.
3. Mevcut şifrenizi ve belirlediğiniz yeni şifreyi (kurallara uygun şekilde) girin.
4. "Kaydet" ile onaylayın.

---

## 4. Personel Modülü

Personel Modülü, kurumdaki tüm personelin özlük bilgilerinin, iletişim bilgilerinin, eğitimlerinin, belgelerinin ve işten ayrılış süreçlerinin yönetildiği ana modüldür.

### 4.1 Personel Ekleme

![Personel ekleme ekranı](images/personel_ekle.png)

1. Sol menüden Personel Modülü > Personel Listesi ekranına gidin.
2. "Yeni Ekle" butonuna tıklayın.
3. Açılan formda kimlik, iletişim, departman ve unvan bilgilerini girin.
4. Cinsiyet alanında "Erkek" veya "Kadın" seçimini yapın; seçiminize göre sistem varsayılan bir avatar görseli atar.
5. İsterseniz "Profil Resmi Yükle" alanından personelin fotoğrafını yükleyin.
6. Formu kaydedin.

> **Not:** Yüklenen profil fotoğrafı, sistem tarafından her personele özel ayrı bir klasörde otomatik olarak düzenli bir şekilde saklanır; bu yapı sayesinde her personelin dosyaları kendi kimlik numarasına ait klasörde tutulur.

#### 4.1.1 Yakın İletişim Bilgileri

Personel kaydı içerisindeki bu sekmeden personelin iletişim bilgileri ve personelin acil durumlarda ulaşılabilecek yakınlarının iletişim bilgilerini yönetebilirsiniz.

1. Personel detay ekranında "Yakın İletişim Bilgileri" sekmesine geçin.
2. Yeni bir kayıt eklemek için "Yeni Ekle" butonunu kullanın; ad-soyad, yakınlık derecesi ve telefon bilgisini girin.
3. Mevcut bir kaydı güncellemek için Düzenle simgesine, kaldırmak için Sil simgesine, görüntülemek için Detay simgesine tıklayın.

#### 4.1.2 Eğitim Bilgileri

Personelin eğitim geçmişini (okul, bölüm, mezuniyet yılı, sertifikalar vb.) bu sekmeden kayıt altına alabilirsiniz.

1. Personel detay ekranında "Eğitim Bilgileri" sekmesine geçin.
2. "Yeni Ekle" ile bir eğitim kaydı oluşturun.
3. Gerektiğinde mevcut kayıtları Düzenle, Sil veya Detay simgeleriyle yönetin.

#### 4.1.3 Personel Belgeleri

Personele ait diploma, sözleşme, kimlik fotokopisi gibi belgelerin dijital olarak saklandığı sekmedir.

1. Personel detay ekranında "Personel Belgeleri" sekmesine geçin.
2. "Yeni Ekle" butonuyla belge türünü seçip dosyayı sisteme yükleyin.
3. Her belge satırının yanında bulunan butonlarla belgeyi görüntüleyebilir (Aç), güncelleyebilir (Düzenle) veya kaldırabilirsiniz (Sil).

> **Not:** Yüklenen dosyaların orijinal adları sadece sistemde kayıt edilir; arayüzde dosyalar sistem tarafından standart ve düzenli bir isimlendirmeyle gösterilir.

### 4.2 Personel Detay / Düzenleme

Personel listesindeki Detay simgesine tıklayarak bir personelin tüm bilgilerini görüntüleyebilir, Düzenle simgesiyle bilgilerini güncelleyebilirsiniz.

### 4.3 Personel Silme (Ayrılış İşlemi)

Bir personelin kaydı, hangi sebeple olursa olsun (istifa, emeklilik, nakil, vb.) "Personel Sil" işlemiyle değil, bir İşten Ayrılış süreciyle sonlandırılır. Bu işlem personelin kaydını silmez, durumunu değiştirir.

1. Personel listesinde ilgili personelin satırındaki Sil (Ayrılış) simgesine tıklayın.
2. Açılan İşten Ayrılış formunda Ayrılış Tarihini seçin.
3. Ayrılış Sebebini (istifa, emeklilik, nakil, sözleşme feshi vb.) seçin.
4. Gerekirse Ayrılış Notu alanına ek açıklama girin.
5. Formu onaylayarak kaydedin.

Form onaylandığında sistem otomatik olarak şu işlemleri gerçekleştirir:

- Personele bağlı kullanıcı hesabının durumu pasif olarak değiştirilir.
- Personelin üzerinde tanımlı tüm görevler (nöbet, görevlendirme vb.) sonlandırılır ve personel pasif duruma alınır.
- Personelin tüm kayıtları (özlük bilgileri, belgeler dahil) bir arşiv klasörüne taşınır.

> **Not:** Bu işlem geri alınabilir değildir; ayrılış kaydı oluşturmadan önce bilgilerin doğruluğundan emin olun.

### 4.4 Excel'e Aktarma ve İçe Aktarma

**Personel Excel Aktar:** Personel Listesi ekranındaki "Excel'e Aktar" butonuyla tüm personel listesini Excel dosyası olarak indirebilirsiniz. Ayrıca her personel için ayrı ayrı "Personel Bilgi Formu" yazdırma seçeneği bulunmaktadır; bu form, personelin özlük bilgilerinin özetlendiği bir çıktı dokümanıdır.

**Personel İçe Aktar:** Toplu personel kaydı oluşturmak için kullanılır.

1. Personel Listesi ekranında "İçe Aktar" butonuna tıklayın.
2. Sistemin sunduğu Excel şablonunu indirin.
3. Şablondaki sütunları (kimlik no, ad-soyad, departman, unvan, iletişim bilgileri vb.) eksiksiz doldurun.
4. Doldurduğunuz dosyayı seçip yükleyin.
5. Sistem dosyayı işleyerek personel kayıtlarını ve ilişkili kullanıcı hesaplarını oluşturur; hatalı satırlar için bir hata raporu sunar.

### 4.5 Personel Profil Sayfası

Personel Profil Sayfası, personelin kendi bilgilerine erişebildiği veya yetkili kullanıcıların bir personelin bilgilerini tek bir ekrandan görüntüleyebildiği özet sayfadır.

- **Detay:** Profil sayfasında personelin tüm sekmelerdeki (iletişim, eğitim, belgeler, izin, sağlık muayene, dozimetre vb.) bilgileri görüntülenir.
- **Düzenle:** Yetkiniz varsa profil sayfası üzerinden doğrudan düzenleme yapabilirsiniz.
- **Birim Nöbetleri Sekmesi:** Bu sekme, personelin bağlı olduğu birim ve alt birimlerdeki veya kendisinin nöbetçi olduğu tüm **Yayınlanmış Nöbet Planlarını** listeler. Listeden bir nöbet planına çift tıklandığında, ilgili plana ait tüm aylık nöbet çizelgesi salt okunur olarak yeni bir pencerede açılır. Bu sayede personel, kendi biriminin nöbet listesini kolayca inceleyebilir. Sekmedeki yıl/ay filtreleri kaldırılmış olup, tüm dönemlere ait planlar en güncel olanı üstte yer alacak şekilde listelenir.
- **Sil, Excel ve İçe Aktar** işlemleri bu sayfa özelinde geliştirme aşamasındadır; bu işlemler için ilgili modülün kendi listesi (örn. Personel Listesi) üzerinden işlem yapmanız önerilir.

> **Not:** Profil sayfasında bir sekmeden diğerine geçiş yaptığınızda, herhangi bir değişiklik yapmadığınız sürece "kaydedilmemiş değişiklik" uyarısı görüntülenmez; bu uyarı yalnızca gerçek bir veri değişikliği yapıldığında ortaya çıkar.

### 4.6 Personel Modülü ile İlgili Genel Notlar

- Dosya ekleme ekranlarında, dosya yükleme butonunun yanında ilgili belgeyi düzenleme ve silme seçenekleri de bulunur.
- Yüklenen dosyaların orijinal adları yalnızca sistemde saklanır; arayüzde dosyalar standart bir adlandırma kuralıyla görüntülenir.

---

## 5. İzin Modülü

İzin Modülü, personelin izin taleplerinin oluşturulduğu, izin hakedişlerinin hesaplandığı ve radyasyonla çalışan personele tanınan Şua (sağlık) izinlerinin takip edildiği modüldür.

### 5.1 İzin İşlemleri

**İzin Ekleme:** Yeni bir izin talebi oluşturmak için aşağıdaki adımları izleyin.

1. İzin Modülü > İzin Listesi ekranına gidin.
2. "Yeni Ekle" butonuna tıklayın.
3. Personeli, izin türünü, başlangıç ve bitiş tarihlerini seçin.
4. Gerekiyorsa açıklama girin ve destekleyici belge ekleyin.
5. Formu kaydedin; izin talebi "Beklemede" durumunda oluşturulur.

**İzin Düzenleme:** İzin Listesi ekranında ilgili kaydın Düzenle simgesine tıklayarak tarih, tür veya açıklama bilgilerini güncelleyebilirsiniz.
**İzin Silme:** İzin kaydının silinebilmesi için kaydın "Beklemede" durumunda olması gerekir.

> **Not:** Onaylanmış, Reddedilmiş veya İptal Edilmiş durumdaki izin kayıtları silinemez. Bu kayıtların durumunu değiştirmek için yetkili bir kullanıcının onay/red/iptal sürecini kullanması veya yeni bir izin kaydı oluşturulması gerekir.

**İzin Detay:** İlgili satırdaki Detay simgesi ile izin talebinin tüm bilgilerini ve durum geçmişini görüntüleyebilirsiniz.

**Excel'e Aktar / İçe Aktar:** İzin Listesi ekranındaki butonlarla izin kayıtlarını Excel olarak dışa aktarabilir veya toplu izin kaydı için şablon kullanarak içe aktarabilirsiniz.

### 5.2 İzin Hakediş

Bu ekran, her personelin yıllık izin bakiyesinin (hakedişinin) hesaplandığı ve takip edildiği bölümdür.

1. İzin Modülü > İzin Hakediş ekranına gidin.
2. Listeden bir personelin mevcut hakediş kaydını görüntüleyebilir, Detay simgesiyle ayrıntılarına bakabilirsiniz.
3. Yeni bir hakediş kaydı eklemek için "Yeni Ekle" butonunu, mevcut bir kaydı güncellemek için Düzenle simgesini kullanın.

> **Not:** İzin Hakediş kayıtları silinemez; bu kayıtlar geçmişe dönük izin bakiyesi bütünlüğünün korunması için kalıcıdır.

#### 5.2.1 Toplu Hesaplama

"Toplu Hesaplama" butonu, tüm personelin (veya seçilen bir grubun) izin hakedişini tek seferde otomatik olarak hesaplayıp oluşturmanızı sağlar. Bu işlem genellikle yeni bir takvim yılına geçişte veya personelin kıdem yılı değiştiğinde kullanılır.

1. İzin Hakediş ekranında "Toplu Hesaplama" butonuna tıklayın.
2. Hesaplamanın yapılacağı dönemi/yılı seçin.
3. İşlemi onaylayın; sistem ilgili personel için hakediş kayıtlarını otomatik oluşturur veya günceller.

#### 5.2.2 Devir (Bakiye Aktarma)

Devir işlemi, bir personelin kullanılmayan izin bakiyesinin bir sonraki döneme aktarılmasını sağlar.

1. İzin Hakediş ekranında "Devir Aktar" (veya "Devir") butonuna tıklayın.
2. Devrin yapılacağı kaynak ve hedef dönemi seçin.
3. İşlemi onaylayarak devredilen bakiyenin yeni döneme yansıtılmasını sağlayın.

### 5.3 Şua (Sağlık) İzin Hakedişleri

Radyasyonla çalışan personele mevzuat kapsamında tanınan ek sağlık izninin (Şua izni) hakediş takibi bu ekrandan yapılır. İşleyiş mantığı standart izin hakedişiyle benzerdir; farkı, hakedişin radyasyon çalışanı statüsüne ve çalışılan süreye göre hesaplanmasıdır.

1. İzin Modülü > Şua İzin Hakedişleri ekranına gidin.
2. Radyasyon çalışanı statüsündeki personelin hakediş kayıtlarını görüntüleyin, gerekirse Ekle/Düzenle/Detay işlemlerini gerçekleştirin.

### 5.4 İzin Modülü ile İlgili Genel Notlar

- Dosya ekleme ekranlarında, dosya yükleme butonunun yanında belgeyi düzenleme ve silme seçenekleri de bulunmaktadır.
- İzinle ilgili yüklenen belgeler, sistem tarafından düzenli bir klasör yapısında saklanır.

---

## 6. Fiili Hizmet Modülü

Fiili Hizmet Modülü, riskli/radyasyonlu ortamlarda fiilen çalışılan sürelerin kayıt altına alındığı ve bu sürelere bağlı hakedişlerin (fiili hizmet süresi zammı) hesaplandığı modüldür. Bu kayıtlar, ilgili mevzuat kapsamında personelin emeklilik hesaplamalarında değerlendirilen ek hizmet sürelerinin belgelenmesi amacıyla tutulur.

### 6.1 Fiili Hizmet Kayıtları

1. Fiili Hizmet Modülü > Fiili Hizmet Listesi ekranına gidin.
2. Yeni bir kayıt eklemek için "Yeni Ekle" butonuna tıklayın; personeli, çalışma birimini/biriminin risk durumunu ve ilgili tarih aralığını girin.
3. Mevcut bir kaydı güncellemek için Düzenle, kaldırmak için Sil, görüntülemek için Detay simgesini kullanın.
4. Kayıtları Excel olarak dışa aktarmak veya toplu kayıt için şablon kullanarak içe aktarmak üzere ilgili butonları kullanın.

### 6.2 Fiili Hizmet Hak Ediş

Bu ekran, fiili hizmet kayıtlarına bağlı olarak personelin hakettiği ek hizmet süresinin hesaplandığı ve listelendiği bölümdür.

1. Fiili Hizmet Modülü > Fiili Hizmet Hak Ediş ekranına gidin.
2. Yeni bir hakediş kaydı oluşturmak için "Yeni Ekle" butonunu kullanın.
3. Mevcut kayıtları Düzenle, Sil veya Detay simgeleriyle yönetin.
4. Excel'e Aktar / İçe Aktar butonlarıyla toplu işlem yapabilirsiniz.

### 6.3 Görev Dağılımı ve Hesaplama Ekranı Kolaylıkları

Ekranda çalışmayı kolaylaştıran aşağıdaki özellikler bulunmaktadır:

- **Hızlı Dönem Navigasyonu:** Dönem filtrelerinin yanında yer alan yönlendirme oklarıyla aylar arasında hızlıca geçiş yapabilirsiniz. Dönem geçişi yapıldığında diğer tüm sekmelerin (Hesaplama, Puantaj vb.) dönem filtreleri otomatik olarak senkronize edilir.
- **Sadece Değişenleri Göster Filtresi:** Dağılım tablosundaki "Sadece Değişenleri Göster" onay kutusu işaretlendiğinde, sistem otomatik görev atamasından sapan ve manuel olarak müdahale edilmiş (turuncu renkli vurgulanan) personelleri filtreler.
- **Proaktif Taslak Uyarısı:** Dönemde onay bekleyen taslak kayıtlar olduğunda, sayfa üstünde sarı renkli bir uyarı bandı belirir ve onaylanmamış taslak kayıtlar bulunduğunu, hesaplama yapmadan önce toplu onaylama yapılması gerektiğini belirtir.
- **Toplu Onaylama Yeteneği:** "Toplu Onayla" butonu sayesinde dönemdeki tüm taslak ve kaydedilmemiş varsayılan atamaları tek tıkla onaylayabilirsiniz.
- **Kayıt Sınırı Uyarıları:** Bir dönemde hesaplanan veri adedi 500 satırı aştığında, performansı korumak adına durum çubuğunda ve bilgi etiketinde otomatik sayfalama/sınırlandırma uyarısı gösterilir.

### 6.4 Fiili Hizmet Modülü ile İlgili Genel Notlar

- Dosya ekleme ekranlarında, yükleme butonunun yanında belgeyi düzenleme ve silme seçenekleri de bulunmaktadır.
- Diğer modüllerle tutarlılık sağlamak için düzenleme ve detay butonlarının her listede bulunmasına özen gösterilmiştir.

---

## 7. Sağlık Muayene Modülü

Bu modül, personelin işe giriş, periyodik, radyasyon ve şua sağlık muayenelerinin kayıt altına alınmasını ve takip edilmesini sağlar.

### 7.1 Sağlık Muayene Kayıtları

1. Sağlık Muayene Modülü > Sağlık Muayene Listesi ekranına gidin.
2. Yeni bir muayene kaydı eklemek için "Yeni Ekle" butonuna tıklayın.
3. Personeli, muayene türünü (İşe Giriş, Periyodik, Radyasyon, Şua vb.) ve muayene tarihini seçin.
4. Varsa muayene raporunu/belgesini dosya alanından yükleyin.
5. Formu kaydedin.

**Düzenleme ve Detay:** İlgili satırdaki Düzenle ve Detay simgeleriyle muayene bilgilerini güncelleyebilir veya görüntüleyebilirsiniz.

**Silme (Aktif/Pasif):** Bir muayene kaydını sildiğinizde kayıt kalıcı olarak silinmez, pasif duruma alınır.

**Geçmiş Arama:** Muayene Listesindeki "Geçmiş" butonunu veya tablodaki satıra sağ tıklayarak açılan "Personel Muayene Geçmişi" seçeneğini kullanarak, seçili personelin geçmişe dönük tüm sağlık muayenelerini kronolojik bir liste halinde görüntüleyebilirsiniz.

**Excel'e Aktar / İçe Aktar:** Liste ekranındaki ilgili butonlarla muayene kayıtlarını dışa aktarabilir veya toplu olarak içe aktarabilirsiniz.

### 7.2 Veri Emniyeti ve Kullanım İpuçları

- **Klinik Notlar Koruması:** Muayene kayıtlarını güncellerken veya detayını açtığınızda kayıtlı olan klinik notların silinmesi engellenmiştir. Otomatik not doldurma aracı sadece notlar alanı tamamen boşken çalışır ve branş sonuçlarına göre otomatik bir taslak oluşturur.
- **Toplu Branş Sonucu Doldurma:** Form üzerinde Göz (Genel) sonucunu seçtiğinizde, eğer alt branşlar (Dahiliye ve Dermatoloji) henüz seçilmemiş ("Seçiniz..." veya "Belirsiz" durumunda) ise, sistem bu branşları otomatik olarak Göz sonucuyla doldurarak giriş hızını artırır.
- **Zorunlu Alanlar ve Doğrulama:** Sağlık muayenesinin kaydedilebilmesi için en az bir branş sonucunun seçilmesi zorunludur. Tüm branşlar "Seçiniz..." bırakılarak kayıt yapılamaz. Seçilmeyen ("Seçiniz...") branşlar sistemde güvenli bir şekilde boş (tanımsız) olarak kaydedilir.
- **Kaydetme Onay Adımı:** Personel detay sayfasındaki sağlık sekmesinden muayene kaydederken veya güncellerken kazara veri kayıplarını ve hatalı kayıtları önlemek amacıyla sistem size bir onay penceresi sunar.
- **Belge Görüntüleme:** Muayene belgelerini görüntülemek için "Aç" butonuna bastığınızda, sistem işletim sistemi fark etmeksizin (Windows, macOS, Linux) dosyayı bilgisayarınızdaki varsayılan uygulamayla açar.

### 7.3 Gelecek Muayene Tarihinin Otomatik Hesaplanması

Sistem, girilen muayene tarihine ve muayene türüne göre bir sonraki muayene tarihini otomatik olarak hesaplar. Bu hesaplama, tanımlı periyot tablosuna göre dinamik olarak yapılır:

- Şua muayeneleri için periyot: 6 ay
- Periyodik / Radyasyon muayeneleri için periyot: 12 ay
- İşe Giriş muayenesi: tek seferlik olup, tekrar tarihi hesaplanmaz

> **Not:** Personel için planlanan muayene randevuları, mümkün olduğunca personelin çalışma düzenini aksatmayacak şekilde planlanmalıdır.

### 7.4 Sağlık Muayene Modülü ile İlgili Genel Notlar

- Dosya ekleme alanında, yüklenen belgeyi görüntülemek için "Aç", kaldırmak için "Temizle" butonları bulunur.
- "Temizle" butonuna bastığınızda belge kalıcı olarak silinir; bu işlem geri alınamaz, dikkatli kullanın.

---

## 8. Dozimetre Modülü

Dozimetre Modülü, radyasyona maruz kalan personelin dozimetre ölçüm sonuçlarının kayıt altına alındığı ve dış ölçüm firmalarından gelen sonuçların sisteme işlendiği modüldür.

### 8.1 Dozimetre Ölçüm Kayıtları

1. Dozimetre Modülü > Dozimetre Listesi ekranına gidin.
2. Yeni bir ölçüm kaydı eklemek için "Yeni Ekle" butonuna tıklayın.
3. Personeli, ölçüm dönemini ve ölçüm değerini girin.
4. Formu kaydedin.

**Düzenleme, Silme, Detay:** İlgili satırdaki simgeler aracılığıyla kayıtları güncelleyebilir, kaldırabilir veya detaylarını görüntüleyebilirsiniz.
**Excel'e Aktar:** Ölçüm listesini Excel dosyası olarak dışa aktarabilirsiniz.

### 8.2 Dış Firmadan Gelen Sonuçların İçe Aktarılması

Dozimetre ölçüm firmasından gelen sonuç dosyası, içe aktarma özelliği kullanılarak doğrudan sisteme işlenebilir.

1. Dozimetre Listesi ekranında "İçe Aktar" butonuna tıklayın.
2. Ölçüm firmasından gelen sonuç dosyasını (ilgili şablon formatında) seçin.
3. Dosyayı yükleyin; sistem dosyayı okuyarak ölçüm sonuçlarını ilgili personel kayıtlarıyla eşleştirip kaydeder.

### 8.3 Dozimetre Modülü ile İlgili Genel Notlar

- Dosya ekleme ekranında, yükleme butonunun yanında belgeyi düzenleme ve silme seçenekleri de bulunmalıdır.
- Diğer modüllerle tutarlı olması için düzenleme ve detay butonlarının listede yer almasına özen gösterilmiştir.

---

## 9. Tanımlamalar (Lookup) Modülü

Bu modül, sistemin genelinde kullanılan temel referans verilerinin (departman, unvan, izin türü, tatil günleri vb.) tanımlandığı bölümdür. Buradaki tanımlar, diğer modüllerdeki seçim listelerinde kullanılır.

### 9.1 Departmanlar

1. Tanımlamalar > Departman Listesi ekranına gidin.
2. Yeni departman eklemek için "Yeni Ekle" butonuna tıklayın; departman adını girin ve varsa bağlı olduğu üst departmanı seçin.
3. Mevcut bir departmanı güncellemek için Düzenle simgesini kullanın.
4. Departman listesini Excel olarak dışa aktarmak veya toplu tanımlama için içe aktarmak üzere ilgili butonları kullanın.

**Silme:** Bir departmanı sildiğinizde departman pasif duruma alınır.

> **Not:** Departman hiyerarşisi (üst departman - alt departman ilişkisi) tanımlanırken "Üst Departman" alanının doğru seçildiğinden emin olun; hiyerarşik yapı, organizasyon şeması ve raporlamada doğrudan etkilidir.

### 9.2 Unvanlar

Personele atanabilecek görev unvanlarının tanımlandığı ekrandır. Ekleme, düzenleme, silme (pasife alma), detay görüntüleme, Excel'e aktarma ve içe aktarma işlemleri Departmanlar ekranıyla aynı mantıkla çalışır.

### 9.3 İzin Türleri

İzin Modülünde kullanılacak izin türlerinin (yıllık izin, mazeret izni, şua izni, ücretsiz izin vb.) tanımlandığı ekrandır. Ekleme, düzenleme, silme (pasife alma), detay, Excel'e aktarma ve içe aktarma işlemleri aynı mantıkla çalışır.

### 9.4 Tatil Günleri

Resmi tatil ve bayram günlerinin tanımlandığı ekrandır. Buradaki tanımlar, izin gün sayısı hesaplamalarında resmi tatillerin hariç tutulması için kullanılır.

1. Tanımlamalar > Tatil Günleri Listesi ekranına gidin.
2. Yeni bir tatil günü eklemek için "Yeni Ekle" butonuna tıklayın; tarihi ve tatilin adını girin.
3. Mevcut bir kaydı Düzenle veya Sil simgeleriyle yönetin.
4. Toplu tanımlama için İçe Aktar özelliğini kullanabilirsiniz.

### 9.5 Nöbet Türleri

Nöbet türü tanımlamaları, ayrı bir liste ekranı yerine Nöbet Ayarları sayfası üzerinden yönetilmektedir. Nöbet türlerini tanımlamak veya güncellemek için Nöbet Ayarları ekranını kullanmanız yeterlidir.

### 9.6 Rapor Şablonları

Rapor Şablonları ekranı, kurumların resmi evrak ve yazışma çıktılarını kendi taslaklarına (Word dosyaları) göre düzenleyebilmesini sağlar.

- **Metin Yer Tutucuları:** Şablonlar içerisindeki metin yer tutucuları (örn. `{{BASLIK_1}}`, `{{BASLIK_2}}`) kolayca tanımlanabilir ve dışa aktarma sırasında ilgili verilerle otomatik olarak doldurulur.
- **Güvenli Belge Üretimi:** Word dosyaları güncellenirken belgenin biçimi korunur; özel karakterlerden kaynaklanabilecek dosya bozulmaları engellenir.
- **Dinamik Logo Yerleşimi:** Kurum logoları (`{{LOGO_1}}`, `{{LOGO_2}}`), resim yer tutucuları üzerinden başlık veya gövde paragraflarına otomatik ölçeklenerek yerleştirilir.

---

## 10. Raporlar Modülü

Raporlar Modülü, sistem üzerinde gerçekleştirilen işlemlerin (kayıt ekleme, düzenleme, silme, giriş/çıkış vb.) işlem kaydı bilgilerini görüntülemenizi sağlar.

1. Sol menüden Raporlar Modülü ekranına gidin.
2. Tarih aralığı, kullanıcı veya modül bazında filtreleme yaparak ilgili işlem kayıtlarını görüntüleyin.
3. Gerekirse kayıtları listeleyip inceleyin.

### 10.1 Birleşik Dışa Aktarma Sistemi

Sistemdeki veri listelerinin (Personel, Kullanıcı, İzin vb.) dışa aktarılması tek bir modern birleşik dışa aktarma çatısı altında toplanmıştır.

- **Desteklenen Formatlar:** Excel, Word, CSV ve PDF formatları desteklenmektedir.
- **Rapor Tasarımı ve Stiller:** Excel çıktılarında kurumsal başlıklar, logolar, otomatik sütun genişlikleri ve kalın başlık satırları kullanılır. PDF çıktılarında ise Türkçe karakter setlerine uygun, sayfa numaralandırmalı ve otomatik yatay/dikey sayfa yönlendirmeli raporlar üretilir.
- **Dinamik Şablon ve Konum Eşleme (Excel):** Rapor şablonlarında sütunların sırasını değiştirebilir, bazı sütunları silebilir veya yeni başlıklar ekleyebilirsiniz. Akıllı konum eşleme özelliği, başlık satırını okuyup veriyi her zaman doğru başlığın altına yazar. Böylece şablonları istediğiniz gibi özelleştirebilirsiniz.
- **Örnek Şablonlar ve Word Entegrasyonu:** Tüm rapor tipleri için kurumsal marka ve logo yer tutucularını barındıran temiz Word şablonları oluşturulmuştur. Dışa aktarma yapıldığında bu şablonlar kullanılarak profesyonel belgeler üretilir.
- **Kullanım:** İlgili liste ekranlarındaki "Dışa Aktar" butonuna tıkladığınızda açılan dosya kaydetme penceresinden istediğiniz formatı seçerek dosyayı kaydedebilirsiniz.

### 10.2 Uzmanlık Raporları ve Genişletilmiş Alanlar

Personel listesi dışa aktarma sihirbazında (Standart Personel Listesi dışında) 5 farklı uzmanlık raporu bulunmaktadır:

1. **Sağlık Muayene Raporu:** Personelin temel kimlik ve departman bilgilerinin yanında branş bazlı Göz, Dahiliye, Dermatoloji muayene tarihlerini ve onay/imza durumlarını içerir.
2. **Dozimetre Ölçüm Raporu:** Personelin derin/yüzeysel doz ölçümleri, kümülatif dozları, limit aşımı ve laboratuvar rapor no/tarih verilerini listeler.
3. **İzin Bakiye Raporu:** Yıllık ve Şua izinleri için hakedilen, kullanılan, devredilen, dondurulan ve kalan gün kırılımlarını listeler.
4. **Eğitim Durum Raporu:** Personelin eğitim türü, mezuniyet yılı ve onay durumunu listeler.
5. **Kimlik ve İletişim Bilgileri Raporu:** Personelin doğum tarihi/yeri, cinsiyeti, medeni hali, anne/baba adı, telefon/e-posta adresleri, il/ilçe bilgileri, işten çıkış tarihi/nedeni, nöbet ve fazla mesai durumlarını listeleyen kapsamlı bir kişisel veri dökümüdür.

### 10.3 Ek Bilgi Alanları (Opsiyonel Sütunlar)

Şablon Ayarları sayfasından etkinleştirilebilen opsiyonel alanların yanında, sistemden dinamik olarak birleştirilmiş bilgi sunan ek sütunlar da mevcuttur:

- **Eğitim Dökümü:** Personelin onaylı eğitim geçmişini listeler.
- **İzin Bakiyesi:** Yıllık ve Şua izin özetini verir.
- **Son Dozimetre Ölçümü:** En son kaydedilen dozimetre sonuçlarını özetler.
- **Dozimetre Atama Durumu:** Aktif atamaları gösterir.
- **Dozimetre Atama Detayı:** Dozimetre cihazlarının seri no, cihaz türü ve aktif atama tarihlerini listeler.
- **Son Sağlık Muayenesi:** En son muayene tarihini verir.
- **Aktif Çalışma Kısıtları:** Personelin aktif çalışma kısıtlarını gösterir.
- **Çalışma Kısıtı Detayı:** Kısıt tipi, gerekçe, günlük/aylık saat azaltım miktarları ve geçerlilik tarihlerini tek bir hücrede birleştirir.
- **Aylık Nöbet Özeti:** Ay içerisindeki toplam nöbet ve çalışma saatini verir.
- **Kayıtlı Belgeler:** Personel özlük dosyasına yüklenmiş tüm belgelerin türlerini ve veriliş tarihlerini listeler.
- **Son İzin Kaydı:** Personelin talep ettiği en son iznin türü, tarihleri ve onay durumunu listeler.

---

## 11. Nöbet Modülü (Planlama ve Ayarlar)

Nöbet Modülü, kurum personelinin nöbet çizelgelerinin planlandığı, otomatik planlama algoritmasının kısıtlarının ve ağırlıklarının belirlendiği, personel özel durumlarının (gebelik, emzirme vb.) yönetildiği ve birim bazlı nöbet türlerinin tanımlandığı kapsamlı bir yönetim alanıdır.

### 11.1 Nöbet Ayarları Sayfası

Nöbet Ayarları ekranına sol menüdeki **Nöbet Modülü > Nöbet Ayarları** adımlarını takip ederek ulaşabilirsiniz. Bu sayfa kendi içinde 4 ana sekmeden oluşmaktadır:

#### 11.1.1 Temel Ayarlar

Bu sekme, tüm planlama sürecini, onay mekanizmasını ve nöbet devir şartlarını belirleyen genel parametrelerin yönetildiği alandır.

**Temel Parametreler ve Limitler:**

1. **Aylık Maksimum Nöbet:** Personelin bir ay içerisinde alabileceği maksimum nöbet sayısı veya fiili çalışma saati sınırı.
2. **Ardışık Maksimum Nöbet Günü:** Personelin üst üste en fazla kaç gün nöbetçi olabileceği (örn. en fazla 2 gün).
3. **Nöbet Sonrası Minimum Dinlenme (Saat):** Nöbeti biten bir personelin bir sonraki nöbetine kadar dinlenmesi gereken zorunlu süre (örn. 24 saat).
4. **Günlük Maksimum Nöbet Saati:** 24 saatlik bir zaman diliminde personelin en fazla çalışabileceği süre (örn. 24 saat).
5. **Hafta Sonu / Bayram Maksimum Nöbeti:** Personelin bir ay içinde alabileceği maksimum hafta sonu ve resmi tatil nöbet sayıları. Bu alandaki *Ayda max hafta sonu nöbeti* kısıtı tamamen genel bir limit olup, herhangi bir birime özel bir istisna içermeksizin tüm kurum genelinde uygulanır.
6. **Muafiyet Yaş Sınırı:** Bu yaş ve üzerindeki personeller otomatik nöbet listesine dahil edilmez.
7. **Muafiyet Kıdem Yılı:** Bu hizmet yılı ve üzerindeki personeller otomatik nöbet listesinden muaf tutulur.
8. **Kıdem Eşik Yılı:** Kıdem yılı bu değerden az olan personeller dengeli dağılımda öncelikli olarak değerlendirilir.
9. **Personel İstek Maksimum Saat:** Personelin nöbet taleplerinde isteyebileceği maksimum fazla mesai saati (en fazla 60 saat).

**Opsiyonlar (Planlama Ayarları):**

- **Yumuşak Kısıtlarda Manuel Değişikliğe İzin Ver:** Aktif edildiğinde, yöneticiler sistem tarafından oluşturulan çizelgedeki esnek kuralları manuel olarak düzenleyebilir ve kuralları esnetebilir.
- **Satır Bazlı İhlal Rozetlerini Göster:** Çizelge üzerinde kısıt ihlali (ardışık gün sınırı aşımı vb.) yapan personellerin yanlarında görsel uyarı simgelerinin gösterilmesini sağlar.
- **Önce Hafta İçi / Normal Günleri Doldur:** Otomatik planlayıcının hafta sonu ve tatil slotlarından önce normal hafta içi çalışma günlerini doldurmasını hedefler; böylece hafta sonu nöbet atamaları son aşamaya bırakılarak daha dengeli planlanır.
- **Departmanlar Arası Geçici Atama Açık:** Personelin kendi ana departmanı dışındaki diğer birimlerde de nöbetçi olarak görevlendirilebilmesine izin verir.
- **Kayıtta Aylık Özeti Otomatik Yenile:** Çizelgede manuel veya otomatik bir değişiklik yapılıp kaydedildiğinde aylık nöbet istatistiklerinin anlık olarak güncellenmesini sağlar.
- **Personel İzinli İsteği Olsa da İstisna Nöbet Yazımı Açık:** Personel izinli veya nöbet tutmak istemediğini belirtmiş olsa dahi, yöneticinin zorunlu durumlarda onay ve kota dahilinde istisnai nöbet yazabilmesini sağlar.
- **İstisna İçin Yönetici Onayı Zorunlu:** İstisnai nöbet yazımında yönetici onay sürecini zorunlu kılar.
- **Aylık Maksimum İzinli-İstek İstisna Sayısı:** Bir personelin ayda en fazla kaç defa izinli/isteksiz olduğu günlere istisnai nöbet yazılabileceğini belirler.

**Plan Onay Kuralları:**

- **Onay Notu Zorunlu:** Plan onaylanıp "Yayında" durumuna getirilirken yöneticinin açıklama veya onay notu girmesini zorunlu kılar.
- **Yayından Taslağa Dönüş:** Onaylanıp yayınlanmış bir planın, sadece yetkili rol grubu (örn. Sistem Yöneticisi) tarafından tekrar düzenlenebilir "Taslak" moduna geri çekilebilmesini sağlar.
- **Yayındaki Plan Salt Okunur:** Onaylanıp yayınlanmış planlar üzerinde doğrudan ekleme, düzenleme veya silme işlemlerini engeller. Plan salt okunur kalır; sadece devir işlemleri yapılabilir.

**Devir Kuralları:**

- **Devir Nedeni Zorunlu:** Personelin nöbet devir talebi oluştururken gerekçe veya neden belirtmesini zorunlu kılar.
- **Onayda Otomatik Çizelge Güncelle:** Yönetici devir talebini onayladığında çizelge üzerindeki personeli otomatik olarak yeni personel ile günceller.
- **Bekleyen Maksimum Devir Talebi:** Sistemde aynı anda birikebilecek maksimum açık/bekleyen devir talebi limitini belirler.
- **Devir Sınırlamaları (Sert Kısıt):** Durumu 'Devir' olan bir nöbet kaydı üzerinde tekrar bir devir talebi oluşturulamaz.
- **Devredilen Nöbetlerin Düzenlenmesini Engelle:** Bu ayar etkinleştirildiğinde, durumu 'Devir' (devir işlemi tamamlanmış) olan nöbetlerin manuel olarak düzenlenmesi veya silinmesi engellenir. Ayar kapatıldığında, yetkili yöneticiler devredilmiş nöbetleri de serbestçe düzenleyebilirler.

#### 11.1.2 Vardiya Kısıtları (Birim & Sınıf Bazlı)

Vardiya Kısıtları (Birim & Sınıf Bazlı) (eski adıyla Yasal Kısıtlar) ekranı, otomatik nöbet planlama algoritmasının çizelgeyi oluştururken riayet edeceği yasal limitlerin ve kurumsal kuralların merkezi olarak tanımlandığı alandır.

- **Varsayılan Kısıt Türleri:**
  - *Nöbet Sonrası Dinlenme Saati:* Nöbeti biten bir personelin bir sonraki nöbetine kadar dinlenmesi gereken zorunlu asgari dinlenme süresi (zorunlu bir kısıttır; varsayılan değer 24 saattir).
  - *Maksimum Art Arda Nöbet Günü:* Personelin üst üste en fazla kaç gün nöbetçi olabileceği (varsayılan değer 2 gündür).
  - *Gece Nöbetleri Arası Minimum Boşluk:* İki gece nöbeti arasında geçmesi gereken minimum dinlenme süresi (varsayılan değer 48 saattir).
  - *Hafta Sonu Nöbet Dengesi / Limiti:* Personelin bir ay içerisinde alabileceği maksimum hafta sonu nöbet limiti (varsayılan değer 4 nöbettir).
  - *Bayram Nöbet Dengesi / Limiti:* Personelin bayram günlerinde alabileceği maksimum nöbet limiti (varsayılan değer 2 tatil nöbetidir).

- **Kısıt Çözümleme Öncelik Sırası:**
  Nöbet planlamasında ve ayarlar ekranında kısıtlar şu 3 seviyeli sıraya göre önceliklendirilir:
  **Birim Kuralları > Vardiya Kısıtları (Birim & Sınıf Bazlı) > Temel Ayarlar**

  Sistem, kuralları belirlerken şu sırayı izler:
  1. **Birim & Hizmet Sınıfı Özel Kuralı:** Eğer kısıtlar tablosunda ilgili birim ve hizmet sınıfı eşleşmesi için özel bir kural girilmişse, bu kural uygulanır.
  2. **Birim veya Hizmet Sınıfı Özel Kuralı:** Eşleşen bir birim kuralı veya hizmet sınıfı kuralı varsa o değer geçerli olur.
  3. **Genel/Kurumsal Kural:** Eğer özel bir kural yoksa, Tüm Birimler / Tüm Hizmet Sınıfları için tanımlanmış genel başlangıç değerleri devreye girer.

#### 11.1.3 Personel Özel Durumları (Kısıtlar)

Her personelin kendine özgü çalışma kısıtlamalarının (sağlık durumları, yasal haklar vb.) tanımlandığı alandır.

1. **Gebelik ve Emzirme Kısıtı:** Gebelik veya emzirme durumundaki personel sisteme kaydedildiğinde, otomatik planlayıcı bu personellere gece nöbeti yazılmasını engeller.
2. **Fazla Mesai Muafiyeti (Mesai Dışı):** Nöbet istekleri ekranından bu ekrana taşınmıştır. Aktifleştirildiğinde, seçili personelin nöbet dışındaki normal çalışma saatlerini aşan fazla mesailerden muaf tutulmasını sağlar.
3. **Çalışma Saati Azaltımı:** Personel için tanımlanan aylık standart çalışma saati azaltımı (örn. sağlık raporu nedeniyle 40 saat eksik çalışması gerekenler).
4. **Kişiye Özel Maksimum Fazla Mesai:** Personelin ayda en fazla yapabileceği fazla mesai saati sınırı.

#### 11.1.4 Birim Ayarları ve Kısıtlamalar (Birim Genel Kuralları ve Çalışma Şeması)

Birimlerin çalışma modellerinin, aktiflik takvimlerinin ve günlük personel ihtiyaçlarının belirlendiği alandır. Mükerrer kısıt girişlerinin önlenmesi amacıyla ardışık gün limiti, dinlenme süresi gibi sayısal sınırlar bu sekmeden tamamen kaldırılmış ve **Vardiya Kısıtları (Birim & Sınıf Bazlı)** sekmesine devredilmiştir.

**A. Birim Genel Kuralları (Takvim Kuralları):**

Birim Kuralları sekmesinde, seçili birimin takvim ve çalışma izinleri onay kutularıyla yönetilir:
- **Hafta Sonu Çalışması Aktif:** İlgili birimde hafta sonu günlerinde nöbet yazılıp yazılamayacağını belirler. Örneğin 08-15 mesai yapan polikliniklerde bu kutucuk kapatılarak hafta sonu nöbet yazımı engellenir; acil servis gibi 7/24 çalışan birimlerde ise aktif tutulur.
- **Bayram Çalışması Aktif:** Birimde resmi tatillerde ve bayramlarda nöbet tutulup tutulmayacağını belirler.
- **24 Saat Tutulabilir:** Birimdeki 12 saatlik vardiyaların (Gündüz ve Gece) birbirini takip edecek şekilde tek bir 24 saatlik nöbet bloğu olarak atanıp atanamayacağını belirler.
- **Çapraz Görevlendirme:** Personelin kendi ana birimi dışındaki diğer nöbet birimlerine de atanabilmesine izin verir.
- **Birim Kurallarını Kaydet Butonu:** Yukarıda listelenen takvim kuralları (Hafta Sonu Çalışması Aktif, Bayram Çalışması Aktif, 24 Saat Tutulabilir, Çapraz Görevlendirme) genel "Temel Ayarlar" kaydetme mantığından ayrıştırılmıştır. Bu kurallardaki değişikliklerin kaydedilebilmesi için ilgili alanların hemen altındaki **"Birim Kurallarını Kaydet"** butonuna tıklanmalıdır. Seçili birim "Genel (Birim Bağımsız)" ise bu ayarlar tüm birimler için varsayılan (genel) kural olarak, belirli bir birim seçili ise o birime özel kural olarak kaydedilir. (Not: Hafta sonu nöbet sayı limiti genel bir ayar olduğu için birim kurallarından tamamen çıkarılmıştır.)

**B. Birim Çalışma Şeması (Nöbet Türleri ve Slot Sayıları):**

- **Arama/Filtreleme:** Nöbet ayarlarındaki Birim Kuralları sekmesinde yer alan **Birim Filtresi** kullanılarak, sadece seçilen birime ait nöbet kuralları ve türleri anlık olarak tabloda filtrelenebilir. "Tümü" seçeneği seçilerek tüm birimlerin kurallarına tek ekrandan ulaşılabilir.
- **Nöbet Türleri:** Birimde aktif olarak tutulan nöbetlerin (24 Saatlik Nöbet, Gece Nöbeti, Normal Mesai vb.) tanımlandığı, başlangıç/bitiş saatleri ve sürelerinin belirtildiği kısımdır.
- **Gün Kısıtı (Vardiya Gün Kısıtlaması):** Her bir nöbet türünün (vardiyasının) takvimdeki hangi gün tiplerinde aktif olacağını belirler. Sistem, otomatik planlama sırasında bu kuralı sert kısıt olarak uygular. Seçenekler:
  - *Her Gün:* Nöbet türü hafta içi, hafta sonu, resmi tatil fark etmeksizin her güne yazılabilir (örn. Acil Servis Nöbeti).
  - *Sadece Hafta İçi:* Nöbet türü yalnızca hafta içi günlerde çalıştırılır. Hafta sonlarında veya resmi/dini bayram tatillerinde planlanmaz (örn. Poliklinik/Rutin Mesai Nöbeti).
  - *Sadece Hafta Sonu ve Tatil:* Nöbet türü hafta içine yazılmaz, sadece Cumartesi-Pazar günleri ve resmi tatillerde planlanır (örn. Hafta sonu icap nöbeti).
  *Örn: Hafta sonu planlaması açık olan bir birimde, gündüz nöbeti "Her Gün" ve gece nöbeti "Sadece Hafta İçi" olarak tanımlanırsa; hafta içi hem gündüz hem gece nöbetçileri yazılırken, hafta sonlarında sadece gündüz nöbetçisi yazılır ve gece nöbeti boş geçilir.*
- **Otomatik Süre/Zaman Hesaplayıcı:** Vardiya ekleme ve güncelleme alanında Başlangıç Saati, Süre (Saat) ve Bitiş Saati kontrolleri birbirine akıllı olarak bağlanmıştır:
  - Başlangıç veya Süre değiştirildiğinde, Bitiş Saati otomatik olarak hesaplanarak yansıtılır.
  - Bitiş Saati değiştirildiğinde, Süre otomatik olarak hesaplanır (geceyi aşan/ertesi güne sarkan nöbet saat farkı da dahil edilerek).
- **Günlük Slot İhtiyaçları:** Hangi nöbet türünde, haftanın hangi günlerinde kaç personelin nöbetçi olması gerektiği buradan yapılandırılır. Otomatik planlayıcı bu ihtiyaçları karşılayacak şekilde çalışır.

#### 11.1.5 Birim Personel İstekleri (Mazeret ve Talepler)

Personellerin nöbet günlerine dair taleplerinin, izinlerinin ve mazeretlerinin birim yöneticileri tarafından yönetildiği sekmedir.

- **Talep Türleri:**
  - *Nöbet Yazılmasın (Mazeret):* Personelin o tarihlerde nöbet tutamayacağını belirtir (örn. kişisel mazeret). Nöbet planlayıcı, planlamanın ilk aşamasında bu mazereti kesinlikle korur. Eğer kadro yetersiz kalırsa ve daha esnek bir aşamada esnetme gerekirse; düşük öncelikli (1-3) mazeretler esnetilebilirken, yüksek öncelikli (4-5: Çok Yüksek ve Kritik) mazeretler asla ihlal edilmez.
  - *Nöbet Yazılsın (İstek):* Personelin özellikle nöbetçi olmak istediği günleri belirtir. Planlayıcı aday seçimi yaparken, bu talebe sahip olan kişileri öncelik seviyelerine (1-5) göre en üst sıraya yerleştirerek öncelikle atar.
  - *Eğitim:* Personelin eğitimde olduğu ve nöbet tutamayacağı günleri işaretler.
  - *Nöbet Muafiyeti:* Personelin belirli bir süre boyunca nöbet listelerinden tamamen muaf tutulmasını sağlar.
  - *Maksimum Fazla Mesai Sınırı:* Personel bazında standart limitlerin dışında özel bir fazla mesai üst sınırı belirlenmesini sağlar (örn. sağlık sebebiyle ayda en fazla 20 saat mesai yapabilecekler).
- **Onay Süreci:** Girilen istek ve mazeret talepleri doğrudan **Onaylandı** durumunda kaydedilir.
- **Tarih Kısıtı Kontrolü:** "Nöbet Yazılmasın" ve "Nöbet Yazılsın" taleplerinde başlangıç/bitiş tarihleri girmek zorunludur. Fazla Mesai ve Eğitim gibi süreğen kayıtlarda tarih aralık alanları otomatik olarak gizlenir.
- **Planlama Sihirbazı Hızlı Talep Ekleme:** Plan oluşturma sihirbazı önizleme adımında, koordinatör ekranından çıkmadan hızlıca mazeret veya fazla mesai limiti tanımlayabilmek için **Hızlı Talep Ekle** butonunu kullanabilir. Buradan girilen talepler otomatik olarak **Onaylandı** durumunda doğrudan ilgili döneme kaydedilir.

### 11.2 Nöbet Plan Listesi ve Yeni Plan Oluşturma

Nöbet Plan Listesi ekranına sol menüdeki **Nöbet Modülü > Nöbet Plan Listesi** adımlarını takip ederek ulaşabilirsiniz. Bu ekran, oluşturulmuş tüm nöbet planlarını (Taslak, Yayında ve Arşiv durumundakileri) listeler.

- **Yeni Plan Ekleme:**

  1. Liste ekranında "Yeni Plan" veya "Plan Ekle" butonuna tıklayın.
  2. Açılan pencerede Plan Yılı ve Plan Ayı seçin.
  3. Planın uygulanacağı **Departman / Birim** bilgisini seçin.
  4. Nöbet tutacak grubun **Hizmet Sınıfı** bilgisini (örn. Teknisyen, Hemşire vb.) seçin (tüm hizmet sınıfları için boş bırakılabilir).
  5. "Kaydet" butonuna tıklayarak planı "Taslak" durumunda oluşturun.

- **Plan Silme / Arşivleme:**

  - Taslak durumundaki planlar listedeki "Sil" butonuyla silinebilir. Normal personeller için listedeki planı silme ve durum güncelleme işlemleri pasiftir.

  *Önemli:* "Yayında" durumundaki planlar doğrudan silinemez veya normal kullanıcılar tarafından durumları değiştirilemez. Sadece yetkili yönetici kullanıcılar bu planları "Arşiv" durumuna taşıyabilir ya da "Taslak" moduna geri çekebilir.

### 11.3 Nöbet Çizelgesi ve Otomatik Planlama (Çizelge Detay Sayfası)

Bir planın satırındaki "Detay" veya "Çizelgeyi Düzenle" butonuna tıklandığında, ilgili aya ait günlük nöbet matrisi (çizelge tablosu) açılır.

- **Otomatik Nöbet Oluşturma:**

  1. Çizelge ekranının üstündeki **"Otomatik Plan Oluştur"** butonuna tıklayın.
  2. Sistem, arka planda **Temel Ayarlar**, **Gelişmiş Algoritma Ağırlıkları**, **Personel Özel Durumları** ve **Birim İsteklerini** tarayarak en adil dağılımı hesaplar.
  3. İşlem sırasında bir ilerleme çubuğu gösterilir. Kullanıcı dilerse işlemi yarıda iptal edebilir.
  4. Hesaplama bittiğinde oluşturulan çizelge taslak olarak ekrana yansıtılır. "Kaydet" butonu ile çizelge kaydedilir.

  > **Not — Otomatik Nöbet Oluşturma Sırasında Taslak Yedeği ve Geri Yükleme:**
  > Mevcut taslak/planlı bir nöbet listesi üzerinde tekrar "Otomatik Plan Oluştur" butonuna tıklandığında, eski taslak kayıtlar kalıcı olarak silinmeden önce sistem tarafından otomatik olarak bir yedek dosyasına kaydedilir.
  >
  > Yanlışlıkla silinen veya üzerine yazılan taslak çalışmalarınızı geri kurtarmak için çizelge detay ekranındaki **"Yedekten Taslak Yükle"** butonuna tıklayıp ilgili yedek dosyasını seçerek çizelgeyi o yedek anına geri döndürebilirsiniz.
  >
  > Disk kirliliğini önlemek amacıyla, nöbet planı **Yayına alındığında**, **Arşivlendiğinde** veya **Silindiğinde**, o plana ait tüm geçmiş taslak yedek dosyaları sistem tarafından otomatik olarak temizlenir.

- **Manuel Düzenleme (Çizelge Hücre İşlemleri):**

  - Çizelge tablosundaki herhangi bir hücreye (personel hücresi) çift tıklayarak veya tıklayarak açılan **Manuel Nöbet Atama** penceresi üzerinden kişileri değiştirebilirsiniz.
  - Açılan pencerede sistem, o gün için uygun olan personelleri ve eğer varsa kısıt ihlallerini (örn. ardışık gün nöbet ihlali, dinlenme saati ihlali vb.) kırmızı uyarı rozetleriyle birlikte listeler.
  - Yönetici, kısıt ihlali uyarısına rağmen (opsiyonlarda buna izin veriliyorsa) onaylayarak manuel atamayı gerçekleştirebilir.

### 11.4 Nöbet Onaylama ve Yayınlama Süreci

Otomatik oluşturulan ve manuel olarak düzenlenen nöbet listesinin personele duyurulabilmesi için onaylanıp yayınlanması gerekir.

1. Çizelge detay ekranındaki **"Planı Onayla"** veya **"Yayınla"** butonuna tıklayın.
2. Temel ayarlarda "Onay Notu Zorunlu" seçeneği aktifse, açılan onay penceresine açıklama notu yazın.
3. Plan onaylandığında durumu **"Yayında"** olarak güncellenir.
4. *Önemli Kural:* "Yayında" durumuna getirilen nöbet planları üzerinde yöneticiler dahil doğrudan ekleme, silme veya personel değiştirme işlemleri yapılamaz. Çizelge salt okunur hale gelir. Bu aşamadan sonra sadece **Nöbet Devir** süreçleri işletilebilir.
5. Yetkili kullanıcılar gerekirse planı tekrar düzenlemek için **"Taslağa Geri Çek"** seçeneğini kullanabilir. Bu işlem yetki sınırlandırmasına tabidir ve normal personel kullanıcıları tarafından gerçekleştirilemez.

### 11.5 Nöbet Devir ve Değişim Talepleri (Nöbet Devir Sistemi)

Yayınlanmış bir nöbet planında görevli olan personeller, nöbetlerini başka bir personele devretmek için sistem üzerinden talep oluşturabilirler.

- **Nöbet Devir Talebi Oluşturma:**

  1. Çizelge detay veya İnceleme ekranında devredilmek istenen nöbet hücresine tıklayın ve **"Devir Talebi Oluştur"** butonuna basın. Bu buton, sadece nöbetin asıl sahibi olan personel veya sistemdeki yetkili **Yönetici** ve **Admin** rolleri için aktiftir. Başkasına ait nöbetler için devir talebi oluşturulamaz.
  2. Açılan pencerede nöbeti devralacak **Hedef Personel**'i seçin.
  3. Devir nedeni alanına gerekçeyi yazın (Temel ayarlarda zorunlu tutulmuşsa boş bırakılamaz).
  4. "Talebi Gönder" butonuna basın. Talep durumu "Beklemede" olarak sisteme işlenir.

- **Taleplerin Onaylanması ve Çizelgenin Güncellenmesi:**

  - Nöbet Ayarları > Birim Personel İstekleri (veya ilgili onay paneli) üzerinden yöneticiler bekleyen devir taleplerini görüntüler.
  - Yönetici talebi **"Onayla"** butonuyla onaylarsa, devredilen nöbet çizelgede otomatik olarak yeni personelin üzerine geçirilir. Reddedilirse nöbet eski sahibinde kalır.
  - *Yönetici/Admin İstisnası:* Acil durumlarda, sistem yöneticisi tarafından yapılan onaylama işlemlerinde çok adımlı hiyerarşik onay akışları (personel → birim sorumlusu → yönetici) atlanarak devir işlemi tek adımda doğrudan tamamlanabilir.

  *Sert Kısıt:* Durumu 'Devir' olan (devir işlemi tamamlanmış) bir nöbet kaydı tekrar başka birine devredilemez veya üzerinde herhangi bir değişiklik yapılamaz.

### 11.6 Nöbet Fazla Mesai Borç / Alacak Devri

Nöbet Fazla Mesai Borç / Alacak Devri ekranına **Nöbet Modülü > Fazla Mesai Borç / Alacak Devri** sekmesinden erişebilirsiniz. Bu ekran, yayınlanmış nöbet çizelgelerine göre personellerin aylık hedef çalışma süreleri ile fiili toplam çalışma süreleri arasındaki farkları hesaplar ve borç/alacak takibini yönetir.

- **Borç ve Alacak Durumunun Belirlenmesi:**

  - *Net Fark (Saat) pozitifse:* Kurum personele borçludur, personel alacaklı durumdadır (fazla mesai yapmış).
  - *Net Fark (Saat) negatifse:* Personel kuruma borçludur, kurum alacaklı durumdadır (eksik çalışma yapmış).

- **İşlem ve Devir Kararları:**

  Yöneticiler, tablonun son sütunundaki seçim kutusunu kullanarak her personel için borç/alacak kararını belirleyebilir:

  - *Beklemede:* Karar henüz verilmemiş, işlem bekleniyor.
  - *Fazla Mesai Ödendi:* Personelin fazla mesai alacağı nakdi olarak ödenmiş sayılır.
  - *İzin Kullanıldı:* Alacaklı saatler karşılığında personele izin kullandırılmıştır.
  - *Sonraki Aydan Düşüldü / Sonraki Aya Devredildi:* Borç veya alacak saati bir sonraki aya devredilir.

    - *Etki:* Devredilen borç saatleri personelin sonraki aydaki hedef süresine eklenir (daha fazla çalışması gerekir). Alacak saatleri ise sonraki aydaki hedef süresinden düşülür veya sonraki ayın nöbet planlama öncelik puanını yükseltir.

- **Değişikliklerin Kaydedilmesi:**

  Kararlar belirlendikten sonra üstteki **"Tüm Kararları Kaydet"** butonu ile kaydedilir. Kayıt sonrasında devreden farklar sonraki ayın nöbet atamalarında otomatik olarak devreye girer.

---

## 12. Radyasyon Güvenliği ve Olay Bildirim / DÖF Modülü

Bu modül, radyoloji ve nükleer tıp birimlerindeki radyasyon güvenliği ihlallerini, cihaz arızalarını, hasta ve çalışan güvenliği olaylarını bildirmek, incelemek ve düzeltici önleyici faaliyetleri (DÖF) takip etmek amacıyla tasarlanmıştır.

### 12.1 Yeni Olay Bildirimi (Adım Adım Sihirbaz)

Tüm personeller sol menüdeki **Personel > Yeni Olay Bildirimi** butonunu kullanarak 3 aşamalı sihirbaz yardımıyla olay bildirimi oluşturabilirler:

- **Adım 1: Temel Bilgiler:** Olayın gerçekleştiği tarih/saat, birim (tanımlı listeden seçilebilir veya serbest metin olarak yazılabilir), bildiren personel (kimliğini gizlemek isteyen çalışanlar "Anonim" seçeneğini işaretleyebilir), etkilenen taraf, olay sonucu (Ramak Kala, Hafif/Orta/Ciddi Zarar) ve geri bildirim tercihleri.
- **Adım 2: Sınıflandırma:** Olay kategorisi (Radyasyon İhlali Çalışan Odaklı, Hasta Odaklı, MR Güvenliği vb.) seçilir. Seçilen kategoriye göre uygun alt detay seçenekleri onay kutuları halinde otomatik yüklenir. Kök neden listesinden olası sebepler işaretlenir.
- **Adım 3: Açıklamalar:** Detaylı olay tanımı, yapılan acil müdahale ve DÖF önerisi girilir. Form "Olayı Bildir" ile kaydedildiğinde sistem otomatik olarak benzersiz bir takip numarası üretir (örn. `OB-2026-00001`).

### 12.2 Olay Bildirimleri ve DÖF Yönetimi (Yönetici Paneli)

Yöneticiler sol menüdeki **Yönetim > Olay & DÖF Yönetimi** ekranı üzerinden bildirilen olayları takip ederler:

- **Olay Takip Tablosu ve Detay Kartı:** Bildirilen tüm olaylar tarih sırasına göre listelenir. Seçili olayın tüm detayları, seçilen kök nedenler ve alt detaylar sağ panelde listelenir.
- **Durum ve Atama İşlemleri:** Olayın durumu (Açık, İncelemede, Kapalı, İptal) güncellenebilir ve sorumlu bir personel atanabilir. Olay kapatılırken "Kapanış Notu" yazılması zorunludur.
- **Tarihçe:** Olay üzerinde yapılan tüm durum ve alan güncellemeleri otomatik olarak eski/yeni değerleriyle tarihçeye kaydedilir.
- **DÖF Aksiyonları:** "DÖF Aksiyonları" sekmesinden, olayla ilişkili Düzeltici, Önleyici veya İyileştirici faaliyetler başlatılabilir, sorumlu personel ve hedef tarih atanabilir. Tamamlanan faaliyetler "Tamamlandı" olarak kapatılarak etkinlik değerlendirmesi kaydedilir.

---

## 13. Onay Bekleyen Görevler Paneli (Evrensel Onay Sistemi)

RADPYS V3, kurumsal veri güvenliğini, veri doğruluğunu ve denetim izlenebilirliğini en üst düzeyde tutmak amacıyla **Evrensel Onay ve Veri Değişikliği Denetim Sistemi** ile donatılmıştır. Bu sistem; belirli rollere (örn. sıradan kullanıcı, izleyici veya özel tanımlanmış veri giriş personelleri) ait kullanıcıların yaptığı ekleme, düzenleme veya silme işlemlerini doğrudan sisteme yazmak yerine, bir yöneticinin onayına sunulmak üzere geçici bir onay kuyruğuna yönlendirir.

Sistemde iki farklı onay yaklaşımı bulunmaktadır:

1. **Onay Kuyruğu Destekleyen Modüller:** Bu modüllerde yapılan işlemler reddedilebilir veya onaylanabilir. Onaylanana kadar veriler asıl kayıtlara işlenmez.
2. **Onay Kuyruğu Desteği Olmayan Modüller (Sert Yetki Engeli):** Bu modüller yasal uyum ve hassas izleme verileri içerdiğinden onay kuyruğu üzerinden onaylanmaya uygun değildir. Bu nedenle onaya tabi rollerin bu modüllerde işlem yapması doğrudan sistem tarafından engellenir.

Yöneticiler, bekleyen tüm onay taleplerini ana ekranda yer alan **"Onay Bekleyen Görevler"** hızlı erişim butonuyla veya sistem menüsünden açılan merkezi onay panelinden yönetebilirler. Onaylama veya reddetme işlemlerinde işlemi gerçekleştiren yöneticinin kimliği ve rol bilgisi denetim izleri için eksiksiz olarak doğrulanır ve kaydedilir.

### 13.1 Kategori Sekmeleri ve Sayı Rozetleri

Merkezi onay paneli, bekleyen işleri düzenli bir şekilde yönetmek için 5 farklı kategoriye ayrılmıştır. Her kategorinin yanında bekleyen işlem sayısını canlı olarak gösteren sayı rozetleri yer alır:

1. **İzinler:** Birim amirinin onayını bekleyen standart veya şua izin talepleri.
2. **Nöbet Devirleri:** Personellerin birbirine devretmek istediği ve birim yöneticisinin onayını bekleyen nöbet değişim talepleri.
3. **Nöbet İstekleri:** Personellerin nöbet listeleri için ilettiği ve onay bekleyen mazeret/nöbet istekleri.
4. **Nöbet Planları:** Birim yöneticileri tarafından hazırlanmış ("Birim Onaylı" durumundaki) ve yayınlanmadan önce yönetici onayı bekleyen nöbet planları.
5. **Veri Değişiklikleri:** Onay gerektiren kullanıcılar tarafından aşağıdaki alanlarda yapılan ekleme, düzenleme ve silme talepleri:
   - **Personel Özlük Bilgileri**
   - **Sağlık Muayeneleri**
   - **Eğitim Türleri / Tanımlamaları**
   - **Kalite Dokümanları Portalı**
   - **Hizmet İçi Eğitim Tanımları**

### 13.2 Karşılaştırmalı Değişiklik İnceleme

"Veri Değişiklikleri" sekmesinde yer alan bir talebin üzerine tıklayıp **"Değişiklikleri İncele"** butonuna basıldığında modern bir karşılaştırma ekranı açılır:

- **Renkli Karşılaştırma Matrisi:** Değiştirilmek istenen kayıt üzerindeki mevcut eski değerler (kırmızı arka planlı) ve kullanıcının teklif ettiği yeni değerler (yeşil arka planlı) yan yana net bir şekilde gösterilir. Ekleme işlemlerinde eski değer sütunu boş, silme işlemlerinde ise yeni değer sütunu boş gösterilir.
- **Anlaşılır Alan Etiketleri:** Eğitim ve Kalite modüllerinin de onay sistemine entegre edilmesiyle, karşılaştırma ekranındaki tüm alanlar kullanıcı dostu Türkçe etiketlerle gösterilir (örn. Eğitim Adı, Eğitim Seviyesi, Süre, Sınav Geçme Puanı, Doküman Kodu/Adı, Revizyon Numarası, Yayın/Revizyon Tarihi, Belge Dosya Yolu, Aktiflik Durumu gibi).
- Yönetici, yapılan değişikliklerin doğruluğunu görsel olarak kolayca teyit ederek **"Onayla"** veya **"Reddet"** butonlarıyla işlemi sonuçlandırır. Onaylanan talepler sisteme anında işlenirken, reddedilen talepler gerekçesiyle birlikte arşive kaldırılır.

### 13.3 Onay Kuyruğu Desteği Olmayan Modüllerin Yetki Yönetimi

Kurumun radyasyon güvenliği, yasal uyumluluk ve denetim geçmişi açısından kritik önem taşıyan bazı modüllerde, onay bekletme kuyruğu veri bütünlüğünü bozabileceği veya anlık takip gerektirdiği için devre dışı bırakılmıştır. Bu kapsamda yer alan:

- **Dozimetre Ölçüm Kayıtları ve Takip Aksiyonları**
- **Fiili Hizmet Süresi ve Dönem Çalışma Hesaplamaları**

modüllerinde yapılan işlemler onay bekletme kuyruğuna tabi tutulmadan doğrudan sisteme yazılır.

Yetkilendirme denetimi, rol bazlı yetki tanımlarına göre gerçekleştirilir. Eğer kullanıcının rolüne bu modüller için yazma, güncelleme veya silme yetkileri tanımlanmışsa, rolü genelde onay gerektiren türden olsa dahi bu modüllerde doğrudan işlem gerçekleştirebilir. Yetki tanımlanmamış roller ise standart yetkisiz işlem uyarısıyla bloke edilir.

---

## 14. Merkezi Bildirim ve Durum Çubuğu Sistemi

RADPYS V3, kurumsal süreçlerde (izin talepleri, nöbet planlamaları, eğitim atamaları ve olay bildirimleri vb.) anlık bilgi akışını sağlamak amacıyla **Merkezi Bildirim ve Durum Çubuğu Sistemi** ile donatılmıştır.

### 14.1 Durum Çubuğu Yerleşimi ve Canlı Saat

Uygulamanın ana ekranının sağ alt köşesinde yer alan bu alan, kullanıcıya hem canlı durum takibi hem de hızlı bildirim kontrolü sunar:

- **Canlı Tarih ve Saat:** Türkçe biçimlendirilmiş güncel saat ve tarih bilgisi saniyede bir güncellenerek durum çubuğunun sağ tarafında gösterilir (örn. `8 Temmuz Çarşamba 21:56:32`).
- **Dinamik Zil Simgesi:** Okunmamış bir bildirim olduğunda zil simgesi aktif mavi renge bürünür ve üzerine gelindiğinde okunmamış bildirim sayısını gösterir. Tüm bildirimler okundu yapıldığında veya silindiğinde simge standart gri rengine geri döner.

### 14.2 Aşağıdan Yukarı Kayan Bildirim Çekmecesi

Zil simgesine tıklandığında, durum çubuğunun hemen üzerinde çerçevesiz, modern ve yarı saydam gölgelendirmeli bir **Bildirim Çekmecesi** açılır:

- **Yukarı Kayma Animasyonu:** Çekmece, zil simgesinin üzerinden yukarıya doğru akıcı bir animasyonla kayarak açılır. Ekran sınırlarına göre sağa veya sola taşmayacak şekilde otomatik hizalanır.
- **Dışarı Tıklayınca Kapanma:** Arayüzde başka herhangi bir yere veya bir bildirime tıklandığında çekmece kendiliğinden kapanır.
- **Türe Özel İkonlar:** Bildirim kartlarının sol tarafında, bildirim tipine göre farklı renklerde ikonlar listelenir (İzin talepleri için yeşil, Nöbetler için mavi, Eğitimler için turuncu, Olaylar için kırmızı).
- **Hızlı Silme (Çarpı Butonu):** Her bildirimin sağında yer alan küçük çarpı butonuyla istenen bildirim listeden hızlıca kaldırılabilir.
- **Tümünü Temizle:** Üstte yer alan "Tümünü temizle" butonuyla listedeki tüm geçmiş bildirimler tek tıklamayla silinebilir. Eğer hiç bildirim yoksa, çekmece boyutu otomatik olarak küçülerek ortalanmış şık bir zil ikonuyla "Henüz bildiriminiz bulunmuyor" bilgisini gösterir ve temizle butonu gizlenir.
- **Akıllı Sayfa Yönlendirmesi ve Aksiyonlar:** Bir bildirim kartına tıklandığında:
  1. Bildirim otomatik olarak okundu işaretlenir ve bildirim çekmecesi kapatılır.
  2. **Aksiyon Gerektiren Özel Bildirimler:** Eğer bildirim bir "Nöbet Devir Talebi" ile ilgiliyse, ek bir sayfa açmadan doğrudan onay/red penceresi açılır. Kullanıcı bu pencere üzerinden nöbet devrini tek tıkla kabul edebilir veya reddedebilir. Diğer durumlarda (örn. devir tamamlandığında veya onay aşaması değiştiğinde) bildirim doğrudan ilgili nöbet planı listesine yönlendirilir.
  3. **Dozimetre Uyarıları:** Dozimetre sonuç bildirimleri tıklandığında kullanıcıyı doğrudan dozimetre takip ekranına yönlendirirken, genel sistem bildirimleri herhangi bir yönlendirme yapmadan sadece bilgilendirme amaçlı çalışır.
  4. **Performans Optimizasyonu:** Uygulamanın durum çubuğundaki okunmamış bildirim adeti (rozet), sistem kaynaklarına yük getirmeyecek şekilde hafif sorgularla arka planda taranarak güncellenmektedir.

---

## 15. Program Ayarları

Program Ayarları ekranı, sistemin genel davranışına ilişkin ayarların (örn. genel parametreler, bildirim ayarları vb.) yönetildiği bölümdür. Bu ekrana genellikle sistem yöneticisi yetkisine sahip kullanıcılar erişebilir.

> **Not:** Bu ekranın kapsamı kurum ihtiyaçlarına göre genişletilebilir; hangi ayarların aktif olarak kullanılacağı konusunda sistem yöneticinizle görüşmeniz önerilir.

---

## 16. Veritabanı Modülü

Veritabanı Modülü, sistemin veritabanı düzeyinde yönetildiği, genellikle sadece sistem yöneticisi yetkisine sahip kullanıcıların erişebildiği kritik bir bölümdür.

> **Not:** RADPYS V3, verilerini yerel bir veritabanı dosyasında saklar. Bu nedenle aşağıdaki yedekleme/geri yükleme işlemleri, bilgisayarınızdaki bu veritabanı dosyası üzerinde çalışır; yedek dosyasını harici bir ortamda (örn. başka bir disk veya bulut depolama) saklamanız veri kaybı risklerine karşı önerilir.

### 16.1 Veritabanı Yedekleme

Sistemdeki tüm verilerin bir yedek dosyası olarak alınmasını sağlar.

1. Veritabanı Modülü > Veritabanı Yedekleme ekranına gidin.
2. "Yedek Al" butonuna tıklayın.
3. İşlem tamamlandığında oluşturulan yedek dosyasını indirin veya güvenli bir konumda saklanmasını sağlayın.

### 16.2 Veritabanı Yedekten Geri Yükleme

Önceden alınmış bir yedek dosyasının sisteme geri yüklenmesini sağlar.

1. Veritabanı Modülü > Yedekten Geri Yükleme ekranına gidin.
2. Geri yüklenecek yedek dosyasını seçin.
3. İşlemi onaylayın.

> **Not:** Geri yükleme işlemi, sistemdeki mevcut verilerin üzerine yazar ve geri alınamaz. Bu işlemi yapmadan önce güncel bir yedek aldığınızdan kesinlikle emin olun.

### 16.3 Veritabanı Temizleme

Gereksiz, eski veya geçici verilerin sistemden temizlenmesini sağlayan bakım işlemidir. Bu işlemi gerçekleştirmeden önce mutlaka bir yedek alınması önerilir.

### 16.4 Veritabanı Bakımı

Veritabanının performansını korumak amacıyla yapılan bakım işlemlerini (örn. düzenleme, hızlandırma) kapsar.

---

## 17. Toplu İçe Aktarma (Import) İşlemleri

Sistem, birçok modül için toplu veri yükleme (içe aktarma) özelliği sunar. Genel kullanım adımları tüm toplu içe aktarma ekranlarında benzerdir:

1. İlgili modülün listesinde "İçe Aktar" veya "Toplu İçe Aktar" butonuna tıklayın.
2. Sistemin sunduğu Excel şablonunu indirin.
3. Şablonu, ilgili verilerle (her sütunun istenen formatta) eksiksiz doldurun.
4. Doldurulmuş dosyayı seçip yükleyin.
5. Sistem dosyayı işler; başarılı kayıtlar sisteme eklenir, hatalı satırlar için bir hata raporu sunulur.
6. Hata raporundaki satırları düzelterek gerekirse yeniden yükleme yapın.

Sistemde aşağıdaki toplu içe aktarma ekranları bulunmaktadır:

- **Toplu Personel İçe Aktarma (Aktif):** Excel şablonundaki kayıtlar, **TC Kimlik Numarası** ve **Sicil Numarası** gibi doğal benzersiz bilgiler üzerinden çakışma kontrolüne tabi tutulur. Böylece Excel'deki kayıtların mevcut veritabanı kayıtlarının üzerine yazması engellenir. Ayrıca Excel dosyasında yazılı olan ancak sistemde henüz tanımlı olmayan Departman ve Unvan bilgileri, içe aktarım esnasında sistem tarafından otomatik olarak oluşturulur.
- **Toplu İzin İçe Aktarma (Aktif)**
- **Toplu İzin Hak Ediş İçe Aktarma (Aktif)**
- **Toplu Dozimetre İçe Aktarma (Aktif - Dozimetre Modülü ekranı üzerinden gerçekleştirilir)**
- **Toplu Departman İçe Aktarma (Aktif - Merkezi Panel)**
- **Toplu Unvan İçe Aktarma (Aktif - Merkezi Panel)**
- **Toplu İzin Türü İçe Aktarma (Aktif - Merkezi Panel)**
- **Toplu Tatil Günü İçe Aktarma (Aktif - Merkezi Panel)**
- **Toplu Rol, Yetki ve Rol Yetkisi İçe Aktarma (Aktif - Merkezi Panel)**
- **Toplu Fiili Hizmet İçe Aktarma (Aktif):** Personellerin fiili hizmet sürelerini ve yıpranma payı haklarını Excel dosyası üzerinden toplu olarak içe aktarmayı ve güncellemeyi sağlar.
- **Toplu Sağlık Muayene İçe Aktarma (Aktif):** Personelin periyodik sağlık kontrollerini ve radyolojik sonuçlarını Excel şablonuyla toplu yüklemek için kullanılır.
- **Toplu Nöbet İçe Aktarma (Aktif):** Birim bazlı veya genel nöbet listelerini toplu olarak içe aktararak nöbet çizelgelerine hızlıca yansıtır.

### 17.1 Güvenlik ve Yetkilendirme Kısıtı

Toplu içe aktarım işlemleri sisteme büyük miktarda kayıt eklediği veya güncellediği için onay kuyruğuna alınmaya uygun değildir. Veri bütünlüğünü ve güvenliğini korumak amacıyla:

- **Onay Yetkisi Olmayan Roller Engellenmiştir:** Onay gerektiren rol grubuna ait kullanıcılar (Kullanıcı, İzleyici vb.), herhangi bir modülde yazma yetkileri bulunsa dahi toplu içe aktarım işlemini **başlatamazlar**.
- **Yalnızca Yöneticiler İthal Edebilir:** Excel'den toplu içe aktarım butonları ve arka plan işlemleri yalnızca onay gerektirmeyen rollere (Admin, Yönetici) açık olarak çalışır. Yetkisiz bir kullanıcı bu işlemi tetiklemeye çalıştığında sistem erişimi reddeder.

> **Önemli Güvenlik Notu:** Şablonlardaki sütun başlıklarını ve veri formatlarını değiştirmeden kullanmanız, içe aktarma işleminin hatasız tamamlanması için önemlidir.

---

## 18. Lisans ve Aktivasyon Sistemi (Demo Sürüm)

Uygulamanın lisanssız veya deneme sürümü olarak çalıştırılması durumunda bazı kısıtlamalar devreye girer. Lisans durumunu yönetmek ve tam sürüme geçiş yapmak için sağ üst köşede bulunan **Hakkında** butonuna tıklayarak ilgili ekrana ulaşabilirsiniz.

### 18.1 Demo Sürüm Kısıtlamaları

Uygulama demo modundayken aşağıdaki sınırlar geçerlidir:

- **Deneme Süresi:** İlk kurulum tarihinden itibaren **30 gün** ile sınırlıdır. Süre dolduğunda uygulama açılışta uyarı verir ve kendini kapatır.
- **Personel Limiti:** Sistemde en fazla **15 aktif personel** kaydı barındırılabilir. Yeni personel eklenmesi veya pasif personellerin aktif hale getirilmesi bu sınırın aşılması durumunda engellenir.
- **Nöbet Planı Limiti:** Sistemde en fazla **3 nöbet planı** oluşturulabilir.
- **Toplu İçe Aktarma Kısıtı:** Excel veya CSV üzerinden yapılan toplu personel ve nöbet içe aktarımlarında da 15 personel ve 3 nöbet planı limiti tam olarak denetlenmektedir.
- **Güncelleme Limiti (Yama Desteği):** Demo/Deneme sürümünde yeni ticari özellikler içeren ana güncellemeler alınamaz. Ancak programın kararlılığını korumak ve olası kritik hatalardan etkilenmemeniz için kritik hata düzeltme ve yama güncellemeleri demo modunda da otomatik olarak sunulur ve yüklenebilir.

### 18.2 Uygulamayı Aktifleştirme (Tam Sürüme Geçiş)

Uygulamayı satın aldığınızda, programı kalıcı olarak tam sürüme yükseltmek için aşağıdaki adımları izleyin:

1. **Cihaz Kimliğini Kopyalayın:** Hakkında penceresindeki **Lisans ve Aktivasyon** kartının altında yazan benzersiz **Cihaz Kimliği** (örn. `RP-XXXX-XXXX-XXXX-XXXX`) bilgisinin yanındaki **Kopyala** butonuna tıklayarak panoya alın.
2. **Yazılımcıya Gönderin:** Kopyaladığınız Cihaz Kimliğini yazılım sağlayıcınıza (Cem Kara) iletin.
3. **Lisans Anahtarını Girin:** Yazılımcının size bu bilgisayara özel ürettiği **Lisans Anahtarını** (örn. `LK-XXXX-XXXX-XXXX-XXXX`) Hakkında penceresindeki lisans giriş alanına yapıştırın.
4. **Aktifleştirin:** **Lisansı Aktifleştir** butonuna tıklayın. Başarılı uyarısını aldıktan sonra uygulamayı kapatıp yeniden başlatın. Program artık kısıtlamasız **Tam Sürüm** olarak çalışacaktır.

### 18.3 Geri Bildirim ve Hata Raporlama

Uygulama çalışırken beklenmedik teknik bir çökme hatasıyla karşılaşırsa:

1. **Çökme Bildirim Ekranı:** Program sessizce kapanmaz; karşınıza teknik hata bilgilerini içeren özel bir hata penceresi gelir.
2. **Hata Kopyalama/E-posta:** Bu penceredeki **"Hata Detayını Kopyala"** butonu ile hatayı panoya alabilir veya **"E-Posta Gönder"** butonu ile varsayılan e-posta programınızı (Outlook vb.) açarak hatayı otomatik hazırlanmış şablonla `radpys.iletisim@gmail.com` adresine gönderebilirsiniz.
3. **Destek Paketi Oluşturma:** Uygulama içindeyken (çökme olmasa dahi karşılaştığınız sorunlarda) sağ üst köşedeki **Hakkında** butonuna tıklayarak Hakkında ekranını açın. En alttaki **"Destek Paketi (Log) Oluştur"** butonuna basarak, uygulamanın ürettiği tüm KVKK uyumlu kayıt dosyalarını (kişisel veri içermez) masaüstünüze `radpys_destek_log.zip` olarak kaydedebilirsiniz. Bu paketi hata bildirim e-postanıza ekleyerek bize iletmeniz sorunların hızlıca çözülmesini sağlayacaktır.

---

## 19. Sık Karşılaşılan Durumlar ve İpuçları

- Şifrenizi unuttuysanız, "Şifremi Unuttum" bağlantısı sizi sistem yöneticinize yönlendirir; şifre sıfırlama işlemi yönetici tarafından yapılır.
- Bir ekranı veya butonu göremiyorsanız, bu genellikle rolünüze tanımlı yetkilerle ilgilidir; sistem yöneticinizden ilgili yetkiyi talep edebilirsiniz.
- Bir kaydı "sildiğinizde" çoğu modülde kayıt kalıcı olarak silinmez, pasif duruma alınır; bu sayede geçmiş veriler korunur.
- İzin Hakediş kayıtları ve Onaylanmış/Reddedilmiş/İptal Edilmiş izin talepleri silinemez; bu kayıtların değişmesi gerekiyorsa yetkili onay süreçlerini kullanın.
- Toplu Hesaplama, Devir Aktarma gibi özel butonların ne işe yaradığını anlamak için bu kılavuzun ilgili modül bölümüne başvurun.
- Dosya yükleme ekranlarında, yüklenen belgeyi açmak (Aç), güncellemek (Düzenle) veya kaldırmak (Sil/Temizle) için ilgili butonların yükleme alanının yanında bulunduğunu unutmayın.
- Yetki veya rolünüz "onay gerektiren" gruptaysa, Personel veya Sağlık Muayenesi modüllerinde yaptığınız değişiklikler doğrudan yazılmaz, onay kuyruğuna alınır. Yönetici onaylayana kadar değişiklikler askıda kalır.
- Yetki veya rolünüz "onay gerektiren" gruptaysa, onay kuyruğu desteği bulunmayan Dozimetre ve Fiili Hizmet modüllerinde doğrudan veri yazabilir veya değiştirebilirsiniz (tabii ki ilgili modüllerde rolünüze ait yazma/güncelleme/silme yetkileri tanımlanmışsa). Bu modüllerde yapılan işlemler onay kuyruğuna alınmadan doğrudan sisteme işlenir.
- Sistemin isteğe bağlı alan zenginleştirme işlemleri, olası hataların uygulamayı çökertmesini önlemek için koruma altına alınmıştır.

## 20. Update Log

Sistem genelinde yapılan tüm güncellemeleri, sürüm notlarını ve hata giderimlerini detaylı olarak incelemek için:

- **[Güncelleme Raporunu Aç (CHANGELOG.md)](../CHANGELOG.md)**
