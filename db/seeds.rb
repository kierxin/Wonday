demoWorkspace1 = Workspace.create!(
    leaders_ids: [1]
)

demoWorkspace2 = Workspace.create!(
    leaders_ids: [2]
)

demoUser1 = User.create!(
    email: "leslie_rau@yahoo.com",
    password: "lrau123",
    full_name: "Leslie Rau",
    workspace_id: 1
)

demoUser2 = User.create!(
    email: "zariah123@verizon.net", 
    password: "zhopper123",
    full_name: "Zariah Hopper",
    workspace_id: 2
)

board1 = Board.create!(
    workspace_id: 1,
    name: "September Project",
    leaders: [1]
)

board2 = Board.create!(
    workspace_id: 2,
    name: "Ant Colony Game",
    leaders: [2]
)