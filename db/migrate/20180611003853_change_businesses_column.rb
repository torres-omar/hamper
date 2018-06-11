class ChangeBusinessesColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :zipcode
    add_column :businesses, :zip_code, :string, null:false
  end
end
