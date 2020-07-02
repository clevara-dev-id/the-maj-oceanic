import * as React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Heading from './Heading';
import './style.scss';

/**
 * @component HeadingText component
 * 
 * @property
 * properties with "?" is optional
 * ```
 * containerClassName?: string;
 * 
 * containerStyle?: string;
 * 
 * heading?: string;
 * 
 * headingClassName?: string;
 * 
 * headingStyle?: CSSProperties;
 * 
 * text?: string;
 * 
 * textClassName?: string;
 * 
 * textStyle?: CSSProperties;
 * 
 * list?: Array<string>;
 * 
 * children?: ReactNode;
 * 
 * center?: boolean;
 * 
 * caption?: string;
 * ```
 */
export type HeadingTextProps = {
    containerClassName?: string;
    containerStyle?: React.CSSProperties;

    heading?: string;
    headingClassName?: string;
    headingStyle?: React.CSSProperties;

    text?: string;
    textClassName?: string;
    textStyle?: React.CSSProperties;

    list?: Array<string>;
    children?: React.ReactNode;
    
    center?: boolean;
    caption?: string;
};

/** 
 *  @param containerClassName string
 * 
 *  @param containerStyle CSSProperties
 * 
 *  @param caption text
 * 
 *  @param heading string
 * 
 *  @param headingClassName string
 * 
 * @param headingStyle CSSProperties
 * 
 *  @param text string
 * 
 *  @param textClassName string
 * 
 *  @param textStyle CSSProperties
 * 
 *  @param list Array<string>
 * 
 *  @param center boolean
 * 
 */
export const HeadingText: React.FC<HeadingTextProps> = (
    props: HeadingTextProps
): JSX.Element => {

    const _renderItem = (data: string, index: number) => (
        <li key={index}>{data}</li>
    );

    return (
        <div className={`
                ${props.containerClassName}
                ${props.center
                    ? "text-center"
                    : null
                }
                heading-text
            `} 
            style={props.containerStyle}>

            <Heading 
                caption={props.caption}
                heading={props.heading}
                headingClassName={props.headingClassName}
                headingStyle={props.headingStyle}
            />

            <p style={props.textStyle}
                title={props.text}
                className={`
                    body-1 
                    ${props.center
                        ? "mx-auto"
                        : null
                    }
                    ${props.textClassName
                        ? props.textClassName
                        : "lg:w-8/12 w-full"}
                `}
                dangerouslySetInnerHTML={_markUp(props.text!)}
            />

            {props.list?
                <React.Fragment>
                    <ul className="mb-10 pl-4 list-disc">
                        {props.list.map(_renderItem)}
                    </ul>
                </React.Fragment>
            : null}
            {props.children && props.children}
        </div>
    );
    
    function _markUp(args: string) {
        return {__html: args};
    };
};

export default React.memo(HeadingText, (prev, next) => _.isEqual(prev, next));

HeadingText.propTypes = {
    containerClassName: PropTypes.string,
    containerStyle: PropTypes.object
};