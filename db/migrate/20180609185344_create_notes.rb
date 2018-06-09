class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.integer :ticket_id, null:false 
      t.text :text, null:true

      t.timestamps
    end
  end
end
