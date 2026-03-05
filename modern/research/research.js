import { loadSiteData, setTitle, joinNonEmpty, normalizeUrl } from '../../assets/common.js';
import { initTheme, el, attachReveal } from '../page-helpers.js';

function clear(node) { node.innerHTML = ''; }

function tagChip(label) {
  const span = document.createElement('span');
  span.className = 'tag';
  span.textContent = label;
  return span;
}

function actionBtn(label, href) {
  const a = document.createElement('a');
  a.className = 'action';
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener';
  a.textContent = label;
  return a;
}

function cardProject(r) {
  const title = r?.title || 'Untitled project';
  const sub = joinNonEmpty([r?.when, r?.role]);
  const desc = r?.summary || '';
  const tags = Array.isArray(r?.stack) ? r.stack : [];
  const hi = Array.isArray(r?.highlights) ? r.highlights : [];
  const L = r?.links || {};

  const actions = [];
  if (L.projectPage) actions.push(['Project', normalizeUrl(L.projectPage)]);
  if (L.paper) actions.push(['Paper', normalizeUrl(L.paper)]);
  if (L.code) actions.push(['Code', normalizeUrl(L.code)]);

  const c = document.createElement('article');
  c.className = 'card reveal';

  const t = document.createElement('div');
  t.className = 'title';
  t.textContent = title;

  const s = document.createElement('div');
  s.className = 'sub';
  s.textContent = sub || '';

  const d = document.createElement('div');
  d.className = 'desc';
  d.textContent = desc;

  c.appendChild(t);
  if (sub) c.appendChild(s);
  if (desc) c.appendChild(d);

  if (hi.length) {
    const ul = document.createElement('ul');
    ul.className = 'bullets';
    for (const x of hi) {
      const li = document.createElement('li');
      li.textContent = x;
      ul.appendChild(li);
    }
    c.appendChild(ul);
  }

  if (tags.length) {
    const tagWrap = document.createElement('div');
    tagWrap.className = 'tags';
    for (const tg of tags) tagWrap.appendChild(tagChip(tg));
    c.appendChild(tagWrap);
  }

  if (actions.length) {
    const actWrap = document.createElement('div');
    actWrap.className = 'actions';
    for (const [lab, href] of actions) actWrap.appendChild(actionBtn(lab, href));
    c.appendChild(actWrap);
  }

  return c;
}

function renderResearch(items) {
  const root = el('researchCards');
  clear(root);

  if (!Array.isArray(items) || !items.length) {
    root.appendChild(cardProject({ title: 'No research projects yet', summary: 'Add researchProjects in data/site.json, or adjust your filters.' }));
    return;
  }

  for (const r of items) root.appendChild(cardProject(r));
}

function renderPublications(pubs) {
  const ul = el('pubList');
  clear(ul);

  if (!Array.isArray(pubs) || !pubs.length) {
    const li = document.createElement('li');
    li.textContent = 'No publications listed yet.';
    ul.appendChild(li);
    return;
  }

  for (const p of pubs) {
    const li = document.createElement('li');

    const title = p.title || 'Untitled';
    const venue = p.venue || p.where || '';
    const year = p.year || '';
    const note = joinNonEmpty([venue, year], ' — ');

    if (p.url) {
      const a = document.createElement('a');
      a.href = normalizeUrl(p.url);
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = title;
      li.appendChild(a);
    } else {
      const span = document.createElement('span');
      span.textContent = title;
      li.appendChild(span);
    }

    if (note) {
      const span = document.createElement('span');
      span.textContent = ' — ' + note;
      li.appendChild(span);
    }

    if (p.status) {
      const em = document.createElement('span');
      em.textContent = ' (' + p.status + ')';
      li.appendChild(em);
    }

    ul.appendChild(li);
  }
}

function uniqueTags(items) {
  const s = new Set();
  for (const it of (items || [])) {
    for (const t of (it?.stack || [])) s.add(String(t));
  }
  return Array.from(s).sort((a, b) => a.localeCompare(b));
}

function filterItems(items, q, tag) {
  const qq = (q || '').trim().toLowerCase();
  const tg = (tag || '').trim().toLowerCase();

  return (items || []).filter(it => {
    const hay = [
      it?.title, it?.role, it?.when, it?.summary,
      ...(it?.stack || []),
      ...(it?.highlights || [])
    ].filter(Boolean).join(' ').toLowerCase();

    const okQ = !qq || hay.includes(qq);
    const okT = !tg || (it?.stack || []).some(x => String(x).toLowerCase() === tg);
    return okQ && okT;
  });
}

async function init() {
  initTheme('dark');

  const site = await loadSiteData('../../data/site.json');
  el('brandName').textContent = site?.name || 'Portfolio';
  setTitle(site?.name || 'Portfolio', 'Research');

  const all = site?.researchProjects || [];
  renderPublications(site?.publications || []);

  const tagSel = el('tag');
  for (const t of uniqueTags(all)) {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    tagSel.appendChild(opt);
  }

  const q = el('q');
  const rerender = () => {
    const filtered = filterItems(all, q.value, tagSel.value);
    renderResearch(filtered);
    attachReveal();
  };

  q.addEventListener('input', rerender);
  tagSel.addEventListener('change', rerender);

  rerender();
}

init().catch(err => {
  console.error(err);
  const root = document.getElementById('researchCards');
  if (root) root.textContent = 'Failed to load data/site.json. Check paths and deployment.';
});
