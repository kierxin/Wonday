import React from "react";


class CreateBoardModalContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            workspace_id: this.props.user.workspace.id,
            leaders: [this.props.user.id]
        }

        this.handleInput = this.handleInput.bind(this);
        this.postBoard = this.postBoard.bind(this);
    }

    handleInput(e) {
        this.setState({ name: e.currentTarget.value });
    }

    postBoard(e) {
        e.preventDefault();
        if (this.state.name.length > 0) {
            this.props.createNewBoard(this.state)
            .then(action => this.props.history.push(`/api/boards/${action.board.id}`))
            .then(this.props.toggleModal(false))
        } else {
            this.setState({ name: "New Board" });
        }
    }

    render() {
        const ignr = "ignore-modal-close";

        return(
            <div className={`create-board-modal-foreground ${ignr}`}>

                <div id="create-board-modal-header" className={ignr}>
                    <h1 className={ignr}>Create board</h1>
                    <img src={closeModal} alt="Close board creation modal" />
                </div>
                <form id="create-board-form" 
                    className={ignr}
                    onSubmit={this.postBoard}>
                        
                    <label className={ignr}>Board name
                        <input type="text" 
                            placeholder="New Board" 
                            className={ignr}
                            onChange={this.handleInput}
                            value={this.state.name} />
                    </label>

                    <button type="submit" 
                        value="Create Board"
                        className={ignr}>
                            Create Board
                    </button>
                </form>

            </div>
        )
    }

}


export default CreateBoardModalContent;