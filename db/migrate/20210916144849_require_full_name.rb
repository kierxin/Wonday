class RequireFullName < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :full_name

    add_column :users, :full_name, :string, null: false

    add_index :users, :full_name
  end
end
