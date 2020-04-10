import React, { lazy } from 'react'
import PropTypes from 'prop-types'

import Img from '../../../../assets/img/home/card-text-image/1-croped.png'
import HeadingTextList from '../../Heading/HeadingTextList'

const Button = lazy(() => import('../../Button'))
const HeadingText = lazy(() => import('../../Heading/HeadingText'))

const CardTextImage = props => {
    return (
        <div className="flex max-w-container-2 mx-auto">
            {!props.reverse? (
                <>
                    <div className="bg-no-repeat bg-cover bg-no-repeat" style={{backgroundImage: `url(${props.image})`, width: props.imageWidth, height: props.imageHeight}} />
                    {!props.list? (
                        <HeadingText 
                            containerClassName="w-2/4 pl-6 self-center"
                            caption={props.caption}
                            captionClassName="uppercase"
                            heading={props.heading}
                            headingClassName={props.headingClassName}
                            text={props.text}
                            textClassName="mb-8"
                        >
                            <Button small ghost className="uppercase" onClick={props.onClick}> {props.buttonTitle} </Button>
                        </HeadingText>
                    ): (
                        <HeadingTextList 
                            containerClassName="w-2/4 pl-6 self-center"
                            caption={props.caption}
                            captionClassName="uppercase"
                            heading={props.heading}
                            headingClassName={props.headingClassName}
                            text={props.text}
                            textClassName={`mb-8 ${props.textClassName}`}
                            list={props.list}
                            listClassName="body-1"
                            buttonTitle={props.buttonTitle}
                            onClick={props.onClick}
                        />
                    )}
                </>
            ) : (
                <>
                    {!props.list? (
                        <HeadingText 
                            containerClassName="w-2/4 pr-6 self-center"
                            caption={props.caption} 
                            captionClassName="uppercase"
                            headingClassName={props.headingClassName}
                            heading={props.heading}
                            text={props.text}
                            textClassName="mb-8"
                        >
                            <Button small ghost className="uppercase" onClick={props.onClick}> {props.buttonTitle} </Button>
                        </HeadingText>
                    ) : (
                        <HeadingTextList 
                            containerClassName="w-2/4 pl-6 self-center"
                            caption={props.caption}
                            captionClassName="uppercase"
                            heading={props.heading}
                            headingClassName={props.headingClassName}
                            text={props.text}
                            textClassName={`mb-8 ${props.textClassName}`}
                            list={props.list}
                            buttonTitle={props.buttonTitle}
                            onClick={props.onClick}
                        />
                    )}
                    <div className="bg-no-repeat bg-cover bg-no-repeat" style={{backgroundImage: `url(${props.image})`, width: props.imageWidth, height: props.imageHeight}} />
                </>
            )}
            
        </div>
    )
}

CardTextImage.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  headingClassName: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
  list: PropTypes.array,
  onClick: PropTypes.func.isRequired,
  reverse: PropTypes.bool,
  text: PropTypes.string.isRequired,
  textClassName: PropTypes.string,
}

CardTextImage.defaultProps = {
    caption: "sustainibility",
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
