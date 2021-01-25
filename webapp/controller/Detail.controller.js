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
			this.oLocalModel= this.getOwnerComponent().getModel("local");
		},
		onRouteMatched: function(oEvent) {
			var sObjectId = oEvent.getParameter("arguments").key;
			var that=this;
			
			// oModel.read();
			var sPath=sObjectId;
			var oModel=this.getOwnerComponent().getModel();
			oModel.read("/MatCodeSet('" + sPath + "')", {
				urlParameters: {
					"$expand": "To_TrfCode,To_Country,To_Vendor,To_AgcyCd,To_Agency,To_TrfCnfSt"
				},
				success: function(data){
					that.oLocalModel.setProperty("/Detail",[data]);
				},
				error:function(oError){
					
				}
			});
		},
		
		onNavBack: function() {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("overview", true);
			}
		}
	});

});