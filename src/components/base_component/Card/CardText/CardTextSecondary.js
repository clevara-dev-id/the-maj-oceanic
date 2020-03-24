import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardTextSecondary = props => {
    return (
        <Container className={props.className} {...props}>
            {!props.caption? null : <h5 className="primary"> {props.caption } </h5>}
            <h1>{props.title}</h1>
            <P>{props.text}</P>
        </Container>
    )
}

const Container = styled.div(
    props => ({
        className: props.className,
        margin: props.containerMargin,
        padding: props.containerPadding,
        width: props.containerWidth,
        height: props.containerHeight,
        border: props.border? "1px solid": null,
    })
)
const P = styled.p(
    props => ({
        margin: props.margin,
        padding: props.padding,
        fontWeight: "300",
    })
)

CardTextSecondary.propTypes = {
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    title: PropTypes.string,
    text: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    containerMargin: PropTypes.string,
    containerPadding: PropTypes.string,
    containerWidth: PropTypes.string,
    border: PropTypes.bool,
}

CardTextSecondary.defaultProps = {
    caption: "Destination"
}

export default CardTextSecondary