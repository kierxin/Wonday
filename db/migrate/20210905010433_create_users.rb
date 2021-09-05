class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :full_name
      t.integer :workspace_id
      t.timestamps
    end


    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :full_name
    add_index :users, :workspace_id

  end
end
