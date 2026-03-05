import { loadSiteData, setTitle, joinNonEmpty, prettyYearRange } from '../../assets/common.js';
import { initTheme, el, attachReveal } from '../page-helpers.js';

function renderExperience(list) {
  const root = el('experienceTimeline');
  root.innerHTML = '';

  if (!Array.isArray(list) || !list.length) {
    root.textContent = 'Add experience in data/site.json';
    return;
  }

  for (const item of list) {
    const entry = document.createElement('div');
    entry.className = 'entry reveal';

    const top = document.createElement('div');
    top.className = 'top';

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = `${item.role || ''}${item.org ? ` @ ${item.org}` : ''}`.trim();

    const when = document.createElement('div');
    when.className = 'when';
    when.textContent = prettyYearRange(item.start, item.end);

    top.appendChild(title);
    top.appendChild(when);

    const org = document.createElement('div');
    org.className = 'org';
    org.textContent = joinNonEmpty([item.location]).trim();

    entry.appendChild(top);
    if (org.textContent) entry.appendChild(org);

    if (Array.isArray(item.bullets) && item.bullets.length) {
      const ul = document.createElement('ul');
      ul.className = 'bullets';
      for (const b of item.bullets) {
        const li = document.createElement('li');
        li.textContent = b;
        ul.appendChild(li);
      }
      entry.appendChild(ul);
    }

    root.appendChild(entry);
  }
}

async function init() {
  initTheme('dark');

  const site = await loadSiteData('../../data/site.json');
  el('brandName').textContent = site?.name || 'Portfolio';
  setTitle(site?.name || 'Portfolio', 'Experience');

  renderExperience(site?.experience || []);
  attachReveal();
}

init().catch((err) => {
  console.error(err);
  document.body.innerHTML = `<pre style="padding:20px">Experience page failed to load.\n\n${String(err)}</pre>`;
});
