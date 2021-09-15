class AddColumnTypesToBoards < ActiveRecord::Migration[6.1]
  def change
    add_column :boards, :columns_in_use, :text, array: true, default: ["status", "due_date", "people"]

    add_index :boards, :columns_in_use
  end
end
