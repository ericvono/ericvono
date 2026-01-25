// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Copy link button
const copyBtn = document.getElementById("copyLinkBtn");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href.split("#")[0]);
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy site link"), 1200);
    } catch {
      alert("Copy failed — just copy the URL from the address bar.");
    }
  });
}
