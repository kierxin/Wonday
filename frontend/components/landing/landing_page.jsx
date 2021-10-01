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
                        Welcome to <span id="landing-span-wonday">wonday</span>: a full-stack clone of monday.com
                    </p>
                </div>
                <section className="landing-main">
                    <h1>Work Without Limits</h1>
                    <p>Easily build, run, and scale your dream workflows on one platform.</p>
                    <p>What would you like to manage with wonday.com Work OS?</p>

                    <div className="splash-use-cases splash-use-cases-top">
                        <label htmlFor="project-management">
                        <input type="checkbox" id="project-management" />
                            Project management
                        </label>

                        <label htmlFor="sales-and-crm">
                        <input type="checkbox" id="sales-and-crm" />
                            Sales and CRM
                        </label>

                        <label htmlFor="marketing">
                        <input type="checkbox" id="marketing" />
                            Marketing
                        </label>

                        <label htmlFor="creative-and-design">
                        <input type="checkbox" id="creative-and-design" />
                            Creative and design
                        </label>

                        <label htmlFor="software-dev">
                        <input type="checkbox" id="software-dev" />
                            Software development
                        </label>
                    </div>
                    <div className="splash-use-cases splash-use-cases-bottom">
                        <label htmlFor="task-management">
                        <input type="checkbox" id="task-management" />
                            Task management
                        </label>

                        <label htmlFor="operations">                        <input type="checkbox" id="operations" />                        
                            Operations
                        </label>

                        <label htmlFor="hr-and-recruitment">                           <input type="checkbox" id="hr-and-recruitment" />                        
                            HR and recruitment
                        </label>

                        <label htmlFor="it">
                            <input type="checkbox" id="it" />                        
                            IT
                        </label>

                        <label htmlFor="workflows">
                        <input type="checkbox" id="workflows" />
                            200+ workflows
                        </label>
                    </div>

                    <Link to="/signup" id="get-started-btn-bigger">
                        <span id="get-started-text-bigger">Get Started</span> ›
                    </Link>
                </section>
            </>
        )
    }

}


export default LandingPage;