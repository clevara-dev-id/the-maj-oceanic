import * as React from 'react';
import _ from 'lodash';
/**
 * @component Heading
 * 
 * @property
 * property with "?" is optional
 * ```
 * caption?: string;
 * 
 * captionClassName?: string;
 * 
 * heading?: string;
 * 
 * headingClassName?: string;
 * 
 * headingStyle?: CSSProperties;
 * 
 * center?: boolean;
 * ```
 */
export type HeadingProps = {
    caption?: string;
    captionClassName?: string | null;

    heading?: string;
    headingClassName?: string;
    headingStyle?: React.CSSProperties;

    center?: boolean;
};

export default React.memo(function Heading(props: HeadingProps): JSX.Element {
    return (
        <React.Fragment>
            {   props.caption
                ? <h5 
                    title={props.caption}
                    className={`
                        primary 
                        ${props.captionClassName}
                        ${props.center?`text-center`:null}
                    `}>
                        {props.caption}
                  </h5>
                : null
            }
            <h1
                style={props.headingStyle}
                title={props.heading}
                className={`${props.caption? "py-4": "pb-4"}
                ${props.center?`text-center`:null}
                ${props.headingClassName}`}>
                    {props.heading}
            </h1>
        </React.Fragment>
    );
}, (prev, next) => _.isEqual(prev, next));
