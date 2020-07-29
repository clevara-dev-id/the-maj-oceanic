import * as React from 'react';
import _ from 'lodash';
import { withErrorBoundary } from 'react-error-boundary';
import { HeadingTextProps, HeadingTextItem } from '../../Heading/HeadingText';
import ErrorFallback from '../../../../helper/ErrorFallback';
import { BaseUrlImage } from '../../../../helper/axios';
// import './style.scss';

/* Component */
const HeadingText   = React.lazy(() => import('../../Heading/HeadingText'));
const Button        = React.lazy(() => import('../../Button/Button'));

/**
 * ## Card Text Image RL Item
 * 
 * ### PropType
 * @param id `string | number | null | undefined`
 * @param caption `string | null | undefined`
 * @param heading `string | null | undefined`
 * @param text `string | null | undefined`
 * @param list `Array<string> | null | undefined`
 * @param linkTo `History | string | null | undefined`
 */
export type CardTextImageItem = HeadingTextItem & {
    id?: React.ReactText,
    image: string,
    linkTo?: string,
};
export type CardTextImageProps = HeadingTextProps & {
    reverse?: boolean,
    isStaticImage?: boolean,
    image: string,
    altName?: string,
    buttonTitle?: string,
    mode?: "outline" | "contain",
    linkTo?: string,
};

/**
 * ## Card Text Image Right Left
 * 
 * ## Usage
 * ```js
 * 
 * <CardTextImage 
 *    containerClassName="border border-primary-300"
 *    caption='sustainbility'
 *    heading='Lorem Ipsum Dolor'
 *    text='Laboris laborum culpa.'
 *    list={[
 *        'Lorem ipsum dolor sit amet',
 *        'Lorem lar aliquip',
 *        'Lorem ipsum dolor sit amet',
 *        'Lorem lar aliquip',
 *    ]}
 *    image={require('../assets/img/CardTextImage/1.png')}
 *    isStaticImage={true}
 *    reverse
 *    to="#"
 * >
 *      <Button mode="outline" to="#">
 *         Learn More
 *       </Button>
 * </CardTextImage>
 * ```
 */
const CardTextImage: React.FC<CardTextImageProps> = (props): JSX.Element => {
    const ImageUri = props.isStaticImage
        ? props.image : `${BaseUrlImage}/${props.image}`;

    let containerHeadTextClass:string = 
        props.reverse
        ? "mt-6 xl:mt-0 lg:mt-0 md:mt-0" : "mb-6 xl:mb-0 lg:mb-0 md:mb-0";
    /**
     * Heading Text List
     */
    const Head = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <div className="px-4">
                <HeadingText
                    caption={props.caption}
                    heading={props.heading}
                    text={props.text}
                    list={props.list}
                    // max-w-2xl sm:max-w-xl h-auto w-full xl:w-7/12 lg:w-7/12
                    containerClassName={`${containerHeadTextClass} xl:text-left lg:text-left md:text-left`}
                    headingClassName={`${props.headingClassName} mt-4`}
                    textClassName={`${props.textClassName} mt-3`}   
                    listContainerClassName="mt-8"
                >
                {props.buttonTitle ? (
                    <Button mode={props.mode || "outline"} className="mt-5" to={props.linkTo || "#"}>
                        {props.buttonTitle}
                    </Button>
                ) : null}
                </HeadingText>
            </div>
        ),
    [props.caption, props.heading, props.text, props.list, props.buttonTitle, props.linkTo]);

    /**
     * Image
     */
    const Image = React.useMemo<JSX.Element>(
        () => (
            <img 
                src={ImageUri}
                loading="lazy"
                alt={props.altName || props.image}
            />
        ),
    []);
    
    let containerClass: string = 
        props.reverse 
        ? "flex-col-reverse xl:flex-row-reverse lg:flex-row-reverse md:flex-row-reverse" 
        : "flex-col xl:flex-row lg:flex-row md:flex-row"

    return (
        <div className={`tmo__card_text_image ${containerClass} flex tmo__container_component justify-between items-center ${props.containerClassName}`}>
            {Head}
            {Image}
        </div>
    );
};

const CardTextImageWithErrorBoundary = withErrorBoundary(CardTextImage, { FallbackComponent: ErrorFallback });
export default React.memo(CardTextImageWithErrorBoundary, (prev, next) => _.isEqual(prev, next));
