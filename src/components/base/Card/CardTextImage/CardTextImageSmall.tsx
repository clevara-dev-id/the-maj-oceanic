import * as React from 'react';
import _ from 'lodash';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../../../../helper/ErrorFallback';
import { BaseUrlImage } from '../../../../helper/axios';
import { HeadingTextItem } from '../../Heading/HeadingText';
import './style.scss';

/* Component */
const HeadingText   = React.lazy(() => import('../../Heading/HeadingText'));
const Button        = React.lazy(() => import('../../Button/Button'));

/**
 * ## Card Text Image Small Item
 * 
 * ### PropType
 * 
 * @param id `string | number | null | undefined`
 * @param caption `string | null | undefined`
 * @param heading `string | null | undefined`
 * @param text `string | null | undefined`
 * @param list `Array<string> | null | undifined`
 * @param image `string`
 */
export type CardTextImageSmallItem = HeadingTextItem & {
    id?: React.ReactText,
    image: string,
    linkTo?: string
};

export type CardTextImageSmallProps = CardTextImageSmallItem & {
    containerClassName?: string,
    isStaticImage?: boolean,
    altName?: string,
    reverse?: boolean,

    buttonTitle?: string,
    buttonMode?: "outline" | "contain" | "custom",
    buttonClassName?: HTMLAnchorElement["className"],
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
};

/**
 * ### CardTextImageSmall
 * 
 * ### PropType
 * 
 * @param containerClassName `string`
 * @param isStaticImage `boolean`
 * @param reverse `boolean`
 * @param id `string | number`
 * @param image `string`
 * @param altName `string`
 * @param caption `string` 
 * @param heading `string`
 * @param text `string`
 * @param buttonTitle `string`
 * @param onClick `(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void`
 * 
 * 
 * ## Usage
 * 
 * ```js
 * <CardTextImageSmall
 *    containerClassName="border border-black"
 *    caption={props.caption}
 *    heading={props.heading}
 *    text={props.text}
 *    image={props.card_text_image_small.image} 
 *    altName={props.heading}
 *    isStaticImage={true}
 *    reverse={true}
 * />
 * ```
 */
const CardTextImageSmall: React.FC<CardTextImageSmallProps> = (props) => {
    const ImageUri: string = 
        props.isStaticImage
        ? props.image : BaseUrlImage + props.image.replace(/\\/g, "/");
    
    let containerClass: string = 
        props.reverse
        ? "flex-col-reverse xl:flex-row-reverse lg:flex-row-reverse md:flex-row-reverse" : "flex-col xl:flex-row lg:flex-row md:flex-row"

    let containerHeadClass: string =
        props.reverse ? "xl:pr-4 lg:pr-4 md:pr-4" : "xl:pl-4 lg:pl-4 md:pl-4 mt-8"
        // ? "pl-8 xl:pl-0 lg:pl-4 md:pl-8 pr-8 xl:pr-8 lg:pr-6 md:pr-4" : "mt-8 pr-8 xl:pr-0 lg:pr-4 md:pr-8 pl-8 xl:pl-8 lg:pl-6 md:pl-4"
    const HeadText = React.useMemo<JSX.Element>( 
        () => (
            <HeadingText 
                containerClassName={`select-none w-full lg:w-2/4 md:w-1/2 xl:text-left lg:text-left md:text-left ${containerHeadClass}`}
                caption={props.caption} 
                heading={props.heading}
                text={props.text}
                textClassName="mt-2 mb-8"
            >
                {props.buttonTitle ? (
                    <Button mode={props.buttonMode || "outline"} className={props.buttonClassName} to={props.linkTo! || "#"} onClick={props.onClick}>
                        {props.buttonTitle}
                    </Button>
                ) : null}
            </HeadingText>
        )
    , []);

    return (
        <div className={`card-text-image-small tmo__container_component flex ${containerClass} flex-wrap mx-auto items-center justify-between ${props.containerClassName}`}>
            <div className="w-full md:w-1/2 max-w-screen-sm">
                <img 
                    src={ImageUri}
                    draggable={false}
                    className="bg-no-repeat bg-cover h-auto mx-auto xl:mx-0 lg:mx-0 md:mx-0" 
                    loading="lazy"
                    alt={props.altName || props.image}
                />
            </div>
            
            {HeadText}
        </div>
    );
};

const CardTextImageSmallWithErrorBoundary = withErrorBoundary(CardTextImageSmall, { FallbackComponent: ErrorFallback });
export default React.memo(CardTextImageSmallWithErrorBoundary, (prevProps, nextProps) => _.isEqual(prevProps, nextProps))
