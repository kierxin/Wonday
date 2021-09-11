import React from "react";


class CreateBoardModalContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            workspace_id: this.props.workspaceId,
            leaders: [this.props.userId]
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
            console.log(this.state);
            this.props.addBoard(this.state);
        } else {
            this.setState({ name: "New Board" });
        }
    }

    render() {
        const ignr = "ignore-modal-close";

        return(
            <div className={`${this.props.type}-modal-foreground ${ignr}`}>

                <h1 className={ignr}>Create board</h1>
                <form id="create-board-form" 
                    className={ignr}
                    onSubmit={this.postBoard}>
                        
                    <label>Board name
                        <input type="text" 
                            placeholder="New Board" 
                            className={ignr}
                            onChange={this.handleInput}
                            value={this.state.name} />
                    </label>

                    <button type="submit" 
                        value="Create Board"
                        className={ignr} />
                </form>

            </div>
        )
    }

}


export default CreateBoardModalContent;