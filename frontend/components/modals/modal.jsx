import React from "react";
import BoardNameContainer from "../board/board_main/board_name_container";

import CreateBoardModalContainer from "./create_board_modal_container";

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

                    {this.props.modalType === "create-board" && <CreateBoardModalContainer />}

                    {/* {this.props.modalType === "rename-board" &&
                    <BoardNameContainer />} */}

            </div>
        )
    }

}


export default Modal;