// Copyright (c) 2016, Frappe Technologies and contributors
// For license information, please see license.txt

frappe.provide("frappe.integration_service")

frappe.ui.form.on('Moneywave Settings', {
	refresh: function(frm) {

	}
});

frappe.integration_service.moneywave_settings =  Class.extend({
	init: function(frm) {
		
	},
	
	get_scheduler_job_info: function() {
		return  {}
	},
	
	get_service_info: function(frm) {
		frappe.call({
			method: "get_service_details",
			callback: function(r){
				var integration_service_help = frm.fields_dict.integration_service_help.wrapper;
				$(integration_service_help).empty();
				$(integration_service_help).append(r.message);
			}
		})
	}
})