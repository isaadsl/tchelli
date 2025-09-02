// script.js

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("nav button");
  const navLinks = document.querySelector("nav .md\\:flex");

  // Menu mobile toggle
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
      navLinks.classList.toggle("flex");
      navLinks.classList.add(
        "flex-col",
        "absolute",
        "top-16",
        "left-0",
        "w-full",
        "bg-black",
        "bg-opacity-90",
        "p-6"
      );
    });
  }

  // Scroll suave nos links
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").replace("#", "");
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - 70,
          behavior: "smooth"
        });
      }

      // Fecha o menu mobile
      if (window.innerWidth < 768 && navLinks) {
        navLinks.classList.add("hidden");
        navLinks.classList.remove("flex");
      }
    });
  });

  // Efeito nos botões
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.add("scale-95");
      setTimeout(() => {
        btn.classList.remove("scale-95");
      }, 150);
    });
  });

  // Fade-in ao rolar a página
  const fadeEls = document.querySelectorAll("section, .album-cover, .bg-[var(--secondary)]");

  fadeEls.forEach(el => {
    el.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-700");
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-6");
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeEls.forEach(el => observer.observe(el));
});
