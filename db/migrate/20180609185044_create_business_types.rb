class CreateBusinessTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :business_types do |t|
      t.string :type_name, null:false 
      t.string :description, null:false 
      
      t.timestamps
    end
  end
end
