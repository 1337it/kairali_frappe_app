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
description: "Stock Ledger",
shortcut: "ctrl+m",
  action: () => {
    const current_doc = $('.data-row.editable-row').parent().attr("data-name");
     const curdoc = (cur_frm.doctype + " Item");
            const item_row = locals[curdoc][current_doc];
 const buying_price = frappe.db.get_list('Stock Ledger Entry', {
        fields: ['posting_date', 'voucher_type', 'voucher_no', 'qty_after_transaction', 'incoming_rate', 'outgoing_rate'],
        filters: [
            ["Stock Ledger Entry", 'item_code', "=", item_row.item_code]
        ],
        as_list: 1
    }).then(function(val) {
        let data = frappe.utils.dict(['posting_date', 'voucher_type', 'voucher_no', 'qty_after_transaction', 'incoming_rate', 'outgoing_rate'], val);
        const table_fields = [
            {
                label: 'Posted Date',
                fieldname: 'posting_date',
                fieldtype: 'Data',
                in_list_view: 1,
                read_only: 1
            },
           {
                label: 'Voucher Type',
                fieldname: 'voucher_type',
                fieldtype: 'Data',
                in_list_view: 1,
                read_only: 1
            },
            {
                label: 'Voucher No',
                fieldname: 'voucher_no',
                fieldtype: 'Link',
                in_list_view: 1,
                read_only: 1
            },
            {
                label: 'Qty After Transaction',
                fieldname: 'qty_after_transaction',
                fieldtype: 'Data',
                in_list_view: 1,
                read_only: 1
            },
             {
                label: 'Incoming Rate',
                fieldname: 'incoming_rate',
                fieldtype: 'Currency',
                in_list_view: 1,
                read_only: 1
            },
             {
                label: 'Outgoing Rate',
                fieldname: 'outgoing_rate',
                fieldtype: 'Currency',
                in_list_view: 1,
                read_only: 1
            }
        ];
        
        let d = new frappe.ui.Dialog({
            title: 'Item Movement: ' + item_row.item_code,
            size: "large",
            fields: [
                {
                    label: 'Movement',
                    fieldname: 'items_movement',
                    fieldtype: 'Table',
                    fields: table_fields,
                    options: 'Item',
                    cannot_add_rows: 1,
                    cannot_delete_rows : 1,
                    data: data
                },
            ],
            primary_action_label: 'Close',
            primary_action(values) {
                d.hide();
             }
        });

        d.show(); 
   d.$wrapper.find('.modal-dialog').css("width", "90%");
    });
}
});

frappe.ui.keys.add_shortcut({
description: "Stock Ledger",
shortcut: "ctrl+n",
  action: () => {
    const current_doc = $('.data-row.editable-row').parent().attr("data-name");
     const curdoc = (cur_frm.doctype + " Item");
    const pricelist = cur_frm.doc.selling_price_list;
            const item_row = locals[curdoc][current_doc];
 const buying_price = frappe.db.get_list('Item Price', {
        fields: ['item_code', 'custom_block_price', 'price_list_rate', 'custom_wholesale_price'],
        filters: [
            ["Item Price", 'item_code', "=", item_row.item_code],
          ['price_list', "=", pricelist]
        ],
        as_list: 1
    }).then(function(val) {
        let data = frappe.utils.dict(["item_code", "custom_block_price", "price_list_rate", "custom_wholesale_price"], val);
        const table_fields = [
            {
                label: 'Item Code',
                fieldname: 'item_code',
                fieldtype: 'Link',
                options: 'Item',
                in_list_view: 1,
                read_only: 1
            },
           {
                label: 'Block Price',
                fieldname: 'custom_block_price',
                fieldtype: 'Currency',
                in_list_view: 1,
                read_only: 1
            },
            {
                label: 'Retail Price',
                fieldname: 'price_list_rate',
                fieldtype: 'Currency',
                in_list_view: 1,
                read_only: 1
            },
            {
                label: 'Wholesale Price',
                fieldname: 'custom_wholesale_price',
                fieldtype: 'Currency',
                in_list_view: 1,
                read_only: 1
            }
        ];
        
        let d = new frappe.ui.Dialog({
            title: 'Item Price: ' + item_row.item_code,
            size: "large",
            fields: [
                {
                    label: 'Items',
                    fieldname: 'items_price',
                    fieldtype: 'Table',
                    fields: table_fields,
                    options: 'Item',
                    cannot_add_rows: 1,
                    cannot_delete_rows : 1,
                    data: data
                },
            ],
            primary_action_label: 'Close',
            primary_action(values) {
                d.hide();
             }
        });

        d.show();  
    });
}
});
