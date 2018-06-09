class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.integer :business_id, null:false 
      t.integer :customer_id, null:false 
      t.integer :status_id, null:false 
      t.date :date_dropped_off, null:false 
      t.time :time_dropped_off, null:false 
      t.date :date_fulfilled, null:true 
      t.time :time_filfilled, null:true 
      t.integer :note_id, null:true 
      t.float :bag_weight, null:true 
      t.float :grand_total, null:false 
      t.integer :ticket_type_id, null:false 
    
      t.timestamps
    end
  end
end
