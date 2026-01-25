// Small utility behaviors: year + copy link
(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const btn = document.getElementById("copyLinkBtn");
  if (btn) {
    btn.addEventListener("click", async () => {
      const url = window.location.origin;
      try {
        await navigator.clipboard.writeText(url);
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = "Copy site link"), 1200);
      } catch {
        // Fallback
        const input = document.createElement("input");
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = "Copy site link"), 1200);
      }
    });
  }
})();
