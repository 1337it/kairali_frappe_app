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
