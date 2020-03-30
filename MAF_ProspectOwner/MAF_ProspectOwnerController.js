({
	
    followupAction1 : function(component, event, helper) {
        
        component.set("v.isOpen",true);
        component.set("v.buttonPressOff",true);
        component.set("v.buttonPressOn",false);
        
	},
    followupAction2 : function(component, event, helper) {
        component.set("v.isOpen",false);
        component.set("v.buttonPressOff",false);
        component.set("v.buttonPressOn",true);
	},
})