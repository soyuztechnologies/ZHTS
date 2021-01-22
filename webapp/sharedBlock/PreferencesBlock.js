sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function(coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;
 
	var PreferencesBlock = BlockBase.extend("hts.sharedBlock.PreferencesBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "hts.view.Preferences",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "hts.view.Preferences",
					type: ViewType.XML
				}
			}
		}
	});
	return PreferencesBlock;
});