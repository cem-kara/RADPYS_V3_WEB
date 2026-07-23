# RADPYS V3 — Statik Site (HTML + JS)

Bu klasör, RADPYS V3 marketing sitesinin **backend gerektirmeyen** saf HTML/CSS/JS sürümüdür. GitHub Pages üzerinde doğrudan çalışır.

## Klasör Yapısı

```
static-site/
├── index.html              → Ana Sayfa
├── moduller.html           → Modüller
├── fiyatlandirma.html      → Fiyatlandırma + SSS
├── referanslar.html        → Referanslar
├── kaynaklar.html          → Blog listesi & detayı (?slug=... ile detay)
├── dokumanlar.html         → Dokümantasyon (14 bölüm, sticky sidebar, aktif başlık)
├── changelog.html          → Sürüm notları (timeline, etiketli değişiklikler)
├── hakkimizda.html         → Hakkımızda
├── iletisim.html           → Demo talep formu (mailto: ile çalışır)
├── .nojekyll               → GitHub Pages Jekyll dönüşümünü kapatır
└── assets/
    ├── css/tokens.css      → Tüm tasarım stilleri (renk, font, animasyon)
    └── js/
        ├── tailwind.config.js  → Tailwind CDN yapılandırması
        ├── data.js             → Blog yazıları, testimonial'lar, stats
        └── layout.js           → Navbar, footer, scroll reveal, toast
```

## GitHub Pages'e Nasıl Yüklerim?

### Yöntem 1: Ayrı Repo (Önerilen)
1. GitHub'da yeni bir repo oluşturun (ör. `radpys-web`)
2. Bu `static-site/` klasörünün **içeriğini** repo'nun köküne kopyalayın (yani `index.html` repo kökünde olmalı)
3. Repo → **Settings → Pages → Source: `main` branch, root**
4. Birkaç dakika içinde `https://<kullanici>.github.io/<repo-adi>/` adresinde yayında olur

### Yöntem 2: Mevcut Repo İçinde
1. `static-site/` klasörünü olduğu gibi push edin
2. Settings → Pages → Source: `main`, folder: `/static-site`
3. Yayında olur

## Yerelde Test Etme

Direkt `index.html` dosyasına çift tıklamak **çalışmaz** (fontshare CDN, marquee vs. çalışmaz). Basit bir sunucu çalıştırın:

```bash
cd static-site
python3 -m http.server 8000
# veya
npx serve .
```

Sonra tarayıcıda `http://localhost:8000` açın.

## İçerik Güncellemek

- **Blog yazısı eklemek/çıkarmak:** `assets/js/data.js` içindeki `BLOG_POSTS` dizisine obje ekleyin. Yeni yazı otomatik olarak listede ve `?slug=...` URL'iyle detayda görünür.
- **Testimonial eklemek:** Aynı dosyadaki `TESTIMONIALS` dizisi.
- **Menü linki değiştirmek:** `assets/js/layout.js` dosyasının en üstündeki `NAV_LINKS` dizisi. Bir yerden değişince tüm sayfalarda değişir.
- **Renkler:** `assets/css/tokens.css` — dosyanın başındaki `:root` değişkenleri.
- **Fiyatlandırma tablosu / SSS:** `fiyatlandirma.html` dosyasının içindeki `TIERS`, `ROWS`, `FAQ` dizileri.
- **Dokümantasyon:** `dokumanlar.html` dosyasında `<article class="prose-doc">` içindeki bölümler. Yeni bölüm eklemek için `<h2 id="...">` başlığı + sidebar'a `<a href="#...">` linki ekleyin — aktif başlık otomatik takip edilir.
- **Yeni sürüm eklemek (changelog):** `changelog.html` içindeki `RELEASES` dizisinin en başına yeni obje ekleyin. `type` değerleri: `new`, `improved`, `fixed`, `breaking`. İlk sürüm otomatik "Son sürüm" etiketi alır.

## Demo Talep Formu

Form gönderildiğinde, kullanıcının e-posta uygulaması bilgiler önceden doldurulmuş şekilde `mailto:hello@radpys.com` ile açılır. Gerçek bir backend'e gönderim isterseniz, `iletisim.html` sonundaki submit handler'ı [Formspree](https://formspree.io) veya [Getform](https://getform.io) gibi ücretsiz form servisleriyle değiştirebilirsiniz — kod içinde tek satırlık değişiklik yeterli.

## Neler Kullanılıyor?

- **Tailwind CSS (Play CDN)** — Utility class'lar için
- **Fontshare** — Clash Display + Manrope + JetBrains Mono
- **Vanilla JS** — Framework yok, sıfır build adımı
- Tüm görseller Unsplash/Pexels CDN'inden çekiliyor — kendi ekran görüntülerinizi eklemek için `assets/js/data.js` ve HTML dosyalarındaki `img src` değerlerini değiştirin.

## Görsel Değişiklikler İçin İpuçları

- Neon rengini değiştirmek: `tokens.css` içinde `--neon-teal` ve `--neon-cyan`
- Font ailesini değiştirmek: `index.html` (+ diğer sayfaların) `<head>` içindeki fontshare linkini + `tokens.css` içindeki `font-family` değerlerini güncelleyin

Kolay gelsin!
