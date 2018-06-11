class AddColumnsToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :city, :string, null:false
    add_column :businesses, :state, :string, null:false 
  end
end
