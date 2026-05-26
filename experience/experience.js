import { loadSiteData, setTitle, joinNonEmpty, prettyYearRange, smoothScrollToHash } from '../assets/common.js';
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

function smallCard(title, sub, desc) {
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
    root.appendChild(smallCard('No workshops listed', '', 'Add conferencesWorkshops in data/site.json'));
    return;
  }

  for (const w of list) {
    const title = w?.name || 'Event';
    const sub = joinNonEmpty([w?.host, w?.location]);
    const desc = w?.date || '';
    root.appendChild(smallCard(title, sub, desc));
  }
}

async function init() {
  initTheme('dark');

  const site = await loadSiteData('../../data/site.json');
  el('brandName').textContent = site?.name || 'Portfolio';
  setTitle(site?.name || 'Portfolio', 'Experience');

  renderExperience(site?.experience || []);
  renderHonors(site?.honorsAwards || []);
  renderWorkshops(site?.conferencesWorkshops || []);
  attachReveal();
  setTimeout(smoothScrollToHash, 0);
}

init().catch((err) => {
  console.error(err);
  document.body.innerHTML = `<pre style="padding:20px">Experience page failed to load.

${String(err)}</pre>`;
});
