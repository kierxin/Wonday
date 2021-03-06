import React from "react";
import { ProtectedRoute } from "../../util/route_util";

import LeftNavBtn from "./left_nav/left_nav_btn";
import UserIconContainer from "./left_nav/user_icon_container";
import WorkspaceSidebarContainer from "./workspace_sidebar/workspace_sidebar_container";
import BoardContentContainer from "./board_main/board_content_container";
import ModalContainer from "../modals/modal_container";


class Board extends React.Component {
    
    constructor(props) {
        super(props);
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
                                href="https://github.com/kierxin"
                                src={"github"} 
                            />
                            <LeftNavBtn 
                                external={true} 
                                href="https://angel.co/u/keeruh"
                                src={"angellist"} 
                            />
                            <LeftNavBtn 
                                external={true} 
                                href="https://www.linkedin.com/in/kiraporter"
                                src={"linkedin"} 
                            />
                            <LeftNavBtn 
                                external={true} 
                                href="https://kierxin.github.io/Kira-Porter-Portfolio/"
                                src={"portfolio"} 
                            />
                        </div> 

                        <div className="left-nav-lower-btns">    
                            <LeftNavBtn external={false} src={"invite"} />
                            <UserIconContainer name={user.full_name} />
                        </div>
                        
                    </div>
                </nav>

                <section className="board-main">
                    <WorkspaceSidebarContainer />
                    <ProtectedRoute 
                        path={`/api/boards/${this.props.board.id}`}
                        component={BoardContentContainer} />
                </section>
                
                <ModalContainer />

            </main>
        )
    }

}


export default Board;