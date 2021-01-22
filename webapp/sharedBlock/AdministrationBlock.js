sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function(coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;
 
	var AdministrationBlock = BlockBase.extend("hts.sharedBlock.AdministrationBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "hts.view.Administration",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "hts.view.Administration",
					type: ViewType.XML
				}
			}
		}
	});
	return AdministrationBlock;
});