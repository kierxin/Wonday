import React from "react";

import LeftNavBtn from "./left_nav/left_nav_btn";
import UserIconContainer from "./left_nav/user_icon_container";
import WorkspaceSidebar from "./workspace_sidebar/workspace_sidebar";
import BoardContent from "./board_main/board_content";
import Modal from "../modals/modal";
import { createNewWorkspace } from "../../actions/workspace_actions";
import { createNewBoard } from "../../actions/board_actions";


class Board extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            workspace: props.workspace,
            board: props.board,
            fullyLoaded: false,
            modalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        // console.log("GET STATE");
        // console.log(getState());
        // console.log("board mounted");
        // !this.state.workspace && dispatch(createNewWorkspace(this.state.user.id));
        // !this.state.board && dispatch(createNewBoard(this.state.workspace.id));
        !this.state.fullyLoaded && this.setState({ fullyLoaded: true });
    }

    toggleModal(e) {
        if (e.target.classList.contains("ignore-modal-close")) {
            
        } else if (this.state.modalOpen) {
            this.setState({ modalOpen: false });
        } else {
            this.setState({ modalOpen: true });
        }
    }


    render() {
        const { board } = this.props;

        return(
            <main className="everything-container">
                <nav className="left-nav">
                    <div className="left-nav-inner-container">
                        <div className="left-nav-upper-btns">
                            <img id="left-nav-logo" className="left-nav-btn" src={wLogoSmall} alt="W Logo" />
                            <LeftNavBtn external={false} src={"boards"} />
                            <LeftNavBtn 
                                external={true} 
                                href="#" 
                                src={"github"} 
                            />
                            <LeftNavBtn 
                                external={true} 
                                href="#" 
                                src={"angellist"} 
                            />
                            <LeftNavBtn 
                                external={true} 
                                href="#" 
                                src={"linkedin"} 
                            />
                            <LeftNavBtn 
                                external={true} 
                                href="#" 
                                src={"portfolio"} 
                            />
                        </div> 
                        <div className="left-nav-lower-btns">
                            
                            <LeftNavBtn external={false} src={"invite"} />
                            <UserIconContainer 
                                name={this.state.user.full_name} />
                        </div>
                    </div>
                </nav>

                {this.state.board && this.state.board.name && (
                    <section className="board-main">

                        <WorkspaceSidebar
                            toggleModal={this.toggleModal}
                            user={this.state.user} />

                        <BoardContent board={board} user={this.state.user} />       <br /><br /><br /><br />
                        <div>
                            <p>{JSON.stringify(this.state.user)}</p><br /><br />
                            <p>{JSON.stringify(board)}</p><br /><br />
                        </div>
                    </section>
                )}




                {this.state.modalOpen && (
                    <Modal
                        modalType="create-board"
                        userId={this.props.user.id}
                        workspaceId={this.props.workspace.id}
                        toggleModal={this.toggleModal} />
                )}

            </main>
        )
    }

}


export default Board;