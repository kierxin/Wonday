json.(board, :id, :workspace_id, :name, :leaders, :columns_in_use, :description)


json.users board.users do |user|
    json.id user.id
    json.full_name user.full_name
end


json.groups board.groups do |group|
    json.(group, :id, :color, :board_id, :title)

    json.tasks group.tasks
end