class RefactorUserColsToProfile < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :address, :string
    remove_column :users, :phone_number, :string
    remove_column :users, :work, :string
    remove_column :users, :college, :string
    remove_column :users, :profile_pic_url, :string
    remove_column :users, :banner_pic_url, :string

    create_table :profiles do |t|
      t.integer :user_id, null: false
      t.string :nickname
      t.string :address
      t.string :phone_number
      t.string :work
      t.string :college
      t.integer :profile_pic_id
      t.integer :banner_pic_id

      t.timestamps
    end
    add_index :profiles, :user_id, unique: true
  end
end
