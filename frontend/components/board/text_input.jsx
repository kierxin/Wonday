import React from "react";


class TextInput extends React.Component {

    constructor(props) { //takes in props from container's ownProps: title, element, elementType, handleSubmit
        super(props);

        this.state = {
            title: ''
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const title = (' ' + this.props.element.title).slice(1);
        this.setState({ title: title })
    }

    handleInput(e) {
        this.setState(
            { title: e.currentTarget.value }
        )
    }

    handleSubmit(e) {
        e.preventDefault();

        const oldTitle = (' ' + this.props.element.title).slice(1);

        if (this.state.title.length < 0) {
            this.setState({ title: oldTitle });
        } else {
            let element = Object.assign({}, this.props.element);
            element.title = this.state.title;

            if (this.props.elementType === "group") {
                this.props.updateGroup(this.props.parentId, element)
            } else {
                // this.props.updateTask(this.props.parentId, element)
            }
        }
    }

    render() {

        return (
            <>
                <form onSubmit={this.handleSubmit}
                    id={`change-${this.props.elementType}-title`}>

                    <input type="text"
                        defaultValue={this.state.title}
                        onChange={this.handleInput}
                        onBlur={this.handleSubmit} />

                </form>
            </>
        )
    }

}


export default TextInput;