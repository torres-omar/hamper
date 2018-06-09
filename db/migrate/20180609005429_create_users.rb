class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false 
      t.string :admin_first_name, null:false
      t.string :admin_last_name, null:false

      t.timestamps
    end

    add_index :users, :email, unique: true 
  end
end
