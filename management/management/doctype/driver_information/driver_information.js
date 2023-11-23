// Copyright (c) 2023, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Driver Information', {
	license_number: function(frm) {
		const license_number = frm.doc.license_number;

		// Check if license_number has exactly 16 digits
		if (license_number && !/^\d{16}$/.test(license_number)) {
			frappe.msgprint(__("Add the valid license number."));
			frappe.validated = false;
		}
	},
	refresh: function(frm) {
        frm.fields_dict['date_of_birth'].df.onchange = function() {
            var date_of_birth = frm.doc.date_of_birth;
            if (date_of_birth) {	
                var today = new Date();
                var birthDate = new Date(date_of_birth);
                var ageDate = new Date(today - birthDate);
                var years = ageDate.getUTCFullYear() - 1970;
                var months = ageDate.getUTCMonth();
                var days = ageDate.getUTCDate() - 1;

                frm.set_value('age', years + ' years, ' + months + ' months, ' + days + ' days');
            }
        }
    }
});
