// Back button that survives URL changes, SPA route swaps, and DOM repaints.
(function () {
  const TOGGLE_SELECTOR =
    'button.btn-reset.sidebar-toggle-btn,[aria-label="Toggle Sidebar"]';
  const TITLE_AREA_SELECTOR = '.page-title .title-area';

  const DEFAULT_ICON = `
    <svg class="ca-back-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  // ---- URL change detector (works regardless of framework) ----
  function installUrlChangeHook() {
    if (window.__ca_urlhook_installed__) return;
    window.__ca_urlhook_installed__ = true;

    const fire = () => window.dispatchEvent(new Event('ca:urlchange'));
    const origPush = history.pushState;
    const origReplace = history.replaceState;

    history.pushState = function (...args) {
      const r = origPush.apply(this, args);
      fire();
      return r;
    };
    history.replaceState = function (...args) {
      const r = origReplace.apply(this, args);
      fire();
      return r;
    };

    window.addEventListener('popstate', fire);
    window.addEventListener('hashchange', fire);
  }

  // ---- Navigation action ----
  function goBack(fallbackRoute, fallbackHref) {
    try {
      if (window.frappe?.router?.back) { window.frappe.router.back(); return; }
    } catch {}
    if (history.length > 1) { history.back(); return; }
    if (window.frappe?.set_route && fallbackRoute) { frappe.set_route(fallbackRoute); return; }
    window.location.href = fallbackHref || '/';
  }

  // ---- Make a node act as Back button ----
  function styleAsBackButton(btn, sizePx, iconSVG) {
    btn.classList.add('ca-back-btn');
    btn.setAttribute('aria-label', 'Back');
    btn.title = 'Back';
    btn.style.setProperty('--ca-back-size', `${sizePx}px`);

    // Stable inner icon wrapper so repaints don't nuke us
    if (!btn.querySelector('.ca-back-icon')) {
      btn.innerHTML = `<span class="ca-back-icon">${iconSVG || DEFAULT_ICON}</span>`;
    }
  }

  function convertToggle(sizePx, iconSVG, fallbackRoute, fallbackHref) {
    const toggle = document.querySelector(TOGGLE_SELECTOR);
    if (!toggle) return false;

    // Nuke sidebar semantics so it won't toggle
    toggle.removeAttribute('data-action');
    toggle.removeAttribute('aria-controls');
    toggle.removeAttribute('aria-expanded');

    styleAsBackButton(toggle, sizePx, iconSVG);

    // Always (re)bind handler
    toggle.onclick = (e) => {
      e.preventDefault();
      goBack(fallbackRoute, fallbackHref);
    };

    return true;
  }

  function injectIntoTitle(sizePx, iconSVG, fallbackRoute, fallbackHref) {
    const area = document.querySelector(TITLE_AREA_SELECTOR);
    if (!area) return false;

    // Already injected?
    const existing = area.querySelector(':scope > .ca-back-btn');
    if (existing) {
      styleAsBackButton(existing, sizePx, iconSVG);
      existing.onclick = (e) => { e.preventDefault(); goBack(fallbackRoute, fallbackHref); };
      return true;
    }

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-default ca-back-btn';
    styleAsBackButton(btn, sizePx, iconSVG);
    btn.onclick = (e) => { e.preventDefault(); goBack(fallbackRoute, fallbackHref); };

    // Put as very first element in title bar (to the left of the title)
    area.insertBefore(btn, area.firstChild);
    // Nice spacing with the title text
    area.style.setProperty('--ca-back-gap', '8px');

    return true;
  }

  // ---- Capture-phase click interceptor to win over any sidebar handler ----
  function installClickCapture(fallbackRoute, fallbackHref) {
    if (window.__ca_clickcap_installed__) return;
    window.__ca_clickcap_installed__ = true;

    document.addEventListener('click', (e) => {
      const btn = e.target.closest(TOGGLE_SELECTOR);
      if (!btn) return;
      // Stop native toggle
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      goBack(fallbackRoute, fallbackHref);
    }, true); // capture phase
  }

  // ---- Main ensure function (idempotent, safe to call often) ----
  function ensureBackButton(opts) {
    const {
      sizePx = 56,
      onlyMobile = true,
      mobileMaxWidth = 992,
      iconSVG = DEFAULT_ICON,
      fallbackRoute = 'app',
      fallbackHref = '/',
    } = opts || {};

    if (onlyMobile && window.innerWidth > mobileMaxWidth) return;

    if (!convertToggle(sizePx, iconSVG, fallbackRoute, fallbackHref)) {
      injectIntoTitle(sizePx, iconSVG, fallbackRoute, fallbackHref);
    }
  }

  // ---- Bootstrapping ----
  function start(opts = {}) {
    installUrlChangeHook();
    installClickCapture(opts.fallbackRoute, opts.fallbackHref);

    const run = () => ensureBackButton(opts);

    // Initial run + quick retries for late mounts
    run();
    let tries = 0;
    const bootRetry = setInterval(() => {
      run();
      if (++tries > 12) clearInterval(bootRetry);
    }, 250);

    // Observe DOM repaints
    const mo = new MutationObserver(() => {
      // coalesce multiple mutations
      Promise.resolve().then(run);
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });

    // Frappe router event (if present)
    try { window.frappe?.router?.on?.('change', () => setTimeout(run, 0)); } catch {}

    // Our universal URL change event (pushState/replaceState/popstate/hashchange)
    window.addEventListener('ca:urlchange', () => setTimeout(run, 0));

    // Resize guard (for onlyMobile)
    window.addEventListener('resize', run);
  }

  // Expose a simple API if you want to tweak options later
  window.custom_app = window.custom_app || {};
  custom_app.utils = custom_app.utils || {};
  custom_app.utils.startBackButton = start;

  // Auto-start on DOM ready with sane defaults
  const autoInit = () => start({
    sizePx: 60,          // bigger touch target
    onlyMobile: true,    // set false to also show on desktop
    fallbackRoute: 'app',
    fallbackHref: '/',
    // iconSVG: '<svg>…</svg>', // drop a custom icon if you want
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit, { once: true });
  } else {
    autoInit();
  }
})();
