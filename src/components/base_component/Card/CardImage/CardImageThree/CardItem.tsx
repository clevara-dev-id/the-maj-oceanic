import * as React from 'react';
import _ from 'lodash';
import HeadingText, { HeadingTextProps, HeadingTextDataProps } from '../../../Heading/HeadingText';
import Button, { ButtonProps } from '../../../Button/Button';

import './style.scss';
import { BaseUrlImage } from '../../../../../helper/axios';
import ErrorBoundary from '../../../../../helper/ErrorBoundary';

export type CardItemDataProps = HeadingTextDataProps & {
    image: string,
    buttonTitle?: string | null,
};

export type CardItemProps = HeadingTextProps & ButtonProps & {
    containerClassName?: string,
    containerImageClassName?: string,
    containerHeadingClassName?: string,

    isStaticImage?: boolean,
    image: string,
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
            containerClassName={`mx-auto w-full ${props.containerHeadingClassName} `} 
            center={props.center}
            headingClassName={`${props.headingClassName}`} 
            textClassName={` w-full ${props.textClassName} `}
        />
    ), [props.heading, props.text, props.caption]);
    /**
     * Button
     */
    const ButtonText = React.useMemo(() => (
        <div className="text-center mx-auto w-image-1 mt-10">
            <Button mode={props.mode || "outline"} to={props.to || "#"}>
                {props.buttonTitle}
            </Button>
        </div>
    ), [props.buttonTitle]);

    return (
        <ErrorBoundary>
            <div className={`${props.containerClassName} card-item`}>
                <img src={ImageUri} alt="image-card-item" className={`${props.containerImageClassName} mx-auto`} />
                {Heading}
                {props.buttonTitle && ButtonText}
            </div>
        </ErrorBoundary>
    );
};

export default React.memo(CardItem, (prev, next) => _.isEqual(prev, next));

{/* <div 
    className={`bg-auto bg-no-repeat bg-center w-screen h-64 lg:h-image-1 ${props.containerImageClassName}`} 
    style={{backgroundImage: `url(${ImageUri})`}}
/> */}
