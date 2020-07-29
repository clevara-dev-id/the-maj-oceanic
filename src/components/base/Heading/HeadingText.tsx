import * as React from 'react';
import _ from 'lodash';
import { HeadingItem } from './Heading';

const Heading = React.lazy(() => import('./Heading'));

export type HeadingTextItem = HeadingItem & {
    text?: string | null,
    list?: Array<string> | null,
};

export type HeadingTextProps = HeadingTextItem & {
    containerClassName?: string,
    captionClassName?: string,
    headingClassName?: string,
    textClassName?: string,
    children?: React.ReactNode,
    listContainerClassName?: string,
};
/**
  * ## Heading Text
  *
  * @param {*} this.props
  * @see `HeadingTextProps`
  * @returns {JSX.Element} JSX ELement
*/
const HeadingText: React.FC<HeadingTextProps> = ({
    caption=null,
    heading=null,
    text,
    list,
    containerClassName="",
    captionClassName="text-primary-300",
    headingClassName="",
    textClassName="",
    listContainerClassName="",
    children,
}): JSX.Element => {

    const MemoHeading = React.useMemo(() => (
        <Heading 
            caption={caption}
            captionClassName={captionClassName}
            heading={heading}
            headingClassName={headingClassName}
        />
    ), [caption, heading]);

    const MemoText = React.useMemo(() => (
        <p 
            title={text!}
            className={`${textClassName} mt-4 md:mt-5 lg:mt-5 xl:mt-5`}
            dangerouslySetInnerHTML={createMarkup(text!)}
        />
    ),[text]);

    const MemoList = React.useMemo(() => (params: Array<string>) => (
        <div className={listContainerClassName!}>
            <ul className="p-0 xl:pl-4 lg:pl-4 md:pl-4 tmo__ul">
                {_.map(params, (data, index) => (
                    <li key={index} title={data} className="py-1 font-ideal">
                        <p> {data} </p>
                    </li>
                ))}
            </ul>
        </div>
    ), [list]);

    return (
        <div className={`${containerClassName} select-none w-full mx-auto`}>
            {MemoHeading}
            {MemoText}
            {list && MemoList(list)}
            {children && children}
        </div>
    );
};

function createMarkup(params: string) {
    return {__html: params}
}

export default React.memo(HeadingText, (prev, next) => _.isEqual(prev, next));
