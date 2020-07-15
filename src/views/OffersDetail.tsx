import * as React from 'react';
import staticOffersDetail, { OffersDetailProps } from '../static/offersDetail';
import { CardTextImageSmallItem } from '../components/base_component/Card/CardTextImage/CardTextImageSmall';

/**
 * Components
 */
const SliderAwesome         = React.lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'));
const HeadingText           = React.lazy(() => import('../components/base_component/Heading/HeadingText'));
const LargeImage            = React.lazy(() => import('../components/base_component/LargeImage/LargeImage'));
const CardTextImageSmall    = React.lazy(() => import('../components/base_component/Card/CardTextImage/CardTextImageSmall'));
const CarouselCardText      = React.lazy(() => import('../components/base_component/Carousel/CarouselCardText'));

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
            <React.Fragment>
                <HeadingText
                    heading={props.heading}
                    text={props.text}
                    containerClassName="w-full mx-auto max-w-3xl"
                    headingClassName="capitalize mb-2"
                    textClassName="px-6 mt-4"
                />
                <LargeImage
                    images={props.image}
                    imageClassName="max-w-container-2 max-h-large-image mt-16 mx-auto"
                    isStaticImage
                />
            </React.Fragment>
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
     * Carousel Card
     */
    const MemoCarouselCardText = React.useMemo<JSX.Element>( 
        () => (
            <CarouselCardText 
                containerClassName="max-w-container-2 relative pb-12 mx-auto"
                store={props.carousel_card_text}
                isStaticImage
                containerArrow="mb-16"
                buttonTitle="learn more"
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

            <section className={"py-20 mb-32"}>
                {MemoCarouselCardText}
            </section>
        </div>
    );
};
OffersDetail.defaultProps = staticOffersDetail;
export default OffersDetail;
