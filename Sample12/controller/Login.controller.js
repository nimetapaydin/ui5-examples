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
                        cookingTime: "Cooking Time : 15 min",
                        cookName: "Korean Sweet",
                        cookImage:"resources/cook.jpg",
                        description: "This light, fruity dessert is a German summertime compote with custard. The fruity mix is ideal as a topping for granola or stirred through ice cream Pour into the prepared tin and bake in the centre of the oven for about 35-40 mins until crusty on top. Leave to cool, then run a knife around the sides and remove from the tin. Dust with icing sugar and serve warm with custard or ice cream or cold with cream.",
                        chef: {
                            name: "Charlie Trotter",
                            image: "https://randomuser.me/api/portraits/women/31.jpg",
                            recepieCount: "24 recepies"
                        },
                        ingredients:[ "Fruits",
                        "350g unsalted butter, plus a little for the tins",
                        "350g golden caster sugar",
                        "6 eggs",
                        "350g self-raising flour",
                        "100ml prosecco",
                        "100g raspberry jam",
                        "For the buttercream",
                        "300g unsalted butter, softened",
                        "600g icing sugar",
                        "100ml prosecco",
                        "To decorate",
                        "sprinkles, coloured sugar, mini meringues, Prosecco-flavoured sweets, popcorn and lollies",
                        ],
                        like:"resources/hearts.png",
                        likecount: "128 likes",
                        assistants: {
                            "firstAssistantImg": "https://randomuser.me/api/portraits/women/48.jpg",
                            "secondAssistantImg": "https://randomuser.me/api/portraits/men/17.jpg",
                            "thirdAssistantImg": "https://randomuser.me/api/portraits/women/47.jpg"
                        }
                    }],
                    [{
        
                        cookingTime: "Cooking Time : 45 min",
                        cookName: "Perfect Cake",
                        cookImage:"resources/cake.jpg",   
                        description: "The perfect cake for brownie lovers, try a big slice warm with some ice cream.Whisk the egg yolks into the chocolate mixture, then add the flour, nuts and the remaining chocolate. Level the cakes if you need to and spread the raspberry jam on one of the cakes followed by some of the butter cream, Roughly ice the cake all over in a very thin layer with a couple of tablespoons of buttercream.",
                        chef: {
                            name: "Sophie Clark",
                            image: "https://randomuser.me/api/portraits/women/55.jpg",
                            recepieCount: "36 recepies"
                        },
                        ingredients: ["Fruits,Dark chocolate",
                        "175g unsalted butter, plus extra for greasing",
                        "225g dark chocolate",
                        "broken into pieces",
                        "200g caster sugar",
                        "3 medium eggs",
                        ", separated",
                        "65g plain flour",
                        "50g chopped pecanuts",
                        "nuts,flour,Egg",
                        ],
                        like:"resources/hearts.png",
                        likecount: "312 likes",
                        assistants: {
                            "firstAssistantImg": "https://randomuser.me/api/portraits/women/82.jpg",
                            "secondAssistantImg": "https://randomuser.me/api/portraits/women/59.jpg",
                            "thirdAssistantImg": "https://randomuser.me/api/portraits/women/43.jpg"
                        }
                    }],
                    [{
        
                        cookingTime: "Cooking Time : 75 min",
                        cookName: "Prosecco",
                        cookImage:"resources/whitecake.jpg",
                       
                        description: "Prosecco lovers, with the Italian tipple finding its way into the cake, boozy buttercream and Prosecco-flavoured sweet topping Spoon the mixture into the tins, level the top and bake for 45-50 mins or until the cakes are well-risen and golden and a skewer inserted comes out clean. Leave to cool in the tin for 10 minutes and then turn them out onto a rack.Whisk the egg whites until they form soft peaks, then gently, but thoroughly, fold into the chocolate mixture.",
                        chef: {
                            name: "leonard Cohen",
                            image: "https://randomuser.me/api/portraits/men/28.jpg",
                            recepieCount: "17 recepies"
                        },
                        ingredients:[ "raising flour",
                        "sugar",
                        "butter",
                        "Egg",
                        "150ml double cream",
                        "25g unsalted butter",
                        "100g dark chocolate",
                        "finely chopped",
                        "50g milk chocolate",
                        "finely chopped",
                        "50ml prosecco",
                        "For the coating",
                        "150g milk chocolate",
                        "icing sugar for dusting",
                        ],
                        like:"resources/hearts.png",
                        likecount: "200 likes",
                        assistants: {
                            "firstAssistantImg": "https://randomuser.me/api/portraits/men/34.jpg",
                            "secondAssistantImg": "https://randomuser.me/api/portraits/women/84.jpg",
                            "thirdAssistantImg": "https://randomuser.me/api/portraits/men/57.jpg"
                        }
                    }]
                ]
                if(!_this.receipesOpenDialog){
                    _this.receipesOpenDialog = sap.ui.xmlfragment("HelloWorld.fragments.recepiesOpenDialog", this); 
                    _this.receipesOpenDialog.open();
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
            ingredientDialogClose:function(oEvent){
               
                _this.ingredientOpenDialog.close();
            },
          
           

        });

    });


   