json(@groups) do |group|
    json.partial! "api/groups/group", group: group
end