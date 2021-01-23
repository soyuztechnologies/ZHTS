sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"hts/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("hts.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// var that = this;
			UIComponent.prototype.init.apply(this);
			this.getRouter().initialize();
			// set the device model
			// that.setModel(models.createDeviceModel(), "device");
			// that.getModel().setUseBatch(false);	
			// that.getModel().setSizeLimit(10);	
			
			
		}
	});
});