  // ===== DARK MODE =====
  const html = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');

  // Aplica tema salvo ou preferência do sistema
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  } else if (prefersDark) {
    html.setAttribute('data-theme', 'dark');
  }

  toggleBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // Escuta mudança de preferência do sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });

  // Nav scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Scroll reveal observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal, .service-card, .faq-card, .step, .section-line, .strategy-pillar, .strategy-plus, .strategy-highlight').forEach(el => {
    observer.observe(el);
  });

  // Stagger service cards
  document.querySelectorAll('.service-card').forEach((card, i) => {
    card.style.transitionDelay = (i * 0.1) + 's';
  });

  // Stagger strategy pillars
  document.querySelectorAll('.strategy-pillar').forEach((pillar, i) => {
    pillar.style.transitionDelay = (i * 0.15) + 's';
  });
