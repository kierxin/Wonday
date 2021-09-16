# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_16_155433) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boards", force: :cascade do |t|
    t.integer "workspace_id", null: false
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "leaders", default: [], null: false, array: true
    t.text "columns_in_use", default: ["status", "deadline", "people"], array: true
    t.index ["columns_in_use"], name: "index_boards_on_columns_in_use"
    t.index ["leaders"], name: "index_boards_on_leaders"
    t.index ["name"], name: "index_boards_on_name"
    t.index ["workspace_id"], name: "index_boards_on_workspace_id"
  end

  create_table "groups", force: :cascade do |t|
    t.string "color", null: false
    t.integer "board_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "title", null: false
    t.index ["board_id"], name: "index_groups_on_board_id"
    t.index ["color"], name: "index_groups_on_color"
    t.index ["title"], name: "index_groups_on_title"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "title", null: false
    t.integer "group_id", null: false
    t.string "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.date "deadline"
    t.integer "people", default: [], array: true
    t.index ["group_id"], name: "index_tasks_on_group_id"
    t.index ["people"], name: "index_tasks_on_people"
    t.index ["title"], name: "index_tasks_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "workspace_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "latest_board"
    t.string "full_name", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["full_name"], name: "index_users_on_full_name"
    t.index ["latest_board"], name: "index_users_on_latest_board"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["workspace_id"], name: "index_users_on_workspace_id"
  end

  create_table "workspaces", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "leaders", default: [], null: false, array: true
    t.string "name", default: "My Workspace", null: false
    t.index ["name"], name: "index_workspaces_on_name"
  end

end
