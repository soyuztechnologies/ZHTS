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
			var oIconTabHeader = this.byId('iconTabHeader'),

				oMainPanel = this.getView().byId('idMainPanel'),
				name = "Home";
			oIconTabHeader.setSelectedKey('invalidKey');
			oMainPanel.removeAllContent();
			this.content[name] = this.content[name] ? this.content[name] : sap.ui.xmlfragment("hts.fragments." + name);
			oMainPanel.addContent(this.content[name]);
		},
		onSelectTab: function(event) {
			var name = event.getParameter("selectedKey"),
				oMainPanel = this.getView().byId('idMainPanel');
			oMainPanel.removeAllContent();
			this.content[name] = this.content[name] ? this.content[name] : sap.ui.xmlfragment("hts.fragments." + name);
			oMainPanel.addContent(this.content[name]);
		}
	});

});