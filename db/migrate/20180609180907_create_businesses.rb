class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false 
      t.integer :user_id, null: false 
      t.string :business_type_id, null:false 
      t.decimal :longtitude, null:false 
      t.decimal :latitude, null:false 
      t.integer :zipcode, null:false 
      t.string :street_address, null:false 
      t.float :price_per_pound, null:true 

      t.timestamps
    end

    add_index :businesses, :name
  end
end
