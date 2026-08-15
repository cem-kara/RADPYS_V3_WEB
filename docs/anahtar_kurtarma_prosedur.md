# RADPYS V3 - Şifreleme Anahtarları Kurtarma ve İşletim Prosedürü

**Sürüm:** 3.1.0  
**Tarih:** 2026-08-12  
**Kapsam:** `radpys.db` (Ana Veritabanı) ve `files.db` (KVKK Dosya Deposu) Anahtarları  

---

## 1. Anahtar Mimarisi ve Saklama Mekanizması

RADPYS V3, KVKK Teknik Tedbirler Rehberi ve ISO 27001 gereğince **iki ayrı bağımsız şifreleme anahtarı** kullanır:

1. **`main_db_key` (Ana Veritabanı Anahtarı):** `radpys.db` SQLCipher (AES-256) şifrelemesi için kullanılır. Tüm personel, nöbet, izin ve dozimetre kayıtlarını korur.
2. **`files_db_key` (KVKK Dosya Deposu Anahtarı):** KVKK kapsamındaki tüm tahlil belgeleri, diplomalar ve fotoğrafların tutulduğu `files.db` deposunun şifrelenmesi için kullanılır.

### Saklama Konumları:
- **Birincil Depo (Primary):** İşletim Sistemi Kasa Servisi (Windows Credential Manager / DPAPI - `keyring` kütüphanesi).
- **İkincil Depo (Backup/Fallback):** Windows DPAPI (`CryptProtectData`) ile kullanıcı SID'sine özel şifrelenmiş korumalı dosya kasası (`data/.main_db_key.dpapi` ve `data/.files_db_key.dpapi`).

> 🛑 **KVKK Güvenlik Kuralı:** Anahtar okuma başarısız olduğunda sistem **asla şifresiz düz metne düşmez** veya sabitleştirilmiş (*hardcoded*) varsayılan parolalar kullanmaz. Şifreleme anahtarı bulunamazsa uygulama açık bir `KeyManagementError` fırlatarak çalışmayı durdurur.

---

## 2. Arayüz Üzerinden Anahtar Yönetimi & Yedek Alma (Key Manager GUI)

RADPYS V3 masaüstü uygulamasında **Yönetim > Veritabanı & Bakım** sekmesindeki **`Şifreleme Anahtar Kasası (Key Manager)`** butonu üzerinden grafiksel yönetilebilir:

### 📌 Adım Adım Kullanım:
1. **Güvenlik Doğrulaması:** **`Şifreleme Anahtar Kasası`** butonuna tıklayın. Açılan Sudo pencerisinde Sistem Yöneticisi parolanızı girin.
2. **Anahtar Görüntüleme & Kopyalama:**
   * **`main_db_key` (radpys.db):** `[Göster / Gizle]` butonu ile anahtarı görebilir, `[Kopyala]` butonu ile panoya alabilirsiniz.
   * **`files_db_key` (files.db):** `[Göster / Gizle]` butonu ile dosya kasası anahtarını kopyalayabilirsiniz.
3. **Güvenli Metin Yedeği Çıktısı Alın:**
   * **`Anahtarları Güvenli Metin Yedeği Olarak Kaydet`** butonuna basarak anahtarları ve kullanım talimatlarını içeren `radpys_encryption_keys.txt` dosyasını kurumun şifre yöneticisine (*Bitwarden, KeePass vb.*) kaydedin.

---

## 3. Afet Kurtarma Senaryoları (Disaster Recovery)

### 🔴 Senaryo A: Bilgisayar Değişimi veya Çöken Sistemden Taşıma (Grafik Arayüz ile Enjeksiyon)

Eğer yeni bir bilgisayara geçildi ve eski veritabanı dosyaları (`radpys.db` & `files.db`) yeni makineye kopyalandıysa:

1. Yeni bilgisayarda RADPYS V3 masaüstü uygulamasını açın.
2. **Yönetim > Veritabanı & Bakım > Şifreleme Anahtar Kasası** penceresini açın.
3. İhtiyacınıza göre seçmeli enjeksiyon butonlarını kullanın:
   * **`1. Ana Veritabanı Anahtarını Enjekte Et (radpys.db)`:** Elinizdeki eski `main_db_key` anahtarını yapıştırın.
   * **`2. KVKK Dosya Deposu Anahtarını Enjekte Et (files.db)`:** Elinizdeki eski `files_db_key` anahtarını yapıştırın.
4. İşlem tamamlandığında anahtarlar işletim sistemi kasasına güvenle işlenir ve veritabanları anında açılır.

---

### 🔴 Senaryo B: CLI / Python ile Manuel Kod Enjeksiyonu

Grafik arayüze erişilemeyen durumlarda aşağıdaki script ile anahtarlar yeni Windows kasasına işlenebilir:

```python
import keyring
from app.core.key_manager import KEY_MAIN_DB, KEY_FILES_DB

keyring.set_password("RADPYS_V3", KEY_MAIN_DB, "<ESKI_MAIN_DB_KEY>")
keyring.set_password("RADPYS_V3", KEY_FILES_DB, "<ESKI_FILES_DB_KEY>")
print("Anahtarlar kasaya enjekte edildi!")
```

---

## 4. Şifresiz Veritabanı Dışa Aktarma (Program Terk Etme Prosedürü)

Kullanıcı uygulamayı satın almaktan vazgeçtiğinde veya verilerini üçüncü parti bir sisteme taşımak istediğinde:

1. **Yönetim > Veritabanı & Bakım** sekmesindeki **`Şifresiz Veritabanı Dışa Aktar (Unencrypted Export)`** butonuna basılır.
2. Sudo doğrulamasından sonra hem `radpys.db` hem de `files.db` içindeki tüm şifreli BLOB'lar deşifre edilir ve standart (şifresiz) SQLite veritabanı dosyaları halinde ZIP arşivi olarak kaydedilir.
