(function () {
  var c = siteConfig, $ = function (s) { return document.querySelector(s); };
  document.querySelectorAll("[data-config]").forEach(function (el) { var v = c[el.dataset.config]; if (v) el.textContent = v; });
  $("#about-text").innerHTML = "";
  c.about.forEach(function (t) { var p = document.createElement("p"); p.textContent = t; $("#about-text").appendChild(p); });
  $("#year").textContent = new Date().getFullYear();
  document.title = c.brandName + " — " + c.subtitle;

  // Social icons (inline SVG; URLs live only in href, never shown as text)
  var ic = {
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    facebook: '<path class="f" d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',
    linkedin: '<path class="f" d="M5.5 9h3v10h-3zM7 4.5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zM11 9h3v1.4c.6-1 1.7-1.7 3.2-1.7 3 0 3.8 2 3.8 4.6V19h-3v-5c0-1.2-.1-2.6-1.7-2.6S14 12.800 14 14v5h-3z"/>',
    youtube: '<path class="f" fill-rule="evenodd" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800C22 15.200 22 12 22 12s0-3.200-.4-4.800zM10 15V9l5.200 3z"/>',
    blogger: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><path d="M8.5 9.5h3M8.5 14.5h7"/>',
    github: '<path d="M9 19c-4 1.200-4-2-6-2m12 4v-3.200a2.800 2.800 0 0 0-.8-2.200c2.600-.3 5.300-1.300 5.300-5.800a4.500 4.500 0 0 0-1.200-3.100 4.200 4.200 0 0 0-.1-3.100s-1-.3-3.200 1.200a11 11 0 0 0-5.800 0C6.100 2.800 5.100 3.100 5.100 3.100a4.200 4.200 0 0 0-.1 3.100A4.500 4.500 0 0 0 3.800 9.300c0 4.500 2.700 5.500 5.300 5.800a2.800 2.800 0 0 0-.8 2.200V21"/>'
  };
  var links = [["email", "mailto:" + c.email]].concat(Object.keys(c.social).map(function (k) { return [k, c.social[k]]; }));
  document.querySelectorAll("[data-social]").forEach(function (ul) {
    links.forEach(function (l) {
      var li = document.createElement("li"), a = document.createElement("a"), name = c.labels[l[0]] || l[0];
      a.href = l[1]; a.setAttribute("aria-label", name); a.dataset.label = name;
      if (l[0] !== "email") { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + ic[l[0]] + "</svg>";
      li.appendChild(a); ul.appendChild(li);
    });
  });

  var root = document.documentElement, tb = $("#theme");
  function label() { tb.setAttribute("aria-label", root.dataset.theme === "dark" ? "Switch to day mode" : "Switch to night mode"); }
  label();
  tb.addEventListener("click", function () {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    label();
  });

  var nav = $("#nav"), bg = $("#burger");
  function menu(open) {
    nav.classList.toggle("open", open); bg.setAttribute("aria-expanded", open); bg.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  }
  bg.addEventListener("click", function () { menu(!nav.classList.contains("open")); });
  nav.addEventListener("click", function (e) { if (e.target.tagName === "A") menu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) { menu(false); bg.focus(); } });
  document.addEventListener("click", function (e) { if (nav.classList.contains("open") && !nav.contains(e.target) && !bg.contains(e.target)) menu(false); });
  window.addEventListener("resize", function () { if (window.innerWidth >= 760 && nav.classList.contains("open")) menu(false); });
})();
