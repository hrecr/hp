import { loadSiteData, setTitle } from '../../assets/common.js';
import { initTheme, el, attachReveal } from '../page-helpers.js';

function cardWithList(title, sub, items) {
  const c = document.createElement('article');
  c.className = 'card reveal';

  const t = document.createElement('div');
  t.className = 'title';
  t.textContent = title;
  c.appendChild(t);

  if (sub) {
    const s = document.createElement('div');
    s.className = 'sub';
    s.textContent = sub;
    c.appendChild(s);
  }

  if (Array.isArray(items) && items.length) {
    const ul = document.createElement('ul');
    ul.className = 'bullets';
    for (const it of items) {
      const li = document.createElement('li');
      li.textContent = it;
      ul.appendChild(li);
    }
    c.appendChild(ul);
  }

  return c;
}

function renderTeaching(groups) {
  const root = el('teachingCards');
  root.innerHTML = '';
  const list = Array.isArray(groups) ? groups : [];

  if (!list.length) {
    root.appendChild(cardWithList('No teaching listed', '', ['Add teachingExperience in data/site.json']));
    return;
  }

  for (const g of list) {
    const org = g.org || 'Organization';
    const items = (g.items || []).map(x => {
      if (!x) return '';
      if (typeof x === 'string') return x;
      const course = x.course || '';
      const term = x.term || '';
      return [course, term].filter(Boolean).join(' — ');
    }).filter(Boolean);

    root.appendChild(cardWithList(org, '', items));
  }
}

async function init() {
  initTheme('dark');

  const site = await loadSiteData('../../data/site.json');
  el('brandName').textContent = site?.name || 'Portfolio';
  setTitle(site?.name || 'Portfolio', 'Teaching');

  renderTeaching(site?.teachingExperience || []);
  attachReveal();
}

init().catch((err) => {
  console.error(err);
  document.body.innerHTML = `<pre style="padding:20px">Teaching page failed to load.\n\n${String(err)}</pre>`;
});
