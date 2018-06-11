class EditTicketColumnName < ActiveRecord::Migration[5.2]
  def change
    remove_column :tickets, :deliver_method_id 
    add_column :tickets, :delivery_method_id, :integer, null:false
  end
end
