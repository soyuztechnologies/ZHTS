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
		  
		  var oTariffCodeStatus = oSmtFilter.getControlByKey("TariffCodeStatus");
		  var sTariffCodeStatus = oTariffCodeStatus.getSelectedKey();
		  if(sTariffCodeStatus){
			newFilter = new sap.ui.model.Filter("TariffCodeStatus", sap.ui.model.FilterOperator.EQ, sTariffCodeStatus );
			mBindingParams.filters.push(newFilter);	
		  }
		  
		  
		  var oTarrifCode = oSmtFilter.getControlByKey("TarrifCode");
		  var sTarrifCode = oTarrifCode.getSelectedKey();
		  if(sTarrifCode){
			newFilter = new sap.ui.model.Filter("TarrifCode", sap.ui.model.FilterOperator.EQ, sTarrifCode );
			mBindingParams.filters.push(newFilter);	
		  }
		  
		  var oVendor = oSmtFilter.getControlByKey("Vendor");
		  var sVendor = oVendor.getSelectedKey();
		  if(sVendor){
			newFilter = new sap.ui.model.Filter("Vendor", sap.ui.model.FilterOperator.EQ, sVendor );
			mBindingParams.filters.push(newFilter);	
		  }
		
		 }
	
	});

});