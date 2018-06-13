class CreateSettings < ActiveRecord::Migration[5.2]
  def change
    create_table :settings do |t|
      t.integer :user_id
      t.integer :startup_business_id

      t.timestamps
    end
  end
end
