import React from 'react'
import PropTypes from 'prop-types'
import HeadingText from '../../../Heading/HeadingText'

const CardItem = props => {
    return (
        <div className={`${props.containerClassName}`}>
            <div className={`bg-auto bg-no-repeat bg-center h-image-1 ${props.containerImageClassName}`} style={{backgroundImage: `url(${props.image})`}} />
            {props.heading && props.text? (
                <HeadingText caption={props.caption} heading={props.heading} text={props.text} containerClassName={`${props.containerHeadingClassName} w-auto`} center={props.center} headingClassName={`${props.headingClassName}`} textClassName={`${props.textClassName} w-auto`} />
            ): null}
        </div>
    )
}

CardItem.defaultProps = {
    containerClassName: "w-full"
}

CardItem.propTypes = {
    containerClassName: PropTypes.string,
    border: PropTypes.bool,
    containerImageClassName: PropTypes.string,
    image: PropTypes.string,
    heading: PropTypes.string,
    containerHeadingClassName: PropTypes.string,
    text: PropTypes.string,
    textClassName: PropTypes.string,
    center: PropTypes.bool
}

export default CardItem
