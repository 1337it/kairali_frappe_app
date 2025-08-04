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
            btn.className = "btn btn-lg btn-block btn-primary mt-3";
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

frappe.ui.form.on('*', {
  onload: function (frm) {
    // Inject CSS only once
    if (!document.getElementById("custom-gradient-form-style")) {
      const style = document.createElement("style");
      style.id = "custom-gradient-form-style";
      style.innerHTML = `
        .custom-gradient-border::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-image: repeating-linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0px,
            rgba(0, 0, 0, 0) 4px,
            rgba(0, 0, 0, 1) 4px,
            rgba(0, 0, 0, 1) 5px
          );
        }
      `;
      document.head.appendChild(style);
    }

    // Delay to allow Frappe to finish rendering fields
    setTimeout(() => {
      const fields = frm.fields_dict;
      for (let key in fields) {
        const field = fields[key];
        if (field.df.hidden || !field.$wrapper) continue;
        const el = field.$wrapper.get(0);
        if (!el.classList.contains("custom-gradient-border")) {
          el.style.position = "relative";
          el.classList.add("custom-gradient-border");
        }
      }
    }, 300);
  }
});
