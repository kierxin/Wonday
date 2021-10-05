import React from "react";


class SearchBtn extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button id="search-btn"><i class="fas fa-search"></i> Search</button>
        )
    }

}


export default SearchBtn;