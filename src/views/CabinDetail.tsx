import * as React from 'react';
import staticCabinDetail, { CabinDetailProps } from '../static/cabinDetail';
import { CardTextImageSmallProps } from '../components/base/Card/CardTextImage/CardTextImageSmall';
import { isEqual } from 'lodash';

/**
 * Components 
 */
const SliderAwesome         = React.lazy(() => import('../components/base/Slider/SliderAwesome'));
const HeadingText           = React.lazy(() => import('../components/base/Heading/HeadingText'));
const LargeImage            = React.lazy(() => import('../components/base/LargeImage/LargeImage'));
const Divider               = React.lazy(() => import('../components/Divier'));
const CardTextImageSmall    = React.lazy(() => import('../components/base/Card/CardTextImage/CardTextImageSmall'));
const CarouselThree         = React.lazy(() => import('../components/base/Carousel/CarouselThree'));
const Heading               = React.lazy(() => import('../components/base/Heading/Heading'));

const CabinDetail: React.FC<CabinDetailProps> = (props): JSX.Element => {
    /**
     * Slider
     */
    const Slider = React.useMemo<JSX.Element>(
        () => (
            <SliderAwesome store={props.slider} isStaticImage />
        ),
    [props.slider]);

    /**
     * Heading Text & Large Image
     */
    const MemoHeadingTextLargeImage = React.useMemo<JSX.Element>( 
        () => (
            <div className="px-6 xl:px-0 lg:px-4 md:px-5">
                <HeadingText
                    containerClassName="max-w-3xl"
                    headingClassName="mt-4"
                    textClassName="px-6"
                    caption={props.caption}
                    heading={props.heading}
                    text={props.text}
                />
                <LargeImage
                    images={props.image}
                    imageClassName="max-w-container-2 max-h-large-image mt-16 mx-auto"
                    isStaticImage
                />
            </div>
        ), 
    [props.heading, props.text]);

    /**
     * Card Text Image Small
     */
    const MemoCardTextImageSmall = React.useMemo<(params: CardTextImageSmallProps, is_reverse?: boolean) => JSX.Element>(
        () => (params, is_reverse = false) => (
            <CardTextImageSmall
                heading={params.heading}
                text={params.text}
                image={params.image} 
                isStaticImage
                reverse={is_reverse}
            />
        ),
    [props.card_text_image_small]);

    /**
     * Heading & Carousel Three
     */
    const MemoHeadingCarouselThree = React.useMemo<JSX.Element>(
        () => (
            <React.Fragment>
                <Heading
                    caption={props.carousel_three.caption}
                    heading={props.carousel_three.heading}
                    headingClassName="mt-4 select-none"
                />
                <CarouselThree
                    isStaticImage
                    containerClassName="mt-20 mx-auto"
                    captionClassName="text-black capitalize mt-5"
                    mode="outline"
                    to="#"
                    store={props.carousel_three.data}
                />
            </React.Fragment>
        )
    ,[props.carousel_three]);
    
    return (
        <div id="cabin-detail">
            <section>
                {Slider}
            </section>

            <section className={"py-20"}>
                {MemoHeadingTextLargeImage}
            </section>

            <section className="py-20">
                <Divider containerClassName="px-8 xl:px-0 lg:px-6" fill="#232323" />
            </section>

            <section className={"py-20"}>
                {MemoCardTextImageSmall(props.card_text_image_small[0])}
            </section>

            <section className={"py-20"}>
                {MemoCardTextImageSmall(props.card_text_image_small[1], true)}
            </section>

            <section className={"py-20 mb-20"}>
                {MemoHeadingCarouselThree}
            </section>
        </div>
    );
};

CabinDetail.defaultProps = staticCabinDetail;
export default React.memo(CabinDetail, (prevProp, nextProp) => isEqual(prevProp, nextProp));
