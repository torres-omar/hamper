class CreateDryCleaningItems < ActiveRecord::Migration[5.2]
  def change
    create_table :dry_cleaning_items do |t|
      t.string :item_name, null:false 
      t.integer :business_id, null:false 
      t.integer :business_user_id, null:false
    end
  end
end
