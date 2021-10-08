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
        const target = e.currentTarget;
        let filter;
        let filterType;

        if (target.hasAttribute("datafilter")) {
            filterType = "person";
            filter = parseInt(e.currentTarget.getAttribute("datafilter"));
        } else if (target.hasAttribute("datasearch")) {
            filterType = "search";
            filter = e.currentTarget.getAttribute("datasearch");
        }
        
        this.props.toggleFilter(filter, filterType);
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