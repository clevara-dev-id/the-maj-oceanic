import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Skeleton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        if(this.props.circle){
            return(
                <>
                    <Circle width={this.props.width} />
                </>
            )
        }
        return(
            <>
                <Box width={this.props.width} height={this.props.height} />
            </>
        )
    }
}
const Circle = styled.div(
    props => ({
        width:props.width || "100px",
        height:props.width || "100px",
        borderRadius:"50%",
        background: "linear-gradient(-45deg, #f8f8f8, #b3b3b3, #cccccc)",
        backgroundSize: "400% 400%",
        animation: "gradient 3s ease infinite",
        "@keyframes gradient": {
            "0%": {
                backgroundPosition: "0% 50%",
            },
            "50%": {
                backgroundPosition: "100% 50%",
            },
            "100%": {
                backgroundPosition: "0% 50%",
            }
        }
    })
)
const Box = styled.div(
    props => ({
        width:props.width || "100px",
        height:props.height || "100px",
        background: "linear-gradient(-45deg, #f8f8f8, #b3b3b3, #cccccc)",
        backgroundSize: "400% 400%",
        animation: "gradient 3s ease infinite",
        "@keyframes gradient": {
            "0%": {
                backgroundPosition: "0% 50%",
            },
            "50%": {
                backgroundPosition: "100% 50%",
            },
            "100%": {
                backgroundPosition: "0% 50%",
            }
        }
    })
)
Skeleton.propTypes = {
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    circle: PropTypes.bool,
}