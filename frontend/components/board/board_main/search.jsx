import React from "react";


class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonOrInput: "button"
        }

        this.toggleInput = this.toggleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleInput(e) {
        e.preventDefault();

        if (this.state.buttonOrInput === "button") {
            this.setState({ buttonOrInput: "input" });
            this.props.toggleFilter("true", "search");
        } else {
            this.setState({ buttonOrInput: "button" });
            this.props.toggleFilter();
        }
    }

    handleChange(e) {
        e.preventDefault();

        const searchTerm = e.currentTarget.value;
        if (searchTerm.length > 2) {
            this.props.toggleFilter(searchTerm, "search")
        } else {
            this.props.toggleFilter();
        }
    }

    render() {
        return (
            <>
                {this.state.buttonOrInput === "button" && (
                    <button id="search-btn" onClick={this.toggleInput}>
                        <i className="fas fa-search"></i> Search
                    </button>
                )}

                {this.state.buttonOrInput === "input" && (
                    <>
                        <input 
                            id="search-input"
                            type="text"
                            placeholder="Search task by title or status..."
                            onChange={this.handleChange}
                            onBlur={this.toggleInput} />
                        <i  id="cancel-search"
                            className="fas fa-times"
                            onClick={this.props.toggleFilter}></i>
                    </>
                )}
            </>
        )
    }

}


export default Search;