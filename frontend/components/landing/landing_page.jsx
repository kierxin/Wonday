import React from "react";
import { Link } from "react-router-dom";

import NavHeader from "./nav_header";


class LandingPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <NavHeader />
                <div className="yellow-banner">
                    <p>
                        Introducing <span id="landing-span-wonday">wonday</span>: a full-stack clone of monday.com
                    </p>
                </div>
                <section className="landing-main">
                    <h1>Work Without Limits</h1>
                    <p>Easily build, run, and scale your dream workflows on one platform.</p>
                    <p>What would you like to manage with wonday.com Work OS?</p>
                    <Link to="/signup" id="get-started-btn-bigger">
                        <span id="get-started-text-bigger">Get Started</span> ›
                    </Link>
                </section>
            </>
        )
    }

}


export default LandingPage;