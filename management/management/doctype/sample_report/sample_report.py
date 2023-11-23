# Copyright (c) 2023, frappe and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class SampleReport(Document):
     def validate(self):
        today = frappe.utils.today()
        
        if self.collection_date < today:
                frappe.throw("collection date cannot be in the past")
