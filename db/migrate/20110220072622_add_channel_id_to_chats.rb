class AddChannelIdToChats < ActiveRecord::Migration
  def self.up
    add_column :chats, :channel_id, :integer
  end

  def self.down
    remove_column :chats, :channel_id
  end
end