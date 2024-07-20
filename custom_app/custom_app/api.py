import frappe

@frappe.whitelist()
def sync_stock():
    frappe.log("Syncing stock quantities...")
    
    # Get a list of all Item codes
    item_codes = frappe.get_all('Item', fields=['item_code'])

    for item_code in item_codes:
        frappe.log(f"Updating stock quantity for item: {item_code.item_code}")
        
        # Get a list of Bin documents for the specific item
        bins = frappe.get_all('Bin', filters={'item_code': item_code.item_code}, fields=['actual_qty'])

        # Calculate the total quantity
        total_quantity = sum(bin['actual_qty'] for bin in bins)
        
        frappe.log(f"Total quantity for {item_code.item_code}: {total_quantity}")

        # Update the Item document with the calculated quantity
        item = frappe.get_doc('Item', item_code.item_code)
        item.available_qty = total_quantity
        item.save()

    frappe.log("Stock quantity sync complete.")
