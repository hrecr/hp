export const THEME_KEY = 'portfolio_theme_v1';

export function getTheme() {
  try { return localStorage.getItem(THEME_KEY); } catch { return null; }
}

export function setTheme(v) {
  try { localStorage.setItem(THEME_KEY, v); } catch { /* ignore */ }
}

export function applyTheme(theme) {
  const root = document.documentElement;
  if (!theme) {
    root.removeAttribute('data-theme');
    return;
  }
  root.setAttribute('data-theme', theme);
}

export function initTheme(defaultTheme = 'dark') {
  applyTheme(getTheme() || defaultTheme);

  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || getTheme() || defaultTheme;
    const next = cur === 'light' ? 'dark' : 'light';
    applyTheme(next);
    setTheme(next);
  });
}

export function maybeEl(id) {
  return document.getElementById(id);
}

export function el(id) {
  const node = document.getElementById(id);
  if (!node) throw new Error(`Missing #${id}`);
  return node;
}

export function setHref(id, url) {
  const a = el(id);
  if (!url) {
    a.setAttribute('href', '#');
    a.setAttribute('aria-disabled', 'true');
    a.style.opacity = '0.55';
    a.style.pointerEvents = 'none';
    return;
  }
  a.href = url;
  a.removeAttribute('aria-disabled');
  a.style.opacity = '';
  a.style.pointerEvents = '';
}

export function attachReveal() {
  const nodes = Array.from(document.querySelectorAll('.reveal'));
  if (!nodes.length) return;

  const obs = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('on');
        obs.unobserve(e.target);
      }
    }
  }, { threshold: 0.12 });

  for (const node of nodes) obs.observe(node);
}
