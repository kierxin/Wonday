class AddTitlesToGroups < ActiveRecord::Migration[6.1]
  def change
    add_column :groups, :title, :text, null: false

    add_index :groups, :title
  end
end
