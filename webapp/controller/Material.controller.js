sap.ui.define([
		"hts/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"sap/m/MessageBox",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
	],
	function(Controller, JSONModel, MessageBox, Filter, FilterOperator) {
		"use strict";

		return Controller.extend("hts.controller.Material", {
			onInit: function onInit() {
				//roter
				Controller.prototype.onInit.apply(this);
				this._oRouter = this.getOwnerComponent().getRouter();
				this._oRouter.getRoute("Main").attachMatched(this._onRouteMatched, this);
				//rootmathced
				//local model
			},
			selectCountry: function(oEvent) {
				debugger;
				//var sPath = oEvent.getParameter("listItem").getBindingContextPath();
				var sPath = oEvent.getSource().getParent().getRowBindingContext().sPath;
				this.onNext(sPath.split("'")[1]);
			},
			onMaterialHelp: function() {
				debugger;
				if (!this.oPopupMaterial) {
					this.oPopupMaterial = new sap.ui.xmlfragment("idMaterialPopup", "hts.fragments.popup", this);
					this.oPopupMaterial.setTitle("Materials");
					//giving access to the data which my view has
					this.getView().addDependent(this.oPopupMaterial);
					this.getView().addDependent(this.oPopupMaterial);
					this.oPopupMaterial.bindAggregation("items", {
						path: "/MaterialSet",
						template: new sap.m.StandardListItem({
							description: "{Maktg}",
							title: "{Matnr}"
						})

					});
				}
				this.oPopupMaterial.open();
			},
			onSearch: function(oEvent) {
				// var sId = oEvent.getSource().getId();
				var oFilter = new Filter("name", FilterOperator.Contains, oEvent.getParameter("value"));
				this.oPopupMaterial.getBinding("items").filter([oFilter]);
			},

			//routemnatchedhandler
			// _rootMatched: function(oEvent) {
			// 	//sPath - GUID
			// 	//oModel.read( )
			// 	// oModel1.read("/" + sPath, {
			// 	//   urlParameters: {
			// 	//     "$expand": "To_TrfCode,To_Country,To_Vendor,To_AgcyCd,To_Agency"
			// 	//   },
			// 	//   success: this.onSuccess.bind(this),
			// 	//  	
			// 	// });
			// },
			// onSuccess: function(data){

			// },

			onNext: function(sIndex) {
				debugger;
				this._oRouter.navTo("Detail", {
					key: sIndex
				});
			}
		});
	});