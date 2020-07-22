import * as React from 'react';
import _ from 'lodash';
import staticOffersDetail, { OffersDetailProps } from '../static/offersDetail';
import { CardTextImageSmallItem } from '../components/base/Card/CardTextImage/CardTextImageSmall';

/** Components */
const SliderAwesome         = React.lazy(() => import('../components/base/Slider/SliderAwesome'));
const HeadingText           = React.lazy(() => import('../components/base/Heading/HeadingText'));
const LargeImage            = React.lazy(() => import('../components/base/LargeImage/LargeImage'));
const CardTextImageSmall    = React.lazy(() => import('../components/base/Card/CardTextImage/CardTextImageSmall'));
const CarouselCardText      = React.lazy(() => import('../components/base/Carousel/CarouselCardText'));

const OffersDetail: React.FC<OffersDetailProps> = (props): JSX.Element => {
    /**
     * Slider Awesome
     */
    const MemoSliderAwesome = React.useMemo<JSX.Element>(
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
                    heading={_.capitalize(props.heading)} 
                    text={props.text}
                    containerClassName="max-w-3xl"
                    textClassName="px-6"
                />
                <LargeImage
                    images={props.image}
                    imageClassName="max-w-container-2 max-h-large-image mt-16 mx-auto"
                    isStaticImage
                />
            </div>
        ), 
    [props.heading, props.text, props.image]);

    /**
     * Card Text Image Small
     */
    const MemoCardTextImageSmall = React.useMemo<(params: CardTextImageSmallItem, is_reverse?: boolean) => JSX.Element>(
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
     * Carousel Card Text
     */
    const MemoCarouselCardText = React.useMemo<JSX.Element>( 
        () => (
            <CarouselCardText 
                cardClassName="ml-auto mr-auto xl:mr-0 lg:mr-4 md:mr-5 top-0 mt-16 xl:mt-16 lg:mt-16 md:mt-12 right-0 px-8 pt-12 w-full max-w-md md:w-6/12"
                store={props.carousel_card_text}
                isStaticImage
                containerArrow="mb-6"
                listContainerClassName="mt-5"
                prevButtonClassName="ml-4"
                buttonTitle="book now"
                buttonClassName="mx-auto xl:mx-0 lg:mx-0 md:mx-0"
            />
        ),
    [props.carousel_card_text]);
    
    return (
        <div id="offers-detail">
            <section>
                {MemoSliderAwesome}
            </section>

            <section className={"py-20"}>
                {MemoHeadingTextLargeImage}
            </section>

            <section className={"py-20"}>
                {MemoCardTextImageSmall(props.card_text_image_small[0])}
            </section>

            <section className={"py-20 mb-0 xl:mb-40 lg:mb-48 md:mb-48"}>
                {MemoCarouselCardText}
            </section>
        </div>
    );
};
OffersDetail.defaultProps = staticOffersDetail;
export default OffersDetail;
