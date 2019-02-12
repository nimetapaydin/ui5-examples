sap.ui.define([  
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/HashChanger",
  ], function(Controller,HashChanger) {  
    "use strict"; 
    var base; 
    var oController;
	return Controller.extend("BNetSapUI5.fragments.controller.openDialog", {
        beforeOpen:function(){
            base = this;
            base.thisController=sap.ui.controller("BNetSapUI5/fragments/controller/openDialog")
            LoginControl.login(base).then(function (res) {
				if (res) {
				}
            });
            base.oController.onInit()       
        },
    });
});

