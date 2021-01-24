sap.ui.define([
	"hts/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function(Controller, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("hts.controller.Main", {
		onInit: function onInit() {
			Controller.prototype.onInit.apply(this);
			this._oRouter = this.getOwnerComponent().getRouter();
			// this._oRouter.getRoute("Main").attachMatched(this._onRouteMatched, this);
			this.oResource = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			
		},
		_onRouteMatched: function _onRouteMatched(oEvent) {

		},
		onBeforeRebindTable: function(oEvent) {
		  var mBindingParams = oEvent.getParameter("bindingParams");
		  var oSmtFilter = this.getView().byId("smartFilterBar");
		  var oSelect = oSmtFilter.getControlByKey("Market");
		  var sVariant = oSelect.getSelectedKey();
		  if(sVariant){
			var newFilter = new sap.ui.model.Filter("Market", sap.ui.model.FilterOperator.EQ, sVariant );
			mBindingParams.filters.push(newFilter);	
		  }
		  
		
		 }
	
	});

});