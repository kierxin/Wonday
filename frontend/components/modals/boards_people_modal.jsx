import React from "react";


class BoardsPeopleModal extends React.Component {

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

        const membersList = this.props.people.map(user => {
            return(
                <li className="board-member"
                    key={`board-member-${user.id}`}>
                    <h3>{user.full_name}</h3>
                </li>
            )
        })

        return (
            <div className={`boards-people-modal-foreground ${ignr}`}
                onClick={this.preventClose}>

                <div id="boards-people-modal-header" className={ignr}>
                    <h1 className={ignr}>Board Members</h1>
                    <img src={closeModal}
                        alt="Close board members modal"
                        onClick={this.closeModal} />
                </div>

                <ul id="board-members-list">
                    {membersList}
                </ul>
            </div>
        )
    }

}


export default BoardsPeopleModal;