(() => {
  const header = document.querySelector('[data-site-header]');
  const menuButton = document.querySelector('.menu-button');
  const navigation = document.querySelector('#primary-navigation');
  const groups = [...document.querySelectorAll('.nav-group')];

  const closeGroups = (except) => {
    groups.forEach(group => {
      if (group === except) return;
      group.classList.remove('is-open');
      group.querySelector('.nav-group__button')?.setAttribute('aria-expanded', 'false');
    });
  };

  groups.forEach(group => {
    const button = group.querySelector('.nav-group__button');
    button?.addEventListener('click', event => {
      event.stopPropagation();
      const open = !group.classList.contains('is-open');
      closeGroups(group);
      group.classList.toggle('is-open', open);
      button.setAttribute('aria-expanded', String(open));
    });
  });

  document.addEventListener('click', event => {
    if (!event.target.closest('.nav-group')) closeGroups();
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    closeGroups();
    if (navigation?.classList.contains('is-open')) {
      navigation.classList.remove('is-open');
      menuButton?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
      menuButton?.focus();
    }
  });

  menuButton?.addEventListener('click', () => {
    const open = !navigation.classList.contains('is-open');
    navigation.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('nav-open', open);
  });

  navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }));

  const updateStickyHeader = () => header?.classList.toggle('is-sticky', window.scrollY > 24);
  updateStickyHeader();
  window.addEventListener('scroll', updateStickyHeader, { passive: true });

  document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', async () => {
      const code = button.closest('.code-panel')?.querySelector('code')?.textContent || '';
      try {
        await navigator.clipboard.writeText(code);
        const original = button.textContent;
        button.textContent = 'Copied';
        button.setAttribute('aria-label', 'Code copied to clipboard');
        window.setTimeout(() => {
          button.textContent = original;
          button.setAttribute('aria-label', 'Copy code to clipboard');
        }, 1800);
      } catch {
        button.textContent = 'Copy failed';
      }
    });
  });

  document.querySelectorAll('[data-current-year]').forEach(element => {
    element.textContent = new Date().getFullYear();
  });
})();

