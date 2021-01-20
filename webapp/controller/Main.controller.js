sap.ui.define([
	"hts/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function(Controller, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("hts.controller.Main", {
		onInit: function onInit() {
			this._oRouter = this.getOwnerComponent().getRouter();
			this._oRouter.getRoute("Main").attachMatched(this._onRouteMatched, this);
			this.oResource = this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},
		_onRouteMatched: function _onRouteMatched(oEvent) {

		},
		onHomePress: function() {
			var oIconTabHeader = this.byId('iconTabHeader');
			oIconTabHeader.setSelectedKey('invalidKey');
			var oLayout = this.getView().byId('idMainPanel'),
				oFragment = sap.ui.xmlfragment("hts.fragments.Home");
			oLayout.removeAllContent();
			oLayout.addContent(oFragment);
		},
		onSelectTab: function(event) {
			var name = event.getParameter("selectedKey"),
				oLayout = this.getView().byId('idMainPanel');

			oLayout.removeAllContent();
			if (name === "Material") {
				this.oMaterial = this.oMaterial ? this.oMaterial : sap.ui.xmlfragment("hts.fragments.Material");
				oLayout.addContent(this.oMaterial);
			} else {
				var oFragment = sap.ui.xmlfragment("hts.fragments." + name);
				oLayout.addContent(oFragment);
			}
		}

	});

});