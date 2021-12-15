// Set current year
const yearEl = document.querySelector(".footer-year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// =================== Mobile navigation ===================//
const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// ============= Smooth Scrolling animation =============== //
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) headerEl.classList.toggle("nav-open");
  });
});
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js


// =================== Sticky naviation with Intersection Observer ====================== //
function obsFunc(entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) document.body.classList.add("sticky");
  if (entry.isIntersecting) document.body.classList.remove("sticky");
}
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(obsFunc, {
  // In the viewport
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

