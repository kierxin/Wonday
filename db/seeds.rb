demoWorkspace1 = Workspace.create!(
    name: "My Workspace",
    leaders: [1],
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
    latest_board: 1
)

demoUser3 = User.create!(
    email: "willhercules@gmail.com", 
    password: "hwillis123",
    full_name: "Hercules Willis",
    workspace_id: 1,
    latest_board: 1
)

demoUser4 = User.create!(
    email: "mlyons1980@gmail.com", 
    password: "mlyons123",
    full_name: "Marcus Lyons",
    workspace_id: 1,
    latest_board: 1
)

demoUser5 = User.create!(
    email: "mmanning@gmail.com", 
    password: "mmanning123",
    full_name: "Maisie Manning",
    workspace_id: 1,
    latest_board: 2
)

demoUser6 = User.create!(
    email: "tfeld@feld.com", 
    password: "tfeld123",
    full_name: "Thom Feld",
    workspace_id: 1,
    latest_board: 3
)

board1 = Board.create!(
    workspace_id: 1,
    name: "Wonday Project",
    leaders: [1],
    columns_in_use: ["status", "deadline", "people"],
    description: "Full-stack clone of Monday.com"
)

board2 = Board.create!(
    workspace_id: 1,
    name: "Ant Colony Game",
    leaders: [2],
    columns_in_use: ["status", "people"],
    description: "🐜"
)

board3 = Board.create!(
    workspace_id: 1,
    name: "MERN Project",
    leaders: [1, 2],
    columns_in_use: ["status", "deadline", "people"],
    description: "Group project; live at: https://homesweetwoof.herokuapp.com/"
)

group1 = Group.create!(
    board_id: 1,
    color: "green",
    title: "Get Started"
)

group2 = Group.create!(
    board_id: 1,
    color: "gold",
    title: "Backend Implementation"
)

group3 = Group.create!(
    board_id: 1,
    color: "blue",
    title: "Frontend Implementation"
)

group4 = Group.create!(
    board_id: 2,
    color: "blue",
    title: "UI"
)

group5 = Group.create!(
    board_id: 2,
    color: "indigo",
    title: "Miscellaneous"
)

group6 = Group.create!(
    board_id: 2,
    color: "salmon",
    title: "New Group"
)

task1 = Task.create!(
    title: "Determine project deliverables",
    group_id: 1,
    status: "Done",
    deadline: Date.new(2021, 9, 23),
    people: [1, 3, 4]
)

task2 = Task.create!(
    title: "Draft schema",
    group_id: 1,
    people: [1],
    status: "Done",
    deadline: Date.new(2021, 9, 24)
)

task3 = Task.create!(
    title: "Plan backend routes",
    group_id: 1,
    people: [1, 2],
    deadline: Date.new(2021, 9, 26)
)

task4 = Task.create!(
    title: "Plan frontend routes",
    group_id: 1,
    status: "Done",
    people: [1, 2],
    deadline: Date.new(2021, 9, 26)
)

task5 = Task.create!(
    title: "Create wireframes",
    group_id: 1,
    status: "Done",
    people: [1, 2],
    deadline: Date.new(2021, 10, 1)
)

task6 = Task.create!(
    title: "Write backend routes",
    group_id: 2,
    status: "Done",
    people: [3]
)

task7 = Task.create!(
    title: "Write controller methods",
    group_id: 2,
    status: "Done",
    people: [3],
    deadline: Date.new(2021, 10, 3)
)

task8 = Task.create!(
    title: "Write Rails views",
    group_id: 2,
    status: "Done",
    people: [3],
    deadline: Date.new(2021, 10, 3)
)

task9 = Task.create!(
    title: "Create reducers",
    group_id: 3,
    status: "Done",
    people: [4],
    deadline: Date.new(2021, 10, 6)
)

task10 = Task.create!(
    title: "Write AJAX requests",
    group_id: 3,
    status: "Working on it",
    people: [4]
)

task11 = Task.create!(
    title: "Refactor reducers",
    group_id: 3,
    people: [4]
)

task12 = Task.create!(
    title: "Write thunk actions",
    group_id: 3,
    status: "Done",
    people: [3],
    deadline: Date.new(2021, 10, 10)
)

task13 = Task.create!(
    title: "Fix controller logic",
    group_id: 2,
    status: "Stuck",
    people: [3]
)

task14 = Task.create!(
    title: "Create custom route",
    group_id: 3,
    status: "Working on it",
    people: [3],
    deadline: Date.new(2021, 10, 12)
)

task15 = Task.create!(
    title: "Resize footer",
    group_id: 3,
    status: "Done",
    people: [2]
)

task16 = Task.create!(
    title: "Implement user authentication",
    group_id: 3,
    status: "Working on it",
    people: [1, 3],
    deadline: Date.new(2021, 10, 15)
)

task17 = Task.create!(
    title: "Create index page",
    group_id: 3,
    status: "Done",
    people: [1],
    deadline: Date.new(2021, 10, 3)
)

task18 = Task.create!(
    title: "Make containers for presentational components",
    group_id: 3,
    status: "Working on it",
    people: [1],
    deadline: Date.new(2021, 10, 2)
)

task19 = Task.create!(
    title: "Get components to render on user show page",
    group_id: 3,
    status: "Stuck",
    people: [1],
    deadline: Date.new(2021, 10, 2)
)

task20 = Task.create!(
    title: "Remove console errors",
    group_id: 3,
    people: [1]
)

task21 = Task.create!(
    title: "Deploy to Heroku",
    group_id: 3,
    people: [1,3,4],
    deadline: Date.new(2021, 10, 20)
)

task22 = Task.create!(
    title: "finish adding details for modals",
    group_id: 4,
    status: "Stuck"
)

task23 = Task.create!(
    title: "Do the stuff",
    group_id: 5,
    status: "Working on it"
)