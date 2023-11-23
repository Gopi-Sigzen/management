# Copyright (c) 2023, frappe and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class MemberRegistration(Document):
    def validate(self):
   
        supplier = frappe.new_doc("Supplier")
        supplier.supplier_name = self.member_name
        supplier.supplier_type = "Company"
        supplier.supplier_group = "All Supplier Groups"
        supplier.save() 
        frappe.db.commit()   
    # def autoname(self):
    #     if self.customer_name:
    #         self.name = f"{self.customer_name}"
    #     else:
    #         self.name = f"{self.supplier_name}"
