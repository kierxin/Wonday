import React from "react";


class AddToBoardModal extends React.Component {

    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
    }

    preventClose(e) { // probably deprecated
        e.stopPropagation();
    }

    closeModal() {
        this.props.toggleModal(false);
    }

    render() {
        const ignr = "ignore-modal-close";

        return (
            <div className={`add-to-board-modal-foreground ${ignr}`}
                onClick={this.preventClose}>

                <div id="add-to-board-modal-header" className={ignr}>
                    <h1 className={ignr}>
                        <span className="s-brown">H</span>
                        <span className="s-salmon">e</span>
                        <span className="s-gold">l</span>
                        <span className="s-green">l</span>
                        <span className="s-blue">o</span>
                        <span className="s-indigo">!</span>
                    </h1>
                    <img src={closeModal}
                        alt="Close add-to-board modal"
                        onClick={this.closeModal} />
                </div>

                <summary>
                    <p className="paras">Welcome to Wonday! This <b>Monday.com</b> clone is made with Ruby on Rails, Javascript, React.js, and Redux.</p>
                    <p className="paras">There is still lots that I would love to do on this project but in the meantime, if you have any feedback, it would be great to hear from you. I can by reached at <b>kierxin@gmail.com</b> or at:</p>
                    <div id="sites-icons">
                        <a href="https://github.com/kierxin" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://angel.co/u/keeruh" target="_blank"><i className="fab fa-angellist"></i></a>
                        <a href="https://www.linkedin.com/in/kiraporter" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" target="_blank"><i className="fa fa-external-link"></i></a>
                    </div>

                    <p className="sig">Have a great day!</p>
                    <p className="sig">- Kira</p>
                </summary>

            </div>
        )
    }

}


export default AddToBoardModal;