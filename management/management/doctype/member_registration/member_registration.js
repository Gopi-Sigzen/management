// Copyright (c) 2023, frappe and contributors
// For license information, please see license.txt
frappe.ui.form.on('Member Registration', {
	setup: function(frm) {
        frm.set_query('address', function(doc) {
            return {
                filters: {
                    'link_doctype': 'Member Registration',
                    'link_name': doc.name
                }
            };
        });
        
        
    },
	validate: function(frm) {
		const date_of_registration = frm.doc.date_of_registration;

		if (frappe.datetime.get_diff(date_of_registration, frappe.datetime.nowdate()) < 0) {
			frappe.msgprint(__('Date of Registration cannot be in the past.'));
			frappe.validated = false; 
		}
		const email_address = frm.doc.email_address;

		if (email_address && !/\S+@\S+\.\S+/.test(email_address)) {
			frappe.msgprint(__("Enter a valid email address."));
			frappe.validated = false; 
		} else if (email_address && !email_address.endsWith('@gmail.com')) {
			frappe.msgprint(__("Email address must be a Gmail address."));
			frappe.validated = false;
		}
	}
	}
);
frappe.ui.form.on('Member Registration', {
    refresh: function(frm) {
        if (frm.doc.__islocal) {
            frm.page.clear_inner_toolbar();
		}
		else{
            frm.add_custom_button(__('Go To Buy Milk'), function() {
                var new_buy_milk = frappe.model.get_new_doc("Buy Milk");
                new_buy_milk.member_name = frm.doc.member_name;
				new_buy_milk.date = frm.doc.date_of_registration;
                frappe.set_route("Form", "Buy Milk", new_buy_milk.name);
            });
        }
    }

});

