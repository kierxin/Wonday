import React from "react";
import { Link } from "react-router-dom";

import NavHeader from "./nav_header";
import SplashUseCase from "./splash_use_case";
import Checkbox from "./checkbox";
import AnimatedSquare from "./animated_square";


class LandingPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            animatedSquareColor: {
                mostRecentColor: "none"
            },
            getStartedAnimated: ""
        };

        this.toggleAnimation = this.toggleAnimation.bind(this);
        this.removeGetStartedAnimation = this.removeGetStartedAnimation.bind(this);
    }

    toggleAnimation(e) {
        this.setState({ getStartedAnimated: "get-started-animated" });
        const color = e.currentTarget.getAttribute("datacolor");

        if (!this.state.animatedSquareColor[`${color}`]) {
            let colorToAdd = {...this.state.animatedSquareColor};
            colorToAdd["mostRecentColor"] = color;
            colorToAdd[`${color}`] = color;
            e.currentTarget.setAttribute(
                "class", `${color}-checked-label`
            );
            this.setState({ animatedSquareColor: colorToAdd });
        } else {
            let squareColor = {...this.state.animatedSquareColor};
            squareColor["mostRecentColor"] = "none";
            delete squareColor[`${color}`];
            this.setState({ animatedSquareColor: squareColor });
        }
    }

    removeGetStartedAnimation = () => {
        this.setState({ getStartedAnimated: "" });
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
                        <SplashUseCase
                            case="task-management"
                            color="red"
                            innerText="Task management"
                            toggleAnimation={this.toggleAnimation} />

                        <SplashUseCase
                            case="operations"
                            color="teal"
                            innerText="Operations"
                            toggleAnimation={this.toggleAnimation} />

                        <SplashUseCase
                            case="hr-and-recruitment"
                            color="tangerine"
                            innerText="HR and recruitment"
                            toggleAnimation={this.toggleAnimation} />

                        <SplashUseCase
                            case="it"
                            color="purple"
                            innerText="IT"
                            toggleAnimation={this.toggleAnimation} />

                        <SplashUseCase
                            case="workflows"
                            color="darkgreen"
                            innerText="200+ workflows"
                            toggleAnimation={this.toggleAnimation} />
                    </div>

                    <Link 
                        to="/signup" 
                        id="get-started-btn-bigger"
                        className={this.state.getStartedAnimated}
                        onAnimationEnd={this.removeGetStartedAnimation} >
                        <span id="get-started-text-bigger">Get Started</span> ›
                    </Link>
                    <AnimatedSquare 
                        color={this.state.animatedSquareColor.mostRecentColor} />
                </section>
            </>
        )
    }

}


export default LandingPage;