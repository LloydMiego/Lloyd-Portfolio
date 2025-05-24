document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('section');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  revealEls.forEach(el => { el.classList.add('reveal'); obs.observe(el); });

  document.getElementById('theme-toggle').onclick = () => {
    document.documentElement.dataset.theme =
      document.documentElement.dataset.theme === 'light' ? '' : 'light';
  };

  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    toTop.style.display = window.pageYOffset > 300 ? 'block' : 'none';
  });
  toTop.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );
});
