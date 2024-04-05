frappe.ui.form.on("Sales Invoice", "onload", function(frm,cdt,cdn) {	
	frm.set_query("item_code", "items", function() {
	    return {
        		query: "custom_app.controllers.queries.item_query",
		        filters: {"is_sales_item": 1}
    		};
	});								
});
