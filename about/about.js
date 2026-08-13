import { loadSiteData, setTitle } from '../assets/common.js';
import { initTheme, el, attachReveal, setHref } from '../page-helpers.js';

function renderHighlights(list) {
  const ul = el('highlights');
  ul.innerHTML = '';
  for (const item of (list || [])) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  }
}

function renderSkills(skillsObj) {
  const root = el('skills');
  root.innerHTML = '';
  const entries = Object.entries(skillsObj || {});
  if (!entries.length) {
    root.textContent = 'Skills will appear here.';
    return;
  }
  for (const [label, items] of entries) {
    const row = document.createElement('div');
    row.className = 'skill-row reveal';
    const lab = document.createElement('div');
    lab.className = 'label';
    lab.textContent = label;
    const it = document.createElement('div');
    it.className = 'items';
    for (const s of (items || [])) {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = s;
      it.appendChild(chip);
    }
    row.appendChild(lab);
    row.appendChild(it);
    root.appendChild(row);
  }
}

async function init() {
  initTheme('dark');
  const site = await loadSiteData('../data/site.json');
  el('brandName').textContent = site?.name || 'Portfolio';
  setTitle(site?.name || 'Portfolio', 'About');
  el('bio').textContent = site?.bio || '';
  renderHighlights(site?.highlights || []);
  renderSkills(site?.skills || {});
  setHref('btnCVLong', site?.links?.cvLongPdf ? `../${site.links.cvLongPdf.replace(/^\.\.\//, '')}` : '../resume/CV_Long.pdf');
  setHref('btnCVShort', site?.links?.cvShortPdf ? `../${site.links.cvShortPdf.replace(/^\.\.\//, '')}` : '../resume/CV_Short.pdf');
  attachReveal();
}

init().catch((err) => {
  console.error(err);
  document.body.innerHTML = `<pre style="padding:20px">About page failed to load.\n\n${String(err)}</pre>`;
});
