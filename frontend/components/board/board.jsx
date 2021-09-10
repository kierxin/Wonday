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
            workspace: props.workspace,
            board: props.board,
            fullyLoaded: false
        }
    }

    componentDidMount() {
        !this.state.user.workspace && window.location.reload();
        !this.state.user.boards && window.location.reload();
        !this.state.fullyLoaded && this.setState({ fullyLoaded: true });
    }

    render() {

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
                            <UserIcon 
                                name={this.state.user.full_name} 
                                logout={this.props.logout}/>
                        </div>
                    </div>
                </nav>

                {this.state.board && (
                    <section className="board-main">

                        <WorkspaceSidebar 
                        workspace={this.state.workspace}
                        user={this.state.user} />

                        <BoardContent board={this.state.board} user={this.state.user} />       <br /><br /><br /><br />
                        <div>
                            <p>{JSON.stringify(this.state.user)}</p><br /><br />
                            <p>{JSON.stringify(this.state.board)}</p><br /><br />
                        </div>
                    </section>
                )}

            </main>
        )
    }

}


export default Board;