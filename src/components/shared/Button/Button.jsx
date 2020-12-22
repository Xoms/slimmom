import React from 'react';
import './Button.scss';

const Button = (props) => {
    const {marker, text} = props;

    if (marker === "primary") {
        return (
            <button type="submit" className="primary-button">{text}</button>
        ) 
    } else if (marker === "secondary") {
        return (
            <button onClick={props.clickHandler} type="button" className="secondary-button">{text}</button>
        ) 
    }
};

export default Button;