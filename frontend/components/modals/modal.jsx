import React from "react";

import CreateBoardModalContent from "./create_board_modal_content";


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
                    <CreateBoardModalContent type={type}
                        addBoard={this.props.addBoard} />
            </div>
        )
    }

}


export default Modal;