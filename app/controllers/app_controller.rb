class AppController < ApplicationController
  layout false
  before_filter :require_user
  
  def index
    respond_to do |wants|
      wants.html {}
      wants.json do
        chats = Chat.all
        render :json => chats
      end
    end
  end
  
  def create
    chat = Chat.new(params[:chat])
    chat.user = current_user
    chat.juggernaut_id = request.headers["X-Session-ID"]
    chat.save!
    head :ok
  end
end
