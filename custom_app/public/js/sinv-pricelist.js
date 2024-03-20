frappe.ui.keys.add_shortcut({
description: "Price Breakdown",
shortcut: "ctrl+b",
  action: () => {
    const current_doc = $('.data-row.editable-row').parent().attr("data-name");
            const item_row5 = locals["Sales Invoice Item"][current_doc];
    new frappe.ui.form.MultiSelectDialog({
    doctype: "Item Price",
    target: this.cur_frm,
    setters: {item_code=null,
                    price_list=null,
                    price_list_rate=null,
                    valid_from=null,
                    valid_upto=null,
                    custom_block_price=null,
                    custom_wholesale_price=null,
              modified=null,
            modified_by=null

              

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
            "modified_by"
    get_query() {
        return {
            filters: {"item_code": item_row5.item_code}
        }
    },
    action(selections) {
       return query_args;
    }
});

}
})
