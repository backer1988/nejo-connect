/* NeJo Connect – minimales JavaScript: mobiles Menü und Header-Schatten.
   Die Seite funktioniert vollständig auch ohne JavaScript. */
(function () {
  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  var header = document.querySelector(".site-header");
  if (!header) return;

  var toggle = header.querySelector(".nav-toggle");
  var nav = header.querySelector(".site-nav");

  function setOpen(open) {
    header.classList.toggle("is-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.querySelector(".nav-toggle-label").textContent = open ? "Schließen" : "Menü";
    }
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setOpen(!header.classList.contains("is-open"));
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 56rem)").addEventListener("change", function (mq) {
      if (mq.matches) setOpen(false);
    });
  }

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
