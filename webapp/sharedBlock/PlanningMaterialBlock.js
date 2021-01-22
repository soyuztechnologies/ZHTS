sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function(coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;
 
	var PlanningMaterialBlock = BlockBase.extend("hts.sharedBlock.PlanningMaterialBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "hts.view.PlanningMaterial",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "hts.view.PlanningMaterial",
					type: ViewType.XML
				}
			}
		}
	});
	return PlanningMaterialBlock;
});