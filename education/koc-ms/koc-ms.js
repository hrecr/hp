import { loadSiteData, setTitle } from '../../assets/common.js';
import { initTheme, attachReveal } from '../../page-helpers.js';

const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];

function selectTab(name, { updateHash = true, focus = false } = {}) {
  const selected = tabs.find(tab => tab.dataset.tab === name) || tabs[0];

  for (const tab of tabs) {
    const active = tab === selected;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  }

  for (const panel of panels) {
    panel.hidden = panel.id !== selected.getAttribute('aria-controls');
  }

  if (updateHash) history.replaceState(null, '', `#${selected.dataset.tab}`);
  if (focus) selected.focus();
}

function initializeTabs() {
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab.dataset.tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let targetIndex = index;
      if (event.key === 'ArrowLeft') targetIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'ArrowRight') targetIndex = (index + 1) % tabs.length;
      if (event.key === 'Home') targetIndex = 0;
      if (event.key === 'End') targetIndex = tabs.length - 1;
      selectTab(tabs[targetIndex].dataset.tab, { focus: true });
    });
  });

  const requested = location.hash.slice(1);
  selectTab(requested === 'thesis' ? 'thesis' : 'courses', { updateHash: false });
}

async function init() {
  initTheme('dark');
  const site = await loadSiteData('../../data/site.json');
  const displayName = site?.name || 'Reza Saadi';
  document.getElementById('brandName').textContent = displayName;
  setTitle(displayName, 'Koç University M.Sc.');
  initializeTabs();
  attachReveal();
}

init().catch(error => {
  console.error(error);
  document.body.innerHTML = `<pre style="padding:20px">M.Sc. page failed to load.\n\n${String(error)}</pre>`;
});
