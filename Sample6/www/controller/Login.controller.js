jQuery.sap.require("sap.m.MessageToast");
sap.ui.define([
        "sap/ui/core/mvc/Controller", "sap/m/MessageToast", 'sap/m/Dialog', 'sap/m/DatePicker'
    ], function (Controller, MessageToast, Dialog, Button) {
        "use strict";
        var oModel;
        var listData;
        return Controller.extend("HelloWorld.controller.Login", {
            showHideInputPanel: function (oEvent) {
                if (!this.container) {
                    this.container = this.getView().byId("todoInputPanel");
                }
                if (this.container.getVisible() == true) {
                    this.container.setVisible(false);
                    oEvent.getSource().setText("Göster");
                } else {
                    this.container.setVisible(true);
                    oEvent.getSource().setText("Gizle");
                }
            },

            openodevInfoPopover: function (e) {
                var oPopover = new sap.m.Popover({
                        showHeader: false,
                        content: [
                            new sap .m.Button({press: this.onMessageDialogPress, text: "odev bilgileri"})
                        ]
                    });
                oPopover.openBy(e.getSource());
            },

            onMessageDialogPress: function (a) {
                var dialog = new Dialog({
                    type: 'Message',
                    content: new sap.m.Text({text: "odev bilgileri"}),
                    beginButton: new sap.m.Button({
                            text: 'OK',
                            press: function () {
                                dialog.close();
                            }
                        }),
                    afterClose: function () {
                        dialog.destroy();
                    }
                });
                dialog.open();
            },

            onUserInfoDialogOpen:function (oEvent) {
                var oSelectedItem = oEvent.getSource().getParent();
                var oPath = oSelectedItem.getBindingContext().sPath;
                var itemData = oModel.getProperty(oPath);                

                var dialog = new Dialog({
                    type: 'Message',
                    title: 'Kişi Bilgileri',
                    content:[
                        new sap.m.VBox({
                            width:"100%",
                            justifyContent: sap.m.FlexJustifyContent.Start,
                            alignItems: sap.m.FlexAlignItems.Center,
                            items:[

                                new sap.m.VBox({
                                    width:"100%",
                                    justifyContent: sap.m.FlexJustifyContent.Center,
                                    alignItems: sap.m.FlexAlignItems.Center,
                                    items:[
                                        new sap.f.Avatar({
                                            src:itemData.avatar,
                                            displaySize:sap.f.AvatarSize.S,
                                            displayShape:sap.f.AvatarShape.Circle,
                                        }),
                                    
                                        new sap.m.HBox("statusColorContainer",{
                                         width:"70px",
                                         height:"70px",
                                        }).addStyleClass("levelColorIcon")
                                               
                                    ]
                                }).addStyleClass("avatarContainer sapUiSmallMargin"),                                

                                new sap.m.VBox({
                                    width:"100%",
                                    justifyContent: sap.m.FlexJustifyContent.Start,
                                    alignItems: sap.m.FlexAlignItems.Center,
                                    items:[
                                        new sap.m.Text({
                                            text:itemData.description,
                                            textAlign:sap.ui.core.TextAlign.Center
                                        }).addStyleClass("sapUiSmallMarginBeginEnd"),
                                        new sap.m.Text({
                                            text:itemData.level
                                        })
                                    ]
                                }).addStyleClass("sapUiSmallMarginTop")
                            ]
                        }).addStyleClass("opacityAnimation")
                    ],
                    beginButton: new sap.m.Button({
                        text: 'OK',
                        press: function () {
                            dialog.close();
                        }
                    }),
                    afterClose: function () {
                        dialog.destroy();
                    }
                });
                dialog.open();
                

                var statusColor = sap.ui.getCore().byId("statusColorContainer");
                switch (itemData.level) {
                    case "Warning":
                        statusColor.addStyleClass("levelColorIconWarning");
                        break;
                    case "Success":
                        statusColor.addStyleClass("levelColorIconSuccess");
                        break;
                    case "Error":
                        statusColor.addStyleClass("levelColorIconError");
                        break;                       
                    default:
                        break;
                }
            },

            onExit : function() {
                this.oModel.destroy();
            },
    
            deletePersonalInformation:function (oEvent) {

                var oSelectedItem = oEvent.getSource().getParent();
                var oPath = oSelectedItem.getBindingContext().sPath;
                var idx = parseInt(oPath.substring(oPath.lastIndexOf('/') +1));

                var modelData = oModel.oData.UserListModel;
                modelData.splice(idx, 1);
                oModel.refresh(true);

            },
       
            showPlanDialog:function (oEvent) { 
                var _this = this;
                if(!_this.planDialogWindow){
                    _this.planDialogWindow = sap.ui.xmlfragment("HelloWorld.fragments.planDialog", this);
                }
                _this.planDialogWindow.open();
            },

            handleChange: function (oEvent) {
                var oText = sap.ui.getCore().byId("T1");
                // var comboItem = sap.ui.getCore().byId("T2");
                var combobox = sap.ui.getCore().byId("recursiveDayCount");
                var comboItemValue = combobox.getSelectedItem().getText();
                var oDP = oEvent.oSource;
                oText.setText("Her gün "+oDP.getValue()+"'e kadar "+comboItemValue+" kez tekrarlanacak.");
                
            },

            onInit:function(){           
                sap.ui.getCore().byId("control").setVisible("true");
            },
            openView:function(oControlEvent){

                var state= oControlEvent.getParameters().state;
                sap.ui.getCore().byId("control").setVisible(state);
            },
		onInit : function (evt) {
			sap.ui.getCore().setModel(oModel);
            this.getView().byId("tekrarsayisi").setModel(oModel)
            oModel = new sap.ui.model.json.JSONModel();
            
            
		}
   });
});
