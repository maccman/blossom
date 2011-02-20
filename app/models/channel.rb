class Channel < ActiveRecord::Base
  has_many :chats
  
  validates_presence_of :name
  
  include ActiveRecord::RandomID

  serialize_options do 
    only :name, :id
  end
end
