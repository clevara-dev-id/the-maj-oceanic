import * as React from 'react';
import _ from 'lodash';
import { NavLinkProps } from 'react-router-dom';

import './style.scss';
import HeadingText, { HeadingTextProps } from '../../Heading/HeadingText';
import Heading, { HeadingProps } from '../../Heading/Heading';

enum LayoutMobile {
    first,
    second,
};
export type CardTextImageRLProps = HeadingTextProps & NavLinkProps & {
    reverse?: boolean,
    isStaticImage?: boolean,
    image: string,
    children?: React.ReactNode,
    layoutModel?: LayoutMobile.first | LayoutMobile.second,
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

    /**
     * Layout Mobile
     * 
     * default layout is layout first
     */
    // const LayoutMobileFirst = (): JSX.Element => (
    //     <img src={ImageUri} alt="card-text-image" className="card-image-rl bg-center bg-cover w-full xl:w-10/12 lg:w-10/12 md:w-10/12" />
    // );
    // const LayoutMobileSecond = (): JSX.Element => (
    //     <ModeImageCenter caption={props.caption} heading={props.heading} text={props.text} list={props.list}>
    //         <img src={ImageUri} alt="card-text-image" className="card-image-rl mx-auto bg-center bg-cover w-full xl:w-10/12 lg:w-10/12 md:w-10/12" />
    //     </ModeImageCenter>
    // );
    
    /**
     * Text Left
     */
    const TextLeft = React.useMemo( 
        (): JSX.Element => (
            <React.Fragment>
                <HeadingText
                    caption={props.caption}
                    heading={props.heading}
                    text={props.text}
                    list={props.list}

                    containerClassName={`mt-32 mb-5 xl:mb-24 lg:mb-24 md:mb-24 text-left max-w-2xl sm:max-w-xl h-auto w-full xl:w-7/12 lg:w-7/12 hidden xl:inline lg:inline md:inline`}
                    headingClassName={`${props.headingClassName} -mt-4`}
                    textClassName={`${props.textClassName} mt-3`}
                    listContainerClassName="mt-8"
                >
                    {props.children}
                </HeadingText>
                <ModeImageCenter caption={props.caption} heading={props.heading} text={props.text} list={props.list}>
                    <img src={ImageUri} alt="card-text-image" className="card-image-rl mx-auto bg-center bg-cover w-image-1 xl:w-10/12 lg:w-10/12" />
                </ModeImageCenter>
            </React.Fragment>
        )
    , [props.caption, props.heading, props.text, props.image, props.children]);

    /**
     * Text Right
     */
    const TextRight = React.useMemo(
        (): JSX.Element => (
            <React.Fragment>
                <ModeImageCenter caption={props.caption} heading={props.heading} text={props.text} list={props.list}>
                    <img src={ImageUri} alt="card-text-image" className="card-image-rl mx-auto bg-center bg-cover w-image-1 xl:w-10/12 lg:w-10/12" />
                </ModeImageCenter>
                <HeadingText
                    caption={props.caption}
                    heading={props.heading}
                    text={props.text}
                    list={props.list}

                    containerClassName={`mt-32 mt-5 xl:mb-24 lg:mb-24 md:mb-24 ml-8 text-left max-w-2xl sm:max-w-xl h-auto w-full xl:w-7/12 lg:w-7/12 hidden xl:inline lg:inline md:inline`}
                    headingClassName={`${props.headingClassName} -mt-4`}
                    textClassName={`${props.textClassName} mt-3`}
                    listContainerClassName="mt-8"
                >
                    {props.children}
                </HeadingText>
            </React.Fragment>
        )
    , [props.caption, props.heading, props.text, props.image, props.children]);

    return (
        <div className={`flex flex-col xl:flex-row lg:flex-row md:flex-row max-w-container-2 px-6 w-screen mx-auto justify-between items-center ${props.containerClassName}`}>
            {props.reverse
                ? TextRight
                : TextLeft
            }
        </div>
    );
};

export default CardTextImageRL;

type ModeImageCenterProps = HeadingProps & {
    containerClassName?: string,
    containerListName?: string,
    list?: string[] | null,
    text?: string | null,
};
const ModeImageCenter: React.FC<ModeImageCenterProps> = (props): JSX.Element => {
    /**
     * Heading
     */
    const Head = React.useMemo(
        () => (
            <Heading 
                caption={props.caption}
                heading={props.heading}
                captionClassName="inline xl:hidden lg:hidden md:hidden"
                headingClassName="inline xl:hidden lg:hidden md:hidden"
            />
        )
    , [props.caption, props.heading]);

    /**
     * List
     */
    const List = React.useMemo(
        () => (params: string[]) => (
            <ul className="list-disc pl-4">
                {_.map(params, (data, index: number) => (
                    <li key={index} className="py-1">
                        <p title={data} className="body-1">
                            {data}
                        </p>
                    </li>
                ))}
            </ul>
        ),
    [props.list]);

    return (
        <div className="flex flex-col">
            {Head}

            {props.children}

            <p title={props.text!} className="body-1 text-left mt-6 inline xl:hidden lg:hidden md:hidden">
                {props.text}
            </p>

            {
                props.list && (
                    <div className={`${props.containerListName} text-left mt-4 inline xl:hidden lg:hidden md:hidden`}>
                        {List(props.list)}
                    </div>
                )
            }
        </div>
    );
};
