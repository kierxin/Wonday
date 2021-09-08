import React from "react";


const Input = ({type, field, value, handle}) => {

    let text;
    if (field.includes("_")) {
        text = field.split("_").map(word => {
            return `${word[0].toUpperCase()}${word.slice(1)}`
        }).join(" ");
    } else {
        text = `${field[0].toUpperCase()}${field.slice(1)}`;
    }

    let fieldType;
    field === "password" ? (fieldType = field) : (fieldType = "text");

    return(
        < label id={`${type}-${field}-label`}>
            <span>{text}</span>
            <input type={fieldType}
                value={value}
                onChange={handle(`${field}`)}
                id={`${type}-${field}-input`} />
        </label >
    )

}


export default Input;