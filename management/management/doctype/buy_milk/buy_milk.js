// Copyright (c) 2023, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Buy Milk', {
  

    refresh: function(frm) {
        if (frm.doc.__islocal) {
            frm.page.clear_inner_toolbar();
        } else {
            
            if (frappe.user.has_role('Lab Technician') && frm.doc.workflow_state === 'Approved'){
            frm.add_custom_button(__('Go To Sample Report'), function() {
                var new_buy_milk = frappe.model.get_new_doc("Sample Report");
                new_buy_milk.member_name = frm.doc.member_name;
				new_buy_milk.collection_date = frm.doc.date;
                new_buy_milk.test_type = frm.doc.test_type;
                frappe.set_route("Form", "Sample Report", new_buy_milk.name);
            });
        }
            if (frappe.user.has_role('Dairy Manager') && frm.doc.workflow_state === 'Approved'){
            frm.add_custom_button(__('Go To Sale Milk'), function() {
                var new_buy_milk = frappe.model.get_new_doc("Sale Milk");
                // new_buy_milk.member_name = frm.doc.member_name;
				// new_buy_milk.collection_date = frm.doc.date;
                // new_buy_milk.test_type = frm.doc.test_type;
                frappe.set_route("Form", "Sale Milk", new_buy_milk.name);
            });
        }
            if (frappe.user.has_role('Dairy Manager')){
			frm.add_custom_button(__('Purchase Receipt'), function() {
                frappe.set_route('Form', 'Purchase Receipt', {
                });
				
            }, __("Create"));
        }
        }
    }
}
);

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




