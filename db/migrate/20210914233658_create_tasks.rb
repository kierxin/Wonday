class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.integer :group_id, null: false
      t.string :status

      t.timestamps
    end

    add_index :tasks, :title
    add_index :tasks, :group_id
  end
end
