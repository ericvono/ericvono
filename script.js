document.getElementById("year").textContent = new Date().getFullYear();

const copyBtn = document.getElementById("copyLinkBtn");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const link = "https://ericvono.com";
    try {
      await navigator.clipboard.writeText(link);
      copyBtn.textContent = "Copied ✓";
      setTimeout(() => (copyBtn.textContent = "Copy site link"), 1400);
    } catch (e) {
      // Fallback: prompt
      window.prompt("Copy this link:", link);
    }
  });
}
