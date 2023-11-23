# Copyright (c) 2023, frappe and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class StockSummary(Document):
    def validate(self):
        today = frappe.utils.today()
        
        if self.date < today:
                frappe.throw("Date cannot be in the past.")
	