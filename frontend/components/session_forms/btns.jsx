import React from "react";


export const SubmitBtn = ({type, text}) => {
    return(
        <button className="session-form-submit-btn"
                value={type}
                type="submit"
                id={`${type}-submit-btn`} >
            {text}
        </button>
    )
}


export const ContinueBtn = ({ type, text, goNext }) => {
    return (
        <button className="session-form-continue-btn"
            onClick={goNext}
            value="next"
            id={`${type}-continue-btn`} >
            {text}
        </button>
    )
}
