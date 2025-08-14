// backify-sidebar.js
(function () {
  const SELECTOR = 'button.btn-reset.sidebar-toggle-btn[aria-label="Toggle Sidebar"]';

  const backIconSVG = `
    <svg class="es-icon icon-lg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  function convertToBack(btn) {
    if (!btn || btn.dataset.backified === "1") return;
    btn.dataset.backified = "1";

    // A11y + semantics
    btn.setAttribute("aria-label", "Back");
    btn.title = "Back";
    btn.removeAttribute("data-action");
    btn.removeAttribute("aria-controls");
    btn.removeAttribute("aria-expanded");

    // Icon swap
    btn.innerHTML = backIconSVG;
    btn.classList.add("mobile-back-btn", "mobile-back-btn--lg");

    // Behavior
    btn.onclick = (e) => {
      e.preventDefault();
      try {
        // Desk SPA first
        if (window.frappe?.router?.back) {
          window.frappe.router.back();
          return;
        }
      } catch (_) {}
      // Fallbacks
      if (history.length > 1) {
        history.back();
      } else if (window.frappe?.set_route) {
        window.frappe.set_route("app"); // tweak if you want a different landing route
      } else {
        window.location.href = "/";
      }
    };
  }

  function findAndConvert() {
    const btn = document.querySelector(SELECTOR);
    if (btn) convertToBack(btn);
  }

  function setupObserver() {
    // Re-run when navbar/sidebar re-renders
    const obs = new MutationObserver(() => findAndConvert());
    obs.observe(document.documentElement, {
      subtree: true,
      childList: true,
    });
  }

  function setupRouterHook() {
    // Desk SPA route change
    try {
      if (window.frappe?.router?.on) {
        window.frappe.router.on("change", () => {
          // Allow DOM to mount
          setTimeout(findAndConvert, 0);
        });
      }
    } catch (_) {}
  }

  function init() {
    findAndConvert();
    setupObserver();
    setupRouterHook();

    // Safety retries for lazy UIs
    let tries = 0;
    const t = setInterval(() => {
      findAndConvert();
      if (++tries > 15 || document.querySelector(`${SELECTOR}[data-backified="1"]`)) {
        clearInterval(t);
      }
    }, 250);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
