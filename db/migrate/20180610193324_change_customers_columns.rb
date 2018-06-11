class ChangeCustomersColumns < ActiveRecord::Migration[5.2]
  def change
    change_column :customers, :phone_number, :string, null:true 
    change_column :customers, :street_address, :string, null:true
    change_column :customers, :zip_code, :string, null:true 
    add_column :customers, :apt_number, :string, null:true 
    
    add_index :customers, :email_address, unique:true
  end
end
