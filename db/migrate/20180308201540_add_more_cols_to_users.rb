class AddMoreColsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :address, :string
    add_column :users, :phone_number, :string
    add_column :users, :work, :string
    add_column :users, :college, :string
    add_column :users, :profile_pic_url, :string
    add_column :users, :banner_pic_url, :string
  end
end
