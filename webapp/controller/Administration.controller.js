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
	return Controller.extend("hts.controller.Administration", {
		formatter: formatter,
		onInit: function() {
			var oData = {
				entity: {
					"Entity1": "GovtAgcySet",
					"Entity2": "GovtAgcyCdSet",
					"Entity3": "TrfConfStatusSet",
					"Entity4": "TrfCodeSet",
					"Entity5": "VendorSet",
					"Entity6": "CountrySet",
					"Entity7": "MatCodeSet"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			this.oRoute = this.getOwnerComponent().getRouter();
			// this.oRoute.getRoute("Administration").attachMatched(this.onRouteMatched, this);
			this.oResource = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			// tableid
			var Model = this.getOwnerComponent().getModel();
			var oTable = this.getView().byId("tableid");
			oTable.setModel(Model);
	
			// oTable.setEntitySet("MatCodeSet");;
			// oTable.setInitiallyVisibleFields("Matnr","MarketCountry","RecordSeqNum");
			
			// this.oRoute = this.getOwnerComponent().getRouter();
			// this.oRoute.getRoute("Administration").attachMatched(this.onRouteMatched, this);
			// this.getOwnerComponent().getModel().metadataLoaded().then(this._onMetadataLoaded.bind(this));
			// this.oResource = this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},
		onSelect: function() {
				debugger;
			}          

	});

});