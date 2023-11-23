# Copyright (c) 2023, frappe and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class BuyMilk(Document):
    def validate(self):
        today = frappe.utils.today()
        
        if self.date < today:
            frappe.throw("Date cannot be in the past.")

        total_liters = 0
        total_price = 0
        for item in self.child_table:
       
            total_liters += float(item.liter)
            total_price += float(item.price)

    
        self.total_liters = total_liters
        self.total_price = total_price

