// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Close mobile nav when a link is clicked
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Contact form handling (demo only — no backend)
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  note.hidden = false;
  form.reset();
  setTimeout(() => {
    note.hidden = true;
  }, 5000);
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
