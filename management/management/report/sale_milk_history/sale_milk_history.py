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
			'fieldname': 'customer_name',
			'label': 'Member Name',
			'fieldtype': 'Data'
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
    if filters and filters.get("customer_name"):
        filter_list.append(["customer_name", "=", filters["customer_name"]])

    
    # if filters and filters.get("date"):
    #     filter_list.append(["date", "=", filters["date"]])

    data = frappe.get_list("Sale Milk", filters=filter_list, fields=["customer_name","date", "total_liters","total_price"])
    
    total_liters = sum(float(row["total_liters"] or 0) for row in data)
    total_price = sum(float(row["total_price"] or 0) for row in data)


    totals_row = {
        "date": "Total",
        
        "total_liters": total_liters,
        "total_price": total_price,
    }
    data.append(totals_row)

    return data
    
