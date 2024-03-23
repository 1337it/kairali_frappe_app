if ($('html').attr('data-theme') == 'dark') {
$("meta[name='theme-color']").attr('content', '#232323');
};
if ($('html').attr('data-theme') == 'light'){
$("meta[name='theme-color']").attr('content', '#ededed');
};

frappe.ui.keys.add_shortcut({
description: "Page Backward",
shortcut: "alt+left",
  action: () => {
    window.history.go(-1);
}
});
frappe.ui.keys.add_shortcut({
description: "Page Forward",
shortcut: "alt+right",
  action: () => {
    window.history.go(+1);
}
});

const backbutton = document.createElement('button');

      backbutton.id = 'backbutton';

      // Attach the "click" event to your button
      backbutton.addEventListener('click', () => {
            history.back();
      });
      document.body.appendChild(backbutton);

const drivebutton = document.createElement('button');

      drivebutton.id = 'drivebutton';

      // Attach the "click" event to your button
      drivebutton.addEventListener('click', () => {
            window.location.href='https://speedwayauto.online/drive'
      });
      document.body.appendChild(drivebutton);


frappe.ui.keys.add_shortcut({
  
description: "Price Breakdown",
shortcut: "ctrl+n",
  action: () => {
    const current_doc = $('.data-row.editable-row').parent().attr("data-name");
    const curdoc = (cur_frm.doctype + " Item");
            const item_row5 = locals[curdoc][current_doc];
    const pricelist = cur_frm.doc.selling_price_list;
    new frappe.ui.form.MultiSelectDialog({
    doctype: "Item Price",
    target: this.cur_frm,
    setters: {item_code:item_row5.item_code,
      price_list_rate:null,
                    custom_block_price:null,
                    custom_wholesale_price:null
    },
    add_filters_group: 1,
          columns: ["item_code",
                    "price_list",
                    "price_list_rate",
                    "valid_from",
                    "valid_upto",
                    "custom_block_price",
                    "custom_wholesale_price",
            "modified",
                    "custom_20",
            "modified_by"],
    get_query() {
        return {
            filters: {"item_code": item_row5.item_code, "price_list": pricelist}
        }
    },
    action(selections) {
       return query_args;
    }
});

}
});


  frappe.ui.keys.add_shortcut({
description: "Stock Ledger",
shortcut: "ctrl+m",
  action: () => {
    const current_doc = $('.data-row.editable-row').parent().attr("data-name");
    const curdoc = (cur_frm.doctype + " Item");
            const item_row = locals[curdoc][current_doc];
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
            filters: {"item_code": item_row.item_code}
        }
    },
    action(selections) {
       return query_args;
    }
});

}
});
