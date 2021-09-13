demoWorkspace1 = Workspace.create!(
    name: "New Workspace",
    leaders: [1]
)

demoUser1 = User.create!(
    email: "leslie_rau@yahoo.com",
    password: "lrau123",
    full_name: "Leslie Rau",
    workspace_id: 1,
    latest_board: 1
)

demoUser2 = User.create!(
    email: "zariah123@verizon.net", 
    password: "zhopper123",
    full_name: "Zariah Hopper",
    workspace_id: 1,
    latest_board: 2
)

board1 = Board.create!(
    workspace_id: 1,
    name: "September Project",
    leaders: [1]
)

board2 = Board.create!(
    workspace_id: 1,
    name: "Ant Colony Game",
    leaders: [2]
)

group1 = Group.create!(
    board_id: 1,
    color: "gold",
    title: "My first group!"
)


group2 = Group.create!(
    board_id: 1,
    color: "salmon",
    title: "My second group"
)