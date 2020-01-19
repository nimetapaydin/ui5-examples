jQuery.sap.require("sap.m.MessageToast");
sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        'sap/m/Dialog',
       
        
    ], function (Controller, MessageToast, Dialog,Button ) {
        "use strict";
        return Controller.extend("HelloWorld.controller.Login", {
           
            showHideInputPanel:function (oEvent) {                
                if(!this.container){
                    this.container = this.getView().byId("todoInputPanel");
                }
                if(this.container.getVisible() == true){
                    this.container.setVisible(false);
                    oEvent.getSource().setText("Göster");
                }
                else {
                    this.container.setVisible(true);
                    oEvent.getSource().setText("Gizle");
                }
             },   
             openTicketInfoPopover: function(e){
                var oPopover = new sap.m.Popover({
                    showHeader:false,
                    content: [
                        new sap.m.Button(
                            {
                                press:this.onMessageDialogPress,
                                text:"ticket bilgileri"
                            }
                        )
                    ]        
                });
                oPopover.openBy(e.getSource());     
            },           
            onMessageDialogPress: function(a) {
                var dialog = new Dialog({                 
                    type: 'Message',
                    content: new sap.m.Text({
                        text:"Ticket bilgileri"
                    }),
                    beginButton: new sap.m.Button({
                        text: 'OK',
                        press: function () {
                            dialog.close();
                        }
                    }),
                    afterClose: function() {
                        dialog.destroy();
                    }
                });
                dialog.open();               
            }      
        }); 
}); 