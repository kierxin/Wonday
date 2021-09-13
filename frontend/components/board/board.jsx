import React from "react";
import { ProtectedRoute } from "../../util/route_util";

import LeftNavBtn from "./left_nav/left_nav_btn";
import UserIconContainer from "./left_nav/user_icon_container";
import WorkspaceSidebarContainer from "./workspace_sidebar/workspace_sidebar_container";
import BoardContentContainer from "./board_main/board_content_container";
import Modal from "../modals/modal";


class Board extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            workspace: props.user.workspace,
            board: props.board,
            modalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        !this.state.user.workspace && location.reload();
        !this.state.user.latest_board && location.reload();
        !this.state.user.boards && location.reload();
        // !this.state.user.board.groups && location.reload();
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
        const user = this.state.user;

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
                                name={user.full_name} />
                        </div>
                    </div>
                </nav>

                {(this.state.board && this.state.board.id) && (
                    <section className="board-main">

                        <WorkspaceSidebarContainer
                            toggleModal={this.toggleModal} />

                        <ProtectedRoute 
                            path={`/api/boards/:boardId`}
                            component={BoardContentContainer} />
                            
                    </section>
                )}




                {this.state.modalOpen && (
                    <Modal
                        modalType="create-board"
                        userId={this.state.user.id}
                        workspaceId={this.state.workspace.id}
                        toggleModal={this.toggleModal} />
                )}

            </main>
        )
    }

}


export default Board;