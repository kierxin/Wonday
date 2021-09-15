class AddMoreColumnsToTasks < ActiveRecord::Migration[6.1]
  def change
    add_column :tasks, :due_date, :date
    add_column :tasks, :people, :string, array: true, default: []
  end
end
