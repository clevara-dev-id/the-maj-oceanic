import React, { lazy } from 'react'
import PropTypes from 'prop-types'

import Img1 from '../../../../assets/img/home/card-text-image/1-small.png'

const HeadingText = lazy(() => import('../../Heading/HeadingText'))
const Button = lazy(() => import('../../Button'))

const CardTextImageSmall = props => {
    return (
        <div className={`flex max-w-container-2 ${props.containerClassName}`}>
        {
            !props.reverse? (
            <>
                <div className="w-2/4">
                    <div 
                        className="bg-no-repeat bg-cover bg-no-repeat" 
                        style={{
                            backgroundImage: `url(${props.image})`,
                            maxHeight: "400px",
                            width: props.imageWidth, 
                            height: props.imageHeight
                        }} 
                    />
                </div>
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
                <div 
                    className="bg-no-repeat bg-cover bg-no-repeat w-2/4" 
                    style={{
                        backgroundImage: `url(${props.image})`,
                        maxHeight: "400px",
                        width: props.imageWidth, 
                        height: props.imageHeight
                    }} 
                />
            </>
            )
        }
        </div>
    )
}

CardTextImageSmall.propTypes = {
    containerClassName: PropTypes.string,
    image: PropTypes.string.isRequired,
    imageWidth: PropTypes.string,
    imageHeight: PropTypes.string.isRequired,
    caption: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

CardTextImageSmall.defaultProps = {
    image: Img1,
    imageWidth: "100%",
    imageHeight: "400px",
    caption: false,
    heading: "Card Text Image Small",
    text: "Sunt excepteur laborum reprehenderit duis sunt fugiat eu dolore. Laborum mollit nostrud quis proident esse cillum sint laboris in deserunt eu consectetur ad adipisicing. Mollit nulla in quis nisi elit occaecat eu dolore aliquip.",
    buttonTitle: "Button Title",
    onClick: () => {
        alert("clicked")
    }
}

export default CardTextImageSmall
