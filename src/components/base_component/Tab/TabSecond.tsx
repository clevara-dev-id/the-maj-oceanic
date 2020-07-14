import * as React from 'react';
import _ from 'lodash';
import { HeadingTextDataProps } from '../Heading/HeadingText';

const HeadingText   = React.lazy(() => import('../Heading/HeadingText'));
const LargeImage    = React.lazy(() => import('../LargeImage/LargeImage'));

export type TabSecondItem = {
    id: number,
    title: string,
    data: HeadingTextDataProps & {
        image: string,
    },
}
export type TabSecondProps = {
    isStaticImage?: boolean,
    customChild?: boolean,
    children: any,
    store?: Array<TabSecondItem>,
};
/**
 * ## Tabs
 * @param isStaticImage boolean
 * @param customChild bolean
 * @param store Array<{ id: number, title: string, data: HeadingTextDataProps & { image: string } }>
 * 
 * ## Usage
 * ```js
 * <TabSecond
 *    customChild
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
const TabSecond: React.FC<TabSecondProps> = (props): JSX.Element => {
    const [active, setActive] = React.useState<string>(props.children[0]!.props.title);

    /**
     * Callback onClick
     */
    const _onClick = React.useCallback((e: React.MouseEvent, params: string) => {
        e.preventDefault();
        setActive(params);
    }, []);

    /**
     * Defaul Children li
     */
    const ChildList = React.useMemo<(params: TabSecondItem, index: number) => JSX.Element>( 
        () => (params, index) => {
            let containerLiClass: string =
                active === params.title
                ? "active" : "";
            
            return (
                <li key={index} title={params.title} className={containerLiClass} onClick={(e) => _onClick(e, params.title)}>
                    {params.title}
                </li>
            );
        }
    , []);

    /**
     * Default Children
     */
    const Child = React.useMemo<(params: TabSecondItem, index: number) => JSX.Element | null>( 
        () => (params, index) => {
            if (params.title !== active) return null;

            return (
                <React.Fragment key={index}>
                    <HeadingText 
                        caption={params.data.caption}
                        heading={params.data.heading}
                        text={params.data.heading}
                        list={params.data.list}
                    />
                    <LargeImage
                        images={params.data.image}
                        imageClassName="max-w-container-2 max-h-large-image mt-16 mx-auto"
                        isStaticImage={props.isStaticImage}
                    />
                </React.Fragment>
            );
        }
    , []);

    /**
     * Custom Children li
     */
    const CustomChildList = React.useMemo<(params: JSX.Element, index: number) => JSX.Element>( 
        () => (params, index) => {
            let containerLiClass: string =
                active === params.props.title
                ? "text-primary-300 border border-b-2 border-primary-300 active" : "";
            
            return (
                <li key={index} title={params.props.title} className={containerLiClass + ` pb-2 font-bold xl:mr-8 lg:mr-8 md:mr-8 border-t-0 border-r-0 border-l-0`} onClick={(e) => _onClick(e, params.props.title)}>
                    {params.props.title}
                </li>
            );
        }
    , [active]);

    /**
     * Custom Children
     */
    const CustomChild = React.useMemo<(params: JSX.Element, index: number) => JSX.Element | undefined>( 
        () => (params, index) => {
            if (params.props.title !== active) return undefined;

            return (
                <React.Fragment key={index}>
                    {params.props.children}
                </React.Fragment>
            );
        }
    , [active]);

    return (
        <div className={`max-w-container-2 mx-auto box-border px-8 xl:px-0 lg:px-4 md:px-6`}>
            <ul className="flex mb-8 justify-around xl:justify-start lg:justify-start md:justify-start">
                {props.customChild
                    ? props.children && _.map(props.children, CustomChildList)
                    : props.store && _.map(props.store, ChildList)
                }
            </ul>

            <div className="tab-content mt-2 text-left">
                {props.customChild
                    ? props.children && _.map(props.children, CustomChild)
                    : props.store && _.map(props.store, Child)
                }
            </div>
        </div>
    );
};

export default React.memo(TabSecond, (prev, next) => _.isEqual(prev, next));
