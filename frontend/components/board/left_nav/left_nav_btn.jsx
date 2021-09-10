import React from "react";


class LeftNavBtn extends React.Component {


    render() {
        const { src } = this.props;
        const title = `${src[0].toUpperCase()}${src.slice(1).toLowerCase()}`;

        if(this.props.external) {

            return(
                <div className="left-nav-btn" data-title={`${title}`}>
                    <a href={this.props.href} target="_blank">
                        <img src={window[src]} />
                    </a>
                </div>
            )
            
        } else {
            
            return(
                <div className="left-nav-btn" data-title={`${title}`}>
                    <img src={window[src]} />
                </div>
            );

        }
    }
}


export default LeftNavBtn;