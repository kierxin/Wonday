class ChangeDueDateToDeadline < ActiveRecord::Migration[6.1]
  def change
    remove_column :boards, :columns_in_use
    remove_column :tasks, :due_date

    add_column :boards, :columns_in_use, :text, array: true, default: ["status", "deadline", "people"]
    add_column :tasks, :deadline, :date

    add_index :boards, :columns_in_use
  end
end
