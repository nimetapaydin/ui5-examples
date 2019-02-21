jQuery.sap.require("sap.m.MessageToast");
sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/m/MessageToast", 'sap/m/Dialog'
], function (Controller) {
	"use strict";
	var _this;
	var oModel;
	var listData;
	var ldata;
	var currentIndex=0;
	var controller;
	return Controller.extend("BNetSapUI5.controller.App", {
		onInit: function () {
			_this = this;
		   
			_this.getView().setModel(oModel);
			listData = [
				{
					id:"1",
					name: "HAL",
					email:"HAL@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/31.jpg",
					level: "Warning",
					description: "HAL: I'm sorry, Dave. I'm afraid I can't do that.",
					mtanım:"Eğitim ",
					mtutarı:"1000 ",
					iconColor: "#fb5f5f",
				}, {
					id:"2",
					name:"LADY B",
					email:"LADY@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/22.jpg",
					level: "Warning",
					description: "Windows Boot Manager has encountered a problem.",
					mtanım:"Konaklama ",
					mtutarı:"250 ",
				}, {
					id:"3",
					name:"PİNK",
					email:"PİNK@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/11.jpg",
					level: "Error",
					description: "Failwhale: Twitter is over capacity",
					mtanım:"Uçuş ",
					mtutarı:"540 ",
				}, {
					id:"4",
					name:"SUZY",
					email:"SUZY@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/13.jpg",
					level: "Success",
					description: "Jun 25 12:20:47 pc1h kernel: lp0 on fire",
					mtanım:"İdari",
					mtutarı:"1182",
				}, {
					id:"5",
					name:"CHAMBU",
					email:"CHAMBU@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/5.jpg",
					level: "Error",
					description: "Software failure. Press left mouse button to continue. Guru Meditation #00000004,#0000AACB.",
					mtanım:"Konaklama ",
					mtutarı:"8420",
				}, {
					id:"6",
					name:"ANTONETTE",
					email:"ANTONETTE@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/9.jpg",
					level: "Error",
					description: "[root@localhost root]# Kernel Panic",
					mtanım:"Uçuş ",
					mtutarı:"784 ",
				}, {
					id:"7",
					name:"Joanna ",
					email:"Joanna.OConner@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/16.jpg",
					level: "Error",
					description: "That does not compute.",
					mtanım:"Eğitim ",
					mtutarı:"2895 ",
				}, {
					id:"8",
					name:"Emma",
					email:"Emma@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/18.jpg",
					level: "Warning",
					description: "404 File not found. Stop messing with the URL.",
					mtanım:"İdari ",
					mtutarı:"6523 ",
				}, {
					id:"9",
					name:"Regards",
					email:"Regards@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/7.jpg",
					level: "Success",
					description: "Blue Screen of Death.",
					mtanım:"İdari",
					mtutarı:"4300 ",
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
			this.getView().byId("userTable").setModel(oModel);
			this.getView().byId("userTable2").setModel(oModel);
	 
			
	
        
		},
		tabBarSelected: function(oEvent) {
			var tabKey = oEvent.getParameter("key");
			var navContainer = _this.getView().byId("varyantContainer");
			switch (tabKey) {
				case "TO":
					navContainer.to(_this.getView().byId(tabKey), "slide");
					break;
				case "FROM":
					navContainer.to(_this.getView().byId(tabKey), "slide");
					break;
				case "CC":
					navContainer.to(_this.getView().byId(tabKey), "slide");
					break;   
				case "View":
					navContainer.to(_this.getView().byId(tabKey), "slide");
					break; 
				case "jsiletable":
					navContainer.to(_this.getView().byId(tabKey), "slide");
					break; 			 		
				default:
					navContainer.back();
					break;
			}
		},   
        openDialogAdd:function(oEvent){
			// oModel = new sap.ui.model.json.JSONModel();
			// sap.ui.getCore().setModel(oModel);

			
			// if (!window.openDialog) {
			// 	window.openDialog = sap.ui.xmlfragment("BNetSapUI5.fragments.view.openDialog", 
		    //     sap.ui.controller("BNetSapUI5.fragments.controller.openDialog")
			// 	);
			// }


			if(!_this.openDialog){
				_this.openDialog = sap.ui.xmlfragment("BNetSapUI5.fragments.view.openDialog", this); 
				_this.openDialog.open();
			}     
			 oModel = new sap.ui.model.json.JSONModel();
			sap.ui.getCore().setModel(oModel);
			
			
			
		},

		tableListdynamic:function(oEvent) {
			
				
		selectedTabKey = _this.getView().byId("jsiletable").getSelectedKey();		

		var data = [{name: "Leanne Graham", id: "1"},
		 {name: "Ervin Howell", id: "2"},
		 {name: "Clementine Bauch", id: "3"},
		 {name: "Nicholas Runolf", id: "4"}];

		var oModel = new sap.ui.model.json.JSONModel(data);  
		var oTable = new sap.m.Table({  
			columns: [new sap.m.Column({  
				header : new sap.m.Text({  
					text : "Name"  
				})  
			}), new sap.m.Column({  
				header : new sap.m.Text({  
					text : "ID"  
				})  
			}), new sap.m.Column({  
				header : new sap.m.Text({  
					text : "DELETE"  
				})  
			}),
					new sap.m.Column({  
				header : new sap.m.Text({  
					text : "Add"  
				})  
			})]  
		});  
		oTable.setModel(oModel);  
		
		var mytemplate = new sap.m.ColumnListItem({  
		type : "Navigation",  
		cells : [  
			new sap.m.Text({text : "{name}"}),  
			new sap.m.Text({text : "{id}"}),  
			new sap.m.Button({  
				icon : "sap-icon://sys-cancel",  
				press : function(evt) {  
					console.log("press")  
					if (evt.getSource().getParent().getParent().getItems().length > 0) {  
						row = evt.getSource().getParent().getId();  
						evt.getSource().getParent().getParent().removeItem(row);  
					}  
				},  
			}),
			
			new sap.m.Button({
				icon : "sap-icon://sys-add", 
				press : function(evt) {  
					var data = {name: "dummyName", id: "d"};
					var getDataModel =      this.getModel().getData();
					getDataModel.push(data)
					this.getModel().setData(getDataModel)
					}	
				})
        ]  
        });  
		oTable.bindAggregation("items", {  
			path : "/",  
			template : mytemplate  
		});  
		oTable.placeAt("content")
		},
		
		closeDialogFragment:function(oEvent){
			_this.openDialog.close();
		},
		deletePersonalInformation:function(oEvent){
			var oSelectedItem = oEvent.getSource().getParent();
			var oPath = oSelectedItem.getBindingContext().sPath;
			var idx = parseInt(oPath.substring(oPath.lastIndexOf('/') +1));

			var modelData = oModel.oData.UserListModel;
			modelData.splice(idx, 1);
			oModel.refresh(true);
		}

	});
});
   
           

