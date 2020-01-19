jQuery.sap.require("sap.m.MessageToast");
sap.ui.define([
        "sap/ui/core/mvc/Controller", "sap/m/MessageToast", 'sap/m/Dialog'
    ], function (Controller, MessageToast, Dialog, Button) {
        "use strict";
        var oModel;
        var listData;
        var currentIndex=0;
        var _this;
        return Controller.extend("HelloWorld.controller.Login", {
            onInit: function (param) {
                _this = this;
                listData = [
                    [{
                        title: "Hello",
                        title2: "WORLD.",
                        cookImage:"resources/man.png",
                        description: [" Hi everyone!",
                        "Working on social popup for my photo gallery.",
                        "It work in two step, first you click on social icon and second you have a short description and a sample of what you are going to see.",
                        "Check out the larger previews attached.",
                       "Hoping to have some returns, Thanks!",
                        ],
                        description2:[
                            
                            "The free high-resolution photo of horizon, mountain, cloud, sunrise, sunset, mist, sunlight, morning, hill", 
                            "dawn, peak, valley, mountain range, dusk, haze, ridge, plain, summit, saddle, plateau, calabasas, landform", 
                            "geographical feature, atmospheric phenomenon, mountainous landforms",
                            "taken with an unknown camera 12/31 2016 The picture taken with",
                        ],
                        contact:"Contact me on christophekerebel@gmail.com ",
                        
                    }],
                    [{
                        title: "My",
                        title2: "DRIBBBLE.",
                        cookImage:"resources/dashboard.png",
                        description: [" Hi everyone!",
                        "Working on social popup for my photo gallery.",
                        "It work in two step, first you click on social icon and second you have a short description and a sample of what you are going to see.",
                        "Check out the larger previews attached.",
                       "Hoping to have some returns, Thanks!",
                        ],
                        contact:"Contact me on christophekerebel@gmail.com ",
                    }],
                    
                    [{
                        title: "My",
                        title2: "BEHANCE.",
                        cookImage:"resources/deniz.jpg",
                        description: [" Hi everyone!",
                        "Working on social popup for my photo gallery.",
                        "It work in two step, first you click on social icon and second you have a short description and a sample of what you are going to see.",
                        "Check out the larger previews attached.",
                       "Hoping to have some returns, Thanks!",
                        ],
                        contact:"Contact me on christophekerebel@gmail.com ",
                    }],
                    [{
                        title: "My",
                        title2: "INSTAGRAM.",
                        cookImage:"resources/happy_muffin.png",
                        description: [" Hi everyone!",
                        "Working on social popup for my photo gallery.",
                        "It work in two step, first you click on social icon and second you have a short description and a sample of what you are going to see.",
                        "Check out the larger previews attached.",
                       "Hoping to have some returns, Thanks!",
                        ],
                        contact:"Contact me on christophekerebel@gmail.com ",
                    }],
                    [{
                        title: "My",
                        title2: "VIMEO.",
                        cookImage:"resources/gök.jpg",
                        description: [" Hi everyone!",
                        "Working on social popup for my photo gallery.",
                        "It work in two step, first you click on social icon and second you have a short description and a sample of what you are going to see.",
                        "Check out the larger previews attached.",
                       "Hoping to have some returns, Thanks!",
                        ],
                        contact:"Contact me on christophekerebel@gmail.com ",
                    }],
                    [{
                        title: "My",
                        title2: "TWITTER.",
                        cookImage:"resources/owl.jpg",
                        description: [" Hi everyone!",
                        "Working on social popup for my photo gallery.",
                        "It work in two step, first you click on social icon and second you have a short description and a sample of what you are going to see.",
                        "Check out the larger previews attached.",
                       "Hoping to have some returns, Thanks!",
                        ],
                        contact:"Contact me on christophekerebel@gmail.com ",
                    }],
                    [{
                        title: "My",
                        title2: "LINKEDIN.",
                        cookImage:"resources/city.jpg",
                      
                        description: [" Hi everyone!",
                        "Working on social popup for my photo gallery.",
                        "It work in two step, first you click on social icon and second you have a short description and a sample of what you are going to see.",
                        "Check out the larger previews attached.",
                       "Hoping to have some returns, Thanks!",
                        ],
                        contact:"Contact me on christophekerebel@gmail.com ",
                    }],
                   
        
                ]
                if(!_this.socialDialog){
                    _this.socialDialog = sap.ui.xmlfragment("HelloWorld.fragments.socialDialog", this); 
                    _this.socialDialog.open();
                }     
                 oModel = new sap.ui.model.json.JSONModel();
                sap.ui.getCore().setModel(oModel);
                // this.getView().byId("userList").setModel(oModel);
                oModel.setProperty("/UserListModel", listData[currentIndex]);
            },
            nextDialogOpen:function(oEvent){
                if(currentIndex == (listData.length-1))
                    return;
                oModel = new sap.ui.model.json.JSONModel();
                sap.ui.getCore().setModel(oModel);
                oModel.setProperty("/UserListModel", listData[++currentIndex]);
            },
            prevDialogOpen: function(oEvent){
                if(currentIndex == 0)
                    return;
                oModel = new sap.ui.model.json.JSONModel();
                sap.ui.getCore().setModel(oModel);
                oModel.setProperty("/UserListModel", listData[--currentIndex]);
            },

            ingredientDialogOpen:function(oEvent){
                oModel = new sap.ui.model.json.JSONModel();
                sap.ui.getCore().setModel(oModel);
                oModel.setProperty("/UserDetailsModel", listData[currentIndex]);
                oModel.setProperty("/UserListModel", listData[currentIndex]);
                if (!_this.ingredientOpenDialog) {
                    _this.ingredientOpenDialog = sap.ui.xmlfragment("HelloWorld.fragments.ingredientOpenDialog", this);
                   
                }
                _this.ingredientOpenDialog.open();  
            },    
            socialDialogClose:function(oEvent){
               
                _this.socialDialog.close();
            },
            // dribbleOpenDialog:function(oEvent){
            //     oModel = new sap.ui.model.json.JSONModel();
            //     sap.ui.getCore().setModel(oModel);
            //     oModel.setProperty("/UserListModel", listData[1]);
            // },
            // behanceOpenDialog:function(oEvent){
            //     oModel = new sap.ui.model.json.JSONModel();
            //     sap.ui.getCore().setModel(oModel);
            //     oModel.setProperty("/UserListModel", listData[2]);
            // },
            // instagramOpenDialog:function(oEvent){
            //     oModel = new sap.ui.model.json.JSONModel();
            //     sap.ui.getCore().setModel(oModel);
            //     oModel.setProperty("/UserListModel", listData[3]);
            // },
            // vimeoOpenDialog:function(oEvent){
            //     oModel = new sap.ui.model.json.JSONModel();
            //     sap.ui.getCore().setModel(oModel);
            //     oModel.setProperty("/UserListModel", listData[4]);
            // },
            // twitterOpenDialog:function(oEvent){
            //     oModel = new sap.ui.model.json.JSONModel();
            //     sap.ui.getCore().setModel(oModel);
            //     oModel.setProperty("/UserListModel", listData[5]);
            // },
            // linkedinOpenDialog:function(oEvent){
            //     oModel = new sap.ui.model.json.JSONModel();
            //     sap.ui.getCore().setModel(oModel);
            //     oModel.setProperty("/UserListModel", listData[6]);
            // },

            navigateDialogWindow:function(oEvent){
                
                var buttonid = oEvent.getSource().getId();
                oModel = new sap.ui.model.json.JSONModel();
                sap.ui.getCore().setModel(oModel);
                var buttonId = buttonid.substring(0,4);
                switch (buttonId) {
                    case "Btn1":
                        oModel.setProperty("/UserListModel", listData[1]);
                        break;
                    case "Btn2":
                        oModel.setProperty("/UserListModel", listData[2]);                       
                        break;
                    case "Btn3":
                        oModel.setProperty("/UserListModel", listData[6]);               
                        break;  
                    case "Btn4":
                     oModel.setProperty("/UserListModel", listData[5]);                       
                        break;   
                    case "Btn5":
                        oModel.setProperty("/UserListModel", listData[3]);                        
                        break;      
                    case "Btn6":     
                        oModel.setProperty("/UserListModel", listData[4]);                   
                        break;                        
                    default:
                        break;
                }
            }
           

        });

    });


   