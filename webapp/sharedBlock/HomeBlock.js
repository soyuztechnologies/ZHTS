sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function(coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var HomeBlock = BlockBase.extend("hts.sharedBlock.HomeBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "hts.view.Home",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "hts.view.Home",
					type: ViewType.XML
				}
			}
		}
	});
	return HomeBlock;
});