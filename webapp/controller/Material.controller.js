sap.ui.define([
		"hts/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"sap/m/MessageBox"
	],
	function(Controller, JSONModel, MessageBox) {
		"use strict";

		return Controller.extend("hts.controller.Material", {
			onInit: function onInit() {},
			selectCountry: function(oEvent) {
				debugger;
				// var sPath = oEvent.getParameter("listItem").getBindingContextPath();
				var sPath = oEvent.getSource().getParent().getRowBindingContext().sPath;
				this.onNext(sPath.split("/")[2]);
			},
			onNext: function(sIndex) {
				this._oRouter.navTo("Detail", {
					key: sIndex
				});
			}
		});
	});