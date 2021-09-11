import React from "react";


class CreateBoardModalContent extends React.Component {


    render() {
        const ignr = "ignore-modal-close";

        return(
            <div className={`${this.props.type}-modal-foreground ${ignr}`}>

                <h1 className={ignr}>Create board</h1>
                <form id="create-board-form" className={ignr}>
                    <label>Board name
                        <input type="text" placeholder="New Board" className={ignr} />
                    </label>
                </form>

            </div>
        )
    }

}


export default CreateBoardModalContent;