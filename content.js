(() => {

  // 📸 RESİMLER (XPath)
  const imgs = document.evaluate(
    "//div[contains(@class,'_aagu')]//img",
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  // 🎥 VİDEOLAR
  const videos = document.querySelectorAll("video");

  // =========================
  // 🧠 JSON VIDEO BULUCU
  // =========================
  function findVideoUrlFromJSON() {
    const scripts = document.querySelectorAll('script[type="application/json"]');

    for (const script of scripts) {
      try {
        const json = JSON.parse(script.textContent);
        const url = deepSearch(json);
        if (url) return url;
      } catch (e) {}
    }

    return null;
  }

  function deepSearch(obj) {
    if (!obj || typeof obj !== "object") return null;

    for (const key in obj) {

      if (key === "video_url" && typeof obj[key] === "string") {
        return obj[key];
      }

      if (key === "video_versions" && Array.isArray(obj[key])) {
        return obj[key][0]?.url;
      }

      const found = deepSearch(obj[key]);
      if (found) return found;
    }

    return null;
  }

  // =========================
  // 🖼️ HD IMAGE
  // =========================
  function getHDImage(img) {
    if (img.srcset) {
      const sources = img.srcset.split(",").map(s => {
        const [url, size] = s.trim().split(" ");
        return { url, width: parseInt(size) || 0 };
      });
      sources.sort((a, b) => b.width - a.width);
      return sources[0].url;
    }
    return img.src;
  }

  // =========================
  // 🎬 EN İYİ VIDEO URL
  // =========================
  function getBestVideoUrl(video) {

    // 1️⃣ JSON (EN SAĞLAM)
    const jsonUrl = findVideoUrlFromJSON();
    if (jsonUrl) return jsonUrl;

    // 2️⃣ currentSrc
    if (video.currentSrc && !video.currentSrc.startsWith("blob:")) {
      return video.currentSrc;
    }

    // 3️⃣ source
    const source = video.querySelector("source");
    if (source && source.src) {
      return source.src;
    }

    return null;
  }

  // =========================
  // 🎯 BUTTON OLUŞTUR
  // =========================
  function createButton(el, type = "img") {

    const rect = el.getBoundingClientRect();
    const btn = document.createElement("div");

    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M5 20h14v-2H5v2zm7-18v12l4-4h-3V4h-2v6H8l4 4z"/>
      </svg>
    `;

    Object.assign(btn.style, {
      position: "fixed",
      top: rect.top + 5 + "px",
      left: rect.right - 35 + "px",
      background: "rgba(0,0,0,0.7)",
      padding: "5px",
      borderRadius: "5px",
      cursor: "pointer",
      zIndex: "999999"
    });

    btn.onclick = () => {
      let url;

      if (type === "img") {
        url = getHDImage(el);
      } else {
        url = getBestVideoUrl(el);
      }

      if (!url || url.startsWith("blob:")) {
        alert("⚠️ URL alınamadı. Videoyu oynatmayı dene.");
        return;
      }

      window.open(url, "_blank");
      console.log("✅ Açıldı:", url);
    };

    document.body.appendChild(btn);
  }

  // =========================
  // 📸 RESİMLERE EKLE
  // =========================
  for (let i = 0; i < imgs.snapshotLength; i++) {
    const img = imgs.snapshotItem(i);
    if (img.dataset.btnAdded) continue;
    img.dataset.btnAdded = "1";

    createButton(img, "img");
  }

  // =========================
  // 🎥 VİDEOLARA EKLE
  // =========================
  videos.forEach(video => {
    if (video.dataset.btnAdded) return;
    video.dataset.btnAdded = "1";

    createButton(video, "video");
  });

  console.log("🚀 Resim + Video (JSON HD dahil) aktif!");

})();
