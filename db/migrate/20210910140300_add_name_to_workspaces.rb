class AddNameToWorkspaces < ActiveRecord::Migration[6.1]
  def change
    add_column :workspaces, :name, :string, null: false, default: "My Workspace"

    add_index :workspaces, :name
  end
end
