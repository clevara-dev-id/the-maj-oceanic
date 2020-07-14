import * as React from 'react';
import staticDining, { DiningProps } from '../static/dining';
import { CardTextImageSmallProps } from '../components/base_component/Card/CardTextImage/CardTextImageSmall';

/**
 * Style & Components 
 */
import '../styles/dining.style.scss';

const SliderAwesome         = React.lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'));
const HeadingText           = React.lazy(() => import('../components/base_component/Heading/HeadingText'));
const LargeImage            = React.lazy(() => import('../components/base_component/LargeImage/LargeImage'));
const CardTextImageSmall    = React.lazy(() => import('../components/base_component/Card/CardTextImage/CardTextImageSmall'));
const CarouselCardText  = React.lazy(() => import('../components/base_component/Carousel/CarouselCardText'));

const Dining: React.FC<DiningProps> = (props): JSX.Element => {

    /**
     * Slider
     */
    const Slider = React.useMemo<JSX.Element>(
        () => (
            <SliderAwesome store={props.slider} isStaticImage />
        ),
    [props.slider]);

    /**
     * Heading Image
     */
    const HeadingImage = React.useMemo<JSX.Element>( 
        () => (
            <React.Fragment>
                <HeadingText
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
        () => (params, is_reverse = false) => (
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
     * Carousel
     */
    const Carousel = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <CarouselCardText
                containerClassName="relative max-w-container-2 mx-auto p-0 z-10"
                store={props.carousel_card_text}
                isStaticImage
                containerArrow="mb-6"
                buttonTitle="book now"
            />
        ),
    [props.carousel_card_text]);

    const ImageFood = React.useMemo<(params: { src: string, className?: string }) => JSX.Element>( 
        () => (params) => (
            <img src={params.src} className={`absolute bg-auto w-full h-auto max-w-sm ${params.className}`} alt="food-image" />
        ),
    [])

    let b = "border border-black"
    return (
        <div id="dining">
            <section>
                {Slider}
            </section>

            <section className={"py-20"}>
                {HeadingImage}
            </section>

            <section className={"py-20"}>
                {CardTextImage(props.card_text_image_small[0], true)}
            </section>

            <section className={"pt-24 pb-48 box-border max-w-screen-xl mx-auto relative"}>
                {ImageFood({
                    src: require('../assets/img/CarouselCard/food-1.png'),
                    className: 'image-food-top top-0 right-0 hidden xl:inline lg:inline md:inline'
                })}
                {Carousel}
                {ImageFood({
                    src: require('../assets/img/CarouselCard/food-2.png'),
                    className: 'image-food-bottom hidden xl:inline lg:inline md:inline bottom-0 left-0'
                })}
            </section>
        </div>
    );
};
Dining.defaultProps = staticDining;
export default Dining;
