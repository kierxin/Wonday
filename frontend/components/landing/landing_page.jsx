import React from "react";
import { Link } from "react-router-dom";

import NavHeader from "./nav_header";
import Checkbox from "./checkbox";


class LandingPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = { animatedSquareColor: "none" };

        this.colorAnimatedSquare = this.colorAnimatedSquare.bind(this);
    }

    colorAnimatedSquare(color) {
        this.setState({ animatedSquareColor: color });
    }

    render() {
        return(
            <>
                <NavHeader />
                <div className="yellow-banner">
                    <p>
                        Welcome to <span id="landing-span-wonday">wonday</span>: a full-stack clone of monday.com
                    </p>
                </div>
                <section className="landing-main">
                    <h1>Work Without Limits</h1>
                    <p>Easily build, run, and scale your dream workflows on one platform.</p>
                    <p>What would you like to manage with wonday.com Work OS?</p>

                    <div className="splash-use-cases splash-use-cases-top">
                        <label htmlFor="project-management">
                            <Checkbox 
                                color="indigo" 
                                colorAnimatedSquare={this.colorAnimatedSquare}/>
                            Project management
                        </label>

                        <label htmlFor="sales-and-crm">
                            <Checkbox color="salmon" />
                            Sales and CRM
                        </label>

                        <label htmlFor="marketing">
                            <Checkbox color="salmon" />
                            Marketing
                        </label>

                        <label htmlFor="creative-and-design">
                            <Checkbox color="salmon" />
                            Creative and design
                        </label>

                        <label htmlFor="software-dev">
                            <Checkbox color="salmon" />
                            Software development
                        </label>
                    </div>
                    <div className="splash-use-cases splash-use-cases-bottom">
                        <label htmlFor="task-management">
                            <Checkbox color="salmon" />
                            Task management
                        </label>

                        <label htmlFor="operations">
                            <Checkbox color="salmon" />
                            Operations
                        </label>

                        <label htmlFor="hr-and-recruitment">
                            <Checkbox color="salmon" />
                            HR and recruitment
                        </label>

                        <label htmlFor="it">
                            <Checkbox color="salmon" />
                            IT
                        </label>

                        <label htmlFor="workflows">
                            <Checkbox color="salmon" />
                            200+ workflows
                        </label>
                    </div>

                    <Link to="/signup" id="get-started-btn-bigger">
                        <span id="get-started-text-bigger">Get Started</span> ›
                    </Link>
                    <div 
                        id="animated-square" 
                        className={
                            `${this.state.animatedSquareColor}-sq-color` }>
                    </div>
                </section>
            </>
        )
    }

}


export default LandingPage;