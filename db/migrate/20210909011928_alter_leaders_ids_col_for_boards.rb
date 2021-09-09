class AlterLeadersIdsColForBoards < ActiveRecord::Migration[6.1]
  def change
    remove_column :boards, :leaders_ids

    add_column :boards, :leader_ids, :text, array: true, default: []
  end
end
