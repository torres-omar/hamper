class EditTicketsColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :tickets, :time_filfilled
    add_column :tickets, :time_fulfilled, :time
  end
end
