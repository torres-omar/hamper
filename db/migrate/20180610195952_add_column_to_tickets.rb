class AddColumnToTickets < ActiveRecord::Migration[5.2]
  def change
    add_column :tickets, :deliver_method_id, :integer, null:false
  end
end
