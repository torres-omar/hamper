class EditTicketsColumns < ActiveRecord::Migration[5.2]
  def change
    change_column :tickets, :ticket_type_id, :integer, null:true
    change_column :tickets, :delivery_method_id, :integer, null:true
  end
end
