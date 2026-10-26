(function () {
  "use strict";
  var cfg = window.SITE_CONFIG || {};
  var X = cfg.xUrl || "https://x.com/FestusJones";

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function usd(n) { return "$" + Number(n).toLocaleString("en-US"); }

  /* ---------- Pricing cards (from config.js) ---------- */
  var packs = document.getElementById("packages");
  if (packs && cfg.packages) {
    cfg.packages.forEach(function (p) {
      var card = el("article", "card pack reveal");
      card.appendChild(el("span", "tag", p.tag));
      card.appendChild(el("h3", null, p.name));
      var price = el("p", "price");
      price.appendChild(el("span", "amt", usd(p.price)));
      price.appendChild(el("span", "cur", " USD"));
      card.appendChild(price);
      if (p.clips) card.appendChild(el("p", "per", usd(p.price / p.clips) + " per clip"));
      card.appendChild(el("p", null, p.summary));
      var ul = el("ul", "ticks");
      p.includes.forEach(function (t) { ul.appendChild(el("li", null, t)); });
      card.appendChild(ul);
      var terms = el("p", "terms");
      var rev = p.revisions && p.revisions.trim() ? p.revisions : "Revision limit confirmed before work starts";
      var tat = p.turnaround && p.turnaround.trim() ? p.turnaround : "delivery time confirmed before work starts";
      terms.textContent = rev + ". " + tat.charAt(0).toUpperCase() + tat.slice(1) + ".";
      card.appendChild(terms);
      if (p.notIncluded) card.appendChild(el("p", "fine", p.notIncluded));
      var a = el("a", "btn btn-block", "Order via X");
      a.href = X; a.target = "_blank"; a.rel = "noopener";
      a.setAttribute("aria-label", "Order " + p.name + " via X");
      card.appendChild(a);
      packs.appendChild(card);
    });
  }

  /* ---------- Sample audits ---------- */
  var samples = document.getElementById("samples");
  if (samples && cfg.sampleAudits) {
    cfg.sampleAudits.forEach(function (s) {
      var c = el("article", "card sample reveal");
      var top = el("div", "sample-top");
      top.appendChild(el("span", "tag", s.topic));
      top.appendChild(el("span", "badge", "Sample audit"));
      c.appendChild(top);
      [["Observable issue", s.issue], ["Recommendation", s.recommendation],
       ["Why it may help", s.why], ["Practical next step", s.next]].forEach(function (r) {
        var d = el("div", "row");
        d.appendChild(el("h4", null, r[0]));
        d.appendChild(el("p", null, r[1]));
        c.appendChild(d);
      });
      samples.appendChild(c);
    });
  }

  /* ---------- Real results (appear only if added in config.js) ---------- */
  function renderResults(id, list) {
    var box = document.getElementById(id);
    if (!box || !list || !list.length) return;
    box.hidden = false;
    list.forEach(function (k) {
      var c = el("article", "card reveal");
      c.appendChild(el("span", "badge badge-ok", k.evidenceLabel || "Verified"));
      c.appendChild(el("h3", null, k.title));
      c.appendChild(el("p", null, k.summary));
      if (k.evidenceUrl) {
        var img = document.createElement("img");
        img.src = k.evidenceUrl; img.alt = k.title + " evidence"; img.loading = "lazy";
        c.appendChild(img);
      }
      if (k.link) {
        var a = el("a", "text-link", "View channel");
        a.href = k.link; a.target = "_blank"; a.rel = "noopener";
        c.appendChild(a);
      }
      box.appendChild(c);
    });
  }
  renderResults("twitchResults", cfg.twitchResults);
  renderResults("caseStudies", cfg.caseStudies);

  /* ---------- Mobile menu ---------- */
  var btn = document.getElementById("menuBtn");
  var links = document.getElementById("navLinks");
  function setMenu(open) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    links.classList.toggle("open", open);
  }
  if (btn && links) {
    btn.addEventListener("click", function () {
      setMenu(btn.getAttribute("aria-expanded") !== "true");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
  }

  /* ---------- Copy template ---------- */
  var copy = document.getElementById("copyBtn");
  var tpl = document.getElementById("tpl");
  var note = document.getElementById("copyNote");
  if (copy && tpl) {
    copy.addEventListener("click", function () {
      function ok() { note.textContent = "Copied. Fill in the brackets, then paste it into a message to me on X."; }
      function fail() { tpl.removeAttribute("readonly"); tpl.focus(); tpl.select(); note.textContent = "Select the text above and copy it manually."; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(tpl.value).then(ok, fail);
      } else { fail(); }
    });
  }

  /* ---------- Subtle reveal (content stays visible if this fails) ---------- */
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("js-reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    items.forEach(function (i) { io.observe(i); });
  }
})();
