# Copyright (c) 2023, frappe and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class DriverInformation(Document):
      def validate(self):
        today = frappe.utils.today()
        
        if self.date_of_birth > today:
                frappe.throw("Date of birth cannot be in the future.")