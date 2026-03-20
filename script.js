// ===========================
//  INSTITUTO DO MOVIMENTO
//  script.js
// ===========================

(function () {

  // ── Navbar shadow on scroll ──
  const navbar = document.getElementById('navbar');

  function handleScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });


  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  // ── Nav CTA click feedback ──
  const navCta = document.querySelector('.nav-cta');
  if (navCta) {
    navCta.addEventListener('click', function () {
      document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ── Services tab switcher ──
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Remove active from all buttons and panels
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.servicos-panel').forEach(p => p.classList.remove('active'));

      // Activate clicked
      this.classList.add('active');
      const panel = document.getElementById('panel-' + this.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });

})();
