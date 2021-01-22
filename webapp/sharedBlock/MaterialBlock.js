sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function(coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var MaterialBlock = BlockBase.extend("hts.sharedBlock.MaterialBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "hts.view.Material",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "hts.view.Material",
					type: ViewType.XML
				}
			}
		}
	});
	return MaterialBlock;
});