class Chat < ActiveRecord::Base
  belongs_to :user
  
  validates_presence_of :body, :user_id
  
  after_create :juggernaut
  
  attr_accessible :body, :channel_id, :id
  
  attr_accessor :juggernaut_id
  
  include ActiveRecord::RandomID
  
  private
    def juggernaut
      Juggernaut.publish(
        "/chats", 
        {:body => body, :user_id => user_id, :channel_id => channel_id}, 
        :except => juggernaut_id
      )
    end
    
    def gravatar_url
      user_id? && user.gravatar_url
    end
    
    serialize_options do 
      methods :gravatar_url
      only :body, :user_id, :channel_id
    end
end
