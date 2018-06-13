class AddColumnToCustomers < ActiveRecord::Migration[5.2]
  def change
    add_column :customers, :business_id, :integer
  end
end
