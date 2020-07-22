import React, { lazy, Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './style.scss';
import Img1 from '../../../../assets/img/home/card-text-image/1-small.png';
import { BaseUrlImage } from '../../../../helper/axios';
import Button from '../../Button/Button';
import { HeadingTextItem } from '../../Heading/HeadingText';

const HeadingText = lazy(() => import('../../Heading/HeadingText'));

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
    reverse?: boolean,

    buttonTitle?: string,
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
                    <Button mode="outline" to={props.linkTo! || "#"} onClick={props.onClick}>
                        {props.buttonTitle}
                    </Button>
                ) : null}
            </HeadingText>
        )
    , [props.caption, props.heading, props.text, props.linkTo, props.reverse]);

    return (
        <div className={`card-text-image-small flex ${containerClass} px-6 xl:px-0 lg:px-4 md:px-5 flex-wrap max-w-container-2 mx-auto items-center justify-between ${props.containerClassName}`}>
            <div className="w-full md:w-1/2 max-w-screen-sm">
                <img src={ImageUri} draggable={false}
                    className="bg-no-repeat bg-cover  h-auto mx-auto xl:mx-0 lg:mx-0 md:mx-0" 
                />
            </div>
            
            {HeadText}
        </div>
    );
};

CardTextImageSmall.propTypes = {
    containerClassName: PropTypes.string,
    image: PropTypes.string.isRequired,
    caption: PropTypes.string,
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

CardTextImageSmall.defaultProps = {
    image: Img1,
    heading: "Card Text Image Small",
    onClick: () => {
        alert("clicked")
    }
}

export default memo(CardTextImageSmall)
