import React, { lazy } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

import Img from '../../../../assets/img/home/card-text-image/1-croped.png'

const Button = lazy(() => import('../../Button'))
const HeadingText = lazy(() => import('../../Heading/HeadingText'))

const CardTextImage = props => {
    return (
        <div className="flex flex-wrap card-text-image">
            {!props.reverse? (
                <>
                    <div className="w-full lg:w-2/4 bg-no-repeat bg-cover bg-no-repeat mb-5 max-h-full h-100 lg:order-none order-first" style={{backgroundImage: `url(${props.image})`}} />

                    <HeadingText 
                        containerClassName="w-full lg:w-2/4 pl-6 self-center"
                        caption={props.caption} 
                        heading={props.heading}
                        text={props.text}
                        list={props.list}
                        textClassName="mb-8"
                    >
                        <Button small ghost onClick={props.onClick}> {props.buttonTitle.toUpperCase()} </Button>
                    </HeadingText>
                </>
            ) : (
                <>
                    <HeadingText 
                        containerClassName="w-full lg:w-2/4 pr-6 self-center"
                        caption={props.caption} 
                        heading={props.heading}
                        text={props.text}
                        list={props.list}
                        textClassName="mb-8"
                    >
                        <Button small ghost onClick={props.onClick}> {props.buttonTitle.toUpperCase()} </Button>
                    </HeadingText>
                    <div className="w-full lg:w-2/4 bg-no-repeat bg-cover bg-no-repeat mb-5 max-h-full h-100 lg:order-none order-first" style={{backgroundImage: `url(${props.image})`}} />
                </>
            )}
            
        </div>
    )
}

CardTextImage.propTypes = {
    className: PropTypes.string,
    caption: PropTypes.string,
    heading: PropTypes.string,
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
    buttonTitle: "Button Title",
    onClick: () => {
        alert("clicked")
    }
}

export default CardTextImage
