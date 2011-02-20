class ChannelsController < ApplicationController
  def index
    render :json => Channel.all
  end
end
