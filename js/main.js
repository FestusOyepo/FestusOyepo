document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initDropdowns();
  initStatsCounters();
  initServicePreselect();
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
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

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
