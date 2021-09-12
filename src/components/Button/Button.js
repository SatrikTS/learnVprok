import React from "react";
import './style.scss';

const Button = ({children}, props) => {
    const activateLasers = (e) => {
        console.log(props)
    }

    return (
        <button className="button" onClick={activateLasers}>
            {children}
        </button>
    )
}

export default Button;