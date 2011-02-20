//= require <jquery>

//= require <rails>
//= require <rails.application>

//= require <superclass>
//= require <superevent>
//= require <superapp>
//= require <superapp.view>
//= require <supermodel>
//= require <supermodel.guid>
//= require <superconnect>
//= require <superrpc>

var App = new SuperClass;
App.extend(SuperEvent);

App.extend({
  state: new SuperApp,
    
  init: function(){
    this.trigger("init");
  }
});

jQuery(function($){  
  App.init();
    
  App.on("loaded", function(){
  });  
});