import React, { lazy } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Img from '../../../../../assets/img/home/card-image-left-right/1-croped.png'

const Button = lazy(() => import('../../../Button'))

const index = props => {
    return (
        <Container className={`flex ${props.className}`}>
            {!props.reversed? (
                <>
                <div className="bg-no-repeat bg-cover bg-no-repeat" style={{backgroundImage: `url(${props.image})`, width: props.imageWidth, height: props.imageHeight}} />
                <CardText {...props} />
                </>
            ) : (
                <>
                <CardText {...props} />
                <div className="bg-no-repeat bg-cover bg-no-repeat" style={{backgroundImage: `url(${props.image})`, width: props.imageWidth, height: props.imageHeight}} />
                </>
            )}
            
        </Container>
    )
}

const CardText = props => (
    <ContainerText className="self-center ml-6" width="540px" height="229px">
        <h5 className="primary"> {props.caption} </h5>
        <h1> {props.heading} </h1>
        <p className="body-1 mt-6">
            {props.text}
        </p>
        <Button small outline className="mt-12">Learn More</Button>
    </ContainerText>
)

const Container = styled.div(
    props => ({
        width: props.width,
        height: props.height,
    })
)

const ContainerText = styled.div(
    props => ({
        width: props.width,
        height: props.height
    })
)

index.propTypes = {
    className: PropTypes.string,
    caption: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
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
    reversed: PropTypes.bool
}

index.defaultProps = {
    caption: "SUSTAINIBILITY",
    heading: "Lorem Ipsum dolor",
    text: "Reprehenderit enim exercitation eu laboris ea deserunt sunt proident. Ut officia aliqua voluptate commodo magna officia Lorem dolor consectetur eiusmod do enim est exercitation.",
    image: Img,
    imageWidth: "540px",
    imageHeight: "730px"
}

export default index
