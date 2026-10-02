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

// ===== 3. SLIDER (Testimonials & Experience)
function initSliders() {
  const sliders = document.querySelectorAll("[data-slider]");

  sliders.forEach((slider) => {
    const track = slider.querySelector(".slider__track");
    const prevBtn = slider.querySelector(".slider__btn--prev");
    const nextBtn = slider.querySelector(".slider__btn--next");
    const dotsContainer = slider.querySelector(".slider__dots");

    if (!track) return;

    const slides = Array.from(track.children);
    let snapOffsets = [];
    let activeIndex = 0;

    function isScrollable() {
      return track.scrollWidth > track.clientWidth + 1;
    }

    function getMaxScroll() {
      return Math.max(0, track.scrollWidth - track.clientWidth);
    }

    function calculateSnapOffsets() {
      const maxScroll = getMaxScroll();
      const raw = slides.map((slide) => Math.min(slide.offsetLeft - track.offsetLeft, maxScroll));

      const unique = [];
      raw.forEach((offset) => {
        const alreadyExists = unique.some((existing) => Math.abs(existing - offset) < 1);
        if (!alreadyExists) unique.push(offset);
      });

      return unique;
    }

    function goToSlide(index) {
      const clamped = Math.max(0, Math.min(index, snapOffsets.length - 1));
      track.scrollTo({ left: snapOffsets[clamped], behavior: "smooth"} );
    }

    function buildDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = "";
      snapOffsets.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "slider__dot";
        dot.setAttribute("aria-label", `Ke slide ${index + 1}`);
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
      });
    }

    function updateActiveState() {
      let closestIndex = 0;
      let closestDistance = Infinity;

      snapOffsets.forEach((offset, index) => {
        const distance = Math.abs(offset - track.scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      activeIndex = closestIndex;

      if (dotsContainer) {
        dotsContainer.querySelectorAll(".slider__dot").forEach((dot, index) => {
          if (index === activeIndex) {
            dot.setAttribute("aria-current", "true");
          } else {
            dot.removeAttribute("aria-current");
          }
        });
      }

      if (prevBtn) prevBtn.disabled = activeIndex === 0;
      if (nextBtn) nextBtn.disabled = activeIndex === snapOffsets.length - 1;    
    }

    function refresh() {
      if (isScrollable()) {
        snapOffsets = calculateSnapOffsets();
        slider.classList.add("is-ready");
        track.setAttribute("tabindex", "0");
        buildDots();
        updateActiveState();
      } else {
        snapOffsets = [];
        slider.classList.remove("is-ready");
        track.removeAttribute("tabindex");
        if (dotsContainer) dotsContainer.innerHTML = "";
      }
    }

    if (prevBtn) prevBtn.addEventListener("click", () => goToSlide(activeIndex - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => goToSlide(activeIndex + 1));

    let scrollTimeout;
    track.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateActiveState, 100);
    });

    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(refresh, 200);
    });

    refresh();
  });
}

// Inisialisasi - Jalankan semua fungsi setelah HTML siap
document.addEventListener("DOMContentLoaded", () => {
  initNavbarToggle();
  initFaqAccordion();
  initSliders();
})