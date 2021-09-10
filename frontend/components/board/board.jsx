import React from "react";

import LeftNavBtn from "./left_nav/left_nav_btn";
import UserIcon from "./left_nav/user_icon";
import WorkspaceSidebar from "./workspace_sidebar/workspace_sidebar";
import BoardContent from "./board_main/board_content";


class Board extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            board: props.board,
        }
    }

    componentDidMount() {
        console.log(this.state.user)
        !this.state.user.workspace && window.location.reload();
        !this.state.user.boards.length && window.location.reload();
    }

    render() {
        return(
            <main className="everything-container">
                <nav className="left-nav">
                    <div className="left-nav-inner-container">
                        <div id="left-nav-upper-btns">
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
                        <div id="left-nav-lower-btns">
                            <LeftNavBtn external={false} src={"invite"} />
                            <UserIcon name={this.state.user.full_name} />
                        </div>
                    </div>
                </nav>
                <div id="workspace-bar-spacemaker"></div> {/* when clicking to expand WorkspaceSidebar, give this element a width so that BoardContent is pushed sideways (WorkspaceSidebar no longer overlaps it; remove the width when collapse button is clicked again) */}
                <section className="board-main">
                    <WorkspaceSidebar workspace={this.state.user.workspace} />
                    <BoardContent board={this.state.board} user={this.state.user} />

                    <br /><br /><br /><br />
                    <div>
                        <p>{JSON.stringify(this.state.user)}</p><br /><br />
                        <p>{JSON.stringify(this.state.board)}</p><br /><br />
                    </div>
                </section>
            </main>
            
        )
    }

}


export default Board;