sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
  ],
  function(UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("School.Component", {
      metadata: {
        rootView: {
          viewName: "School.view.School",
          type: "XML",
          async: true,
          id: "app"
        }
      },
      init: function() {
        UIComponent.prototype.init.apply(this, arguments);
      }
    });
  }
);
