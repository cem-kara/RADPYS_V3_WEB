# RADPYS V3 — Eksik Modüller Kapsamlı Geliştirme Planı

**Hazırlanma amacı:** Kullanım Kılavuzu, SSS ve kod tabanı (`app/services`, `app/db/schema.sql`) incelemesi sonucu SKS 6.1, NDK ve Sağlık Bakanlığı mevzuatı açısından tespit edilen eksikler için uygulanabilir bir yol haritası.

**Öncelik sıralaması gerekçesi:** Yasal zorunluluk + denetimde doğrudan sorulma ihtimali + mevcut mimariye eklenme maliyeti birlikte değerlendirildi.

---

## Öncelik Matrisi (Özet)

| # | Modül | Yasal Dayanak | Öncelik | Efor |
|---|---|---|---|---|
| 1 | Hizmet İçi Radyasyon Güvenliği Eğitimi | NDK RGY, periyodik eğitim yükümlülüğü | 🔴 Yüksek (Faz 1) | Orta |
| 2 | Cihaz Kalite Kontrol / Kalibrasyon Takibi | NDK RGY, SKS 6.1 | 🟡 Orta-Yüksek (Faz 4) | Yüksek |
| 3 | Kurum/İşyeri NDK Lisansı Takibi | Radyasyon Tesislerine İlişkin Yetkilendirmeler Yön. | 🟡 Orta (Faz 3) | Orta |
| 4 | RGS/RSO Görevlendirme & Sertifika Takibi | NDK RGY | 🟡 Orta (Faz 2) | Düşük-Orta |

---

## 1. Hizmet İçi Radyasyon Güvenliği Eğitimi Modülü

### Neden gerekli?
`personel_egitimler` tablosu yalnızca akademik özlük bilgisini (lise/önlisans/lisans/yüksek lisans/doktora, mezuniyet tarihi) tutuyor. NDK mevzuatı gereği radyasyon çalışanlarına **düzenli aralıklarla tekrarlanan** radyasyon güvenliği/korunma eğitimi verilmesi ve kayıt altına alınması zorunlu — bu, işe giriş eğitiminden ayrı, tekrarlayan bir yükümlülük. Şu an sistemde "eğitimi süresi dolmuş personel" diye bir kavram yok.

### Veri modeli (yeni tablo — mevcut `personel_egitimler`'a dokunmadan)

```sql
-- yeni migration: VYYYYMMDD_N_hizmet_ici_egitim.py
CREATE TABLE hizmet_ici_egitim_turleri (
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    egitim_adi          TEXT NOT NULL UNIQUE,   -- 'Yıllık Radyasyon Güvenliği Eğitimi' vb.
    gecerlilik_ay        INTEGER NOT NULL,        -- örn: 12 (ay cinsinden tekrar periyodu)
    zorunlu_hizmet_sinifi TEXT,                   -- hangi hizmet sınıfına zorunlu (opsiyonel filtre)
    aciklama             TEXT,
    aktif                INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE personel_hizmet_ici_egitimler (
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    personel_id         INTEGER NOT NULL REFERENCES personeller(id) ON DELETE CASCADE,
    egitim_turu_id       INTEGER NOT NULL REFERENCES hizmet_ici_egitim_turleri(id),
    egitim_tarihi        DATE NOT NULL,           -- eğitimin verildiği tarih
    gecerlilik_bitis     DATE NOT NULL,           -- egitim_tarihi + gecerlilik_ay (otomatik hesaplanır)
    egitmen_kurum        TEXT,                    -- eğitimi veren kişi/kurum
    sure_saat            REAL,                    -- eğitim süresi (saat)
    belge_id             INTEGER REFERENCES personel_belgeler(id) ON DELETE SET NULL,  -- katılım belgesi/sertifika taraması
    notlar               TEXT,
    olusturma            DATETIME DEFAULT (datetime('now','localtime'))
);

CREATE INDEX idx_hie_personel ON personel_hizmet_ici_egitimler(personel_id);
CREATE INDEX idx_hie_gecerlilik ON personel_hizmet_ici_egitimler(gecerlilik_bitis);
```

### Servis katmanı
Mevcut `saglik_muayene_service.py`'daki "süresi geçmiş / yaklaşıyor / normal" renk kodlama mantığını aynen kopyalayın (kod zaten bu deseni bir kez uyguladığı için tekrar kullanımı kolay):

- `app/services/personel/hizmet_ici_egitim_service.py` — `OnayliServisTabani`'dan türeyecek (`MODUL_ADI = "hizmet_ici_egitim"`)
- Metotlar: `list_types()`, `create_type()`, `list_records()`, `create_record()` (kaydederken `gecerlilik_bitis = egitim_tarihi + egitim_turu.gecerlilik_ay` otomatik hesaplansın), `update_record()`, `delete_record()`
- Durum hesaplama: `Süresi Geçmiş` (bugün > gecerlilik_bitis), `Yaklaşıyor - 30 Gün`, `Normal` — sağlık muayenesi modülündeki filtre mantığıyla birebir aynı üç renk kategorisi

### UI/Ekranlar
- Sol menü: **Personel Modülü > Hizmet İçi Eğitim Takibi** (Sağlık Muayene Listesi ekranının bir kopyası/mirror'ı olarak tasarlanabilir — aynı filtre barı: Durum, Eğitim Türü, Departman)
- "Ekle" butonu → personel seç, eğitim türü seç, tarih gir, belge yükle
- Dashboard'a KPI kartı eklenmesi önerilir: "Eğitimi Süresi Geçmiş Personel Sayısı" (mevcut `dashboard_facade_service.py` yapısına eklenebilir)

### Rapor entegrasyonu
Raporlar Modülü'ndeki "Personel Eğitim Durum Raporu" (Kılavuz Bölüm 9.1) şu an muhtemelen sadece akademik eğitimi kapsıyor — bu yeni tabloyu da içerecek şekilde genişletilmeli.

**Tahmini efor:** 1 yeni migration + 1 servis dosyası + 1 repository (opsiyonel, doğrudan servis de yazabilir) + 2 UI sayfası (liste + ekle/düzenle dialog) + 1 controller + rapor güncellemesi. Sağlık muayene modülü şablon olarak kullanılırsa **orta** efor.

---

## 2. Cihaz Kalite Kontrol / Kalibrasyon Takibi

### Neden gerekli?
Kod tabanında (`app/services/*`) BT, Röntgen, Anjiyografi gibi cihazların periyodik kalite kontrol/kalibrasyon kayıtlarını tutan bir servis bulunmuyor (grep sonucu boş). NDK mevzuatı ve SKS 6.1, personel güvenliğinin yanı sıra **cihaz bazlı** periyodik kalite kontrol ve kalibrasyon kaydını da ister.

### Kapsam önerisi (yeni modül — mevcut mimariye paralel)

```sql
CREATE TABLE cihazlar (
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    cihaz_adi           TEXT NOT NULL,
    cihaz_tipi          TEXT,            -- 'BT','Röntgen','Anjiyografi','Skopi','Mamografi' vb.
    seri_no             TEXT UNIQUE,
    departman_id        INTEGER REFERENCES departmanlar(id),
    kurulum_tarihi      DATE,
    aktif               INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE cihaz_kalite_kontrolleri (
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    cihaz_id            INTEGER NOT NULL REFERENCES cihazlar(id) ON DELETE CASCADE,
    kontrol_turu        TEXT,            -- 'Günlük QC','Aylık QC','Yıllık Kalibrasyon' vb.
    kontrol_tarihi      DATE NOT NULL,
    sonraki_kontrol      DATE,            -- otomatik hesaplanabilir
    sonuc               TEXT CHECK(sonuc IN ('Uygun','Uygun Değil','Şartlı Uygun')),
    yapan_kurum         TEXT,
    rapor_belge_id       INTEGER REFERENCES personel_belgeler(id) ON DELETE SET NULL,
    notlar              TEXT
);
```

### Not
Bu, mevcut dört modülden (Personel/İzin/Dozimetre/Nöbet) yapısal olarak farklı bir varlık (personel değil, cihaz) etrafında kurulacağı için en yüksek efor gerektiren madde. Sağlık Muayenesi modülündeki "süresi geçmiş/yaklaşan" renk mantığı ve belge yükleme (`DocumentService`) altyapısı buraya da uyarlanabilir.

**Tahmini efor:** Yüksek — yeni varlık (cihaz) + CRUD + kalite kontrol geçmişi + rapor + dashboard entegrasyonu.

**Öneri:** Bu modül kapsam olarak büyük olduğu için ayrı bir faz/sprint olarak planlanmalı; ilk etapta sadece "Cihaz Tanımlamaları + Kalibrasyon Tarihi Takibi" (basit liste + uyarı) ile başlayıp, sonra QC geçmişi/rapor detaylandırılabilir.

---

## 3. Kurum/İşyeri NDK Lisansı ve Cihaz Lisans Süre Takibi

### Neden gerekli?
Kurumun radyasyon kaynağı kullanım lisansının (işyeri lisansı) ve varsa cihaz bazlı lisansların yenileme tarihini izleyen bir alan/modül bulunmuyor (Radyasyon Tesislerine İlişkin Yetkilendirmeler Yönetmeliği).

### Kapsam önerisi
Basit bir "Kurumsal Lisanslar" tablosu — büyük bir modül değil, **Tanımlamalar (Lookup)** modülüne yeni bir sekme olarak eklenebilir:

```sql
CREATE TABLE kurumsal_lisanslar (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    lisans_turu     TEXT,        -- 'İşyeri Lisansı','Cihaz Lisansı' vb.
    lisans_no       TEXT,
    ilgili_cihaz_id INTEGER REFERENCES cihazlar(id),  -- madde 2 uygulanırsa bağlanabilir, yoksa NULL
    verilis_tarihi  DATE,
    gecerlilik_bitis DATE NOT NULL,
    veren_kurum     TEXT DEFAULT 'NDK',
    belge_id        INTEGER REFERENCES personel_belgeler(id) ON DELETE SET NULL,
    notlar          TEXT
);
```

UI: **Tanımlamalar > Kurumsal Lisanslar** sekmesi + dashboard'da "Süresi Yaklaşan Lisans" uyarı kartı.

**Tahmini efor:** Orta — bağımsız çalışabilir (madde 2'ye bağımlı değil), önce bu yapılabilir.

---

## 4. RGS/RSO Görevlendirme ve Sertifika Takibi

### Neden gerekli?
Kurumun resmi Radyasyon Güvenliği Sorumlusu/Uzmanı (RGS/RSO) atamasını ve sertifika geçerliliğini izleyen ayrı bir kayıt yapısı yok; genel eğitim modülüyle karışabilir.

### Kapsam önerisi
Madde 1'deki `hizmet_ici_egitim_turleri` yapısına benzer ama farklı bir amaç taşıdığı için ayrı tutulmalı:

```sql
CREATE TABLE rgs_gorevlendirmeler (
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    personel_id         INTEGER NOT NULL REFERENCES personeller(id),
    gorev_tipi          TEXT,        -- 'RGS','RGS Yardımcısı' vb.
    baslangic_tarihi    DATE NOT NULL,
    bitis_tarihi        DATE,        -- görev süresi varsa
    sertifika_no        TEXT,
    sertifika_gecerlilik DATE,
    belge_id            INTEGER REFERENCES personel_belgeler(id) ON DELETE SET NULL,
    aktif               INTEGER NOT NULL DEFAULT 1
);
```

UI: Personel Detay ekranına yeni bir sekme ("RGS Görevlendirme") veya bağımsız bir liste ekranı — hangisi tercih edilirse, aynı "süresi yaklaşan/geçen" uyarı mantığı uygulanmalı.

**Tahmini efor:** Düşük-orta — tek tablo, basit CRUD, mevcut personel detay sayfasına entegre edilebilir.

---

## Önerilen Uygulama Sırası (Yol Haritası)

```
Faz 1 (1-2 hafta):       Madde 1 — Hizmet İçi Eğitim Modülü (Sağlık Muayenesi şablonu kullanılarak)
Faz 2 (3-5 gün):         Madde 4 — RGS/RSO Görevlendirme Takibi
Faz 3 (3-5 gün):         Madde 3 — Kurumsal Lisans Takibi
Faz 4 (2-3 hafta, ayrı sprint): Madde 2 — Cihaz Kalite Kontrol/Kalibrasyon Modülü (en büyük kapsam)
```

Faz 1-3, mevcut mimariye (servis + repository + Wizard/dialog UI + Raporlar entegrasyonu) doğrudan oturuyor ve mevcut Sağlık Muayenesi/Dozimetre modüllerindeki "süresi geçmiş/yaklaşan/normal" renk kodlama deseni her birinde tekrar kullanılabilir. Faz 4 ayrı bir varlık (cihaz) etrafında kurulduğu için ayrı planlanmalı.

---

*Bu plan, docs/RADPYS_V3_Kullanim_Kilavuzu.md, docs/RADPYS_V3_sss.md ve ilgili servis/şema dosyalarının incelenmesiyle hazırlanmıştır. Şema önerileri taslak niteliğindedir; gerçek migration yazılmadan önce mevcut `app/db/schema.sql` ile çakışma kontrolü yapılmalıdır.*
