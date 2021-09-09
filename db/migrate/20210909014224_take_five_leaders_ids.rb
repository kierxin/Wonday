class TakeFiveLeadersIds < ActiveRecord::Migration[6.1]
  def change
    remove_column :boards, :leaders_ids

    add_column :boards, :leaders, :integer, array: true, default: [], null: false
  end
end
