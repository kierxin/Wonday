class AddCreatorToBoard < ActiveRecord::Migration[6.1]
  def change
    add_column :boards, :leaders_ids, :integer, null: false

    add_index :boards, :leaders_ids
  end
end
