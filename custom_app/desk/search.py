import frappe
from frappe.utils import cstr, unique
from frappe.desk.search import search_widget

@frappe.whitelist()

def build_for_autosuggest(res: list[tuple], doctype: str) -> list[LinkSearchResults]:
	def to_string(parts):
		return ", ".join(
			unique(_(cstr(part)) if meta.translated_doctype else cstr(part) for part in parts if part)
		)

	results = []
	meta = frappe.get_meta(doctype)
	if meta.show_title_field_in_link:
		for item in res:
			item = list(item)
			if len(item) == 1:
				item = [item[0], item[0]]
			label = item[1]  # use title as label
			item[1] = item[0]  # show name in description instead of title
			if len(item) >= 3 and item[2] == label:
				# remove redundant title ("label") value
				del item[2]
			results.append({"value": item[0], "label": label, "description": to_string(item[1:]), "price":price})
	else:
		results.extend({"value": item[0], "description": to_string(item[1:])} for item in res)

	return results
