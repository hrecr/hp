import {
  loadSiteData,
  setTitle,
  escapeHtml,
  joinNonEmpty,
  normalizeUrl,
  smoothScrollToHash
} from '../assets/common.js';

const THEME_KEY = 'portfolio_theme_v1';

function getTheme() {
  try { return localStorage.getItem(THEME_KEY); } catch { return null; }
}
function setTheme(v) {
  try { localStorage.setItem(THEME_KEY, v); } catch { /* ignore */ }
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (!theme) {
    root.removeAttribute('data-theme');
    return;
  }
  root.setAttribute('data-theme', theme);
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') || getTheme() || 'dark';
  const next = cur === 'light' ? 'dark' : 'light';
  applyTheme(next);
  setTheme(next);
}

function maybeEl(id) {
  return document.getElementById(id);
}

function el(id) {
  const node = document.getElementById(id);
  if (!node) throw new Error(`Missing #${id}`);
  return node;
}

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
  const ul = el('highlights');
  ul.innerHTML = '';
  for (const item of (list || [])) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  }
}

function renderSkills(skillsObj) {
  const root = el('skills');
  root.innerHTML = '';

  const entries = Object.entries(skillsObj || {});
  if (!entries.length) {
    root.textContent = 'Add skills in data/site.json';
    return;
  }

  for (const [label, items] of entries) {
    const row = document.createElement('div');
    row.className = 'skill-row reveal';

    const lab = document.createElement('div');
    lab.className = 'label';
    lab.textContent = label;

    const it = document.createElement('div');
    it.className = 'items';
    for (const s of (items || [])) {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = s;
      it.appendChild(chip);
    }

    row.appendChild(lab);
    row.appendChild(it);
    root.appendChild(row);
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

  for (const node of Array.from(document.querySelectorAll('.reveal'))) {
    obs.observe(node);
  }
}

async function init() {
  applyTheme(getTheme() || 'dark');

  const themeBtn = maybeEl('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  const site = await loadSiteData('../data/site.json');

  setTitle(site?.name || 'Portfolio', 'Modern');
  setTextIfExists('brandName', site?.name || 'Portfolio');
  setTextIfExists('name', site?.name || 'YOUR NAME');
  setTextIfExists('tagline', site?.tagline || '');
  setTextIfExists('summary', site?.summary || '');
  setTextIfExists('bio', site?.summary || '');
  setTextIfExists('metaLine', joinNonEmpty([site?.location, site?.email]));
  renderHighlights(site?.highlights || []);
  renderSkills(site?.skills || {});
  setHrefIfExists('btnGithub', normalizeUrl(site?.links?.github || ''));
  setHrefIfExists('btnLinkedIn', normalizeUrl(site?.links?.linkedin || ''));
  setHrefIfExists('btnCV', site?.links?.cvPdf || '../resume/CV.pdf');
  setTextIfExists('contactPitch', site?.contact?.pitch || '');
  setHrefIfExists('mailBtn', site?.email ? `mailto:${site.email}` : '');
  setTextIfExists('loc', site?.location || '—');
  setTextIfExists('tz', site?.contact?.timezone || '—');
  setHrefIfExists('gh', normalizeUrl(site?.links?.github || ''));
  setTextIfExists('gh', site?.githubUsername ? site.githubUsername : (site?.links?.github ? 'GitHub' : '—'));

  setHrefIfExists('li', normalizeUrl(site?.links?.linkedin || ''));
  setTextIfExists('li', site?.links?.linkedin ? 'LinkedIn profile' : '—');
  attachReveal();
  smoothScrollToHash();
}

init().catch((err) => {
  console.error(err);
  document.body.innerHTML = `<pre style="padding:20px">Modern UI failed to load.\n\n${escapeHtml(String(err))}</pre>`;
});

// import { loadSiteData } from '../../assets/common.js';
// import { injectContact } from '../contact-widget.js'; 

// const site = await loadSiteData('../../data/site.json');
// await injectContact(site, '../partials/contact.html');