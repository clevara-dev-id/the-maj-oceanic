import * as React from 'react';
import staticDining, { DiningProps } from '../static/dining';
import { CardTextImageSmallProps } from '../components/base/Card/CardTextImage/CardTextImageSmall';

/**
 * Style & Components 
 */
import '../styles/dining.style.scss';
import { isEqual } from 'lodash';

const SliderAwesome         = React.lazy(() => import('../components/base/Slider/SliderAwesome'));
const HeadingText           = React.lazy(() => import('../components/base/Heading/HeadingText'));
const LargeImage            = React.lazy(() => import('../components/base/LargeImage/LargeImage'));
const CardTextImageSmall    = React.lazy(() => import('../components/base/Card/CardTextImage/CardTextImageSmall'));
const CarouselCardText      = React.lazy(() => import('../components/base/Carousel/CarouselCardText'));

const Dining: React.FC<DiningProps> = (props): JSX.Element => {
    /**
     * Slider
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
                    heading={props.heading}
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
     * Carousel Card Text
     */
    const MemoCarouselCardText = React.useMemo<JSX.Element>(
        () => (
            <CarouselCardText
                cardClassName="ml-auto mr-auto xl:mr-0 lg:mr-4 md:mr-5 top-0 mt-16 xl:mt-16 lg:mt-16 md:mt-12 right-0 px-8 pt-12 w-full max-w-md md:w-6/12"
                headingClassName="mt-2"
                listContainerClassName="mt-5"
                buttonClassName="mx-auto xl:mx-0 lg:mx-0 md:mx-0"
                containerClassName="z-10"
                store={props.carousel_card_text}
                isStaticImage
                containerArrow="mb-6"
                prevButtonClassName="ml-4"
                buttonTitle="book now"
            />
        ),
    [props.carousel_card_text]);
    
    /**
     * Image Food
     */
    const MemoImageFood = React.useMemo<(params: { src: string, className?: string }) => JSX.Element>( 
        () => (params) => (
            <img src={params.src} draggable={false}
                className={`absolute bg-auto w-full h-auto max-w-sm hidden xl:inline lg:inline md:inline ${params.className}`}
                alt="food-image"
            />
        ),
    []);

    return (
        <div id="dining">
            <section>
                {MemoSliderAwesome}
            </section>

            <section className={"py-20"}>
                {MemoHeadingTextLargeImage}
            </section>

            <section className={"py-20"}>
                {MemoCardTextImageSmall(props.card_text_image_small[0], true)}
            </section>

            <section className={"pt-24 pb-48 box-border max-w-screen-xl mx-auto relative"}>
                {MemoImageFood({
                    src: require('../assets/img/CarouselCard/food-1.png'),
                    className: 'image-food-top top-0 right-0 '
                })}
                {MemoCarouselCardText}
                {MemoImageFood({
                    src: require('../assets/img/CarouselCard/food-2.png'),
                    className: 'image-food-bottom  bottom-0 left-0'
                })}
            </section>
        </div>
    );
};

Dining.defaultProps = staticDining;
export default React.memo(Dining, (prevProp, nextProp) => isEqual(prevProp, nextProp));
