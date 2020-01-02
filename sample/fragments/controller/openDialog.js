sap.ui.define([  
    "sap/ui/core/mvc/Controller",
    "fragments/controller/openDialog"
  ], function(Controller,FragmentController) {  
    "use strict"; 
    var base;
	return Controller.extend("BNetSapUI5.fragments.controller.openDialog", {
        onInit: function() {
            //Create new fragment with own controller
            var oFragmentController = new FragmentController();
            var oFragment = sap.ui.xmlfragment("BNetSapUI5.fragments.controller.openDialog", oFragmentController);
            this.getView().byId("opendialogfragment").addContent(oFragment);
            
        },
    });
});

