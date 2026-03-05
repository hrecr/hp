import { loadSiteData, setTitle, normalizeUrl } from '../../assets/common.js';
import { initTheme, el, attachReveal } from '../page-helpers.js';

function renderService(items) {
  const root = el('serviceList');
  root.innerHTML = '';
  const list = Array.isArray(items) ? items : [];

  if (!list.length) {
    const li = document.createElement('li');
    li.textContent = '—';
    root.appendChild(li);
    return;
  }

  for (const item of list) {
    const li = document.createElement('li');
    li.className = 'reveal';

    if (!item || typeof item === 'string') {
      li.textContent = String(item || '');
      root.appendChild(li);
      continue;
    }

    const text = item.text || '';
    li.appendChild(document.createTextNode(text));

    if (Array.isArray(item.links) && item.links.length) {
      li.appendChild(document.createTextNode(' ('));
      item.links.forEach((L, idx) => {
        if (idx) li.appendChild(document.createTextNode(' · '));
        const a = document.createElement('a');
        a.href = normalizeUrl(L.url || '');
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = L.label || L.url || 'link';
        li.appendChild(a);
      });
      li.appendChild(document.createTextNode(')'));
    }

    root.appendChild(li);
  }
}

async function init() {
  initTheme('dark');

  const site = await loadSiteData('../../data/site.json');
  el('brandName').textContent = site?.name || 'Portfolio';
  setTitle(site?.name || 'Portfolio', 'Service');

  renderService(site?.academicServices || []);
  attachReveal();
}

init().catch((err) => {
  console.error(err);
  document.body.innerHTML = `<pre style="padding:20px">Service page failed to load.\n\n${String(err)}</pre>`;
});
