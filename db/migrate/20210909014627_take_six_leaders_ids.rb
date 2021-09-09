class TakeSixLeadersIds < ActiveRecord::Migration[6.1]
  def change
    remove_index :boards, name: "index_workspaces_on_leaders_ids"

    add_index :boards, :leaders
  end
end
