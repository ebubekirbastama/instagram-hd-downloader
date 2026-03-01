(() => {
  // XPath ile tüm post resimleri
  const imgs = document.evaluate(
    "//div[contains(@class,'_aagu')]//img",
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

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

  for (let i = 0; i < imgs.snapshotLength; i++) {
    const img = imgs.snapshotItem(i);
    if (img.dataset.btnAdded) continue;
    img.dataset.btnAdded = "1";

    const rect = img.getBoundingClientRect();
    const btn = document.createElement("div");

    // 🔹 Inline küçük download SVG
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
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
      zIndex: "999999",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    });

    btn.onclick = () => {
      const url = getHDImage(img);
      window.open(url, "_blank"); // yeni sekmede aç
      console.log(`✅ Yeni sekmede açıldı: ${url}`);
    };

    document.body.appendChild(btn);
  }

  console.log(`✅ ${imgs.snapshotLength} resim için HD download ikonları eklendi!`);
})();