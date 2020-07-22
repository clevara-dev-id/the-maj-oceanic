import * as React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Heading, { HeadingItem } from './Heading';
import './style.scss';

/**
 * ## Heading Text Item
 * 
 * ### PropType
 * @param caption `string | null | undefined`
 * @param heading `string | null | undefined`
 * @param text `string | null | undefined`
 * @param list `Array<string> | null | undifined`
 */
export type HeadingTextItem = HeadingItem & {
    text?: string | null,
    list?: Array<string> | null,
}
export type HeadingTextProps = HeadingTextItem & {
    containerClassName?: string | null,
    containerStyle?: React.CSSProperties | null,

    captionClassName?: string | null,

    headingClassName?: string | null,
    headingStyle?: React.CSSProperties,

    textClassName?: string | null,
    textStyle?: React.CSSProperties,

    children?: React.ReactNode,    
    center?: boolean,

    listContainerClassName?: string | null,
};

/** 
 * ## Heading Text
 * ### props
 * @param containerClassName string
 * @param containerStyle CSSProperties
 * @param caption text
 * @param captionClassName
 * @param heading string
 * @param headingClassName string
 * @param headingStyle CSSProperties
 * @param text string
 * @param textClassName string
 * @param textStyle CSSProperties
 * @param list Array<string>
 * @param center boolean
 * 
 * ### Usage
 * ```javascript
 * <HeadingText
 *      caption={props.caption}
 *      heading={props.heading}
 *      text={props.text}
 *      containerClassName="mx-auto w-full" 
 *      center={props.center}
 *      headingClassName="border border-black" 
 *      textClassName="border border-black"
 * />
 * ```
 */
export const HeadingText: React.FC<HeadingTextProps> = (props: HeadingTextProps): JSX.Element => {

    const _renderItem = (data: string, index: number): JSX.Element => (
        <li title={data} key={index} className="py-1">
            <p className="body-1">{data}</p>
        </li>
    );

    return (
        <div className={`${props.containerClassName} heading-text select-none w-full mx-auto`} 
            style={props.containerStyle!}>

            <Heading 
                caption={props.caption}
                captionClassName={props.captionClassName}
                heading={props.heading}
                headingClassName={props.headingClassName}
                headingStyle={props.headingStyle}
            />

            <p style={props.textStyle}
                title={props.text!}
                className={`body-1 mt-4 ${props.textClassName} whitespace-pre-line`}
                dangerouslySetInnerHTML={_markUp(props.text!)}
            />

            {props.list?
                <div className={props.listContainerClassName!}>
                    <ul className="mb-10 p-0 xl:pl-4 lg:pl-4 md:pl-4 list-none xl:list-disc lg:list-disc md:list-disc">
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
