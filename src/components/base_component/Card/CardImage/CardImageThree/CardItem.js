import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import HeadingText from '../../../Heading/HeadingText'

const CardItem = props => {
    return (
        <div className={`${props.containerClassName}`}>
            <div className={`bg-auto bg-no-repeat bg-center w-image-1 h-image-1 ${props.containerImageClassName}`} style={{backgroundImage: `url(${props.image})`}} />
            {props.heading && props.text? (
                <HeadingText caption={props.caption} heading={props.heading} text={props.text} containerClassName={`${props.containerHeadingClassName} w-image-1`} center={props.center} headingClassName={`${props.headingClassName}`} textClassName={`${props.textClassName} w-image-1`} />
            ): null}
        </div>
    )
}

CardItem.propTypes = {
    containerClassName: PropTypes.string,
    border: PropTypes.bool,
    image: PropTypes.string,
    heading: PropTypes.string,
    containerHeadingClassName: PropTypes.string,
    text: PropTypes.string,
    textClassName: PropTypes.string,
    center: PropTypes.bool
}

export default CardItem
