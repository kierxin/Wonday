json.(board, :id, :workspace_id, :name, :leaders)


json.users board.users, :id, :full_name
json.groups board.groups, :id