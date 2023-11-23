# Copyright (c) 2023, frappe and contributors
# For license information, please see license.txt

import frappe

def execute(filters=None):
    columns = get_columns()
    data = get_data(filters)
   
    return columns,data

def get_columns():
    columns = [
      {
			'fieldname': 'member_name',
			'label': 'Member Name',
			'fieldtype': 'Link',
			'options': 'Member Registration'
		},
		{
			'fieldname': 'date',
			'label': 'Date',
			'fieldtype': 'Date'
			
		},
         {
			'fieldname': 'total_liters',
			'label': 'Total Liters',
			'fieldtype': 'Float'
			
		},
        {
			'fieldname': 'total_price',
			'label': 'Total Price',
			'fieldtype': 'Currency'
			
		},
        
    ]
    return columns
def get_data(filters=None):
    filter_list = []
    if filters and filters.get("member_name"):
        filter_list.append(["member_name", "=", filters["member_name"]])

    
    # if filters and filters.get("date"):
    #     filter_list.append(["date", "=", filters["date"]])

    data = frappe.get_list("Buy Milk", filters=filter_list, fields=["member_name","date", "total_liters","total_price"])
    return data
