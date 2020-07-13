import * as React from 'react';
import staticCabinDetail, { CabinDetailProps } from '../static/cabinDetail';
import { CardTextImageSmallProps } from '../components/base_component/Card/CardTextImage/CardTextImageSmall';

/**
 * Components 
 */
const SliderAwesome         = React.lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'));
const HeadingText           = React.lazy(() => import('../components/base_component/Heading/HeadingText'));
const LargeImage            = React.lazy(() => import('../components/base_component/LargeImage/LargeImage'));
const Divider               = React.lazy(() => import('../components/Divier'));
const CardTextImageSmall    = React.lazy(() => import('../components/base_component/Card/CardTextImage/CardTextImageSmall'));
const CarouselThree         = React.lazy(() => import('../components/base_component/Carousel/CarouselThree'));
const Heading               = React.lazy(() => import('../components/base_component/Heading/Heading'));

const CabinDetail: React.FC<CabinDetailProps> = (props): JSX.Element => {
    /**
     * Slider
     */
    const Slider = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <SliderAwesome store={props.slider} isStaticImage />
        ),
    [props.slider]);

    /**
     * Heading
     */
    const HeadingImage = React.useMemo<JSX.Element>( 
        (): JSX.Element => (
            <React.Fragment>
                <HeadingText
                    caption={props.caption}
                    heading={props.heading}
                    text={props.text}
                    containerClassName="w-full mx-auto max-w-3xl"
                    textClassName="px-6"
                    headingClassName=" mt-4"
                />
                <LargeImage
                    images={props.image}
                    imageClassName="max-w-container-2 max-h-large-image mt-16 mx-auto"
                    isStaticImage
                />
            </React.Fragment>
        ), 
    [props.heading, props.text]);

    /**
     * Card Text Image Small
     */
    const CardTextImage = React.useMemo<(params: CardTextImageSmallProps, is_reverse?: boolean) => JSX.Element>(
        () => (params, is_reverse = false): JSX.Element => (
            <CardTextImageSmall
                heading={params.heading}
                text={params.text}
                image={params.image} 
                isStaticImage
                reverse={is_reverse}
            />
        ),
    []);

    /**
     * Carousel Three
     */
    const CarouselThreeHeading = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <React.Fragment>
                <Heading
                    caption={props.carousel_three.caption}
                    heading={props.carousel_three.heading}
                    headingClassName="mt-4"
                />
                <CarouselThree
                    isStaticImage
                    containerClassName="relative mt-20 max-w-6xl mx-auto"
                    captionClassName="text-black capitalize mt-5"
                    mode="outline"
                    to="#"
                    store={props.carousel_three.data}
                />
            </React.Fragment>
        )
    ,[props.carousel_three]);

    let b = 'border border-black';
    return (
        <div id="cabin-detail">
            <section>
                {Slider}
            </section>

            <section className={"py-20"}>
                {HeadingImage}
            </section>

            <section className="py-20">
                <Divider containerClassName="px-8 xl:px-0 lg:px-6" fill="#232323" />
            </section>

            <section className={"py-20"}>
                {CardTextImage(props.card_text_image_small[0])}
            </section>

            <section className={"py-20"}>
                {CardTextImage(props.card_text_image_small[1], true)}
            </section>

            <section className={"py-20 mb-20"}>
                {CarouselThreeHeading}
            </section>
        </div>
    );
};
CabinDetail.defaultProps = staticCabinDetail;
export default CabinDetail;
