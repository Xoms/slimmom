import React from 'react';
import './Button.scss';

const Button = (props) => {
    const {children, type, className, clickHandler} = props;

    
    return (
        <button type={type} className={className} onClick={clickHandler && clickHandler}>{children}</button>
    ) 
//     if (marker === "primary") {
//         return (
//             <button type="submit" className="primary-button">{text}</button>
//         ) 
//     } else if (marker === "secondary") {
//         return (
//             <button onClick={props.clickHandler} type="button" className="secondary-button">{text}</button>
//         ) 
//     }
};
Button.defaultProps = {
    className: "primary-button",
    clickHandler: null,
    type: "button"
}


export default Button;