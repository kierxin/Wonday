class ChangeTasksPeopleToInteger < ActiveRecord::Migration[6.1]
  def change
    remove_column :tasks, :people

    add_column :tasks, :people, :integer, array: true, default: []
    add_index :tasks, :people
  end
end
