document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initDropdowns();
  initStatsCounters();
  initServicePreselect();
  initMobileNav();
  initThemeToggle();
});

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const panel = document.getElementById('contact-success');
  const errorEl = document.getElementById('contact-error');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (errorEl) errorEl.classList.add('hidden');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        form.classList.add('hidden');
        panel.classList.remove('hidden');
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      if (errorEl) errorEl.classList.remove('hidden');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    }
  });
}

function initDropdowns() {
  const triggers = document.querySelectorAll('[data-dropdown-trigger]');
  if (!triggers.length) return;

  const closeAll = (except) => {
    triggers.forEach((t) => {
      if (t === except) return;
      const item = t.closest('.nav-item');
      if (item) item.classList.remove('open');
      t.setAttribute('aria-expanded', 'false');
    });
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const item = trigger.closest('.nav-item');
      const isOpen = item ? item.classList.contains('open') : false;
      closeAll(trigger);
      if (item) item.classList.toggle('open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  document.addEventListener('click', (e) => {
    triggers.forEach((t) => {
      const item = t.closest('.nav-item');
      if (item && !item.contains(e.target)) {
        item.classList.remove('open');
        t.setAttribute('aria-expanded', 'false');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });
}

function initThemeToggle() {
  const btns = document.querySelectorAll('.theme-toggle');
  if (!btns.length) return;

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        try { localStorage.setItem('festus-theme', 'dark'); } catch (e) {}
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        try { localStorage.setItem('festus-theme', 'light'); } catch (e) {}
      }
    });
  });
}

function initMobileNav() {
  const header = document.querySelector('.site-header');
  const navEl = document.querySelector('.site-nav');
  const contactItem = document.querySelector('.header-actions .nav-item');
  if (!header || !navEl) return;

  const menuBtn = document.createElement('button');
  menuBtn.type = 'button';
  menuBtn.className = 'mobile-menu-btn';
  menuBtn.setAttribute('aria-label', 'Open menu');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
  header.appendChild(menuBtn);

  const overlay = document.createElement('div');
  overlay.className = 'mobile-nav-overlay';

  const panel = document.createElement('div');
  panel.className = 'mobile-nav-panel';

  const panelHead = document.createElement('div');
  panelHead.className = 'mobile-nav-head';
  const brandEl = document.querySelector('.brand');
  if (brandEl) panelHead.appendChild(brandEl.cloneNode(true));
  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'mobile-nav-close';
  closeBtn.setAttribute('aria-label', 'Close menu');
  closeBtn.innerHTML = '&times;';
  panelHead.appendChild(closeBtn);
  panel.appendChild(panelHead);

  const list = document.createElement('div');
  list.className = 'mobile-nav-list';

  Array.from(navEl.children).forEach((child) => {
    if (child.classList.contains('nav-link')) {
      const a = child.cloneNode(true);
      a.classList.add('mobile-nav-link');
      list.appendChild(a);
    } else if (child.classList.contains('nav-item')) {
      const link = child.querySelector('a.nav-link');
      if (link) {
        const a = link.cloneNode(true);
        a.classList.add('mobile-nav-link');
        list.appendChild(a);
      }
      const sub = document.createElement('div');
      sub.className = 'mobile-nav-sublist';
      child.querySelectorAll('.nav-dropdown a').forEach((a) => {
        sub.appendChild(a.cloneNode(true));
      });
      list.appendChild(sub);
    }
  });

  panel.appendChild(list);

  const divider = document.createElement('div');
  divider.className = 'mobile-nav-divider';
  panel.appendChild(divider);

  if (contactItem) {
    const contactLink = contactItem.querySelector('a.btn-primary');
    if (contactLink) {
      const btn = contactLink.cloneNode(true);
      btn.className = 'btn btn-primary mobile-contact-btn';
      panel.appendChild(btn);
    }

    const socials = document.createElement('div');
    socials.className = 'mobile-nav-socials';
    contactItem.querySelectorAll('.nav-dropdown a').forEach((a) => {
      socials.appendChild(a.cloneNode(true));
    });
    panel.appendChild(socials);
  }

  const themeRow = document.createElement('button');
  themeRow.type = 'button';
  themeRow.className = 'theme-toggle mobile-theme-toggle';
  themeRow.setAttribute('aria-label', 'Toggle light and dark mode');
  themeRow.innerHTML = '<span class="icon-sun" aria-hidden="true">☀</span><span class="icon-moon" aria-hidden="true">☾</span><span class="mobile-theme-label">Theme</span>';
  panel.appendChild(themeRow);

  overlay.appendChild(panel);
  document.body.appendChild(overlay);

  const openMenu = () => {
    overlay.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
  };
  const closeMenu = () => {
    overlay.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  };

  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeMenu();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
  panel.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', closeMenu);
  });
}

function initStatsCounters() {
  const tiles = document.querySelectorAll('[data-count-to]');
  if (!tiles.length) return;

  const animate = (el) => {
    const target = parseFloat(el.dataset.countTo);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = (target * eased).toFixed(1);
      el.innerHTML = value + '<span class="suffix">' + suffix + '</span>';
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      if (prefersReduced) {
        const target = parseFloat(el.dataset.countTo);
        const suffix = el.dataset.suffix || '';
        el.innerHTML = target.toFixed(1) + '<span class="suffix">' + suffix + '</span>';
      } else {
        animate(el);
      }
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  tiles.forEach((el) => observer.observe(el));
}

function initServicePreselect() {
  const select = document.getElementById('service');
  if (!select) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('service');
  if (!slug) return;

  const option = select.querySelector('option[data-slug="' + slug + '"]');
  if (option) select.value = option.value;
}
