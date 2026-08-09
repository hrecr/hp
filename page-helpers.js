export const THEME_KEY = 'portfolio_theme_v2';

const RESEARCH_ICONS = {
  'mpc-distributed': `
    <rect x="16" y="16" width="6" height="6" rx="1"></rect>
    <rect x="2" y="16" width="6" height="6" rx="1"></rect>
    <rect x="9" y="2" width="6" height="6" rx="1"></rect>
    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
    <path d="M12 12V8"></path>`,
  pqc: `
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
    <path d="m9 12 2 2 4-4"></path>`,
  ppml: `
    <path d="M12 20v2M12 2v2M17 20v2M17 2v2M2 12h2M2 17h2M2 7h2M20 12h2M20 17h2M20 7h2M7 20v2M7 2v2"></path>
    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
    <rect x="8" y="8" width="8" height="8" rx="1"></rect>`
};

export function researchIconMarkup(area = {}) {
  const key = area.iconKey || area.id || 'mpc-distributed';
  const paths = RESEARCH_ICONS[key] || RESEARCH_ICONS['mpc-distributed'];
  return `<svg class="topic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
    aria-hidden="true">${paths}</svg>`;
}

const ROOT_LINKS = [
  ['Research', 'research/'],
  ['Publications', 'publications/'],
  ['Projects', 'projects/'],
  ['Teaching', 'teaching/'],
  ['CV', 'resume/HamidReza-Saadi-Dadmarzi-CV-short.pdf'],
  ['Contact', 'contact/']
];

const FOOTER_LINKS = [
  ['Research', 'research/'],
  ['Publications', 'publications/'],
  ['Projects', 'projects/'],
  ['Teaching', 'teaching/'],
  ['Education', 'education/'],
  ['Experience', 'experience/'],
  ['Services', 'services/'],
  ['About', 'about/'],
  ['Contact', 'contact/']
];

const SITE_ROOT = new URL('./', import.meta.url);

function siteHref(path = '') {
  return new URL(path, SITE_ROOT).href;
}

export function getTheme() {
  try { return localStorage.getItem(THEME_KEY); } catch { return null; }
}

export function setTheme(value) {
  try { localStorage.setItem(THEME_KEY, value); } catch { /* no-op */ }
}

export function applyTheme(theme) {
  if (theme === 'light' || theme === 'dark') {
    document.documentElement.setAttribute('data-theme', theme);
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

function currentResolvedTheme() {
  const explicit = document.documentElement.getAttribute('data-theme');
  if (explicit) return explicit;
  return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function updateThemeButton(button) {
  const light = currentResolvedTheme() === 'light';
  button.querySelector('.theme-icon')?.replaceChildren(document.createTextNode(light ? '☾' : '☀'));
  button.setAttribute('aria-label', light ? 'Use dark theme' : 'Use light theme');
  button.title = light ? 'Use dark theme' : 'Use light theme';
}

function buildNavigation() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  nav.id = nav.id || 'primaryNav';
  nav.replaceChildren();

  for (const [label, path] of ROOT_LINKS) {
    const link = document.createElement('a');
    link.className = 'navlink';
    link.href = siteHref(path);
    link.textContent = label;

    const destinationPath = new URL(link.href, location.href).pathname.replace(/\/+$/, '/');
    const currentPath = location.pathname.replace(/\/+$/, '/');
    const section = currentPath === destinationPath ||
      (label !== 'CV' && destinationPath !== '/' && currentPath.startsWith(destinationPath));

    if (section) link.setAttribute('aria-current', 'page');
    nav.appendChild(link);
  }

  const themeButton = document.createElement('button');
  themeButton.className = 'theme';
  themeButton.id = 'themeToggle';
  themeButton.type = 'button';
  themeButton.innerHTML = '<span class="theme-icon" aria-hidden="true">◐</span><span class="sr-only">Switch color theme</span>';
  nav.appendChild(themeButton);
}

function ensureMobileToggle() {
  const header = document.querySelector('.topbar');
  const nav = document.querySelector('.nav');
  if (!header || !nav) return;

  let toggle = document.getElementById('navToggle');
  if (!toggle) {
    toggle = document.createElement('button');
    toggle.id = 'navToggle';
    toggle.className = 'nav-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-controls', nav.id || 'primaryNav');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    toggle.innerHTML = '<span></span><span></span><span></span>';
    header.insertBefore(toggle, nav);
  }

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  nav.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !nav.classList.contains('is-open')) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    toggle.focus();
  });
}

function ensureSkipLink() {
  const main = document.querySelector('main');
  if (!main) return;

  main.id = main.id || 'main';
  if (document.querySelector('.skip-link')) return;

  const link = document.createElement('a');
  link.className = 'skip-link';
  link.href = `#${main.id}`;
  link.textContent = 'Skip to content';
  document.body.prepend(link);
}

function populateFooterLinks(footer) {
  const links = footer.querySelector('.footer-links');
  if (!links) return;

  links.replaceChildren();
  for (const [label, path] of FOOTER_LINKS) {
    const link = document.createElement('a');
    link.href = siteHref(path);
    link.textContent = label;
    links.appendChild(link);
  }

  const backToTop = document.createElement('a');
  backToTop.href = '#top';
  backToTop.textContent = 'Back to top ↑';
  links.appendChild(backToTop);
}

function ensureFooter(displayName = 'Reza Saadi') {
  let footer = document.querySelector('.footer');

  if (!footer) {
    footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
      <div class="footer-inner">
        <p>© <span class="footer-year"></span> ${displayName}</p>
        <div class="footer-links"></div>
      </div>`;
    document.body.appendChild(footer);
  }

  populateFooterLinks(footer);
}

export function initSiteShell({ displayName = 'Reza Saadi' } = {}) {
  document.documentElement.classList.add('js');
  const brandName = document.getElementById('brandName');
  if (brandName) brandName.textContent = displayName;

  const brand = document.querySelector('.brand');
  const oldMark = brand?.querySelector('.logo');
  if (oldMark) {
    oldMark.className = 'brand-mark';
    oldMark.textContent = 'RS';
  }

  buildNavigation();
  ensureMobileToggle();
  ensureSkipLink();
  ensureFooter(displayName);

  document.querySelectorAll('#currentYear, .footer-year')
    .forEach(node => { node.textContent = String(new Date().getFullYear()); });
}

export function initTheme(defaultTheme = 'auto') {
  initSiteShell();
  applyTheme(getTheme() || defaultTheme);

  const button = document.getElementById('themeToggle');
  if (!button) return;
  updateThemeButton(button);

  button.addEventListener('click', () => {
    const next = currentResolvedTheme() === 'light' ? 'dark' : 'light';
    applyTheme(next);
    setTheme(next);
    updateThemeButton(button);
  });
}

export function maybeEl(id) {
  return document.getElementById(id);
}

export function el(id) {
  const node = maybeEl(id);
  if (!node) throw new Error(`Missing #${id}`);
  return node;
}

export function setHref(id, url) {
  const anchor = el(id);
  if (!url) {
    anchor.hidden = true;
    anchor.removeAttribute('href');
    return;
  }
  anchor.hidden = false;
  anchor.href = url;
}

export function attachReveal() {
  const nodes = Array.from(document.querySelectorAll('.reveal'));
  if (!nodes.length) return;

  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    nodes.forEach(node => node.classList.add('on'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('on');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.08 });

  nodes.forEach(node => observer.observe(node));
}
