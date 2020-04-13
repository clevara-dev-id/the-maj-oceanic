import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const large = {width: "auto", height: "48px", fontSize: "17px"} 
const small = {width: "auto", height: "40px"}
const primary = {backgroundColor: "#208CB2", color: "#FFFFFF", border: "1px solid #208CB2"}
const secondary = {backgroundColor: "#C7E2EC", color: "#232323", border: "1px solid #C7E2EC"}
const ghost = {backgroundColor: "transparent", color: primary.backgroundColor, border: `1px solid ${primary.backgroundColor}`}

const Button = props => {

    return (
        <Btn className="uppercase" {...props}>
            {
                props.search? (
                    <> 
                        {/* <img src={SearchIcon} style={{marginRight: "8px"}} alt="seach" /> */}
                        <i className="fa fa-search mr-3"></i>
                        {props.children} 
                    </>
                ) : props.collapse? (
                    <>
                        <i className="fa fa-bars mr-3"></i>
                    </>
                ) : props.children
            }
        </Btn>
    )
}

// Style

const Btn = styled.button(
    props => ({
        width: props.large? large.width: props.small? small.width: props.width,
        height: props.large? large.height: props.small? small.height: props.height,
        backgroundColor: props.primary? primary.backgroundColor: props.secondary? secondary.backgroundColor: props.ghost || props.outline? ghost.backgroundColor: props.backgroundColor,
        color: props.primary? primary.color: props.secondary? secondary.color: props.ghost || props.outline? ghost.color: props.color,
        border: props.primary? primary.border: props.secondary? secondary.border: props.ghost || props.outline? ghost.border: props.border,
        // margin: props.margin,
        // padding: props.padding,
        padding:"11px 20px",
        letterSpacing: props.letterSpacing,
        display: props.display,
        fontSize:"12px",
        visibility: props.visibility,
        ":hover": !props.hover? {
            backgroundColor: props.ghost || props.outline? primary.backgroundColor: "#FFFFFF",
            color: props.ghost || props.outline? "#FFFFFF": props.primary? primary.backgroundColor: props.secondary? secondary.backgroundColor: null,
            border: props.ghost || props.outline? "0": props.primary? primary.backgroundColor: props.secondary? secondary.backgroundColor: null,
        } : props.hover,
    })
)

// PropsTypes

Button.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    large: PropTypes.bool,
    small: PropTypes.bool,
    ghost: PropTypes.bool,
    outline: PropTypes.bool,
    color: PropTypes.string,
    border: PropTypes.string,
    // margin: PropTypes.string,
    padding: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    hover: PropTypes.object,
    letterSpacing: PropTypes.string,
    display: PropTypes.string,
    visibility: PropTypes.string,
}

export default Button