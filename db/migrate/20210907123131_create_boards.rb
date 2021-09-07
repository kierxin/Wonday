class CreateBoards < ActiveRecord::Migration[6.1]
  def change
    create_table :boards do |t|
      t.integer :workspace_id, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end