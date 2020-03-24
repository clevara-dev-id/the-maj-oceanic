import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {device} from '../constants/DeviceWidth'

const HeadBackground = (props) => (
    <Container bg={props.bg}>
        <Center>    
            <H1>{props.text}</H1>
        </Center>
    </Container>

)

export default HeadBackground

HeadBackground.propTypes = {
    bg: PropTypes.string,
    text: PropTypes.string,
}

const Container = styled.div`
    background: url(${props=>props.bg});
    width:100%;
    height: 700px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content:center;
    @media only screen and ${device.tablet}{
        display: block;
        justify-content: start;
        height: 400px;
    }
`;
const Center = styled.div`
    margin: auto;
    padding-top: 380px;
    padding-bottom: 230px;
    @media only screen and ${device.tablet}{    
        padding: 230px 10px;
    }
`;

const H1 = styled.h1(
    props => ({
        color: "#FFFFFF",
        fontFamily: "Verlag B",
        fontSize: "48px",
        lineHeight: "80px",
        textAlign: "center",
        textTransform: "uppercase",
        textShadow: "0px 20px 60px rgba(138, 149, 158, 0.2)",
        border: props.border? "1px solid": null,
        margin: props.margin,
        padding: props.padding,
    })
)

// const H1 = styled.h1`
//     max-width: 825px;
//     width:100%;
//     margin-left:auto;
//     margin-right:auto;
//     font-size: 64px;
//     line-height: 85px;
//     text-align: center;
//     color: #fff;
//     text-shadow: 0px 20px 60px rgba(138, 149, 158, 0.2);
//     text-transform: uppercase;
//     @media only screen and ${device.tablet} {
//         max-width: 340px;
//         font-size: 34px;
//         line-height: 41px;
//         text-align: left;
//     }
// `;