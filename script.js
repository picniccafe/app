document.addEventListener("DOMContentLoaded", () => {
  const dateEl = document.getElementById("currentDate");
  if (dateEl) {
    const today = new Date();
    dateEl.textContent = today.toDateString();
  }
});
