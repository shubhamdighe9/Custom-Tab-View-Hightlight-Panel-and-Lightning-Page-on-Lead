({
	changeStatusAction1 : function(component, event, helper) {
        
        component.set("v.isOpen",true);
        component.set("v.buttonPressOff",true);
        component.set("v.buttonPressOn",false);
        
	},
    changeStatusAction2 : function(component, event, helper) {
        component.set("v.isOpen",false);
        component.set("v.buttonPressOff",false);
        component.set("v.buttonPressOn",true);
	},
   closeModel: function(component, event, helper) {
      component.set("v.isOpen", false);
   },
 
    likenClose: function(component, event, helper) {
        component.set("v.isOpen", false);
        component.set("v.buttonPressOn",true);
        component.set("v.buttonPressOff",false);
   },
})