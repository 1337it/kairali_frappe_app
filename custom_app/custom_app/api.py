# custom_app/custom_app/api.py
import frappe

@frappe.whitelist()
def sync_stock():
    # Get a list of all Item codes
    item_codes = frappe.get_all('Item', fields=['item_code'])

    for item_code in item_codes:
        # Get a list of Bin documents for the specific item
        bins = frappe.get_all('Bin', filters={'item_code': item_code.item_code}, fields=['actual_qty'])

        # Calculate the total quantity
        total_qty = sum(bin['actual_qty'] for bin in bins)

        # Update the Item document with the calculated quantity
        item = frappe.get_doc('Item', item_code.item_code)
        item.available_qty = total_qty
        item.save()
