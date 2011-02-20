class ChatIds < ActiveRecord::Migration
  def self.up
    change_column :chats, :id, :string, :null => false
  end

  def self.down
    change_column :chats, :id, :string
  end
end