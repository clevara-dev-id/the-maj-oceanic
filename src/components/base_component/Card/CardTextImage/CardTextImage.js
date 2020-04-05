import React, { lazy } from 'react'
import PropTypes from 'prop-types'

import Img from '../../../../assets/img/home/card-text-image/1-croped.png'

const Button = lazy(() => import('../../Button'))
const HeadingText = lazy(() => import('../../Heading/HeadingText'))

const CardTextImage = props => {
    return (
        <div className={`flex max-w-container-2 ${props.containerClassName}`}>
            {!props.reverse? (
                <>
                    <div className="bg-no-repeat bg-cover bg-no-repeat" style={{backgroundImage: `url(${props.image})`, width: props.imageWidth, height: props.imageHeight}} />

                    <HeadingText 
                        containerClassName="w-2/4 pl-6 self-center"
                        caption={props.caption} 
                        heading={props.heading}
                        text={props.text}
                        textClassName="mb-8"
                    >
                        <Button small ghost onClick={props.onClick}> {props.buttonTitle.toUpperCase()} </Button>
                    </HeadingText>
                </>
            ) : (
                <>
                    <HeadingText 
                        containerClassName="w-2/4 pr-6 self-center"
                        caption={props.caption} 
                        heading={props.heading}
                        text={props.text}
                        textClassName="mb-8"
                    >
                        <Button small ghost onClick={props.onClick}> {props.buttonTitle.toUpperCase()} </Button>
                    </HeadingText>
                    <div className="bg-no-repeat bg-cover bg-no-repeat" style={{backgroundImage: `url(${props.image})`, width: props.imageWidth, height: props.imageHeight}} />
                </>
            )}
            
        </div>
    )
}

CardTextImage.propTypes = {
    className: PropTypes.string,
    caption: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    imageHeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    buttonTitle: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    reverse: PropTypes.bool
}

CardTextImage.defaultProps = {
    caption: "SUSTAINIBILITY",
    heading: "Card Text Image",
    text: "Reprehenderit enim exercitation eu laboris ea deserunt sunt proident. Ut officia aliqua voluptate commodo magna officia Lorem dolor consectetur eiusmod do enim est exercitation.",
    image: Img,
    imageWidth: "540px",
    imageHeight: "730px",
    buttonTitle: "Button Title",
    onClick: () => {
        alert("clicked")
    }
}

export default CardTextImage
