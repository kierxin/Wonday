import React from "react";
import AddGroupBtnContainer from "./add_group_btn_container";
import FilterByPerson from "./filter_by_person";
import Search from "./search";


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
        this.props.toggleFilter();
    }

    handleChoice(e) {
        e.preventDefault();
        const filterType = "person";
        const filter = parseInt(e.currentTarget.getAttribute("datafilter"));
        
        this.props.toggleFilter(filter, filterType);
    }

    render() {
        return(
            <div className="board-bar">
                <AddGroupBtnContainer />
                <Search
                    toggleFilter={this.props.toggleFilter} />
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