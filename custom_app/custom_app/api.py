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
    
@frappe.whitelist(allow_guest=True)
def log(mac_address):
    mac = mac_address.lower()
    employee_mac = frappe.get_value("Employee MAC", {"mac_address": mac}, "employee")
    if employee_mac:
        doc = frappe.new_doc("Attendance")
        doc.employee = employee_mac
        doc.status = "Present"
        doc.attendance_date = frappe.utils.today()
        doc.save()
        frappe.db.commit()
        send_whatsapp(employee_mac)
        return {"status": "ok"}
    return {"status": "not found"}

@frappe.whitelist(allow_guest=True)
def get_employee_macs():
    macs = frappe.get_all("Employee MAC", fields=["mac_address"])
    return [m["mac_address"].lower() for m in macs]
