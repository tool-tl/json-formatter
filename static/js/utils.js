function showMessage(msg, duration = 3000) {
  const box = document.getElementById("global-message");
  if (!box) return;
  box.textContent = msg;
  box.classList.add("show");
  setTimeout(() => box.classList.remove("show"), duration);
}
