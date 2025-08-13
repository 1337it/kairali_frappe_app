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
(function () {
  const SELECTOR = 'button.btn-reset.sidebar-toggle-btn[aria-label="Toggle Sidebar"]';

  const backIconSVG = `
    <svg class="es-icon icon-md" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  function convertToBack(btn) {
    if (!btn || btn.dataset.backified === "1") return;

    // Accessibility + title
    btn.dataset.backified = "1";
    btn.setAttribute("aria-label", "Back");
    btn.title = "Back";

    // Remove any sidebar toggle semantics if present
    btn.removeAttribute("data-action");
    btn.removeAttribute("aria-controls");
    btn.removeAttribute("aria-expanded");

    // Swap icon (remove inner spans/SVGs and insert our back chevron)
    btn.innerHTML = backIconSVG;

    // Back behavior (Desk SPA first, then fallbacks)
    btn.onclick = (e) => {
      e.preventDefault();
      try {
        if (window.frappe?.router?.back) {
          window.frappe.router.back();
          return;
        }
      } catch (_) {}
      if (history.length > 1) {
        history.back();
      } else if (window.frappe?.set_route) {
        window.frappe.set_route("app"); // change to your preferred fallback
      } else {
        window.location.href = "/";
      }
    };

    // Optional: style hook
    btn.classList.add("mobile-back-btn");
  }

  function run() {
    const btn = document.querySelector(SELECTOR);
    if (btn) convertToBack(btn);
  }

  // Initial run + retries (for late-mounted navbars)
  const init = () => {
    run();
    let tries = 0;
    const t = setInterval(() => {
      if (++tries > 10) return clearInterval(t);
      if (document.querySelector(SELECTOR) && !document.querySelector(".mobile-back-btn")) run();
      else clearInterval(t);
    }, 300);

    // Re-apply on route changes (Desk)
    if (window.frappe?.router?.on) {
      window.frappe.router.on("change", () => setTimeout(run, 0));
    }

    // Re-apply on resize if you only want it on mobile widths
    // if (window.innerWidth <= 992) run();
    // window.addEventListener("resize", () => { if (window.innerWidth <= 992) run(); });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
