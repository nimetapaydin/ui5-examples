jQuery.sap.require("sap.m.MessageToast");
sap.ui.define([
        "sap/ui/core/mvc/Controller", "sap/m/MessageToast", 'sap/m/Dialog', 'sap/m/DatePicker'
    ], function (Controller, MessageToast, Dialog, Button) {
        "use strict";
        var oModel;
        var listData;
        var addlist;
        // var _this;
        var _this= this;
        var searchCriteriaListItems;
        return Controller.extend("HelloWorld.controller.Login", {
            onInit: function (param) {
                // _this = this;
              oModel = new sap.ui.model.json.JSONModel();
              var  searchCriteriaListItems=[
                    {
                        color:"#4bfff6",
                        name:"Modül ",
                        comment:"Açıklama belirtilmemiş"
                    },
                    {    
                        color:"#4bfff6",
                        name:"Örnek Bilgileri",
                        comment:"Örnek 20"
                    },
                    {                          
                        color:"#4bfff6",
                        name:"Örnek Bilgileri",
                        comment:"Örnek 20"
                    }
                ];
                sap.ui.getCore().setModel(oModel);
                this.getView().setModel(oModel);
                oModel.setProperty("/SearchCriteriaListItems", searchCriteriaListItems);

                 var searchResultsItems=[
                    {
                        color:"#4bfff6",
                        name:"Uygulama Bilgileri",
                        comment:"Internal Ip Adresi",
                    },
                    {
                        color:"#4bfff6",
                        name:"Örnek Bilgileri",
                        comment:"List Örneği",
                    },
                ];
                oModel.setProperty("/SearchResultsItems", searchResultsItems);     
               
            },
            searchCriteriaTabSelection:function (oEvent) { 
                var activeItemText = oEvent.getParameter("item").getText();
                var itemTemplate = new sap.m.StandardListItem({
                    title:'{name}',
                });
                if(activeItemText === "Menu"){
                    if(!_this.menuPopover){
                        _this.menuPopover = new sap.m.Popover({
                            placement:"Bottom",
                            showHeader:false,
                            content:[
                                new sap.m.List({
                                    id:"searchCriteriaList",
                                    mode:"MultiSelect",
                                    includeItemInSelection:true,
                                    select:function (oEvent) { 
                                       //var item = oEvent.getSource();
                                    //    if(item.getSelectedItem().getProperty("selected") !== true){
                                    //        console.log("yapcaz")
                                    //    }
                                     },
                                    selectionChange:function (oEvent) {                                       
                                        var oSelectedItem =oEvent.getSource().getSelectedItem();                                        
                                        var itemData={
                                            color:"#4bfff6",
                                            name:oSelectedItem,                                        
                                            comment:"List Örneği"
                                        }                                      
                                        oModel.oData.SearchCriteriaListItems.push(itemData);
                                        oModel.refresh(true);
                                     },
                                    })
                            ]
                        });
                        _this.menuPopover.openBy(oEvent.getParameter("item"));
                    }
                    else{
                        _this.menuPopover.openBy(oEvent.getParameter("item"));
                    }   
                    var oList = sap.ui.getCore().byId("searchCriteriaList");
                    oList.setModel(oModel);
                    oList.bindItems("/SearchResultsItems",itemTemplate);
                }
            },
            onAfterRendering: function () {
                var oSubmitBtn = this.getView().byId("search");
                oSubmitBtn.attachBrowserEvent('keypress', function(e){
                    if(e.which === 13){
                        if (!_this.searchResult) {
                                _this.searchResult = sap.ui.xmlfragment("HelloWorld.fragments.searchResult", this);                          
                            }
                            _this.searchResult.open();  
                            var oList = sap.ui.getCore().byId("userList2");
                            oList.setModel(oModel);
                            oList.bindItems("/SearchCriteriaListItems",itemTemplate);
                            var list = this.getView().byId("userList2");
                            var binding = list.getBinding("SearchCriteriaListItems");
                    }
               });
            },
            deleteItem:function (oEvent) {
            var oSelectedItem = oEvent.getSource().getParent();
            var oPath = oSelectedItem.getBindingContext().sPath;
            var idx = parseInt(oPath.substring(oPath.lastIndexOf('/') +1));
            var modelData = oModel.oData.SearchCriteriaListItems;
            modelData.splice(idx, 1);
            oModel.refresh(true);
            },   

            
                  
        });
    });
