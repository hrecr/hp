import { loadSiteData, setTitle, normalizeUrl } from '../../assets/common.js';
import { initTheme, el, setHref, attachReveal } from '../page-helpers.js';

async function init() {
  initTheme('dark');

  const site = await loadSiteData('../../data/site.json');
  el('brandName').textContent = site?.name || 'Portfolio';
  setTitle(site?.name || 'Portfolio', 'Contact');

  el('contactPitch').textContent = site?.contact?.pitch || '';

  setHref('mailBtn', site?.email ? `mailto:${site.email}` : '');
  setHref('emailLink', site?.email ? `mailto:${site.email}` : '');
  el('emailLink').textContent = site?.email || '—';

  setHref('phoneLink', site?.phone ? `tel:${site.phone.replace(/\s+/g, '')}` : '');
  el('phoneLink').textContent = site?.phone || '—';

  el('loc').textContent = site?.location || '—';
  el('tz').textContent = site?.contact?.timezone || '—';

  setHref('gh', normalizeUrl(site?.links?.github || ''));
  el('gh').textContent = site?.githubUsername ? site.githubUsername : (site?.links?.github ? 'GitHub' : '—');

  setHref('li', normalizeUrl(site?.links?.linkedin || ''));
  el('li').textContent = site?.links?.linkedin ? 'LinkedIn profile' : '—';

  attachReveal();
}

init().catch((err) => {
  console.error(err);
  document.body.innerHTML = `<pre style="padding:20px">Contact page failed to load.\n\n${String(err)}</pre>`;
});
