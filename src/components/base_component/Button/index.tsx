import * as React from 'react';
import _ from 'lodash';
import styled, { CSSObject } from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const large = {width: "auto", height: "48px", fontSize: "17px"};
const small = {width: "auto", height: "40px"};
const primary = {backgroundColor: "#208CB2", color: "#FFFFFF", border: "2px solid #208CB2 !important"};
const secondary = {backgroundColor: "#C7E2EC", color: "#232323", border: "2px solid #C7E2EC !important"};
const ghost = {backgroundColor: "transparent", color: primary.backgroundColor, border: `1px solid ${primary.backgroundColor}`};

/**
 * Type props button
 * 
 * @param search boolean (optional)
 * 
 * @param collapse boolean (optional)
 * 
 * @param large boolean (optional)
 * 
 * @param small boolean (optional)
 * 
 * @param primary boolean (optional)
 *  
 * @param secondary boolean (optional)
 *  
 * @param ghost boolean (optional)
 *  
 * @param outline boolean (optional)
 *  
 * @param letterSpacing number (optional)
 *  
 * @param display string (optional)
 *  
 * @param visibility "visible" | "hidden";
 *  
 * @param hover boolean (optional)
 * 
 */
export interface ButtonTypes extends PropButton {
    className?: string;
    search?: boolean;
    collapse?: boolean;
    onClick?: () => void;
    children?: any;
    href?: string;
};

/**
 * 
 * @param className strong (optional)
 * 
 * @param search boolean    (optional)
 * 
 * @param collapse boolean  (optional)
 * 
 * @param large boolean (optional)
 * 
 * @param small boolean (optional)
 * 
 * @param primary boolean (optional)
 * 
 * @param secondary boolean (optional)
 * 
 * @param ghost boolean (optional)
 * 
 * @param outline boolean (optional)
 * 
 * @param letterSpacing number (optional)
 * 
 * @param display CSSProperties string
 * 
 * @param visibility CSSProperties string one of "visible" or "hidden"
 * 
 * @param hover CSSObject
 */

const Button: React.FC<ButtonTypes> = (props): JSX.Element => {
    const { search, collapse, children, href, className } = props;
    return (
        <Btn to={href || "#"} className={`uppercase ${className}`} {...props}>
            {search
                ? (
                    <React.Fragment> 
                        <i className="fa fa-search mr-3"></i>
                        {children} 
                    </React.Fragment>
                ) 
                : 
            collapse
                ? (
                    <React.Fragment>
                        <i className="fa fa-bars mr-3"></i>
                    </React.Fragment>
                ) 
                :
            children}
        </Btn>
    );
};

// Style

interface PropButton {
    large?: boolean;
    small?: boolean;
    primary?: boolean;
    secondary?: boolean;
    ghost?: boolean;
    outline?: boolean;

    fontSize?: number | string;
    width?: number | string;
    height?: number | string;
    color?: string;
    backgroundColor?: string;
    border?: string | number;
    letterSpacing?: number | string;
    display?: string;
    visibility?: "visible" | "hidden";
    hover?: CSSObject | { };
};

const Btn = styled(Link)(
    (props: PropButton) => ({
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
        fontSize: props.fontSize || "12px",
        visibility: props.visibility,
        ":hover": !props.hover? {
            backgroundColor: props.ghost || props.outline? primary.backgroundColor: "#FFFFFF",
            color: props.ghost || props.outline? "#FFFFFF": props.primary? primary.backgroundColor: props.secondary? secondary.backgroundColor: null,
            border: props.ghost || props.outline? "0": props.primary? primary.backgroundColor: props.secondary? secondary.backgroundColor: null,
        } : props.hover,
    })
);

export default React.memo(
    Button,
    (prev, next) => _.isEqual(prev, next)
);