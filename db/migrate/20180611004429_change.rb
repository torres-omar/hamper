class Change < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :longtitude
    add_column :businesses, :longitude, :decimal, null:false
  end
end
