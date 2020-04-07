import React from 'react'
import PropTypes from "prop-types"
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

NextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
}

export default NextArrow