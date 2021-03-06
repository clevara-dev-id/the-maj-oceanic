import * as React from 'react';

import DefaultProps, { VesselProps } from '../static/vessel';

/** Components */
const SliderAwesome     = React.lazy(() => import('../components/base/Slider/SliderAwesome'));
const HeadingText       = React.lazy(() => import('../components/base/Heading/HeadingText'));
const LargeImage        = React.lazy(() => import('../components/base/LargeImage/LargeImage'));
const Heading           = React.lazy(() => import('../components/base/Heading/Heading'));
const CarouselThree     = React.lazy(() => import('../components/base/Carousel/CarouselThree'));
const Button            = React.lazy(() => import('../components/base/Button/Button'));
const CarouselCardText  = React.lazy(() => import('../components/base/Carousel/CarouselCardText'));
const CardTextImage          = React.lazy(() => import('../components/base/Card/CardTextImage/CardTextImage'));

/**
 * ## Vessel
 *
 * @param {VesselProps} props
 * @see `VesselProps`
 * @returns {JSX.Element} JSX Element
 */
const Vessel: React.FC<VesselProps> = (props): JSX.Element => {
    // const dispatch = useDispatch();
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
     * Carousel Three
     */
    const MemoHeadingCarouselThree = React.useMemo<JSX.Element>(
        () => (
            <React.Fragment>
                <Heading caption={props.carousel_three.caption} heading={props.carousel_three.heading} />
                <CarouselThree
                    isStaticImage
                    containerClassName="mt-20 max-w-6xl"
                    store={props.carousel_three.data}
                />
                <Button mode="outline" to="#" className="mt-20">
                    Discover More
                </Button>
            </React.Fragment>
        ),
    [props.carousel_three]);

    /**
     * Carousel Card
     */
    const MemoCarouselCardText = React.useMemo<JSX.Element>( 
        () => (
            <CarouselCardText 
                cardClassName="ml-auto mr-auto xl:mr-0 lg:mr-4 md:mr-5 top-0 mt-12 right-0 px-8 pt-8 w-full max-w-md md:w-6/12 xl:pb-12 lg:pb-12 md:pb-12"
                store={props.carousel}
                isStaticImage
                listContainerClassName="mt-5"
                buttonTitle="learn more"
                buttonClassName="mx-auto xl:mx-0 lg:mx-0 md:mx-0 block"
            />
        ),
    [props.carousel]);

    /**
     * Carousel Three Team 
     */
    const MemoCarouselThreeTeam = React.useMemo<JSX.Element>(
        () => (
            <React.Fragment>
                <Heading caption={props.carousel_three_team.caption} heading={props.carousel_three_team.heading} />
                <CarouselThree
                    isStaticImage
                    containerClassName="mt-20"
                    store={props.carousel_three_team.data}
                />
            </React.Fragment>
        ),
    [props.carousel_three_team]);

    /**
     * Card Text // Card Text Image
     */
    const MemoCardTextImage = React.useMemo<JSX.Element>( 
        () => (
            <CardTextImage 
                {...props.card_text}
                isStaticImage={true}
                linkTo="#"
                mode="outline"
                buttonTitle="learn more"
            />
        ),
    [props.card_text]);

    return (
        <div id="vessel">
            <section>
                {MemoSliderAwesome}
            </section>

            <section className={"py-24"}>
                {MemoHeadingTextLargeImage}
            </section>

            <section className={"py-20"}>
                {MemoHeadingCarouselThree}
            </section>

            <section className={"py-20 mb-6 xl:mb-40 lg:mb-40 md:mb-40"}>
                {MemoCarouselCardText}
            </section>

            <section className={"py-20"}>
                {MemoCarouselThreeTeam}
            </section>

            <section className={"py-20 "}>
                {MemoCardTextImage}
            </section>
        </div>
    );
};

Vessel.defaultProps = DefaultProps;
export default Vessel;
