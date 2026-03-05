import { normalizeUrl } from '../assets/common.js';

export async function injectContact(site, partialPath = '../partials/contact.html') {
  const mount = document.getElementById('contactMount');
  if (!mount) return;

  const r = await fetch(partialPath, { cache: 'no-store' });
  if (!r.ok) throw new Error('Failed to load contact partial: ' + partialPath);
  mount.innerHTML = await r.text();

  // Now fill fields (these IDs exist inside the partial)
  const setText = (id, v) => { const n = document.getElementById(id); if (n) n.textContent = v ?? ''; };
  const setHref = (id, url) => {
    const a = document.getElementById(id);
    if (!a) return;
    if (!url) { a.href = '#'; a.style.opacity = '0.55'; a.style.pointerEvents = 'none'; return; }
    a.href = url;
  };

  setText('contactPitch', site?.contact?.pitch || '');
  setText('loc', site?.location || '—');
  setText('tz', site?.contact?.timezone || '—');

  setHref('mailBtn', site?.email ? `mailto:${site.email}` : '');
  setHref('gh', normalizeUrl(site?.links?.github || ''));
  setHref('li', normalizeUrl(site?.links?.linkedin || ''));
}