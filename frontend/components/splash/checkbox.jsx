import React from "react";


const Checkbox = ({ color, checked }) => {
    let checkedClass;
    let innerText;

    if(checked) {
        checkedClass = `my-checkbox ${color}-checked-box`
        innerText = "✓";
    } else {
        checkedClass = "my-checkbox"
        innerText = "";
    }

    return(
        <div 
            className={checkedClass} 
            id={`${color}-checkbox`} >
            {innerText}
        </div>
    )
}


export default Checkbox;