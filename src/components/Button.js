import React from 'react'
import "../css/Button.css"

// available styles for my button
const STYLES = [
    "btn--main",
    "btn--secondary",
    "btn--third",
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--success--outline",
]

const SIZES = [
    "btn--medium",
    "btn--small"
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    disabled
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button 
        disabled={disabled}
        className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
        onClick={onClick} type={type}>
          {children}
        </button>
    )
}

export default Button;