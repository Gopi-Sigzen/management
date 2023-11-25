# Copyright (c) 2023, frappe and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class SampleReport(Document):
    pass
@frappe.whitelist()
def test_type(test_type):
    items=[]
    list=frappe.get_list("Test Investigation" , filters={"test_type":test_type} , fields=["investigation","reference_value"])
    return list