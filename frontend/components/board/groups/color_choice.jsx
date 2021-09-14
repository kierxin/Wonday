import React from "react";


const ColorChoice = ({color, changeColor}) => {

    return(
        <button className={`${color}-btn`}
            onClick={changeColor}
            value={color}></button>
    )

}


export default ColorChoice;