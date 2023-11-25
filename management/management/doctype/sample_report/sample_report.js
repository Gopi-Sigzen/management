frappe.ui.form.on('Sample Report', {
    test_type: function (frm) {
        console.log("hey");
        if (frm.doc.test_type) {
            frappe.call({
                method: "management.management.doctype.sample_report.sample_report.test_type",
                args: {
                    test_type: frm.doc.test_type
                },
                callback: function (r) {
                    if (r.message) {
                        frm.clear_table("test");
                        r.message.forEach(function (i) {
                            console.log(i);
                            var row = frm.add_child('test', {
                                investigation: i.investigation,
                                reference_value: i.reference_value,
                                grading_scale: i.grading_scale
                            });
                        });
                        frm.refresh_field("test");
                    }
                }
            });

            frm.fields_dict['test'].grid.get_field('append').$wrapper.find('.grid-add-row').hide();
        }
    }
});
