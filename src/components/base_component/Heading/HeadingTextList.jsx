import React from 'react'
import PropTypes from 'prop-types'
import HeadingText from './HeadingText'
import Button from '../Button'
import { Alert } from 'react-bootstrap'

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
                        <li key={index} title={data} className={`list-disc list-inside ${props.listClassName}`}> {data} </li>
                    )
                })}
            </ul>

            <Button outline small className="uppercase" onClick={props.onClick}> {props.buttonTitle} </Button>
        </HeadingText>
    )
}

HeadingTextList.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  caption: PropTypes.string,
  center: PropTypes.bool,
  containerClassName: PropTypes.string,
  heading: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  listClassName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  textClassName: PropTypes.string
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
