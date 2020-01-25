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
                        movieName: "While You Were Sleeping",
                        banner: "resources/sen.jpg",
                        rating: "Warning",
                        moviePrice: "10$",
                        iconh:"resources/hearts.png"
                    }, {                     
                        movieName: "Forrest Gump",
                        banner: "resources/forrest.jpg",
                        rating: "Warning",
                        moviePrice: "9$"
                    }, {                     
                        movieName: "Prestij",
                        banner: "resources/prestij.jpg",
                        moviePrice: "8$"
                    }, {                
                        movieName: "3 Idiots",
                        banner: "resources/3.jpg",
                        rating: "Warning",
                        moviePrice: "7$"
                    }, {                      
                        movieName: "How to Train Your Dragon 2",
                        banner: "resources/dragon.jpg",
                        rating: "Warning",
                        moviePrice: "6$"
                    }, 
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
                // this.getView().byId("userList").setModel(oModel);
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
                                            src:itemData.banner,
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

            
            showmovieDialog:function (oEvent) { 
                var _this = this;
                if(oModel.oData.UserListModel.length > 0){
                    if(!_this.movieDialog){
                        _this.movieDialog = sap.ui.xmlfragment("HelloWorld.fragments.movieDialog", this);
                    }
                    _this.movieDialog.open();          
                    sap.ui.getCore().byId("ratingIndicator").setValue(0);      
                    var currentUser = oModel.oData.UserListModel.pop();
                    oModel.setProperty("/CurrentUser", currentUser);
                    if(!oModel.oData.VotedUserList){
                        oModel.setProperty("/VotedUserList",[]);
                        oModel.getProperty("/VotedUserList").push(currentUser);
                    }  
                    else {
                        oModel.getProperty("/VotedUserList").push(currentUser);
                    }      
                }                                
            },
            
            voteUser:function (oEvent) { 
                var _this = this;
                oModel.oData.CurrentUser.voteCount = oEvent.getSource().getValue();
                if(oModel.oData.UserListModel.length == 0){
                    _this.movieDialog.close();   
                    _this.voteUserRatingDialog = sap.ui.xmlfragment("HelloWorld.fragments.voteUserrating", this); 
                    _this.voteUserRatingDialog.open();

                    var userListView = sap.ui.getCore().byId("voteUserList");
                    for (let index = 0; index < userListView.getItems().length; index++) {
                        var item = (userListView.getItems())[index];
                        item.addStyleClass("voteListItemShow");
                        item.getDomRef().style.transitionDelay = (index*0.2)+"s";
                        item.getDomRef().style.transitionTimingFunction	= "ease";
                        item.getDomRef().style.transitionDuration = "1s";
                    }
                }
            },
            onPopupOpen:function (oEvent) {
                var oSelectedItem = oEvent.getSource().getParent();
                var oPath = oSelectedItem.getBindingContext().sPath;
                var itemData = oModel.getProperty(oPath);                

                var popover = new Popover({
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
                                            src:itemData.banner,
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
                            popover.close();
                        }
                    }),
                    afterClose: function () {
                        popover.destroy();
                    }
                });
                popover.open();
            }
        


         });

    });

    