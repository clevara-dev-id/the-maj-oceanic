import React from 'react'
import Button from '.'

const NextArrow = props => {
    const { className, style, onClick } = props
    return (
        <Button
            {...props}
            className={`w-8 h-8 relative right-0 rounded-full ${className}`}
            onClick={onClick}
            style={style}
        >
            <i className="fas fa-angle-right text-base"></i>
        </Button>
    )
}

export default NextArrow