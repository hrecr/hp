export async function loadSiteData(relativePath = '../data/site.json') {
  const res = await fetch(relativePath, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Could not load site data: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data;
}

export function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function byId(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element #${id}`);
  return el;
}

export function q(sel, root = document) {
  const el = root.querySelector(sel);
  if (!el) throw new Error(`Missing selector: ${sel}`);
  return el;
}

export function qa(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

export function prettyYearRange(start, end) {
  if (!start && !end) return '';
  if (start && (!end || end === 'Present')) return `${start}–Present`;
  if (!start && end) return `–${end}`;
  return `${start}–${end}`;
}

export function joinNonEmpty(parts, sep = ' · ') {
  return parts.filter(Boolean).join(sep);
}

export function normalizeUrl(url) {
  if (!url) return '';
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith('mailto:') || url.startsWith('tel:')) return url;
  return `https://${url}`;
}

export function setText(el, text) {
  el.textContent = text ?? '';
}

export function setTitle(name, suffix) {
  const bits = [name, suffix].filter(Boolean);
  document.title = bits.join(' — ');
}

function storageGet(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function storageSet(key, value) {
  try { localStorage.setItem(key, value); } catch { /* ignore */ }
}

export async function fetchGithubRepos(username, { max = 60 } = {}) {
  if (!username || username === 'YOUR_GITHUB_USERNAME') return { repos: [], note: 'Set githubUsername in data/site.json.' };

  const cacheKey = `gh_repos_cache_v1_${username}`;
  const cachedRaw = storageGet(cacheKey);
  if (cachedRaw) {
    try {
      const cached = JSON.parse(cachedRaw);
      if (cached?.ts && Date.now() - cached.ts < 6 * 60 * 60 * 1000 && Array.isArray(cached?.repos)) {
        return { repos: cached.repos, note: 'Loaded from cache.' };
      }
    } catch {
    }
  }

  const url = `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`;
  const res = await fetch(url, {
    headers: { 'Accept': 'application/vnd.github+json' }
  });

  if (!res.ok) {
    let hint = '';
    if (res.status === 403) hint = ' (rate-limited by GitHub — try again later)';
    return { repos: [], note: `GitHub API error: ${res.status}${hint}.` };
  }

  const raw = await res.json();
  const repos = (Array.isArray(raw) ? raw : [])
    .filter(r => r && typeof r === 'object')
    .slice(0, max)
    .map(r => ({
      name: r.name,
      full_name: r.full_name,
      html_url: r.html_url,
      description: r.description || '',
      language: r.language || '',
      stargazers_count: r.stargazers_count ?? 0,
      forks_count: r.forks_count ?? 0,
      updated_at: r.updated_at,
      homepage: r.homepage || '',
      topics: r.topics || [],
      archived: !!r.archived,
      fork: !!r.fork
    }));

  storageSet(cacheKey, JSON.stringify({ ts: Date.now(), repos }));
  return { repos, note: 'Loaded from GitHub API.' };
}

export function pickFeaturedRepos(allRepos, featuredNames = []) {
  if (!Array.isArray(allRepos)) return [];
  const map = new Map(allRepos.map(r => [String(r.name).toLowerCase(), r]));
  const featured = [];

  for (const name of featuredNames || []) {
    const r = map.get(String(name).toLowerCase());
    if (r) featured.push(r);
  }

  if (featured.length) return featured;

  return allRepos
    .filter(r => !r.fork && !r.archived)
    .sort((a, b) => {
      const starDiff = (b.stargazers_count || 0) - (a.stargazers_count || 0);
      if (starDiff) return starDiff;
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    })
    .slice(0, 8);
}

export function formatIsoDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function smoothScrollToHash() {
  if (!location.hash) return;
  const id = location.hash.slice(1);
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
