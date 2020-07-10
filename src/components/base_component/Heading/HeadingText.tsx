import * as React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Heading, { HeadingDataProps } from './Heading';
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
export type HeadingTextDataProps = HeadingDataProps & {
    text?: string | null,
    list?: Array<string> | null,
}
export type HeadingTextProps = HeadingTextDataProps & {
    containerClassName?: string | null,
    containerStyle?: React.CSSProperties | null,

    headingClassName?: string | null,
    headingStyle?: React.CSSProperties,

    textClassName?: string | null,
    textStyle?: React.CSSProperties,

    children?: React.ReactNode,    
    center?: boolean,

    listContainerClassName?: string | null,
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
        <li key={index} className="py-1">
            <p className="body-1">{data}</p>
        </li>
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
            style={props.containerStyle!}>

            <Heading 
                caption={props.caption}
                heading={props.heading}
                headingClassName={props.headingClassName}
                headingStyle={props.headingStyle}
            />

            <p style={props.textStyle}
                title={props.text!}
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
                <div className={props.listContainerClassName!}>
                    <ul className="mb-10 pl-4 list-disc">
                        {props.list.map(_renderItem)}
                    </ul>
                </div>
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
