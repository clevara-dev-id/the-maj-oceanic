import React from 'react'
import Button from '.'

const PrevArrow = props => {
    const { className, style, onClick } = props
    return (
        <Button
            {...props}
            className={`w-8 h-8 relative left-0 rounded-full ${className}`}
            onClick={onClick}
            style={style}
        >
            <i className="fas fa-angle-left text-base"></i>
        </Button>
    )
}

export default PrevArrow