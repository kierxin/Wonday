class LeadersIdsToLeadersWorkspaces < ActiveRecord::Migration[6.1]
  def change
    remove_column :workspaces, :leaders_ids

    add_column :workspaces, :leaders, :integer, array: true, default: [], null: false
  end
end
