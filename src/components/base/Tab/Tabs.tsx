import * as React from 'react';
import _ from 'lodash';
import { withErrorBoundary } from 'react-error-boundary';
import { HeadingTextItem } from '../Heading/HeadingText';
import ErrorFallback from '../../../helper/ErrorFallback';

export type TabItem = {
    id: number,
    title: string,
    data: HeadingTextItem & {
        image: string,
    },
}
export type TabsProps = {
    /**
     * @default 'null'
     */
    containerClassName?: string,
    /**
     * @default 'null'
     */
    tabUlClassName?: string,
    /**
     * @default 'null'
     */
    tabContentClassName?: string,
    /**
     * @default 'false'
     */
    isStaticImage?: boolean,
    removeContainer?: boolean,
    /**
     * if the children customChild is true,
     * HTMLAttribute children must contain attr `title`
     */
    children: any,
};
/**
 * ## Tabs
 * @param isStaticImage boolean
 * 
 * ## Usage
 * ```js
 * <TabSecond
 *    isStaticImage
 * >
 *    <div title="Flores sea">
 *      <HeadingText caption="Flores sea" />
 *    </div>
 *  
 *    <div title="Raja Ampat">
 *      <HeadingText caption="Raja Ampat" />
 *    </div>
 * </TabSecond>
 * ```
 */
const Tabs: React.FC<TabsProps> = ({
    children,
    containerClassName=null,
    tabUlClassName=null,
    tabContentClassName=null,
    isStaticImage=false,
    removeContainer=false,
}): JSX.Element => {
    /**
     * State hook
     */
    const [active, setActive] = React.useState<string>(children[0]?.props.title);

    /**
     * Callback onClick
     */
    const _onClick = React.useCallback((e: React.MouseEvent, params: string) => {
        e.preventDefault();
        setActive(params);
    }, []);

    /**
     * Children li
     */
    const ChildList = React.useMemo<(params: JSX.Element, index: number) => JSX.Element>( 
        () => (params, index) => {
            let containerLiClass: string =
                active === params?.props?.title
                ? "text-primary-300 border border-b-2 border-primary-300 active" : "";

            return (
                <li key={index} title={params?.props?.title} className={containerLiClass + ` select-none pb-2 font-bold xl:mr-8 lg:mr-8 md:mr-8 border-t-0 border-r-0 border-l-0`} onClick={(e) => _onClick(e, params?.props?.title)}>
                    {params?.props?.title}
                </li>
            );
        }
    , [active]);

    /**
     * Children
     */
    const Child = React.useMemo<(params: JSX.Element, index: number) => JSX.Element | undefined>( 
        () => (params, index) => {
            if (params?.props?.title !== active) return undefined;

            return (
                <React.Fragment key={index}>
                    {params?.props?.children}
                </React.Fragment>
            );
        }
    , [active]);

    return (
        <div className={`${removeContainer ? '' : 'tmo__container_component'} box-border ${containerClassName}`}>
            <ul className={`flex mb-8 justify-around xl:justify-start lg:justify-start md:justify-start ${tabUlClassName}`}>
                {children && _.map(children, ChildList)}
            </ul>

            <div className={`tab-content mt-2 text-left ${tabContentClassName}`}>
                {children && _.map(children, Child)}
            </div>
        </div>
    );
};

const TabsWithErrorBoundary = withErrorBoundary(Tabs, { FallbackComponent: ErrorFallback });
export default React.memo(TabsWithErrorBoundary, (prev, next) => _.isEqual(prev, next));
