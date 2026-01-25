// year
document.getElementById("year").textContent = new Date().getFullYear();

// copy link
const btn = document.getElementById("copyLinkBtn");
const statusEl = document.getElementById("copyStatus");

btn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    statusEl.textContent = "Copied!";
    setTimeout(() => (statusEl.textContent = ""), 1400);
  } catch (e) {
    statusEl.textContent = "Copy failed";
    setTimeout(() => (statusEl.textContent = ""), 1400);
  }
});
