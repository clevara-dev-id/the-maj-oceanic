import React from 'react'
import PropTypes from 'prop-types'
import HeadingText from '../../../Heading/HeadingText'
import Button from '../../../Button'

import './style.scss'

const CardItem = props => {
    return (
        <div className={`${props.containerClassName} card-item`}>
            <div className={`bg-auto bg-no-repeat bg-center w-full h-64 lg:h-image-1 ${props.containerImageClassName}`} style={{backgroundImage: `url(${props.image})`}} />
            {props.heading && props.text? (
                <HeadingText caption={props.caption} heading={props.heading} text={props.text} containerClassName={`mx-auto w-full ${props.containerHeadingClassName} `} center={props.center} headingClassName={`${props.headingClassName}`} textClassName={` w-full ${props.textClassName} `} />
            ): null}
            {props.button?
            (
                <div className="text-center mx-auto w-image-1 mt-10">
                    <Button
                        ghost
                        border="2px solid #208CB2"
                        hover={{ color: "#ffffff", backgroundColor:"#208CB2" }}
                        className="uppercase"
                    >
                        {props.button}
                    </Button>
                </div>
            )
            :
            null
            }
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
