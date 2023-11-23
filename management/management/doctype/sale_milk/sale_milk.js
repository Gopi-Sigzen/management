// Copyright (c) 2023, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Sale Milk', {
	refresh: function(frm) {
			frm.add_custom_button(__('Purchase Receipt'), function() {
                frappe.set_route('Form', 'Purchase Receipt', {
                });
				
            }, __("Create"));
        }
    }
	
);
frappe.ui.form.on('Child Sale', {
    liter: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        if (row.liter && row.price_per_liter) {
            frappe.model.set_value(cdt, cdn, 'price', row.liter * row.price_per_liter);
            frm.refresh_field('child_table');
        }
    },

    price_per_liter: function(frm, cdt, cdn) {
        var row = locals[cdt][cdn];
        if (row.liter && row.price_per_liter) {
            frappe.model.set_value(cdt, cdn, 'price', row.liter * row.price_per_liter);
            frm.refresh_field('child_table');
        }
    }
});
