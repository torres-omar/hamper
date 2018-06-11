class CreateDeliveryMethods < ActiveRecord::Migration[5.2]
  def change
    create_table :delivery_methods do |t|
      t.string :method_name, null:false
      t.timestamps
    end
  end
end
