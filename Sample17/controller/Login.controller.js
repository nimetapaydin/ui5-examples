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
                        name: "CV",
                        color: "#476cff",
                        rec:"rectangle.png",
                        
                    }
                ]

                if (!_this.staticsDialog) {
                    _this.staticsDialog = sap.ui.xmlfragment("HelloWorld.fragments.staticsDialog", this);
                    _this.staticsDialog.open();
                }
                oModel = new sap.ui.model.json.JSONModel();
                sap.ui.getCore().setModel(oModel);
                // this.getView().byId("userList").setModel(oModel);
                oModel.setProperty("/UserListModel", listData);

                // listData.map(function (item) {
                //     switch (item.listData) {
                //         case "0":
                //             item.color = "#ff467f";
                //             break;
                //         case "1":
                //             item.color = "#476cff";
                //             break;
                //         case "2":
                //             item.listData[2] = "#ff8c40";
                //             break;
                //         case "3":
                //             item.listData[3] = "#8a3fff";
                //             break;
                //         case "4":
                //             item.listData[4] = "#acadc2";
                //             break;
                //         default:
                //             break;
                //     }
                // })
            }
        });
    });
