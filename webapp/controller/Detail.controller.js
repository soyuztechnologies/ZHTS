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
			this.getOwnerComponent().getModel().metadataLoaded().then(this._onMetadataLoaded.bind(this));
			this.oResource = this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},
		onRouteMatched: function(oEvent) {
			var sObjectId = oEvent.getParameter("arguments").key;
			this.HeaderKey = sObjectId.match(/\((.*?)\)/)[1];
			this.getOwnerComponent().getModel().metadataLoaded().then(function() {
				this._bindView("/" + sObjectId);
			}.bind(this));
		},
		_bindView: function(sObjectPath) {

		},
		_onBindingChange: function() {

		},

		_onMetadataLoaded: function() {
			//TBD
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