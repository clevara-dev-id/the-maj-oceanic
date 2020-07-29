import React from 'react';
import _ from 'lodash';

type ButtonSlickProps = {
    mode: "prev" | "next",
    onClick?: () => void,
    children?: React.ReactNode,
    buttonClassName?: string | null,
};
/**
 * ## Button Slick
 */
const ButtonSlick = React.memo((props: ButtonSlickProps): JSX.Element => {
        let style = props.mode === "prev" ? "w-8 h-8 relative left-0 rounded-full arrows mr-3" : "w-8 h-8 relative left-0 rounded-full arrows";

        return (
            <button 
                title={_.capitalize(props.mode)}
                className={`${props.buttonClassName} whitespace-no-wrap bg-white text-primary-300 hover:bg-primary-300 hover:text-white focus:outline-none ` + style} 
                onClick={props.onClick}>
                {props.mode === "prev" 
                    ? <i className="fas fa-angle-left text-base"></i> 
                    : <i className="fas fa-angle-right text-base"></i>
                }
            </button>
        );
    },
    
    (prevProps, nextProps) => 
    _.isEqual(prevProps, nextProps)
);

export default ButtonSlick
