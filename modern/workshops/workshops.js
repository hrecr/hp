import { loadSiteData, setTitle, joinNonEmpty } from '../../assets/common.js';
import { initTheme, el, attachReveal } from '../page-helpers.js';

function card(title, sub, desc) {
  const c = document.createElement('article');
  c.className = 'card reveal';

  const t = document.createElement('div');
  t.className = 'title';
  t.textContent = title || '';

  const s = document.createElement('div');
  s.className = 'sub';
  s.textContent = sub || '';

  const d = document.createElement('div');
  d.className = 'desc';
  d.textContent = desc || '';

  c.appendChild(t);
  if (sub) c.appendChild(s);
  if (desc) c.appendChild(d);
  return c;
}

function renderWorkshops(items) {
  const root = el('workshopsCards');
  root.innerHTML = '';
  const list = Array.isArray(items) ? items : [];

  if (!list.length) {
    root.appendChild(card('No workshops listed', '', 'Add conferencesWorkshops in data/site.json'));
    return;
  }

  for (const w of list) {
    const title = w?.name || 'Event';
    const sub = joinNonEmpty([w?.host, w?.location]);
    const desc = w?.date || '';
    root.appendChild(card(title, sub, desc));
  }
}

async function init() {
  initTheme('dark');

  const site = await loadSiteData('../../data/site.json');
  el('brandName').textContent = site?.name || 'Portfolio';
  setTitle(site?.name || 'Portfolio', 'Workshops');

  renderWorkshops(site?.conferencesWorkshops || []);
  attachReveal();
}

init().catch((err) => {
  console.error(err);
  document.body.innerHTML = `<pre style="padding:20px">Workshops page failed to load.\n\n${String(err)}</pre>`;
});
