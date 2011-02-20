
var Chat = SuperModel.setup("Chat");

(function($){

Chat.attributes = ["body", "user_id"];

Chat.include(SuperModel.GUID);

Chat.belongsTo("channel");

Chat.include({
  remoteCreate: function(){
    $.post("/app.json", {chat: this.attributes()});
  },
  
  avatar_url: function(){
    return("/users/" + this.user_id + "/avatar");
  }
});

})(jQuery);