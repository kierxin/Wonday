import React from "react";

import CreateBoardModalContainer from "./create_board_modal_container";

class Modal extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    ignoreClick(e) {
        e.stopPropagation();
    }

    handleClick(e) {
        this.props.toggleModal(e);
    }

    render() {
        const type = this.props.modalType;

        return(
            <div className={`${type}-modal-background`}
                onClick={this.handleClick}>
                    <CreateBoardModalContainer 
                        userId={this.props.userId}
                        workspaceId={this.props.userId} />
            </div>
        )
    }

}


export default Modal;