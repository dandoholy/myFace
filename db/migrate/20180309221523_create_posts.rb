class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.text :body, null: false
      t.integer :privacy, null: false
      t.integer :wall_id

      t.timestamps
    end
    add_index :posts, :author_id
  end
end
