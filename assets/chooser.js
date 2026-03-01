const KEY = 'portfolio_ui_choice_v1';

function getSaved() {
  try { return localStorage.getItem(KEY); } catch { return null; }
}

function setSaved(value) {
  try { localStorage.setItem(KEY, value); } catch { /* ignore */ }
}

function clearSaved() {
  try { localStorage.removeItem(KEY); } catch { /* ignore */ }
}

function normalizeUi(ui) {
  if (!ui) return null;
  const v = String(ui).toLowerCase();
  if (v === 'retro' || v === 'modern') return v;
  return null;
}

function uiLabel(ui) {
  return ui === 'retro' ? 'Retro' : ui === 'modern' ? 'Modern' : '';
}

function updateSavedUI() {
  const saved = normalizeUi(getSaved());
  const box = document.getElementById('savedChoice');
  const val = document.getElementById('savedValue');
  if (!box || !val) return;
  if (saved) {
    val.textContent = uiLabel(saved);
    box.hidden = false;
  } else {
    box.hidden = true;
  }
}

function autoRedirectIfParam() {
  const params = new URLSearchParams(location.search);
  const ui = normalizeUi(params.get('ui'));
  if (!ui) return;
  location.href = ui === 'retro' ? 'retro/' : 'modern/';
}

function attachCardHandlers() {
  const remember = document.getElementById('rememberChoice');
  const cards = Array.from(document.querySelectorAll('[data-ui]'));

  for (const card of cards) {
    const ui = normalizeUi(card.getAttribute('data-ui'));
    const link = card.querySelector('a.btn');
    if (!ui || !link) continue;

    link.addEventListener('click', () => {
      if (remember?.checked) setSaved(ui);
    });
  }

  const clearBtn = document.getElementById('clearSaved');
  clearBtn?.addEventListener('click', () => {
    clearSaved();
    updateSavedUI();
  });
}

function attachSavedShortcut() {
  const saved = normalizeUi(getSaved());
  if (!saved) return;

  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const active = document.activeElement;
    const tag = (active?.tagName || '').toLowerCase();
    if (['input', 'button', 'a', 'textarea', 'select'].includes(tag)) return;

    location.href = saved === 'retro' ? 'retro/' : 'modern/';
  });
}

function attachAutoCheck() {
  const saved = normalizeUi(getSaved());
  if (!saved) return;
  const remember = document.getElementById('rememberChoice');
  if (remember) remember.checked = true;
}

autoRedirectIfParam();
updateSavedUI();
attachCardHandlers();
attachSavedShortcut();
attachAutoCheck();
