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
        const ele = this.props.element;
        if (ele) {
            const title = (' ' + (ele.title || ele.description)).slice(1);
            this.setState({ title: title });
        }
    }

    handleInput(e) {
        this.setState(
            { title: e.currentTarget.value }
        )
    }

    handleSubmit(e) {
        e.preventDefault();

        const ele = this.props.element;
        const type = this.props.elementType;
        let oldTitle = "";

        if (this.props.element) {
            oldTitle = (' ' + ele.title || ele.description).slice(1);
        }

        if (this.state.title.length < 0) {
            this.setState({ title: oldTitle });
        } else {
            let element = Object.assign({}, ele);

            if (type === "board") {
                element.description = this.state.title;
                this.props.updateBoard(element);
            } else {
                element.title = this.state.title;

                if (type === "group") {
                    this.props.updateGroup(this.props.parentId, element);
                } else if (type === "task") {
                    if (this.state.title.length > 0) {
                        this.props.updateTask(this.props.parentId, element);
                    } else {
                        this.setState({ title: "New Task" });
                    }
                }
            }
        }
    }

    render() {
        return (
            <form 
                onSubmit={this.handleSubmit}
                id={`change-${this.props.elementType}-title`}>

                <input type="text"
                    defaultValue={this.state.title}
                    onChange={this.handleInput}
                    onBlur={this.handleSubmit}
                    className={`${this.props.elementType}-input`}
                    aria-label={`${this.props.elementType}`} />
            </form>
        )
    }

}


export default TextInput;