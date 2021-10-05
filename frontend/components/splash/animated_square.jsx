import React from "react";


const AnimatedSquare = ({ color }) => {
    return(
        <div
            key={`${color}-animated-square`}
            id="animated-square"
            className={`${color}-sq-color`}>
        </div>
    )
}


export default AnimatedSquare;