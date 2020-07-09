import * as React from 'react';
import _ from 'lodash';
import HeadingText, { HeadingTextProps, HeadingTextDataProps } from '../../../Heading/HeadingText';
import Button from '../../../Button';

import './style.scss';
import { BaseUrlImage } from '../../../../../helper/axios';
import ErrorBoundary from '../../../../../helper/ErrorBoundary';

export type CardItemDataProps = HeadingTextDataProps & {
    image: string,
    buttonTitle?: string | null,
};

export type CardItemProps = HeadingTextProps & {
    containerClassName?: string,
    containerImageClassName?: string,
    containerHeadingClassName?: string,

    isStaticImage?: boolean,
    image: string,
    buttonTitle?: string,
    onClick?: () => void,
};
/**
 * Card Item
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
 *     headingClassName="uppercase"
 *     textClassName="w-full"
 *     isStaticImage={true}
 *  />
 * ```
 * 
 * ### Property
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
            heading={props.heading}
            text={props.text}
            containerClassName={`mx-auto w-full ${props.containerHeadingClassName} `} 
            center={props.center}
            headingClassName={`${props.headingClassName}`} 
            textClassName={` w-full ${props.textClassName} `}
        />
    ), [props.heading, props.text]);
    /**
     * Button
     */
    const ButtonText = React.useMemo(() => (
        <div className="text-center mx-auto w-image-1 mt-10">
            <Button
                ghost
                border="2px solid #208CB2"
                hover={{ color: "#ffffff", backgroundColor:"#208CB2" }}
                className="uppercase"
                onClick={props.onClick}>
                {props.buttonTitle}
            </Button>
        </div>
    ), [props.buttonTitle]);

    return (
        <ErrorBoundary>
            <div className={`${props.containerClassName} card-item`}>
                <img src={ImageUri} alt="image-card-item" className={`${props.containerImageClassName} mx-auto`} />
                {props.heading && Heading}
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
