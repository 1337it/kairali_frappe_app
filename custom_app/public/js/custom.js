frappe.ui.keys.add_shortcut({
description: "Stock Ledger",
shortcut: "ctrl+m",
  action: () => {
    const current_doc = $('.data-row.editable-row').parent().attr("data-name");
            const item_row = locals["Sales Invoice Item"][current_doc];
frappe.set_route("Report", "Stock Ledger Entry", {"item_code": item_row.item_code});)
}
})
