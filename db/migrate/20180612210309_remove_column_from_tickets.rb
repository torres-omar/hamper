class RemoveColumnFromTickets < ActiveRecord::Migration[5.2]
  def change
    remove_column :tickets, :note_id
  end
end
