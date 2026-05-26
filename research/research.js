import { loadSiteData, setTitle, joinNonEmpty, normalizeUrl, smoothScrollToHash } from '../assets/common.js';
import { initTheme, el, attachReveal } from '../page-helpers.js';

function tag(label) {
  const span = document.createElement('span');
  span.className = 'tag';
  span.textContent = label;
  return span;
}
function action(label, href) {
  const a = document.createElement('a');
  a.className = 'action';
  a.href = normalizeUrl(href);
  if (!String(href || '').startsWith('#') && !String(href || '').startsWith('./') && !String(href || '').startsWith('../') && !String(href || '').startsWith('/')) {
    a.target = '_blank';
    a.rel = 'noopener';
  }
  a.textContent = label;
  return a;
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
function renderAreaCards(areas) {
  const root = el('researchAreas');
  root.innerHTML = '';
  for (const area of (areas || [])) {
    const a = document.createElement('a');
    a.className = 'research-topic reveal';
    a.href = `#${area.id}`;

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
    q.textContent = area.question || '';

    const tags = document.createElement('div');
    tags.className = 'topic-tags';
    for (const t of (area.tags || [])) tags.appendChild(tag(t));

    body.appendChild(title);
    body.appendChild(q);
    body.appendChild(tags);
    a.appendChild(icon);
    a.appendChild(body);
    root.appendChild(a);
  }
}
function renderProject(project) {
  const card = document.createElement('article');
  card.className = 'project-item reveal';

  const head = document.createElement('div');
  head.className = 'project-head';
  const title = document.createElement('h4');
  title.textContent = project.title || 'Project';
  head.appendChild(title);
  if (project.status) {
    const status = document.createElement('span');
    status.className = 'status';
    status.textContent = project.status;
    head.appendChild(status);
  }

  const summary = document.createElement('p');
  summary.textContent = project.summary || '';

  const tags = document.createElement('div');
  tags.className = 'tags';
  for (const t of (project.tags || [])) tags.appendChild(tag(t));

  card.appendChild(head);
  card.appendChild(summary);
  if ((project.tags || []).length) card.appendChild(tags);

  if (Array.isArray(project.links) && project.links.length) {
    const actions = document.createElement('div');
    actions.className = 'actions';
    for (const L of project.links) actions.appendChild(action(L.label || 'Link', L.href || '#'));
    card.appendChild(actions);
  }
  return card;
}
function renderAreaDetails(areas) {
  const root = el('areaDetails');
  root.innerHTML = '';
  for (const area of (areas || [])) {
    const section = document.createElement('article');
    section.className = 'panel detail-section reveal';
    section.id = area.id;

    const kicker = document.createElement('div');
    kicker.className = 'detail-kicker';
    kicker.textContent = (area.tags || []).slice(0, 3).join(' · ');

    const h = document.createElement('h3');
    h.textContent = area.title || 'Research area';

    const p = document.createElement('p');
    p.textContent = area.summary || '';

    section.appendChild(kicker);
    section.appendChild(h);
    section.appendChild(p);

    const projects = document.createElement('div');
    projects.className = 'project-list';
    for (const project of (area.projects || [])) projects.appendChild(renderProject(project));
    section.appendChild(projects);

    if (Array.isArray(area.publications) && area.publications.length) {
      const pubTitle = document.createElement('h4');
      pubTitle.textContent = 'Related publications / manuscripts';
      section.appendChild(pubTitle);
      const ul = document.createElement('ul');
      ul.className = 'bullets';
      for (const pub of area.publications) {
        const li = document.createElement('li');
        li.textContent = pub;
        ul.appendChild(li);
      }
      section.appendChild(ul);
    }
    root.appendChild(section);
  }
}
function renderPublications(pubs) {
  const ul = el('pubList');
  ul.innerHTML = '';
  if (!Array.isArray(pubs) || !pubs.length) {
    const li = document.createElement('li');
    li.textContent = 'Publications will appear here.';
    ul.appendChild(li);
    return;
  }
  for (const p of pubs) {
    const li = document.createElement('li');
    const title = p.title || 'Untitled';
    if (p.url) {
      const a = document.createElement('a');
      a.href = normalizeUrl(p.url);
      if (!String(p.url).startsWith('./') && !String(p.url).startsWith('../') && !String(p.url).startsWith('/')) {
        a.target = '_blank';
        a.rel = 'noopener';
      }
      a.textContent = title;
      li.appendChild(a);
    } else {
      li.appendChild(document.createTextNode(title));
    }
    const note = joinNonEmpty([p.venue, p.year, p.status], ' — ');
    if (note) li.appendChild(document.createTextNode(' — ' + note));
    if (p.code) {
      li.appendChild(document.createTextNode(' '));
      li.appendChild(action('Code', p.code));
    }
    ul.appendChild(li);
  }
}
async function init() {
  initTheme('dark');
  const site = await loadSiteData('../../data/site.json');
  el('brandName').textContent = site?.name || 'Portfolio';
  setTitle(site?.name || 'Portfolio', 'Research');
  const areas = site?.researchAreas || [];
  renderAreaCards(areas);
  renderAreaDetails(areas);
  renderPublications(site?.publications || []);
  attachReveal();
  setTimeout(smoothScrollToHash, 0);
}
init().catch(err => {
  console.error(err);
  const root = document.getElementById('researchAreas');
  if (root) root.textContent = 'Failed to load data/site.json. Check paths and deployment.';
});
