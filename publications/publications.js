import { loadSiteData, setTitle, normalizeUrl } from '../assets/common.js';
import { initTheme, el, attachReveal } from '../page-helpers.js';

function publicationLink(label, href) {
  if (!href) return null;

  const link = document.createElement('a');
  link.className = 'action';
  link.href = href === './aegis-framework/'
    ? '../research/aegis-framework/'
    : normalizeUrl(href);
  link.textContent = label;

  if (/^https?:\/\//.test(href)) {
    link.target = '_blank';
    link.rel = 'noopener';
  }

  return link;
}

function renderPublications(publications = []) {
  const root = el('publicationList');
  root.replaceChildren();

  for (const publication of publications) {
    const card = document.createElement('article');
    card.className = 'publication-entry reveal';

    const meta = document.createElement('div');
    meta.className = 'publication-meta';
    meta.textContent = [publication.year, publication.venue, publication.status]
      .filter(Boolean)
      .join(' | ');

    const title = document.createElement('h2');
    title.textContent = publication.title || 'Untitled work';

    const summary = document.createElement('p');
    summary.textContent = publication.summary || '';

    const footer = document.createElement('div');
    footer.className = 'publication-entry-footer';

    if (publication.area) {
      const area = document.createElement('span');
      area.className = 'tag';
      area.textContent = publication.area;
      footer.appendChild(area);
    }

    const actions = document.createElement('div');
    actions.className = 'publication-actions';
    [
      publicationLink('Paper', publication.url),
      publicationLink('Code', publication.code),
      publicationLink('Project', publication.projectPage)
    ].filter(Boolean).forEach(link => actions.appendChild(link));

    card.append(meta, title, summary);
    if (footer.childElementCount) card.appendChild(footer);
    if (actions.childElementCount) card.appendChild(actions);
    root.appendChild(card);
  }
}

async function init() {
  initTheme('dark');
  const site = await loadSiteData('../data/site.json');
  el('brandName').textContent = site?.name || 'Portfolio';
  setTitle(site?.name || 'Portfolio', 'Publications');
  renderPublications(site?.publications || []);
  attachReveal();
}

init().catch((error) => {
  console.error(error);
  const root = document.getElementById('publicationList');
  if (root) root.textContent = 'Publications could not be loaded.';
});
