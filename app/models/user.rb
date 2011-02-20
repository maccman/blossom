class User < ActiveRecord::Base
  has_many :chats
  
  validates_presence_of :email
  
  acts_as_authentic
  
  def gravatar_url
    "http://gravatar.com/avatar/" + 
    "#{Digest::MD5.new.update(email.downcase)}"
  end
  
  serialize_options do 
    methods :gravatar_url
  end
end
