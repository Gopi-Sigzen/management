// Copyright (c) 2023, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Buy Milk', {
  

    refresh: function(frm) {
        if (frm.doc.__islocal) {
            frm.page.clear_inner_toolbar();
        } else {

			frm.add_custom_button(__('Purchase Receipt'), function() {
                frappe.set_route('Form', 'Purchase Receipt', {
                });
				
            }, __("Create"));
        }
    }
});

frappe.ui.form.on('Buy Child Table', {
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


