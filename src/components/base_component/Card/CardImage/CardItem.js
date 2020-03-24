import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Col } from 'react-bootstrap'

const CardItem = props => {
    return (
        <Container {...props} className="grid grid-rows-3 items-start">
            <div className="bg-cover bg-center" style={{backgroundImage: `url(${props.image})`, height: "400px"}} />
            <div>
                <H2 margin="24px 0" border={props.border}> {props.heading} </H2>
            </div>
            <div> 
                <P padding="0" border={props.border}> {props.text} </P>
            </div>
        </Container>
    )
}

const Container = styled.div(
    props => ({
        border: props.border? "1px solid": null,
        margin: props.containerMargin,
        padding: props.containerPadding,
        boxSizing: "border-box",
    })
)

const H2 = styled.h2(
    props => ({
        border: props.border? "1px solid": null,
        fontWeight: "600",
        lineHeight: "28px",
        textAlign: "center",
        margin: props.margin,
        padding: props.padding,
        textTransform: "uppercase",
    })
)

const P = styled.p(
    props => ({
        border: props.border? "1px solid": null,
        fontWeight: "300",
        textAlign: "center",
        margin: props.margin,
        padding: props.padding,
    })
)

CardItem.propTypes = {
    border: PropTypes.bool,
    containerMargin: PropTypes.string,
    containerPadding: PropTypes.string,
    image: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
}

export default CardItem
