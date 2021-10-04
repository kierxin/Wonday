import React from "react";
import { Link } from "react-router-dom";

import NavHeader from "./nav_header";
import SplashUseCase from "./splash_use_case";
import Checkbox from "./checkbox";
import AnimatedSquare from "./animated_square";


class LandingPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = { animatedSquareColor: "none" };

        this.toggleAnimation = this.toggleAnimation.bind(this);
    }

    toggleAnimation(e) {
        const color = e.currentTarget.getAttribute("datacolor");

        if(!e.currentTarget.getAttribute("class").includes(
            `${color}-checked-label`)
        ) {
            e.currentTarget.setAttribute(
                "class", `${color}-checked-label`
            );
            this.setState({ animatedSquareColor: color });
        }
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

                        <SplashUseCase 
                            case="project-management"
                            color="indigo"
                            innerText="Project Management"
                            toggleAnimation={this.toggleAnimation} />

                        <SplashUseCase
                            case="sales-and-crm"
                            color="green"
                            innerText="Sales and CRM"
                            toggleAnimation={this.toggleAnimation} />

                        <SplashUseCase
                            case="marketing"
                            color="pink"
                            innerText="Marketing"
                            toggleAnimation={this.toggleAnimation} />

                        <SplashUseCase
                            case="creative-and-design"
                            color="salmon"
                            innerText="Creative and design"
                            toggleAnimation={this.toggleAnimation} />

                        <SplashUseCase
                            case="software-dev"
                            color="blue"
                            innerText="Software development"
                            toggleAnimation={this.toggleAnimation} />
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
                    <AnimatedSquare 
                        color={this.state.animatedSquareColor} />
                </section>
            </>
        )
    }

}


export default LandingPage;