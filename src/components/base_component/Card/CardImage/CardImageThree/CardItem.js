import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardItem = props => {
    return (
        <Container className="grid grid-rows-2" width="350px" height="510px">
            <div className="bg-cover bg-no-repeat bg-center row-end-3 row-span-2" style={{backgroundImage: `url(${props.image})`, width: "350px"}} />
            <ContainerText className="mt-6" width="350px" height="86px">
                <H2 margin="0" border={props.border}> {props.heading} </H2>
                <P className="mt-1" padding="0" border={props.border}> {props.text} </P>
            </ContainerText>
        </Container>
    )
}

const Container = styled.div(
    props => ({
        width: props.width,
        height: props.height,
    })
)

const ContainerText = styled.div(
    props => ({
        width: props.width,
        height: props.height,
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
