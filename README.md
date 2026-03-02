📥 Instagram HD Downloader

[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)  
[![Made for Journalists](https://img.shields.io/badge/Made%20for-Journalists-blue)]()

--------------------------------------------------

🚀 Hakkında

Instagram HD Downloader, gazeteciler ve içerik üreticiler için geliştirilmiş hafif ve kullanımı kolay bir araçtır.

Bu araç sayesinde:

- Instagram postlarındaki tüm görselleri tespit eder
- Full HD çözünürlükte olan görselleri otomatik algılar
- Videoları (Reels dahil) gerçek HD mp4 olarak yakalar
- Her medya öğesinin üstüne ufak bir download butonu ekler
- Tıklandığında medya yeni sekmede açılır
- Çoklu görsel (carousel) desteği vardır
- Mouse hover gerekmez, direkt kullanılabilir

NOT:
Bu araç haberci ve içerik üreticileri için tasarlanmıştır.
Telif hakkına dikkat edin ve kaynak belirtin.

--------------------------------------------------

💡 Özellikler

- Tüm post görsellerini HD olarak görüntüleme
- Video desteği (Post + Reels)
- JSON içinden direkt HD mp4 çekme (en kaliteli yöntem)
- Blob / stream bypass (gerçek CDN link yakalama)
- Minimal download SVG ikonu
- Carousel / çoklu medya desteği
- Full HD çözünürlük
- Console veya eklenti olarak kullanım
- Harici bağımlılık yok

--------------------------------------------------

🧠 Video Nasıl Çalışır?

Instagram videoları normalde:

- blob: URL ile gelir (indirilemez)
- Parça parça stream edilir

Bu araç:

1. Sayfadaki JSON verisini tarar
2. video_url veya video_versions alanlarını bulur
3. Gerçek CDN mp4 linkini yakalar
4. HD olarak açar

Bu yöntem en stabil ve en kaliteli çözümdür.

--------------------------------------------------

⚡ Kullanım

1) Console ile:

1. Instagram postunu aç
2. F12 → Console sekmesine gir
3. Script'i yapıştır ve çalıştır
4. Butonlar otomatik eklenecek
5. Tıkla → HD açılır

---

2) Chrome Extension:

1. Repo’yu indir
2. chrome://extensions/
3. Geliştirici modu aç
4. Paketlenmemiş yükle
5. Klasörü seç
6. Instagram’da aktif olur

--------------------------------------------------

📁 Dosya Yapısı

instagram-hd-downloader/<br>
├─ manifest.json<br>
├─ content.js<br>
├─ background.js (opsiyonel)<br>
├─ icon/<br>
├─ README.txt<br>
└─ LICENSE<br>

--------------------------------------------------

📝 Neden Kullanılmalı?

- Gazeteciler için hızlı medya erişimi
- HD görseller ve videoları tek tıkla almak
- Reels ve carousel içerikleri toplamak
- CDN linke direkt erişim
- Açık kaynak ve özelleştirilebilir

--------------------------------------------------

📦 Gelecek Planları

- Tek tıkla ZIP indir
- Akıllı dosya isimlendirme
- Story indirme
- Cross-browser destek
- Toplu profil medya çekme

--------------------------------------------------

📜 Lisans

MIT License © 2026

Özgürce kullanabilir, değiştirebilir ve dağıtabilirsiniz.
