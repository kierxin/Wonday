import React from "react";

import CreateBoardModalContainer from "./create_board_modal_container";
import BoardsPeopleModalContainer from "./boards_people_modal_container";
import AddToBoardModal from "./add_to_board_modal";


class Modal extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (!e.target.classList.contains("ignore-modal-close")) {
            this.props.toggleModal(false);
        }
    }

    render() {
        const type = this.props.modalType;

        return(
            <div className={`${type}-modal-background`}
                onClick={this.handleClick}>

                {this.props.modalType === "create-board" &&       
                    <CreateBoardModalContainer />}

                {this.props.modalType === "boards-people" &&
                    <BoardsPeopleModalContainer />}

                {this.props.modalType === "add-to-board" && (
                    <AddToBoardModal toggleModal={this.props.toggleModal} />
                )}

            </div>
        )
    }

}


export default Modal;