class CreateFriendships < ActiveRecord::Migration[5.1]
  def change
    create_table :friendships do |t|
      t.integer :requester_id, null: false
      t.integer :requested_id, null: false
      t.integer :status, null: false

      t.timestamps
    end
  end
end
