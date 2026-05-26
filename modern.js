import {
  loadSiteData,
  setTitle,
  escapeHtml,
  joinNonEmpty,
  normalizeUrl,
  smoothScrollToHash
} from './assets/common.js';

const THEME_KEY = 'portfolio_theme_v1';

function getTheme() {
  try { return localStorage.getItem(THEME_KEY); } catch { return null; }
}
function setTheme(v) {
  try { localStorage.setItem(THEME_KEY, v); } catch { /* ignore */ }
}
function applyTheme(theme) {
  const root = document.documentElement;
  if (!theme) root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', theme);
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') || getTheme() || 'dark';
  const next = cur === 'light' ? 'dark' : 'light';
  applyTheme(next);
  setTheme(next);
}
function maybeEl(id) { return document.getElementById(id); }
function setTextIfExists(id, text) {
  const node = maybeEl(id);
  if (!node) return;
  node.textContent = text ?? '';
}
function setHrefIfExists(id, url) {
  const a = maybeEl(id);
  if (!a) return;
  if (!url) {
    a.setAttribute('href', '#');
    a.setAttribute('aria-disabled', 'true');
    a.style.opacity = '0.55';
    a.style.pointerEvents = 'none';
    return;
  }
  a.removeAttribute('aria-disabled');
  a.style.opacity = '';
  a.style.pointerEvents = '';
  a.href = url;
}
function renderHighlights(list) {
  const ul = maybeEl('highlights');
  if (!ul) return;
  ul.innerHTML = '';
  for (const item of (list || [])) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  }
}

function topicIconSvg(area) {
  const key = area.iconKey || area.id || '';
  const icons = {
    'mpc-distributed': `
      <svg viewBox="0 0 72 72" role="img" aria-label="MPC and distributed systems icon">
        <g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="20" cy="21" r="7"/><circle cx="52" cy="21" r="7"/><circle cx="20" cy="51" r="7"/><circle cx="52" cy="51" r="7"/>
          <path d="M27 21h18M27 51h18M20 28v16M52 28v16M25 26l22 20M47 26L25 46" opacity=".72"/>
          <rect x="29" y="30" width="14" height="13" rx="3"/>
          <path d="M32 30v-3a4 4 0 0 1 8 0v3"/>
        </g>
      </svg>`,
    'pqc': `
      <svg viewBox="0 0 72 72" role="img" aria-label="Post-quantum cryptography icon">
        <g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M36 8l24 10v17c0 16-10 25-24 30-14-5-24-14-24-30V18L36 8z"/>
          <path d="M24 27l12-7 12 7-12 7-12-7zM24 42l12-7 12 7-12 7-12-7z" opacity=".78"/>
          <path d="M24 27v15M48 27v15M36 34v15" opacity=".62"/>
        </g>
      </svg>`,
    'ppml': `
      <svg viewBox="0 0 72 72" role="img" aria-label="Privacy-preserving ML icon">
        <g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="19" cy="20" r="5"/><circle cx="19" cy="52" r="5"/><circle cx="37" cy="36" r="5"/><circle cx="55" cy="20" r="5"/><circle cx="55" cy="52" r="5"/>
          <path d="M24 22l8 9M24 50l8-9M42 34l8-9M42 38l8 9" opacity=".70"/>
          <path d="M12 36c7-10 15-15 24-15s17 5 24 15c-7 10-15 15-24 15S19 46 12 36z" opacity=".75"/>
          <path d="M16 60L60 12"/>
        </g>
      </svg>`
  };
  return icons[key] || `<span>${area.icon || '◎'}</span>`;
}

function renderAreaPreview(areas) {
  const root = maybeEl('homeResearchCards');
  if (!root) return;
  root.innerHTML = '';
  for (const area of (areas || []).slice(0, 3)) {
    const a = document.createElement('a');
    a.className = 'research-topic reveal';
    a.href = `./research/#${area.id || ''}`;

    const icon = document.createElement('div');
    icon.className = 'topic-thumb';
    icon.innerHTML = topicIconSvg(area);

    const body = document.createElement('div');
    body.className = 'topic-body';

    const title = document.createElement('div');
    title.className = 'topic-title';
    title.textContent = area.title || 'Research area';

    const q = document.createElement('div');
    q.className = 'topic-question';
    q.textContent = area.question || area.summary || '';

    const tags = document.createElement('div');
    tags.className = 'topic-tags';
    for (const tag of (area.tags || []).slice(0, 5)) {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      tags.appendChild(span);
    }

    body.appendChild(title);
    body.appendChild(q);
    body.appendChild(tags);
    a.appendChild(icon);
    a.appendChild(body);
    root.appendChild(a);
  }
}
function attachReveal() {
  const obs = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('on');
        obs.unobserve(e.target);
      }
    }
  }, { threshold: 0.12 });
  for (const node of Array.from(document.querySelectorAll('.reveal'))) obs.observe(node);
}
async function init() {
  applyTheme(getTheme() || 'dark');
  const themeBtn = maybeEl('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  const site = await loadSiteData('./data/site.json');
  setTitle(site?.name || 'Portfolio', 'Home');
  setTextIfExists('brandName', site?.name || 'Portfolio');
  setTextIfExists('name', site?.name || 'YOUR NAME');
  setTextIfExists('tagline', site?.tagline || '');
  setTextIfExists('summary', site?.summary || '');
  setTextIfExists('metaLine', joinNonEmpty([site?.location, site?.email]));
  renderHighlights(site?.highlights || []);
  renderAreaPreview(site?.researchAreas || []);
  setHrefIfExists('btnGithub', normalizeUrl(site?.links?.github || ''));
  setHrefIfExists('btnLinkedIn', normalizeUrl(site?.links?.linkedin || ''));
  setHrefIfExists('btnCVLong', site?.links?.cvLongPdf || '../resume/HamidReza-Saadi-Dadmarzi-CV-long.pdf');
  setHrefIfExists('btnCVShort', site?.links?.cvShortPdf || '../resume/HamidReza-Saadi-Dadmarzi-CV-short.pdf');
  attachReveal();
  smoothScrollToHash();
}
init().catch((err) => {
  console.error(err);
  document.body.innerHTML = `<pre style="padding:20px">Modern UI failed to load.\n\n${escapeHtml(String(err))}</pre>`;
});
