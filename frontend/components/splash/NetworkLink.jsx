import React from "react"


const NetworkLink = ({href, text}) => {

    return(
        <li>
            <a href={href} target="_">
                {text}
            </a>
        </li>
    )

}


export default NetworkLink;