// Expose a tiny utils API on window.custom_app.utils
window.custom_app = window.custom_app || {};
custom_app.utils = custom_app.utils || {};

(function () {
  const DEFAULT_SELECTOR =
    'button.btn-reset.sidebar-toggle-btn[aria-label="Toggle Sidebar"]';

  const DEFAULT_ICON = `
    <svg class="es-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  function applyBack(btn, opts) {
    if (!btn || btn.dataset.backified === '1') return;
    btn.dataset.backified = '1';

    // semantics
    btn.setAttribute('aria-label', 'Back');
    btn.title = 'Back';
    btn.removeAttribute('data-action');
    btn.removeAttribute('aria-controls');
    btn.removeAttribute('aria-expanded');

    // visuals
    btn.innerHTML = opts.iconSVG || DEFAULT_ICON;
    btn.classList.add('ca-back-btn');
    btn.style.setProperty('--ca-back-size', `${opts.sizePx || 48}px`);

    // behavior
    btn.onclick = (e) => {
      e.preventDefault();
      try {
        if (window.frappe?.router?.back) { window.frappe.router.back(); return; }
      } catch (_) {}
      if (history.length > 1) history.back();
      else if (window.frappe?.set_route && opts.fallbackRoute) frappe.set_route(opts.fallbackRoute);
      else window.location.href = opts.fallbackHref || '/';
    };
  }

  function runOnce(opts) {
    if (opts.onlyMobile && window.innerWidth > (opts.mobileMaxWidth || 992)) return;
    const btn = document.querySelector(opts.selector || DEFAULT_SELECTOR);
    if (btn) applyBack(btn, opts);
  }

  // PUBLIC API
  custom_app.utils.replaceSidebarWithBack = function (options = {}) {
    const opts = {
      selector: DEFAULT_SELECTOR,
      iconSVG: DEFAULT_ICON,
      sizePx: 52,           // bigger by default
      onlyMobile: true,
      mobileMaxWidth: 992,
      fallbackRoute: 'app',
      fallbackHref: '/',
      ...options,
    };

    // initial pass + a few retries for late mounts
    let tries = 0;
    const doRun = () => runOnce(opts);
    doRun();
    const retry = setInterval(() => {
      doRun();
      if (++tries > 12 || document.querySelector(`${opts.selector}[data-backified="1"]`)) {
        clearInterval(retry);
      }
    }, 250);

    // MutationObserver to survive SPA / navbar rerenders
    const mo = new MutationObserver(doRun);
    mo.observe(document.documentElement, { childList: true, subtree: true });

    // Frappe router hook
    try { window.frappe?.router?.on?.('change', () => setTimeout(doRun, 0)); } catch {}

    // Re-apply on resize (for onlyMobile guard)
    window.addEventListener('resize', doRun);
  };
})();
