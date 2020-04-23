import React from 'react'
import PropTypes from 'prop-types'

const Heading = props => {
    return (
        <>
            {props.caption? <h5 title={props.caption} className={`primary ${props.captionClassName} ${props.center?`text-center`:null}`}> {props.caption} </h5>: null}
            <h1 title={props.heading} className={`${props.caption? "py-4": "pb-4"} ${props.center?`text-center`:null} ${props.headingClassName}`}> {props.heading} </h1>
        </>
    )
}

Heading.propTypes = {
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    captionClassName: PropTypes.string,
    heading: PropTypes.string,
    headingClassName: PropTypes.string,
}

export default Heading
