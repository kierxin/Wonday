import React from "react";


class ChooseColumns extends React.Component {

    constructor(props) {
        super(props);

        this.addCol = this.addCol.bind(this);
        this.removeCol = this.removeCol.bind(this);
    }

    addCol(e) {
        e.preventDefault();
        const col = e.currentTarget.getAttribute("datavalue");
        let board = this.props.board;

        board.columns_in_use.push(col);

        this.props.toggleChoosing(e);
        this.props.updateBoard(board);
        return;
    }

    removeCol(e) {
        e.preventDefault();
        const col = e.currentTarget.getAttribute("datavalue");
        let board = this.props.board;
        const idx = board.columns_in_use.indexOf(col);

        if (!board.columns_in_use.length <= 1) {
            board.columns_in_use = board.columns_in_use.slice(0, idx).concat(board.columns_in_use.slice(idx + 1));

            this.props.toggleChoosing(e);
            this.props.updateBoard(board);
        }
        return;
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
        });

        const removable = possibleDeletes.map(col => {
            return(
                <p key={`remove-${col}-from-board`}
                    onClick={this.removeCol} 
                    datavalue={col} >
                    - {col[0].toUpperCase() + col.slice(1)}
                </p>
            );
        });

        const addable = possibleAdds.map(col => {
            return (
                <p key={`add-${col}-to-board`}
                    onClick={this.addCol} 
                    datavalue={col} >
                    + {col[0].toUpperCase() + col.slice(1)}
                </p>
            );
        });

        return(
            <div className={`choose-columns-true`}>
                <div className="remove-columns">
                    <h4>Remove Columns</h4>
                    {removable}
                </div>
                <div className="add-columns">
                    <h4>Add Columns</h4>
                    {addable}
                </div>
            </div>
        )
    }
}


export default ChooseColumns;