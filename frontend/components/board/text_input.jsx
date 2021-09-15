import React from "react";


class TextInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.element) {
            const title = (' ' + this.props.element.title).slice(1);
            this.setState({ title: title })
        }
    }

    handleInput(e) {
        this.setState(
            { title: e.currentTarget.value }
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        let oldTitle = "";

        if (this.props.element) {
            oldTitle = (' ' + this.props.element.title).slice(1);
        }

        if (this.state.title.length < 0) {
            this.setState({ title: oldTitle });
        } else {
            let element = Object.assign({}, this.props.element);
            element.title = this.state.title;

            if (this.props.elementType === "group") {
                this.props.updateGroup(this.props.parentId, element);
            } else {
                if (this.state.title.length > 0) {
                    this.props.updateTask(this.props.parentId, element);
                } else {
                    this.setState({ title: "New Task" });
                }
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