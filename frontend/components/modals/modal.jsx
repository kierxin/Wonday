import React from "react";

import CreateBoardModalContent from "./create_board_modal_content";


class Modal extends React.Component {

    constructor(props) {
        super(props);
    }

    ignoreClick(e) {
        e.stopPropagation();
    }

    render() {
        console.log(this.props);
        const type = this.props.modalType;

        return(
            <div id={`${type}-modal-background`}
                onClick={this.props.toggleModal}>
                <div id={`${type}-modal-foreground`}
                    onClick={this.ignoreClick}>
                    <CreateBoardModalContent />
                </div>
            </div>
        )
    }

}


export default Modal;