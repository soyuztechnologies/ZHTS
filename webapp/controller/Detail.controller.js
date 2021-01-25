sap.ui.define([
	"hts/controller/BaseController",
	"sap/m/MessageBox",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel",
	"hts/util/formatter",
	"sap/m/MessageToast",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/Filter",
	"sap/ui/core/Fragment",
	'sap/m/Dialog'
], function(Controller, MessageBox, History, JSONModel, formatter, MessageToast, FilterOperator, Filter, Fragment, Dialog) {
	"use strict";
	return Controller.extend("hts.controller.Detail", {
		formatter: formatter,
		onInit: function() {
			this.oRoute = this.getOwnerComponent().getRouter();
			this.oRoute.getRoute("Detail").attachMatched(this.onRouteMatched, this);
			// this.getOwnerComponent().getModel().metadataLoaded().then(this._onMetadataLoaded.bind(this));
			this.oResource = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			this.oLocalModel = this.getOwnerComponent().getModel("local");
		},
		onRouteMatched: function(oEvent) {
			var sObjectId = oEvent.getParameter("arguments").key;
			var that = this;

			// oModel.read();
			var sPath = sObjectId;
			var oModel = this.getOwnerComponent().getModel();
			oModel.read("/MatCodeSet('" + sPath + "')", {
				urlParameters: {
					"$expand": "To_MarketCountry"
				},
				success: function(data) {
					that.oLocalModel.setProperty("/Detail", [data]);
				},
				error: function(oError) {

				}
			});
		},

		onNavBack: function() {
			// var oHistory = History.getInstance();
			// var sPreviousHash = oHistory.getPreviousHash();
			// if (sPreviousHash !== undefined) {
			// 	window.history.go(-1);
			// } else {
			// 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// 	oRouter.navTo("overview", true);
			// }
			this.getOwnerComponent().getRouter().navTo("Main");
		},
		onDetailSave: function() {
			var payload = this.getOwnerComponent().getModel("local").getProperty("/Detail");
			// var newModel = new sap.ui.model.json.JSONModel({
			// 	t: {
			// 		"PercentUse": null
			// 		"To_TrfCode": {
			// 			"TrfCdId":null
						
			// 		}
			// 	}
			// });
			// this.getView().setModel(newModel, "t");
			debugger;
		},
		onTrfTableSelect: function(oEvent) {
			var okey = oEvent.getParameters().selectedItem.mProperties.key;
			var oText = oEvent.getParameters().selectedItem.mProperties.text;
		},
		onGovtAgcyTableSelect: function(oEvent) {
			var okey = oEvent.getParameters().selectedItem.mProperties.key;
			var oText = oEvent.getParameters().selectedItem.mProperties.text;
		},
		onVendorTableSelect: function(oEvent) {
			var okey = oEvent.getParameters().selectedItem.mProperties.key;
			var oText = oEvent.getParameters().selectedItem.mProperties.text;
		}
	});

});