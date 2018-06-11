class EditCustomersTable < ActiveRecord::Migration[5.2]
  def change
    change_column :customers, :email_address, :string, null:true
    add_index :customers, :phone_number, unique: true
  end
end
