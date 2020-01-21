sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
  ],
  function(UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("HelloWorld.Component", {
      metadata: {
        rootView: {
          viewName: "HelloWorld.view.Login",
          type: "XML",
          async: true,
          id: "app"
        }
      },
      init: function() {
        UIComponent.prototype.init.apply(this, arguments);
        // var oModel = new JSONModel(oData);
        // this.setModel(oModel);
      }
    });
  }
);
