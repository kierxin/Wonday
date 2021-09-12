class CreateGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :groups do |t|
      t.string :color, null: false
      t.integer :board_id, null: false

      t.timestamps
    end

    add_index :groups, :color
    add_index :groups, :board_id
  end
end
