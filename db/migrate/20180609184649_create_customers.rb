class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.string :first_name, null:false 
      t.string :last_name, null:false 
      t.string :email_address, null:false 
      t.string :phone_number, null:false 
      t.string :street_address, null:false 
      t.string :zip_code, null:false 
    
      t.timestamps
    end
  end
end
