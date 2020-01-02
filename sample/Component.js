sap.ui.define(
	["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
	function (UIComponent, JSONModel) {
		"use strict";
		return UIComponent.extend("BNetSapUI5.Component", {
			metadata: {
				rootView: {
					viewName: "BNetSapUI5.App",
					type: "XML",
					async: true
				}
			},
			init: function () {
				UIComponent.prototype.init.apply(this, arguments);
			}
		});
	}
);