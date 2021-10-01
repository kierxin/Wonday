import React from "react";
import { Link } from "react-router-dom";

import NetworkLink from "./NetworkLink";


const NavHeader = () => {
    
    return (
        <nav className="landing-nav-btns">

            <div className="left-side-landing-btns">

                <Link to="/" id="logo">
                    <img src={window.wLogo} alt="w logo" id="w-logo" />
                    wonday<span id="logo-com">.com</span>
                </Link>

                <ul id="networking-btns">
                    <NetworkLink 
                        href="https://angel.co/u/keeruh" 
                        text="AngelList" />
                    <NetworkLink
                        href="https://www.linkedin.com/in/kiraporter"
                        text="LinkedIn" />
                    <NetworkLink
                        href="https://github.com/kierxin/Wonday"
                        text="Wonday GitHub Repo" />
                    <NetworkLink
                        href="https://kierxin.github.io/Kira-Porter-Portfolio/"
                        text="Portfolio" />
                </ul>
                
            </div>

            <div className="right-side-landing-btns">
                <Link to="/login" id="login-btn">Log In</Link>
                <Link to="/signup" id="get-started-btn">
                    <span id="get-started-text">Get Started</span> ›
                </Link>
            </div>

        </nav>
    );
}


export default NavHeader;