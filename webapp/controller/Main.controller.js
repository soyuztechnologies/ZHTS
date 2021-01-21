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
			// oMainPanel.removeAllDependents();
			this.content[name] = this.content[name] ? this.content[name] : sap.ui.xmlfragment("hts.fragments." + name, this);
			oMainPanel.addContent(this.content[name]);
			// oMainPanel.addDependent(this.content[name]);
		},
		onSelectTab: function(event) {
			var name = event.getParameter("selectedKey"),
				oMainPanel = this.getView().byId('idMainPanel');
			oMainPanel.removeAllContent();
			// oMainPanel.removeAllDependents();
			this.content[name] = this.content[name] ? this.content[name] : sap.ui.xmlfragment("hts.fragments." + name, this);
			oMainPanel.addContent(this.content[name]);
			// oMainPanel.addDependent(this.content[name]);
		},
		onSearch: function() {

		},
		onNext: function(sIndex) {
			this._oRouter.navTo("Detail", {
				key: sIndex
			});
		},
		selectCountry: function(oEvent) {
			// var sPath = oEvent.getParameter("listItem").getBindingContextPath();
			var sPath = oEvent.getSource().getParent().getRowBindingContext().sPath;
			this.onNext(sPath.split("/")[2]);
		}
	});

});