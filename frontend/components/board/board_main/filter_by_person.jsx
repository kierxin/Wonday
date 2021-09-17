import React from "react";


class FilterByPerson extends React.Component {

    constructor(props) {
        super(props);

        this.toggleFilter = this.toggleFilter.bind(this);
    }

    toggleFilter() {
        this.props.toggleFilter(false);
    }

    render() {
        let people;
        if (this.props.users) {
            people = this.props.users.map(user => {
                return (
                    <li key={`filter-user-${user.id}`}
                        datafilter={user.id}
                        onClick={this.props.handleChoice}>
                        {user.full_name}
                    </li>
                )
            });
        }

        return (
            <div className="filter-by-person">
                <button id="filter-btn"
                    onClick={this.props.toggleSelection}>
                    Filter By Person
                    <i className="fas fa-times"
                        onClick={this.toggleFilter}></i>
                </button>

                {this.props.selectionMenu && (
                    <ul className="filter-menu">
                        {people}
                    </ul>
                )}
            </div>
        )
    }

}


export default FilterByPerson;