import * as React from 'react';
import _ from 'lodash';

import './style.scss';
import HeadingText, { HeadingTextProps } from '../../Heading/HeadingText';
import Button from '../../Button/Button';

enum LayoutMobile {
    first,
    second,
};
export type CardTextImageRLProps = HeadingTextProps & {
    reverse?: boolean,
    isStaticImage?: boolean,
    image: string,
    children?: React.ReactNode,
    layoutModel?: LayoutMobile.first | LayoutMobile.second,
    buttonTitle?: string,
    mode?: "outline" | "contain",
    linkTo?: string,
};

/**
 * Card Text Image Right Left
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
const CardTextImageRL: React.FC<CardTextImageRLProps> = (props): JSX.Element => {
    const ImageUri = props.isStaticImage
        ? props.image : `${process.env.REACT_APP_BASE_URL_IMAGE}/${props.image}`;

    let containerHeadClass: string = 
        props.reverse
        ? "mt-10" : "mt-10"
    
    /**
     * Heading Text List
     */
    const Head = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <React.Fragment>
                <HeadingText
                    caption={props.caption}
                    heading={props.heading}
                    text={props.text}
                    list={props.list}
    
                    containerClassName={`${containerHeadClass} px-6 xl:px-0 lg:px-0 md:px-6 xl:text-left lg:text-left md:text-left max-w-2xl sm:max-w-xl h-auto w-full xl:w-7/12 lg:w-7/12`}
                    headingClassName={`${props.headingClassName}`}
                    textClassName={`${props.textClassName} mt-3`}   
                    listContainerClassName="mt-8"
                >
                {props.buttonTitle ? (
                    <Button mode={props.mode || "outline"} to={props.linkTo || "#"}>
                        {props.buttonTitle}
                    </Button>
                ) : null}
                </HeadingText>
            </React.Fragment>
        ),
    [props.caption, props.heading, props.text, props.list, props.buttonTitle, props.linkTo]);

    /**
     * Image
     */
    const Image = React.useMemo<JSX.Element>(
        () => (
            <img src={ImageUri} alt="card-text-image" className="card-image-rl bg-center bg-cover w-5/6" />
        ),
    []);
    
    let containerClass: string = 
        props.reverse 
        ? "flex-col-reverse xl:flex-row-reverse lg:flex-row-reverse md:flex-row-reverse" 
        : "flex-col xl:flex-row lg:flex-row md:flex-row"

    return (
        <div className={`flex ${containerClass} max-w-container-2 w-screen h-auto mx-auto justify-between items-center ${props.containerClassName}`}>
            {Head}
            {Image}
        </div>
    );
};

export default React.memo(CardTextImageRL, (prev, next) => _.isEqual(prev, next));
