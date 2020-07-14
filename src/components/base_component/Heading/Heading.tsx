import * as React from 'react';
import _ from 'lodash';

/**
 * ## Heading Item
 * 
 * ### PropType
 * @param caption `string | null | undefined`
 * @param heading `string | null | undefined`
 */
export type HeadingItem = {
    caption?: string | null,
    heading?: string | null,
}
export type HeadingProps = HeadingItem & {
    captionClassName?: string | null;
    headingClassName?: string | null;
    headingStyle?: React.CSSProperties;
    center?: boolean;
};
/**
 * ## Heading
 * 
 * ### Usage
 * ```js
 * <Heading 
 *    caption="caption"
 *    heading="Heading"
 *    captionClassName="text-bold"
 *    headingClassName="text-bold"
 * />
 * ```
 */
const Heading: React.FC<HeadingProps> = (props): JSX.Element => {
    return (
        <React.Fragment>
            {   props.caption
                ?
                <h5 title={props.caption}
                    className={`${props.captionClassName}`}>
                        {props.caption}
                </h5>
                : null
            }
            <h1
                style={props.headingStyle}
                title={props.heading!}
                className={props.headingClassName!}>
                    {props.heading}
            </h1>
        </React.Fragment>
    );
};
Heading.defaultProps = {
    captionClassName: "primary"
}
export default React.memo(Heading, (prev, next) => _.isEqual(prev, next));
