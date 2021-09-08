import React from "react";
import { Link } from "react-router-dom";


const CallToAction = ({formType}) => {
    return(
        <div id="session-call-to-action">
            {formType === "login" ? (
                <>
                    <p>Don't have an account yet?</p>
                    <Link className="swap-session-form" to="/signup">
                        Sign Up
                    </Link>
                </>
            ) : (
                <>
                    <p>Already have an account?</p>
                    <Link className="swap-session-form" to="/login">
                        Log In
                    </Link>
                </>
            )}
        </div>
    )
}


export default CallToAction;