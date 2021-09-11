import React from "react";

import BoardsList from "./boards_list";
import CreateBoardModal from "../../modals/create_board_modal";


class WorkspaceSidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hoverable: true,
            collapsed: true,
            toggleText: ">",
            addingBoard: false
        }

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.toggleCollapse = this. toggleCollapse.bind(this);
        this.openCreateBoardModal = this.openCreateBoardModal.bind(this);
    }

    show() {
        if(this.state.hoverable) {
            this.setState({ collapsed: false, toggleText: "<" });
        }
    }

    hide() {
        if (this.state.hoverable) {
            this.setState({ collapsed: true, toggleText: ">" });
        }
    }

    toggleCollapse() {
        if (this.state.collapsed) {
            this.setState({ 
                collapsed: false, 
                hoverable:false, 
                toggleText: "<" 
            });
        } else {
            this.setState({ collapsed: true, hoverable: true });
        }
    }

    openCreateBoardModal() {
        this.setState({ addingBoard: true })
    }

    render() {
        let className;
        if(this.state.collapsed === true) {
            className = "workspace-sidebar-collapsed";
        } else {
            className = "workspace-sidebar-open";
        }

        return(
            <>
            <nav className={`workspace-sidebar ${className}`}
                onMouseEnter={this.show}
                onMouseLeave={this.hide} >

                {this.state.addingBoard && (
                    <CreateBoardModal 
                        user={this.props.user} 
                        workspace={this.props.workspace}
                        addBoard={this.props.addBoard} />
                )}

                <div className="workspace-sidebar-container">
                    <div id="workspace-sidebar-header">
                        <h3>Workspace</h3>
                        <button id="workspace-settings-option"></button>
                    </div>
                    <div id="workspace-name">
                        <p>{this.props.workspace.name[0].toUpperCase()}</p>
                        <h2>{this.props.workspace.name}</h2>
                    </div>
                    <button 
                        id="add-board-option" 
                        onClick={this.openCreateBoardModal}>
                        {/* img */}
                        <p>Add New Board</p>
                    </button>
                    <BoardsList 
                        user={this.props.user} 
                        workspace={this.props.workspace} />
                </div>
            </nav>
            <div id="workspace-sidebar-collapse-btn"
                onClick={this.toggleCollapse}>
                        {this.state.toggleText}
            </div>
            </>
        );
    }
}


export default WorkspaceSidebar;