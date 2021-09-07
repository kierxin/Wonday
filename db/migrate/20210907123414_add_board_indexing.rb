class AddBoardIndexing < ActiveRecord::Migration[6.1]
  def change
    add_index :boards, :workspace_id
    add_index :boards, :name
  end
end
