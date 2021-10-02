import React from "react";


const Checkbox = ({ color }) => {
    return(
        <div 
            className="my-checkbox" 
            id={`${color}-checkbox`}
            onClick={e => {
                let classList = e.currentTarget.getAttribute("class");

                if (classList.split(" ").includes(`${color}-checked`)) {
                    classList = "my-checkbox";
                    e.currentTarget.setAttribute("class", classList)
                    e.currentTarget.innerText = "";
                } else {
                    classList = `${classList} ${color}-checked`;
                    e.currentTarget.setAttribute("class", classList)
                    e.currentTarget.innerText = "/";
                }
            }} >
        </div>
    )
}


export default Checkbox;