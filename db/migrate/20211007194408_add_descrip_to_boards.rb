class AddDescripToBoards < ActiveRecord::Migration[6.1]
  def change
    add_column :boards, :description, :text

    add_index :boards, :description
  end
end
