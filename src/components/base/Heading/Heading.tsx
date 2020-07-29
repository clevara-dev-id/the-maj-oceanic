import * as React from 'react';
import _ from 'lodash';

/**
 * ## Heading Item
 * 
 * ### PropType
 * @param caption `string | undefined`
 * @param heading `string | undefined`
 */
export type HeadingItem = {
    caption?: React.ReactText | null,
    heading?: React.ReactText | null,
}
export type HeadingProps = HeadingItem & {
    captionClassName?: string;
    headingClassName?: string;
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
const Heading: React.FC<HeadingProps> = ({
    caption=null,
    captionClassName="text-primary-300",
    heading=null,
    headingClassName="",
}): JSX.Element => {
    return (
        <React.Fragment>
            {   caption
                ?
                <React.Fragment>
                    <h5
                        title={_.toString(caption)}
                        className={`${captionClassName} tmo__caption`}
                        children={caption}
                    />

                    <h6
                        title={_.toString(caption)}
                        className={`${captionClassName} tmo__caption2`}
                        children={caption}
                    />
                </React.Fragment>
                : null
            }
            <h1
                title={_.toString(heading)}
                className={`${headingClassName!} tmo__heading`} 
                children={heading}
            />

            <h2 
                title={_.toString(heading)}
                className={`${headingClassName} tmo__heading2`}
                children={heading}
            />
        </React.Fragment>
    );
};

export default React.memo(Heading, (prev, next) => _.isEqual(prev, next));
