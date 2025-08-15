// Intercept the sidebar toggle button globally, before Frappe receives the click.
// This survives SPA route changes and DOM rewrites.
(function () {
  const SELECTOR = 'button.btn-reset.sidebar-toggle-btn,[aria-label="Toggle Sidebar"]';

  function goBack() {
    try {
      if (window.frappe?.router?.back) { window.frappe.router.back(); return; }
    } catch {}
    if (history.length > 1) history.back();
    else if (window.frappe?.set_route) frappe.set_route('app');
    else window.location.href = '/';
  }

  // 1) Click override (capture phase): prevents Frappe’s toggle from ever running
  function clickInterceptor(e) {
    const btn = e.target.closest(SELECTOR);
    if (!btn) return;

    // neutralize original behavior completely
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    goBack();
  }

  // Install once
  document.addEventListener('click', clickInterceptor, true); // <-- capture phase

  // 2) Make sure accessibility labels are right on each paint (cheap, tolerant)
  const tuneA11y = () => {
    const btn = document.querySelector(SELECTOR);
    if (!btn) return;
    btn.setAttribute('aria-label', 'Back');
    btn.title = 'Back';
  };
  // initial + on route changes
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tuneA11y, { once: true });
  } else {
    tuneA11y();
  }
  window.frappe?.router?.on?.('change', () => setTimeout(tuneA11y, 0));

  // 3) Safety re-run in case late scripts rewrite attrs
  setInterval(tuneA11y, 2000);
})();
