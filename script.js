// ===== 1. NAVBAR TOGGLE =====
function initNavbarToggle() {
  const toggle = document.querySelector(".navbar__toggle");
  const navbar = document.querySelector(".navbar");

  if (!toggle || !navbar) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  document.addEventListener("click", (event) => {
    const  isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (!isOpen) return;

    const clickedInsideNavbar = event.target.closest(".navbar");
    if (!clickedInsideNavbar) {
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  navbar.addEventListener("click", (event) => {
    const clickedLink = event.target.closest(".navbar__menu a");
    if (clickedLink) {
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Inisialisasi - Jalankan semua fungsi setelah HTML siap
document.addEventListener("DOMContentLoaded", () => {
  initNavbarToggle();
})