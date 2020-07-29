import * as React from 'react';
import _ from 'lodash';
import { withErrorBoundary } from 'react-error-boundary';
import { HeadingTextProps, HeadingTextItem } from '../../../Heading/HeadingText';
import { ButtonProps } from '../../../Button/Button';
import ErrorFallback from '../../../../../helper/ErrorFallback';
import { BaseUrlImage } from '../../../../../helper/axios';
import './style.scss';

/** Component */
const HeadingText   = React.lazy(() => import('../../../Heading/HeadingText'));
const Button        = React.lazy(() => import('../../../Button/Button'));

export type CardItemDataProps = HeadingTextItem & {
    image: string,
    buttonTitle?: string | null,
};

export type CardItemProps = HeadingTextProps & ButtonProps & {
    containerClassName?: string,
    containerImageClassName?: string,
    containerHeadingClassName?: string,

    isStaticImage?: boolean,
    image: string,
    alt?: string,
    buttonTitle?: string,
    onClick?: () => void,
};
/**
 * ## Card Item
 * 
 * ### props
 * @param containerClassName string
 * @param containerImageClassName string
 * @param containerHeadingClassName string
 * @param headingClassName string
 * @param textClassName string
 * @param isStaticImage boolean
 * 
 * @param caption string
 * @param heading string
 * @param text string
 * @param buttonTitle string
 * @param image string
 * @param onClick () => void
 * 
 * ## Usage
 * ```js
 *  <CardItem
 *     caption="The Vessel"
 *     heading="Heading Vessel"
 *     text="Text Heading Vessel"
 *     buttonTitle="Text Button Vessel"
 *     image={require('../assets/images/1.png')}
 *      
 *     containerClassName="card-item"
 *     containerImageClassName="bg-auto"
 *     containerHeadingClassName="mx-auto"
 *     captionClassName="primary"
 *     headingClassName="uppercase"
 *     textClassName="w-full"
 *     isStaticImage={true}
 *  />
 * ```
 */
const CardItem: React.FC<CardItemProps> = (props): JSX.Element => {
    const ImageUri: string = props.isStaticImage 
        ? props.image
        : `${BaseUrlImage}/${props.image.replace(/\\/g, '/')}`;
    /**
     * Heading
     */
    const Heading = React.useMemo(() => (
        <HeadingText
            caption={props.caption}
            captionClassName={props.captionClassName}
            heading={props.heading}
            text={props.text}
            containerClassName={props.containerHeadingClassName} 
            headingClassName={`${props.headingClassName}`} 
            textClassName={`w-full ${props.textClassName} `}
        />
    ), [props.heading, props.text, props.caption]);
    /**
     * Button
     */
    const ButtonText = React.useMemo(() => (
        <div className="text-center mx-auto my-10">
            <Button className="mx-auto" mode={props.mode || "outline"} to={props.to || "#"}>
                {props.buttonTitle}
            </Button>
        </div>
    ), [props.buttonTitle]);

    return (
        <div className={`${props.containerClassName}`}>
            <img src={ImageUri} className={`${props.containerImageClassName} mx-auto`} loading="lazy" alt={props.alt || props.image} />
            {Heading}
            {props.buttonTitle && ButtonText}
        </div>
    );
};

const CardItemWithErrorBoundary = withErrorBoundary(CardItem, { FallbackComponent: ErrorFallback });
export default React.memo(CardItemWithErrorBoundary, (prev, next) => _.isEqual(prev, next));
