import React from "react";
import AddGroupBtnContainer from "./add_group_btn_container";
import FilterByPerson from "./filter_by_person";
import SearchBtn from "./search";


class BoardBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="board-bar">
                <AddGroupBtnContainer />
                <SearchBtn />
                <FilterByPerson />
            </div>
        )
    }

}


export default BoardBar;