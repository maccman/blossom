//= require <jquery>

//= require <rails>
//= require <rails.application>

//= require <superclass>
//= require <superevent>
//= require <superapp>
//= require <superapp.view>
//= require <supermodel>
//= require <supermodel.guid>
//= require <supermodel.relation>
//= require <superconnect>
//= require <superrpc>

//= require <models/chat>
//= require <models/channel>

var App = new SuperClass;
App.extend(SuperEvent);

App.extend({
  state: new SuperApp,
    
  init: function(){
    this.trigger("init");
  }
});

jQuery(function($){ 
  App.state.view = new SuperApp.View($("#views"));
  
  App.init();
    
  App.on("loaded", function(){
  });  
});

jQuery(function($){
  var jug = new Juggernaut;
  
  jQuery.ajaxSetup({
    beforeSend: function(xhr){
      xhr.setRequestHeader("X-Session-ID", jug.sessionID);
    }
  });
  
  jug.on("connect", function(){
    console.log("connected");
  });
  
  var channels = $("#channels");
  channels.connect(Channel);
  
  channels.delegate("li", "click", function(){
    App.state.change("channel", $(this).item());
  });
    
  jug.subscribe("/chats", function(data){
    Chat.create(data);
  });
  
  $(function(){
    $.getJSON("/app", function(data){
      Chat.populate(data);      
    });
    
    $.getJSON("/channels", function(data){
      Channel.populate(data);
      App.state.change("channel");
    });
  })
});

//= require <states/channel>
//= require <states/channelEdit>