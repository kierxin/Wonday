![Screenshot from Wonday splash page](https://cdn.discordapp.com/attachments/865227670039560212/890754331555561482/wonday-sc-banner.png)

This project is [LIVE](https://wonday-clone-of-monday.herokuapp.com/#/).

## Introduction

Welcome to Wonday! More info is available at the Wiki: https://github.com/kierxin/Wonday/wiki

In this two-week project, I used React.js, Redux, and Ruby on Rails to clone the website [Monday.com](https://monday.com/). 


## Features

While Monday.com has several ways teams can manage their work, my timeframe required me to prioritize a few features:

<details>
  <summary>Users can log in or sign up via a two-page authentication process and receive relevant error messages if they provide invalid credentials.</summary>
    
  ```javascript
    constructor(props) {
      super(props);

      this.state = {
        user: {
          email: '',
          password: '',
          full_name: ''
        },
        page: 1,
        error: null
      }

      this.handleInput = this.handleInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.goNext = this.goNext.bind(this);
    }
  ```
</details>

<details>
  <summary>On login, existing users are directed to an overview of one of their boards; new users are provided a new board.</summary>

  ![Screenshot of Wonday project board](https://media.discordapp.net/attachments/865227670039560212/888440008850145381/wonday-sc-1.png)
</details>

<details>
  <summary>Boards contain groups of tasks; users can perform full standard CRUD actions on boards and tasks.</summary>

  Each task has columns which users may edit: Title, Status ("done", "stuck," etc.), Deadline, and People (assigned to the task).

  ```javascript
    import React from "react";

    import TaskCellsContainer from "./tasks/task_cells_container";


    const TaskCol = props => {
        const { colType, task } = props;

        return(
            <>
                {colType === "status" && (
                    <TaskCellsContainer.StatusCell task={task} />
                )}

                {colType === "deadline" && (
                    <TaskCellsContainer.DeadlineCell task={task} />
                )}

                {colType === "people" && (
                    <TaskCellsContainer.PeopleCell task={task} />
                )}
            </>
        )
    }


    export default TaskCol;
  ```
</details>

<details>
  <summary>The whole board may be filtered to display only the groups and tasks to which a specific user has been assigned.</summary>

  ![Screenshot of filtering implementation code](https://cdn.discordapp.com/attachments/865227670039560212/888444534323830855/wonday-sc-2.png)
</details>


## Learning Experience

Given that this project was my first real dive into React and Redux, I spent much of the first week figuring out how to use the redux store and get my components to update as expected. As I became more familiar with how components, reducers, actions and action creators, AJAX requests, and the Rails backend all connected, the power of React and Redux started to become very clear to me.

### In the process of making this project, some things I've learned about...

- The difference between updating a component's local state and updating the overall application state
    - To update state in the Redux store, use actions and ensure that reducers are returning a new copy of state
    - And for data to persist between sessions, use AJAX requests to send data to the Rails controller methods
- Having multiple reducers that are combined, so that each reducer only needs to be responsible for a slice of state
    - As opposed to all of the app's state being nested under a single reducer, which complicates logic in the reducer
- Nesting resources in Rails routes
- Protecting frontend routes by redirecting the user (based on whether they are logged in, etc.)
- Creating dropdown menus and other components that depend on event handling logic
- Using state in conjunction with conditionally rendered components, such as modals or filtered tasks
- Working off of multiple Git branches
- Deploying to Heroku


## Future of the Project

The next features I'd like to work on:

- Users can be invited from the app via email
- Groups of tasks can be re-ordered via drag-and-drop
