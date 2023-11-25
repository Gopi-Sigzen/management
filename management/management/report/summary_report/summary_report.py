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
			'fieldname': 'date',
			'label': 'Date',
			'fieldtype': 'Date'
			
		},
         {
			'fieldname': 'total_buy_liters',
			'label': 'Buy Milk',
			'fieldtype': 'Float'
			
		},
        {
			'fieldname': 'total_sale_liters',
			'label': 'Sale Milk',
			'fieldtype': 'Float'
			
		},
         {
			'fieldname': 'pending_stock',
			'label': 'Pending Stock',
			'fieldtype': 'Float'
			
		},
        
    ]
    return columns


def get_data(filters=None):
    filter_list = []
    
    if filters and filters.get("date"):
        filter_list.append("date", "=", filters["date"])

    data = frappe.get_list("Stock Summary", filters=filter_list, fields=["date","total_buy_liters","total_sale_liters","pending_stock"])

    total_buy_liters = sum(float(row["total_buy_liters"] or 0) for row in data)
    total_sale_liters = sum(float(row["total_sale_liters"] or 0) for row in data)
    total_pending_stock = sum(float(row["pending_stock"] or 0) for row in data)

    totals_row = {
        "date": "Total",
        "total_buy_liters": total_buy_liters,
        "total_sale_liters": total_sale_liters,
        "pending_stock": total_pending_stock
    }
    data.append(totals_row)

    return data
