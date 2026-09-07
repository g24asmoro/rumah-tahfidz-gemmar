const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
const links = document.getElementById("links");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

menu.addEventListener("click", () => {
  links.classList.toggle("open");
});

document.querySelectorAll(".links a").forEach((link) => {
  link.addEventListener("click", () => links.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const revealEls = document.querySelectorAll(".scroll-reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => revealObserver.observe(el));
