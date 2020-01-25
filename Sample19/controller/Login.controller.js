jQuery
    .sap
    .require("sap.m.MessageToast");
sap
    .ui
    .define([
        "sap/ui/core/mvc/Controller", "sap/m/MessageToast", 'sap/m/Dialog'
    ], function (Controller, MessageToast, Dialog, Button) {
        "use strict";
        var oModel;
        var listData;
        var currentIndex = 0;
        var _this;
        return Controller.extend("HelloWorld.controller.Login", {

            onInit: function (param) {
                _this = this;
                listData = [
                    {                     
                        1: "q",
                        2: "q",
                        3: "q",
                        4: "q",
                        5: "q"
                    }, 
                ]
                if (!_this.addCostWindowCostSave) {
                    _this.addCostWindowCostSave = sap.ui.xmlfragment("HelloWorld.fragments.addCostWindowCostSave", this);
                    _this.addCostWindowCostSave.open();
                }
                oModel = new sap.ui.model.json.JSONModel();
                sap.ui.getCore().setModel(oModel);
                // this.getView().byId("userList").setModel(oModel);
                 oModel.setProperty("/UserListModel", listData);

            },

        });
    });
