jQuery.sap.require("sap.m.MessageToast");
sap.ui.define([
        "sap/ui/core/mvc/Controller", "sap/m/MessageToast", 'sap/m/Dialog'
    ], function (Controller, MessageToast, Dialog, Button) {
        "use strict";
        var oModel;
        var listData;
        return Controller.extend("HelloWorld.controller.Login", {
            onInit: function (param) {
                listData = [
                    {
                        name: "HAL",
                        avatar: "https://randomuser.me/api/portraits/women/31.jpg",
                        level: "Warning",
                        description: "HAL: I'm sorry, Dave. I'm afraid I can't do that."
                    }, {
                        name:"LADY B",
                        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                        level: "Warning",
                        description: "Windows Boot Manager has encountered a problem."
                    }, {
                        name:"PİNK",
                        avatar: "https://randomuser.me/api/portraits/women/11.jpg",
                        level: "Error",
                        description: "Failwhale: Twitter is over capacity"
                    }, {
                        name:"SUZY",
                        avatar: "https://randomuser.me/api/portraits/women/13.jpg",
                        level: "Success",
                        description: "Jun 25 12:20:47 pc1h kernel: lp0 on fire"
                    }, {
                        name:"CHAMBU",
                        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
                        level: "Error",
                        description: "Software failure. Press left mouse button to continue. Guru Meditation #00000004,#0000AACB."
                    }, {
                        name:"ANTONETTE",
                        avatar: "https://randomuser.me/api/portraits/women/9.jpg",
                        level: "Error",
                        description: "[root@localhost root]# Kernel Panic"
                    }, {
                        name:"Joanna ",
                        avatar: "https://randomuser.me/api/portraits/women/16.jpg",
                        level: "Error",
                        description: "That does not compute."
                    }, {
                        name:"Emma",
                        avatar: "https://randomuser.me/api/portraits/women/18.jpg",
                        level: "Warning",
                        description: "404 File not found. Stop messing with the URL."
                    }, {
                        name:"Regards",
                        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
                        level: "Success",
                        description: "Blue Screen of Death."
                    }
                ]

                listData.map(function(item){                    
                    switch (item.level) {
                        case "Warning":
                            item.levelColor = "#e98f2f";
                            break;
                        case "Success":
                            item.levelColor = "#31bf81";                         
                            break;
                        case "Error":
                            item.levelColor = "#ec4140";                          
                            break;                       
                        default:
                            break;
                    }
                });

                oModel = new sap.ui.model.json.JSONModel();
                sap.ui.getCore().setModel(oModel);
                this.getView().byId("userList").setModel(oModel);
                oModel.setProperty("/UserListModel", listData);
            },

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

            openTicketInfoPopover: function (e) {
                var oPopover = new sap.m.Popover({
                        showHeader: false,
                        content: [
                            new sap .m.Button({press: this.onMessageDialogPress, text: "ticket bilgileri"})
                        ]
                    });
                oPopover.openBy(e.getSource());
            },

            onMessageDialogPress: function (a) {
                var dialog = new Dialog({
                    type: 'Message',
                    content: new sap.m.Text({text: "Ticket bilgileri"}),
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
                                        // new sap.ui.core.Icon({

                                        //     src :"sap-icon://appear-offline",
                                        //     size: "90px",
                                        //     color:itemData.levelColor
    
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
            // showNotificationPopover:function (oEvent) { 
            //     var _this = this;
            //     if(!_this.notificationPopoverWindow){
            //         _this.notificationPopoverWindow = sap.ui.xmlfragment("HelloWorld.fragments.notificationPopover", this);
            //     }
            //     _this.notificationPopoverWindow.open();
            // },          
            showNotificationPopover:function (oEvent) {
                if (!this.notificationPopover) {
                    this.notificationPopover = sap.ui.xmlfragment("HelloWorld.fragments.notificationPopover", this);
                    // this.getView().addDependent(this._oPopover);
                    // this.notificationPopover.bindElement("/UserListModel", listData);
                }
    
                this.notificationPopover.openBy(oEvent.getSource());
            },



         });

    });

    