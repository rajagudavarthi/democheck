sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Apple.Bindings.controller.View1", {
		onInit: function () {

	var details =
	{
 			"Name": "Anusha",
 			"id": "247",
 			"Phone": "8121003005",
 			"Country": "Canada"
 		};
 		
 		var emp =
 		
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			];
			
// 			var job =
// 	 [{
// 			"skill": "Anusha",
//  			"location": "Mention",
//  			"Phone": "8121003005",
//  			"Country": "Canada"
// 		},
// {
// 			"skill": "AANY",
//  			"location": "Mention",
//  			"Phone": "8121003005",
//  			"Country": "Canada"
// 		},

// {
// 			"skill": "Shyam",
//  			"location": "Mention",
//  			"Phone": "8121003005",
//  			"Country": "Canada"
// 		}];

// 	var Ojson2 = new sap.ui.model.json.JSONModel( );		
// 		Ojson2.setData(job);
// 		this.getView().setModel(Ojson2,"job1");

     var Ojson = new sap.ui.model.json.JSONModel( );		
		Ojson.setData(details);
		this.getView().setModel(Ojson,"details1");
		
		var Ojson1 = new sap.ui.model.json.JSONModel( );		
		Ojson1.setData(emp);
		this.getView().setModel(Ojson1,"emp1");
		
		
		}
	});
});