json.boards @boards do |board|
    json.id board.id
    json.workspace_id board.workspace_id
    json.name board.name
    json.leaders board.leaders
end

json.deleted @idx