sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function(coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;
 
	var WorkQueueBlock = BlockBase.extend("hts.sharedBlock.WorkQueueBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "hts.view.WorkQueue",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "hts.view.WorkQueue",
					type: ViewType.XML
				}
			}
		}
	});
	return WorkQueueBlock;
});