import React from 'react'
import PropTypes from 'prop-types'
import HeadingText from './HeadingText'
import Button from '../Button'

const HeadingTextList = props => {
    return (
        <HeadingText
            containerClassName={props.containerClassName}
            center={props.center}
            caption={props.caption}
            heading={props.heading}
            text={props.text}
            textClassName={props.textClassName}
        >
            <ul className="my-8">
                {props.list.map((data, index) => {
                    return (
                        <li key={index} title={data} style={{listStyleType: "disc", listStylePosition: "inside"}}> {data} </li>
                    )
                })}
            </ul>

            <Button outline small title={props.buttonName} onClick={props.onClick}> {props.buttonTitle.toUpperCase()} </Button>
        </HeadingText>
    )
}

HeadingTextList.propTypes = {
    containerClassName: PropTypes.string,
    center: PropTypes.bool,
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    textClassName: PropTypes.string,
    list: PropTypes.array.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

HeadingTextList.defaultProps = {
    caption: "the vessel",
    heading: "Heading Text List",
    text: "Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit. ",
    list: [
        "Lorem ipsum dolor sit amet",
        "Laboris lar aliquip",
        "Lorem ipsum dolor sit amet",
        "Laboris lar aliquip",
    ],
    buttonTitle: "book now",
    onClick: () => {
        alert("clicked")
    }
}

export default HeadingTextList
