frappe.ui.keys.add_shortcut({
description: "Price Breakdown",
shortcut: "alt+left",
  action: () => {
    window.history.go(-1);
}
})
frappe.ui.keys.add_shortcut({
description: "Price Breakdown",
shortcut: "alt+right",
  action: () => {
    window.history.go(+1);
}
})
