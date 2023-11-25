# Copyright (c) 2023, frappe and contributors
# For license information, please see license.txt
import frappe

def execute(filters=None):
    columns = get_columns()
    data = get_data(filters)
    
  
    chart = {
        'data': {
            'labels': [row.get('date') for row in data],
            'datasets': [
                {
                    'name': 'Total Liters',
                    'values': [row.get('total_liters') for row in data]
                },
                {
                    'name': 'Total Price',
                    'values': [row.get('total_price') for row in data]
                }
            ]
        },
        'type': 'pie',
        'colors': ['#3498db', '#e74c3c'],
        'title': 'Milk Purchase Analysis',
        'height': 300,
    }

    return columns, data, None, chart

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

    data = frappe.get_list("Buy Milk", filters=filter_list, fields=["member_name","date", "total_liters","total_price"])
    total_liters = sum(float(row["total_liters"] or 0) for row in data)
    total_price = sum(float(row["total_price"] or 0) for row in data)


    totals_row = {
        "date": "Total",
        
        "total_liters": total_liters,
        "total_price": total_price,
    }
    data.append(totals_row)

    return data
 
