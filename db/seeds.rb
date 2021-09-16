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
    leaders: [1],
    columns_in_use: ["status", "deadline", "people"]
)

board2 = Board.create!(
    workspace_id: 1,
    name: "Ant Colony Game",
    leaders: [2],
    columns_in_use: ["status", "people"]
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

task1 = Task.create!(
    title: "Brainstorm project schema",
    group_id: 1,
    status: "Done"
)

task2 = Task.create!(
    title: "Write controller actions",
    group_id: 1,
    people: [1],
    deadline: Date.new(2021, 9, 24)
)

task2 = Task.create!(
    title: "Create presentational React components",
    group_id: 1,
    status: "Working on it",
    people: [1, 2]
)