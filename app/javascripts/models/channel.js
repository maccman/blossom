(function(exports, $){
  
  var Channel = SuperModel.setup("Channel");
  
  Channel.attributes = ["name"];
  
  Channel.include(SuperModel.GUID);
  
  exports.Channel = Channel;
  
})(window, jQuery);