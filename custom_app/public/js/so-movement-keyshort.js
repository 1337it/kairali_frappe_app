frappe.ui.keys.add_shortcut({
description: "Stock Movement",
shortcut: "ctrl+m",
  action: () => {
    const current_doc = $('.data-row.editable-row').parent().attr("data-name");
            const item_row1 = locals["Sales Order Item"][current_doc];
    new frappe.ui.form.MultiSelectDialog({
    doctype: "Stock Ledger Entry",
    target: this.cur_frm,
    setters: {voucher_type:null,
              posting_date:null,
              voucher_no:null,
              qty_after_transaction:null,
              incoming_rate:null,
              outgoing_rate:null

              

    },
    add_filters_group: 1,
          columns: ["item_code",
            "warehouse",
            "posting_date",
            "voucher_no",
            "qty_after_transaction",
            "actual_qty",
            "company",
            "incoming_rate",
            "modified",
            "voucher_type",
            "modified_by",
            "outgoing_rate",
            "stock_value",
            "incoming_rate"],
    get_query() {
        return {
            filters: {"item_code": item_row1.item_code}
        }
    },
    action(selections) {
       return query_args;
    }
});

}
})
