class ChatsUsers < ActiveRecord::Migration
  def self.up
    add_column :chats, :user_id, :integer
  end

  def self.down
    remove_column :chats, :user_id
  end
end