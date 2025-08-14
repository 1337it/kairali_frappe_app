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
$("meta[name='theme-color']").attr('content', '#000000');
};
if ($('html').attr('data-theme') == 'light'){
$("meta[name='theme-color']").attr('content', '#ffffff');
};

// Replace the "Toggle Sidebar" button with a Back button
// backify-sidebar.js
