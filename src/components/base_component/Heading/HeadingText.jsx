import React from 'react'
import PropTypes from 'prop-types'
import Heading from './Heading'
import './style.scss'

const HeadingText = props => {
    return (
        <div className={`${props.containerClassName} ${props.center? "text-center": null} heading-text`}>
            <Heading caption={props.caption} heading={props.heading} headingClassName={props.headingClassName} />
            <p title={props.text} className={`body-1 ${props.center? "mx-auto": null} ${props.textClassName? props.textClassName: "lg:w-8/12 w-full"}`}> {props.text} </p>
            {
                props.list?
                    <>
                        <ul className="mb-10 pl-4 list-disc">
                            {props.list.map((data,i) => {
                                return(
                                    <li key={i}>{data.text}</li>
                                )
                            })}
                        </ul>
                    </>
                : null
            }
            {props.children && props.children}
        </div>
    )
}

HeadingText.propTypes = {
    containerClassName: PropTypes.string,
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    heading: PropTypes.string,
    headingClassName: PropTypes.string,
    text: PropTypes.string,
    textClassName: PropTypes.string,
}

export default HeadingText
