📥 Instagram HD Downloader

[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)  
[![Made for Journalists](https://img.shields.io/badge/Made%20for-Journalists-blue)]()

---

🚀 Hakkında

Instagram HD Downloader, gazeteciler ve içerik üreticiler için geliştirilmiş hafif ve kullanımı kolay bir araçtır.  

Bu araç sayesinde:

- Instagram postlarındaki tüm görselleri tespit eder 🖼️  
- Full HD çözünürlükte olan görselleri otomatik algılar 🔥  
- Her resmin üstüne ufak bir download butonu ekler ⬇️  
- Tıklandığında HD görsel yeni sekmede açılır 🌐  
- Çoklu görsel (carousel) desteği ✔️  
- Mouse hover gerekmez, direkt kullanılabilir 👌  

⚠️ Not: Bu araç haberci ve içerik üreticileri için tasarlanmıştır.  
Telif hakkına dikkat edin ve kaynak belirtin.

---

💡 Özellikler

- Tüm post görsellerini tek seferde HD olarak görüntüleme  
- Ufak, minimal download SVG ikonu  
- Carousel / çoklu görsel desteği  
- Full HD çözünürlükte linkler  
- Tarayıcı console veya eklenti olarak kolay entegrasyon  
- Bağımsız, internet bağlantısı gerektirmez (SVG inline)  

---

⚡ Kullanım

1️⃣ Console üzerinden:

1. Instagram postunu açın  
2. F12 → Console sekmesine geçin  
3. Aşağıdaki script’i yapıştırın ve çalıştırın:

// ...Console script buraya eklenir...

4. Posttaki tüm görsellerin sağ üstüne ⬇️ butonları eklenecek  
5. Butona tıklayın → HD görsel yeni sekmede açılır  

2️⃣ Chrome Extension Olarak:

1. Repo’yu klonlayın veya ZIP indirip açın  
2. chrome://extensions/ → Geliştirici Modu → Paketlenmemiş yükle  
3. Klasörü seçin  
4. Instagram açın → sağ üst köşede download ikonları aktif olacak  

---

📁 Dosya Yapısı

instagram-hd-downloader/<br>
├─ manifest.json       # Chrome eklenti ayarları<br>
├─ content.js          # Görselleri bulma ve buton ekleme<br>
├─ background.js       # Buton tıklama olayları (opsiyonel)<br>
├─ icon/               # Ufak download ikonları<br>
├─ README.md           # Bu dosya<br>
└─ LICENSE             # MIT lisansı<br>

---

📝 Neden Kullanılmalı?

- Gazeteciler için hızlı görsel erişimi 📰  
- HD görselleri manuel olarak bulmak yerine tek tıkla almak  
- Carousel postları hızlıca toplamak  
- Videolar / fotoğraflar için genişletilebilir yapı  
- Açık kaynak, özelleştirilebilir ve güvenli  

---

📦 Gelecek Planları

- Tek tıkla tüm postu ZIP indir  
- Video / Reels desteği  
- Dosya isimlendirme: kullanıcı + tarih + sıra  
- Chrome / Firefox cross-browser uyumluluğu  

---

📜 Lisans

MIT License © 2026  
Özgürce kullanabilir, değiştirebilir ve dağıtabilirsiniz.
