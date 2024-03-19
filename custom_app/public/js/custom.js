frappe.ui.keys.add_shortcut({
description: "Stock Ledger",
shortcut: "ctrl+m",
  action: () => {
frappe.set_route("Report", "Stock Ledger Entry")
}
