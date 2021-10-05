import React from "react";
import AddGroupBtnContainer from "./add_group_btn_container";
import FilterByPerson from "./filter_by_person";
import SearchBtn from "./search";


class BoardBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectionMenu: false
        }

        this.toggleSelection = this.toggleSelection.bind(this);
        this.handleChoice = this.handleChoice.bind(this);
    }

    toggleSelection() {
        this.setState({ selectionMenu: !this.state.selectionMenu });
    }

    handleChoice(e) {
        e.preventDefault();
        const filter = parseInt(e.currentTarget.getAttribute("datafilter"));

        // this.setState({ selectionMenu: false }, () => {
            this.props.toggleFilter(filter);
        // });
    }

    render() {
        return(
            <div className="board-bar">
                <AddGroupBtnContainer />
                <SearchBtn />
                <FilterByPerson 
                    toggleSelection={this.toggleSelection}
                    handleChoice={this.handleChoice}
                    toggleFilter={this.props.toggleFilter}
                    selectionMenu={this.state.selectionMenu}
                    users={this.props.people} />
            </div>
        )
    }

}


export default BoardBar;