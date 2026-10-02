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

// ===== 2. FAQ ACCORDION =====
function initFaqAccordion() {
  const questions = document.querySelectorAll(".faq-item__question");
  if (!questions.length) return;

  questions.forEach((button) => {
    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";

      // Tutup semua FAQ lain
      questions.forEach((otherButton) => {
        if (otherButton === button) return;

        otherButton.setAttribute("aria-expanded", "false");
        const otherAnswer = document.getElementById(otherButton.getAttribute("aria-controls"));
        if (otherAnswer) otherAnswer.hidden = true;
      });

      // Toggle FAQ yang diklik 
      const answer = document.getElementById(button.getAttribute("aria-controls"));
      button.setAttribute("aria-expanded", String(!isOpen));
      if (answer) answer.hidden = isOpen;
    });
  });
}



// Inisialisasi - Jalankan semua fungsi setelah HTML siap
document.addEventListener("DOMContentLoaded", () => {
  initNavbarToggle();
  initFaqAccordion();
})