/* =========================
SAFE LOADER
========================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

/* =========================
SLIDER
========================= */
const slides = document.querySelectorAll(".slide");
if (slides.length > 0) {
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
  }, 4000);
}

/* =========================
COUNTERS
========================= */
document.querySelectorAll(".counter").forEach(c => {
  const update = () => {
    let target = +c.dataset.target;
    let current = +c.innerText;
    let inc = target / 100;

    if (current < target) {
      c.innerText = Math.ceil(current + inc);
      setTimeout(update, 20);
    } else {
      c.innerText = target;
    }
  };
  update();
});

/* =========================
NAV SHRINK
========================= */
const nav = document.querySelector(".navbar");
if (nav) {
  window.addEventListener("scroll", () => {
    nav.classList.toggle("shrink", window.scrollY > 50);
  });
}

/* =========================
SCROLL PROGRESS
========================= */
const progressBar = document.getElementById("progressBar");
if (progressBar) {
  window.addEventListener("scroll", () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    progressBar.style.width = (winScroll / height) * 100 + "%";
  });
}

/* =========================
WHATSAPP FORM
========================= */
const form = document.getElementById("bookingForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name")?.value || "";
    let phone = document.getElementById("phone")?.value || "";
    let problem = document.getElementById("problem")?.value || "";

    let msg = `Hello I need appliance repair.%0AName: ${name}%0APhone: ${phone}%0AProblem: ${problem}`;

    window.open(
      `https://wa.me/27681915286?text=${msg}`,
      "_blank"
    );
  });
}

/* =========================
SECTION FADE ANIMATION
========================= */
const sections = document.querySelectorAll("section");
if (sections.length > 0) {
  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  });

  sections.forEach(sec => {
    sec.classList.add("fade");
    observer.observe(sec);
  });
}

/* =========================
ACTIVE NAVIGATION
========================= */
const links = document.querySelectorAll(".nav-links a");
if (links.length > 0) {
  let current = location.pathname.split("/").pop();
  if (current === "") current = "index.html";

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
}

/* =========================
PREMIUM ANIMATION
========================= */
const premiumEls = document.querySelectorAll(".fade-up");
if (premiumEls.length > 0) {
  let premiumObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  });

  premiumEls.forEach(el => premiumObserver.observe(el));
}

/* =========================
⭐ ANALYTICS TRACKING SYSTEM
========================= */
(function () {
  const site = "genjayden2026";

  function hit(url) {
    fetch(url).catch(() => {});
  }

  hit(`https://api.countapi.xyz/hit/${site}/total`);

  const today = new Date().toISOString().slice(0, 10);
  hit(`https://api.countapi.xyz/hit/${site}/day-${today}`);

  const month = new Date().toISOString().slice(0, 7);
  hit(`https://api.countapi.xyz/hit/${site}/month-${month}`);

  const year = new Date().getFullYear();
  hit(`https://api.countapi.xyz/hit/${site}/year-${year}`);

  let page = location.pathname.split("/").pop();
  if (page === "") page = "index.html";

  hit(`https://api.countapi.xyz/hit/${site}/page-${page}`);
})();