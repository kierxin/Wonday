import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../app/assets/images/wonday-logo.png";


const NavHeader = () => {
    
    return (
        <nav className="landing-nav-btns">

            <div className="left-side-landing-btns">

                <Link to="/" id="logo">
                    <img src={logo} alt="w logo" id="w-logo" />
                    wonday<span id="logo-com">.com</span>
                </Link>

                <ul id="networking-btns">
                    <li>
                        <a href="#" target="_">
                            AngelList
                        </a>
                    </li>
                    <li className="networking-btn">
                        <a href="https://www.linkedin.com/in/kiraporter" target="_">
                            LinkedIn
                        </a>
                    </li>
                    <li className="networking-btn">
                        <a href="https://github.com/kierxin/Wonday" target="_">
                            Wonday GitHub Repo
                        </a>
                    </li>
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