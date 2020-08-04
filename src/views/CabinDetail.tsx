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
const Divider               = React.lazy(() => import('../components/Divider'));
const CardTextImageSmall    = React.lazy(() => import('../components/base/Card/CardTextImage/CardTextImageSmall'));
const CarouselThree         = React.lazy(() => import('../components/base/Carousel/CarouselThree'));
const Heading               = React.lazy(() => import('../components/base/Heading/Heading'));

const CabinDetail: React.FC<CabinDetailProps> = (props): JSX.Element => {
    /** Slider Awesome*/
    const MemoSliderAwesome = React.useMemo<JSX.Element>(
        () => (
            <SliderAwesome store={props.slider} isStaticImage />
        ),
    [props.slider]);

    /** Heading Text & Large Image */
    const MemoHeadingTextLargeImage = React.useMemo<JSX.Element>( 
        () => (
            <div className="tmo__container_component">
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
    [props.caption, props.heading, props.text, props.image]);

    /** Card Text Image Small */
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

    /** Heading & Carousel Three */
    const MemoHeadingCarouselThree = React.useMemo<JSX.Element>(
        () => (
            <React.Fragment>
                <Heading
                    caption={props.carousel_three.caption}
                    heading={props.carousel_three.heading}
                    headingClassName="mt-4 select-none"
                    captionClassName="m-0 p-0 text-primary-300"
                />
                <CarouselThree
                    isStaticImage
                    containerClassName="xl:mt-16 lg:mt-16 md:mt-10 mt-8"
                    captionClassName="text-black capitalize mt-5"
                    store={props.carousel_three.data}
                />
            </React.Fragment>
        )
    ,[props.carousel_three]);

    return (
        <div id="cabin-detail">
            <section>
                {MemoSliderAwesome}
            </section>

            <section className={"pb-0 md:pb-6 lg:pb-10 xl:pb-10 pt-20"}>
                {MemoHeadingTextLargeImage}
            </section>

            <section className={"py-0 md:my-10 lg:my-20 xl:my-20"}>
                <Divider containerClassName="px-8 xl:px-0 lg:px-6" fill="#232323" />
            </section>

            <section className={"pt-0 md:pt-6 lg:pt-10 xl:pt-10 pb-8 md:pb-20 lg:pb-24 xl:pb-24 mb-0 md:mb-12 lg:mb-20 xl:mb-20"}>
                {MemoCardTextImageSmall(props.card_text_image_small[0])}
            </section>

            <section className={"pb-20 pt-8 md:pt-20 lg:pt-24 xl:pt-24 my-0 md:my-12 lg:my-20 xl:my-20"}>
                {MemoCardTextImageSmall(props.card_text_image_small[1], true)}
            </section>

            <section className={"pt-20 pb-32 bg-bizarre mt-0 md:mt-32 lg:mt-40 xl:mt-40"}>
                {MemoHeadingCarouselThree}
            </section>
        </div>
    );
};

CabinDetail.defaultProps = staticCabinDetail;
export default React.memo(CabinDetail, (prevProp, nextProp) => isEqual(prevProp, nextProp));
