import React from 'react'
import PropTypes from 'prop-types'
import Heading from './Heading'

const HeadingText = props => {
    return (
        <div className={`${props.containerClassName} ${props.center? "text-center": null}`}>
            <Heading caption={props.caption} heading={props.heading} headingClassName={props.headingClassName} />
            <p title={props.text} className={`body-1 ${props.center? "mx-auto": null} ${props.textClassName? props.textClassName: "w-8/12"}`}> {props.text} </p>
            {props.children && props.children}
        </div>
    )
}

HeadingText.propTypes = {
    containerClassName: PropTypes.string,
    center: PropTypes.bool,
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    heading: PropTypes.string.isRequired,
    headingClassName: PropTypes.string,
    text: PropTypes.string.isRequired,
    textClassName: PropTypes.string,
}

HeadingText.defaultProps = {
    caption: "the vessel",
    heading: "Heading Text",
    text: "Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit. "
}

export default HeadingText
