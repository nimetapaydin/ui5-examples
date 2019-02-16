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
					description: "HAL: I'm sorry, Dave. I'm afraid I can't do that."
				}, {
					id:"2",
					name:"LADY B",
					email:"LADY@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/22.jpg",
					level: "Warning",
					description: "Windows Boot Manager has encountered a problem."
				}, {
					id:"3",
					name:"PİNK",
					email:"PİNK@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/11.jpg",
					level: "Error",
					description: "Failwhale: Twitter is over capacity"
				}, {
					id:"4",
					name:"SUZY",
					email:"SUZY@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/13.jpg",
					level: "Success",
					description: "Jun 25 12:20:47 pc1h kernel: lp0 on fire"
				}, {
					id:"5",
					name:"CHAMBU",
					email:"CHAMBU@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/5.jpg",
					level: "Error",
					description: "Software failure. Press left mouse button to continue. Guru Meditation #00000004,#0000AACB."
				}, {
					id:"6",
					name:"ANTONETTE",
					email:"ANTONETTE@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/9.jpg",
					level: "Error",
					description: "[root@localhost root]# Kernel Panic"
				}, {
					id:"7",
					name:"Joanna ",
					email:"Joanna.OConner@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/16.jpg",
					level: "Error",
					description: "That does not compute."
				}, {
					id:"8",
					name:"Emma",
					email:"Emma@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/18.jpg",
					level: "Warning",
					description: "404 File not found. Stop messing with the URL."
				}, {
					id:"9",
					name:"Regards",
					email:"Regards@gmail.com",
					avatar: "https://randomuser.me/api/portraits/women/7.jpg",
					level: "Success",
					description: "Blue Screen of Death."
				}
			]
		 
			

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
				default:
					navContainer.back();
					break;
			}
		},   
        openDialogAdd:function(oEvent){
			oModel = new sap.ui.model.json.JSONModel();
			sap.ui.getCore().setModel(oModel);
			if (!window.openDialog) {
				window.openDialog = sap.ui.xmlfragment("BNetSapUI5.fragments.view.openDialog", 
		        sap.ui.controller("BNetSapUI5.fragments.controller.openDialog")
				);
			}
			
			
			
			
		}
	});
});
   
           

   