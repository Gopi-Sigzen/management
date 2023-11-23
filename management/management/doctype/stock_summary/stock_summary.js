// Copyright (c) 2023, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Stock Summary', {
    refresh: function (frm) {
//         frm.add_custom_button(__('Calculate Pending Stock'), function () {
//             const totalBuyLiters = frm.doc.total_buy_liters;
//             const totalSaleLiters = frm.doc.total_sale_liters;
//             const stockSummary = new StockSummary(totalBuyLiters, totalSaleLiters);
//             const pendingStock = stockSummary.calculatePendingStock();
//             frappe.msgprint(`Pending Stock: ${pendingStock} liters`);
//         });
//     }
// });

// class StockSummary {
//     constructor(totalBuyLiters = 0, totalSaleLiters = 0) {
//         this.totalBuyLiters = totalBuyLiters;
//         this.totalSaleLiters = totalSaleLiters;
//     }

//     calculatePendingStock() {
//         const pending_stock = this.totalBuyLiters - this.totalSaleLiters;
//         return  pending_stock;
     }
 });

// Copyright (c) 2023, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Stock Summary', {
    total_buy_liters: function (frm) {
        updatePendingStock(frm);
    },
    total_sale_liters: function (frm) {
        updatePendingStock(frm);
    }
});

function updatePendingStock(frm) {
    const totalBuyLiters = frm.doc.total_buy_liters;
    const totalSaleLiters = frm.doc.total_sale_liters;
    const pendingStock = totalBuyLiters - totalSaleLiters;

    // Set the value of the 'pending_stock' field with the calculated pendingStock
    frappe.model.set_value(frm.doctype, frm.docname, 'pending_stock', pendingStock);
    frm.refresh_field('pending_stock');
}

