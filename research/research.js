import { loadSiteData, setTitle, normalizeUrl, smoothScrollToHash } from '../assets/common.js';
import { initTheme, el, attachReveal, researchIconMarkup } from '../page-helpers.js';

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

function renderAreaCards(areas) {
  const root = el('researchAreas');
  root.innerHTML = '';
  for (const area of (areas || [])) {
    const a = document.createElement('a');
    a.className = 'research-topic reveal';
    a.href = `#${area.id}`;

    const icon = document.createElement('div');
    icon.className = 'topic-thumb';
    icon.innerHTML = researchIconMarkup(area);

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
async function init() {
  initTheme('dark');
  const site = await loadSiteData('../data/site.json');
  el('brandName').textContent = site?.name || 'Portfolio';
  setTitle(site?.name || 'Portfolio', 'Research');
  const areas = site?.researchAreas || [];
  renderAreaCards(areas);
  renderAreaDetails(areas);
  attachReveal();
  setTimeout(smoothScrollToHash, 0);
}
init().catch(err => {
  console.error(err);
  const root = document.getElementById('researchAreas');
  if (root) root.textContent = 'Failed to load data/site.json. Check paths and deployment.';
});
