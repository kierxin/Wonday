import React from "react";
import { ProtectedRoute } from "../../util/route_util";

import LeftNavBtn from "./left_nav/left_nav_btn";
import UserIconContainer from "./left_nav/user_icon_container";
import WorkspaceSidebarContainer from "./workspace_sidebar/workspace_sidebar_container";
import BoardContentContainer from "./board_main/board_content_container";
import ModalContainer from "../modals/modal_container";
import { getLatestBoard } from "../../actions/board_actions";


class Board extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("PROPS")
        console.log(this.props);

        !this.props.board && location.reload();
        // const user = this.props.user;

        // !user.workspace && location.reload();
        // debugger;
        // !user.latest_board && location.reload();
        // .then(result => getLatestBoard(user.latest_board));

        // debugger;

        // !this.props.board && this.props.getBoard(user.latest_board)
        // .then(location.reload());
        // !this.props.user.latest_board && location.reload();
        // debugger;
        // !this.props.board.id && location.reload();
    }


    render() {
        const user = this.props.user;

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
                {(this.props.board) && (
                    <section className="board-main">

                        <WorkspaceSidebarContainer />

                        <ProtectedRoute 
                            path={`/api/boards/${this.props.board.id}`}
                            component={BoardContentContainer} />
                            
                    </section>
                )}


                {this.props.user.workspace && this.props.board.modalType === "create-board" && (
                    <ModalContainer />
                )}

            </main>
        )
    }

}


export default Board;