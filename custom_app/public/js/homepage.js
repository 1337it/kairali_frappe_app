document.addEventListener("DOMContentLoaded", function () {
    const phoneInputs = document.querySelectorAll('input[data-fieldtype="Phone"][type="text"]');

    phoneInputs.forEach(function(input) {
        input.setAttribute("type", "tel");
        input.setAttribute("inputmode", "numeric");
        input.setAttribute("pattern", "[0-9]*");
    });
});
frappe.ready(function() {
    // Wait for login form to be available
    const interval = setInterval(() => {
        const loginForm = document.querySelector(".login-content .page-card-actions");
        if (loginForm && !document.querySelector("#whatsapp-login-btn")) {
            clearInterval(interval);

            // Create the button
            let btn = document.createElement("a");
            btn.id = "whatsapp-login-btn";
            btn.className = "btn btn-sm btn-primary btn-block mt-3";
            btn.href = "/whatsapp_login.html";
            btn.innerText = "Login with WhatsApp";
            btn.style.backgroundColor = "#25D366";  // WhatsApp green
            btn.style.border = "none";
            btn.style.color = "#fff";
            btn.innerHTML = `
                <img src="/assets/custom_app/img/whatsapp-logo.png" 
                     alt="WhatsApp" 
                     style="height:24px; margin-right:8px;">
                Login with WhatsApp
            `;

            // Append after the existing login buttons
            loginForm.appendChild(btn);
        }
    }, 300);
});

if ($('html').attr('data-theme') == 'dark') {
$("meta[name='theme-color']").attr('content', '#232323');
};
if ($('html').attr('data-theme') == 'light'){
$("meta[name='theme-color']").attr('content', '#ffffff');
};

// Replace the "Toggle Sidebar" button with a Back button
// backify-sidebar.js
frappe.ready(function() {
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
