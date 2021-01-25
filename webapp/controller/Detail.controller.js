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
		sObjectId:null,
		onRouteMatched: function(oEvent) {
			this.sObjectId = oEvent.getParameter("arguments").key;
			var that = this;

			// oModel.read();
			var sPath =this.sObjectId;
			var oModel = this.getOwnerComponent().getModel();
			oModel.read("/MatCodeSet('" + sPath + "')", {
				// urlParameters: {
				// 	"$expand": "To_MarketCountry"
				// },
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
			var that = this;
			var oPayload = this.oLocalModel.getProperty("/Detail/0");
			var payload = {
				"HtsNumber": oPayload.HtsNumber,
				"PercentUse": oPayload.PercentUse,
				"GovAgency": oPayload.GovAgency,
				"VendorNumber": oPayload.VendorNumber
			};
			var oModel = this.getView().getModel();
			var sPath=this.sObjectId;
			oModel.update("/MatCodeSet('" + sPath + "')", payload, {
				method: "PUT",
				success: function(data) {
					MessageBox.success("success");
				},
				error: function(e) {
					MessageBox.error("error");
				}
			});

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
		onInputChange: function(oEvent) {
				var oValue = oEvent.getParameter("value");
				this.oLocalModel.setProperty("/Detail/PercentUse", oValue);
				debugger;
			}
			// onTrfTableSelect: function(oEvent) {
			// 	var okey = oEvent.getParameters().selectedItem.mProperties.key;
			// 	var oText = oEvent.getParameters().selectedItem.mProperties.text;
			// },
			// onGovtAgcyTableSelect: function(oEvent) {
			// 	var okey = oEvent.getParameters().selectedItem.mProperties.key;
			// 	var oText = oEvent.getParameters().selectedItem.mProperties.text;
			// },
			// onVendorTableSelect: function(oEvent) {
			// 	var okey = oEvent.getParameters().selectedItem.mProperties.key;
			// 	var oText = oEvent.getParameters().selectedItem.mProperties.text;
			// }
	});

});