(function($){

var state = App.state.add("channel")

state.setup(function(){
  this.connector = this.items.connect(Chat);
  
  this.connector.filter = this.proxy(function(i){ 
    return(i.channel_id == this.current.id);
  });

  this.items.renderItem(function(e, data){
    $(this).find("img").attr("src", data.avatar_url());
  });
});

state.setup(function(){  
  this.form.submit(this.proxy(function(){
    var body = this.input.val();
    
    var chat = new Chat({
      body: body, 
      user_id: Rails.user_id,
      channel_id: this.current.id
    });
    chat.save();
    chat.remoteCreate();
    
    this.input.val("");
    this.input.focus();
    
    return false;
  }));
})

state.beforeEnter(function(channel){
  this.current = channel;
  
  if ( !this.current ) this.current = Channel.first();
  if ( !this.current ) throw("No channel");
});
  
state.afterEnter(function(){
  this.connector.render();
});

state.hasView = true;

})(jQuery);