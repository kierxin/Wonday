class AddLatestBoardColumnToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :latest_board, :integer
    add_index :users, :latest_board
  end
end
