import { loadSiteData, setTitle } from '../../assets/common.js';
import { initTheme, el, attachReveal } from '../page-helpers.js';

function renderHonors(items) {
  const root = el('awardsList');
  root.innerHTML = '';
  const list = Array.isArray(items) ? items : [];

  if (!list.length) {
    const li = document.createElement('li');
    li.textContent = '—';
    root.appendChild(li);
    return;
  }

  for (const a of list) {
    const li = document.createElement('li');
    li.className = 'reveal';
    li.textContent = String(a);
    root.appendChild(li);
  }
}

async function init() {
  initTheme('dark');

  const site = await loadSiteData('../../data/site.json');
  el('brandName').textContent = site?.name || 'Portfolio';
  setTitle(site?.name || 'Portfolio', 'Awards');

  renderHonors(site?.honorsAwards || []);
  attachReveal();
}

init().catch((err) => {
  console.error(err);
  document.body.innerHTML = `<pre style="padding:20px">Awards page failed to load.\n\n${String(err)}</pre>`;
});
