class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.integer :uploader_id
      t.timestamps
    end
    add_index :photos, :uploader_id
  end
end
