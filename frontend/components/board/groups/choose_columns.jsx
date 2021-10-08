import React from "react";


class ChooseColumns extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            columnsInUse: this.props.board.columns_in_use
        }
    }

    render() {
        const possibleColumns = ["status", "deadline", "people"];
        let possibleAdds = [];
        let possibleDeletes = [];

        possibleColumns.forEach(col => {
            this.props.board.columns_in_use.includes(col) ? (
                possibleDeletes.push(col)
            ) : (
                possibleAdds.push(col)
            )
        })

        return(
            <div className={`choose-columns-true`}>
                Choosing
            </div>
        )
    }
}


export default ChooseColumns;