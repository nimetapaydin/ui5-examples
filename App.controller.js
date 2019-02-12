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
		
			

			oModel = new sap.ui.model.json.JSONModel();
			sap.ui.getCore().setModel(oModel);
			this.getView().byId("userList").setModel(oModel);
			oModel.setProperty("/UserListModel", listData);
     
        
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
   
           

   