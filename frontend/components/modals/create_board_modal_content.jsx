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
        this.closeModal = this.closeModal.bind(this);
    }

    handleInput(e) {
        this.setState({ name: e.currentTarget.value });
    }

    preventClose(e) { // probably deprecated
        e.stopPropagation();
    }

    closeModal() {
        this.props.toggleModal(false);
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
            <div className={`create-board-modal-foreground ${ignr}`} 
                onClick={this.preventClose}>

                <div id="create-board-modal-header" className={ignr}>
                    <h1 className={ignr}>Create board</h1>
                    <img src={closeModal} 
                        alt="Close board creation modal"
                        onClick={this.closeModal} />
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

                    <div id="fake-form">
                        <h3>Select what you're managing in this board</h3>

                        <div>
                            <input type="radio" id="use-case-radio-1" />
                            <label for="use-case-radio-1">Items</label>
                        </div>
                        <div>
                            <input type="radio" id="use-case-radio-2" />
                            <label for="use-case-radio-2">Budgets</label>
                        </div>
                        <div>
                            <input type="radio" id="use-case-radio-3" />
                            <label for="use-case-radio-3">Projects</label>
                        </div>
                        <div>
                            <input type="radio" id="use-case-radio-4" />
                            <label for="use-case-radio-4">Tasks</label>
                        </div>
                        <div>
                            <input type="radio" id="use-case-radio-5" />
                            <label for="use-case-radio-5">Leads</label>
                        </div>
                        <div>
                            <input type="radio" id="use-case-radio-6" />
                            <label for="use-case-radio-6">Campaigns</label>
                        </div>
                    </div>

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