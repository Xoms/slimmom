import React from 'react';

const Button = (props) => {
    const {marker, text} = props;

    if (marker === "primary") {
        return (
            <button type="submit" className="primary-button">{text}</button>
        ) 
    } else if (marker === "secondary") {
        return (
            <button type="submit" className="secondary-button">{text}</button>
        ) 
    }
};

export default Button;