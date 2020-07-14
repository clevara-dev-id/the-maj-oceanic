import * as React from 'react';
import _ from 'lodash';

import DefaultProps, { VesselProps } from '../static/vessel';

/**
 * Components
 */
const SliderAwesome = React.lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'));
const HeadingText   = React.lazy(() => import('../components/base_component/Heading/HeadingText'));
const LargeImage    = React.lazy(() => import('../components/base_component/LargeImage/LargeImage'));
const Heading       = React.lazy(() => import('../components/base_component/Heading/Heading'));
const CarouselThree = React.lazy(() => import('../components/base_component/Carousel/CarouselThree'));
const Button        = React.lazy(() => import('../components/base_component/Button/Button'));
const CarouselCardText = React.lazy(() => import('../components/base_component/Carousel/CarouselCardText'));
const CardTextImage = React.lazy(() => import('../components/base_component/Card/CardTextImage/CardTextImageRL'));

/**
 * The Vessel Component
 *
 * ## Usage
 */
const Vessel: React.FC<VesselProps> = (props): JSX.Element => {
    // const dispatch = useDispatch();
    /**
     * Slider
     */
    const Slider = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <SliderAwesome store={props.slider} isStaticImage />
        ),
    [props.slider]);

    /**
     * Heading Text & Large Image
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
     * Carousel Three
     */
    const CarouselThreeHeading = React.useMemo<JSX.Element>(
        () => (
            <React.Fragment>
                <Heading caption={props.carousel_three.caption} heading={props.carousel_three.heading} />
                <CarouselThree
                    isStaticImage
                    containerClassName="relative mt-20 max-w-6xl mx-auto"
                    store={props.carousel_three.data} 
                    mode="outline"
                    to="#"
                />
                <Button mode="outline" to="#" className="mt-20">
                    Discover More
                </Button>
            </React.Fragment>
        ),
    []);

    /**
     * Carousel Card
     */
    const CarouselCard = React.useMemo<JSX.Element>( 
        () => (
            <CarouselCardText 
                containerClassName="max-w-container-2 relative pb-12 mx-auto"
                store={props.carousel}
                isStaticImage
                containerArrow="mb-16"
                buttonTitle="learn more"
            />
        )
    ,[]);

    /**
     * Carousel Three Team 
     */
    const CarouselThreeTeam = React.useMemo<JSX.Element>(
        () => (
            <React.Fragment>
                <Heading caption={props.carousel_three_team.caption} heading={props.carousel_three_team.heading} />
                <CarouselThree
                    isStaticImage
                    containerClassName="relative max-w-6xl mx-auto mt-20"
                    store={props.carousel_three_team.data}
                    mode="outline"
                    to="#"
                />
            </React.Fragment>
        )
    ,[]);

    /**
     * Card Text Image
     */
    const CardText = React.useMemo<JSX.Element>( 
        () => (
            <CardTextImage 
                {...props.card_text_image}
                isStaticImage={true}
                linkTo="#"
                mode="outline"
                buttonTitle="learn more"
            />
        )
    ,[]);

    return (
        <div id="vessel">
            <section>
                {Slider}
            </section>

            <section className={"py-24"}>
                {HeadingImage}
            </section>

            <section className={"py-20"}>
                {CarouselThreeHeading}
            </section>

            <section className={"pt-40 pb-48"}>
                {CarouselCard}
            </section>

            <section className={"py-20"}>
                {CarouselThreeTeam}
            </section>

            <section className={"py-20 "}>
                {CardText}
            </section>
        </div>
    );
};

Vessel.defaultProps = DefaultProps;
export default Vessel;
