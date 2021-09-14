import React from "react";

import BoardsListContainer from "./boards_list_container";


class WorkspaceSidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hoverable: true,
            collapsed: true,
            toggleText: ">"
        }

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        this.props.getLatestBoard(this.props.user.boards[0], this.props.user.id);
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

    toggleModal(e) {
        e.preventDefault();
        this.props.toggleModal("create-board");
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

                {this.props.user.workspace && (<div className="workspace-sidebar-container">
                    <div id="workspace-sidebar-header">
                        <h3>Workspace</h3>
                        <button id="workspace-settings-option"></button>
                    </div>
                    <div id="workspace-name">
                        <p>{this.props.user.workspace.name[0].toUpperCase()}</p>
                        <h2>{this.props.user.workspace.name}</h2>
                    </div>
                    <button 
                        id="add-board-option" 
                        onClick={this.toggleModal}>
                        {/* img */}
                        <p>Add New Board</p>
                    </button>
                    {this.props.user.boards && (
                        <BoardsListContainer />
                    )}
                </div>)}
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