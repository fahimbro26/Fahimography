(function () {
  var $ = function (s) { return document.querySelector(s); };
  var grid = $("#grid"), moreBtn = $("#more");
  
  // সব ছবি একসাথে দেখানোর জন্য
  var BATCH = 9999, shown = 1;

  // Layout rhythm (চাইলে পরে পরিবর্তন করতে পারবেন)
  var slots = ["16/9", "4/5", "4/5", "3/2", "1/1"];
  var sizes = ["100vw", "(min-width:760px) 50vw, 100vw", "(min-width:760px) 50vw, 100vw", "(min-width:760px) 58vw, 100vw", "(min-width:760px) 42vw, 100vw"];

  function path(p) { return "./" + p.src.replace(/^\.?\//, ""); }

  function srcset(p) {
    if (!p.widths || !p.widths.length) return "";
    var m = p.src.replace(/^\.?\//, "").match(/^(.*)\.(\w+)$/);
    return p.widths.map(function (w) { return "./" + m[1] + "-" + w + "." + m[2] + " " + w + "w"; }).join(", ");
  }

  function img(p, sz, eager) {
    var im = new Image();
    im.alt = p.title && p.title !== "Untitled" ? p.title : "Photograph by " + siteConfig.photographer;
    var ss = srcset(p); if (ss) { im.srcset = ss; im.sizes = sz; }
    if (eager) { im.loading = "eager"; im.fetchPriority = "high"; } else { im.loading = "lazy"; im.decoding = "async"; }
    im.onload = function () { im.classList.add("on"); };
    im.src = path(p);
    if (im.complete && im.naturalWidth) im.classList.add("on");
    return im;
  }

  function frame(p, sz, eager, ratio) {
    var f = document.createElement("div");
    f.className = "frame";
    // aspect-ratio জোর করে না দিলে ছবি কাটবে না
    // if (ratio) f.style.aspectRatio = ratio;
    f.appendChild(img(p, sz, eager));
    return f;
  }

  function caption(p) {
    var c = document.createElement("figcaption");
    c.className = "cap";
    [["t", p.title], ["d", p.date]].forEach(function (x) {
      if (!x[1] || x[1] === "Untitled") return;
      var s = document.createElement("span");
      s.className = x[0];
      s.textContent = x[1];
      c.appendChild(s);
    });
    return c;
  }

  // Hero photo
  if (photos.length) {
    var b0 = document.createElement("button");
    b0.type = "button";
    b0.className = "photo-btn";
    b0.setAttribute("aria-label", "View featured photo");
    b0.appendChild(frame(photos[0], "100vw", true));
    b0.onclick = function () { open(0, b0); };
    $("#hero-figure").appendChild(b0);
  }

  function render() {
    var end = Math.min(shown + BATCH, photos.length);
    var frag = document.createDocumentFragment();

    for (var i = shown; i < end; i++) (function (i) {
      var p = photos[i], k = i % 5;
      var fig = document.createElement("figure");
      fig.className = "s" + k;

      var b = document.createElement("button");
      b.type = "button";
      b.className = "photo-btn";
      b.setAttribute("aria-label", "View photo " + (i + 1) + (p.title ? ": " + p.title : ""));
      b.appendChild(frame(p, sizes[k], false, slots[k]));
      b.onclick = function () { open(i, b); };

      fig.appendChild(b);
      fig.appendChild(caption(p));
      frag.appendChild(fig);
    })(i);

    grid.appendChild(frag);
    shown = end;
    moreBtn.hidden = true; // Load more বাটন লুকাইয়ে রাখলাম
  }

  moreBtn.onclick = render;
  render();

  // Viewer
  var v = $("#viewer"), vi = v.querySelector(".v-img"), cur = 0, opener = null, x0 = null;

  function show(i) {
    cur = (i + photos.length) % photos.length;
    var p = photos[cur];
    vi.src = path(p);
    vi.alt = p.title || "Photograph";
    v.querySelector(".v-title").textContent = p.title || "";
    v.querySelector(".v-date").textContent = p.date || "";
    new Image().src = path(photos[(cur + 1) % photos.length]);
  }

  function open(i, from) {
    opener = from;
    show(i);
    v.hidden = false;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(function () { v.classList.add("open"); });
    v.querySelector(".v-close").focus();
  }

  function close() {
    v.classList.remove("open");
    setTimeout(function () { v.hidden = true; }, 200);
    document.body.style.overflow = "";
    if (opener) opener.focus();
  }

  v.querySelector(".v-close").onclick = close;
  v.querySelector(".v-prev").onclick = function () { show(cur - 1); };
  v.querySelector(".v-next").onclick = function () { show(cur + 1); };
  v.addEventListener("click", function (e) { if (e.target === v) close(); });

  document.addEventListener("keydown", function (e) {
    if (v.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(cur - 1);
    else if (e.key === "ArrowRight") show(cur + 1);
  });

  v.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  v.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    x0 = null;
    if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
  });
})();
