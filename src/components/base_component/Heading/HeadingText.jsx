import React from 'react'
import PropTypes from 'prop-types'
import Heading from './Heading'

const HeadingText = props => {
    return (
        <div className={`${props.containerClassName} ${props.center? "text-center mx-auto": null}`}>
            <Heading caption={props.caption} heading={props.heading} headingClassName={props.headingClassName} />
            <p title={props.text} className={`body-1 ${props.center? "mx-auto": null} ${props.textClassName? props.textClassName: "w-8/12"}`}> {props.text} </p>
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
    center: PropTypes.bool,
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    heading: PropTypes.string,
    headingClassName: PropTypes.string,
    text: PropTypes.string,
    textClassName: PropTypes.string,
}

export default HeadingText
