import {
  loadSiteData,
  setTitle,
  joinNonEmpty,
  fetchGithubRepos,
  pickFeaturedRepos,
  formatIsoDate,
  normalizeUrl
} from '../../assets/common.js';

import { initTheme, el, attachReveal, setHref } from '../page-helpers.js';

function card(title, sub, desc, tags, actions) {
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

  if (Array.isArray(tags) && tags.length) {
    const tagWrap = document.createElement('div');
    tagWrap.className = 'tags';
    for (const tag of tags) {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      tagWrap.appendChild(span);
    }
    c.appendChild(tagWrap);
  }

  if (Array.isArray(actions) && actions.length) {
    const aWrap = document.createElement('div');
    aWrap.className = 'actions';
    for (const a of actions) {
      const link = document.createElement('a');
      link.className = 'action';
      link.href = a.href;
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = a.label;
      aWrap.appendChild(link);
    }
    c.appendChild(aWrap);
  }

  return c;
}

function renderManualProjects(manual) {
  const root = el('projectCards');
  root.innerHTML = '';

  if (!Array.isArray(manual) || !manual.length) {
    root.appendChild(card('No projects yet', '', 'Add implementationProjects.manual in data/site.json.', [], []));
    return;
  }

  for (const p of manual) {
    const title = p.name || 'Project';
    const sub = Array.isArray(p.topics) ? p.topics.join(' · ') : '';
    const desc = p.description || '';
    const tags = p.topics || [];
    const L = p.links || {};

    const actions = [];
    if (L.repo) actions.push({ label: 'Repo', href: normalizeUrl(L.repo) });
    if (L.demo) actions.push({ label: 'Live', href: normalizeUrl(L.demo) });
    if (L.docs) actions.push({ label: 'Docs', href: normalizeUrl(L.docs) });

    root.appendChild(card(title, sub, desc, tags, actions));
  }
}

async function renderGithubProjects(username, featuredNames) {
  const root = el('projectCards');
  const note = el('ghNote');

  root.innerHTML = '';
  note.textContent = 'Loading from GitHub…';

  const { repos, note: ghNote } = await fetchGithubRepos(username);
  const featured = pickFeaturedRepos(repos, featuredNames);
  note.textContent = ghNote || '';

  if (!featured.length) {
    root.appendChild(card(
      'GitHub projects not loaded',
      '',
      `Set githubUsername in data/site.json (current: ${username || 'empty'}), or switch to manual mode.`,
      [],
      []
    ));
    return;
  }

  for (const r of featured) {
    const title = r.name;
    const sub = joinNonEmpty([
      r.language,
      `★${r.stargazers_count || 0}`,
      r.updated_at ? `updated ${formatIsoDate(r.updated_at)}` : ''
    ]);
    const desc = r.description || '';
    const tags = Array.isArray(r.topics) ? r.topics.slice(0, 8) : [];

    const actions = [{ label: 'Repo', href: r.html_url }];
    if (r.homepage) actions.push({ label: 'Live', href: normalizeUrl(r.homepage) });

    root.appendChild(card(title, sub, desc, tags, actions));
  }
}

async function init() {
  initTheme('dark');

  const site = await loadSiteData('../../data/site.json');
  el('brandName').textContent = site?.name || 'Portfolio';
  setTitle(site?.name || 'Portfolio', 'Projects');

  setHref('ghProfile', normalizeUrl(site?.links?.github || ''));

  const impl = site?.implementationProjects || { mode: 'manual', manual: [] };

  if (impl.mode === 'github') {
    await renderGithubProjects(site?.githubUsername || '', impl.featuredRepos || []);
  } else {
    el('ghNote').textContent = 'Curated list (manual mode).';
    renderManualProjects(impl.manual || []);
  }

  attachReveal();
}

init().catch((err) => {
  console.error(err);
  document.body.innerHTML = `<pre style="padding:20px">Projects page failed to load.\n\n${String(err)}</pre>`;
});
