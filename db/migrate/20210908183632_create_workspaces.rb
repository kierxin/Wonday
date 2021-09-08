class CreateWorkspaces < ActiveRecord::Migration[6.1]
  def change
    create_table :workspaces do |t|
      t.timestamps
    end

    add_column :workspaces, :leaders_ids, :text, array: true, default: []
    add_index :workspaces, :leaders_ids
  end
end
