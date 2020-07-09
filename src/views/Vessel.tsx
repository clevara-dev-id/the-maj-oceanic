import * as React from 'react';
import _ from 'lodash';

import DefaultProps, { VesselProps } from '../static/vessel';
import CarouselCardText from '../components/base_component/Carousel/CarouselCardText';

/**
 * Components
 */
const SliderAwesome = React.lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'));
const HeadingText   = React.lazy(() => import('../components/base_component/Heading/HeadingText'));
const LargeImage    = React.lazy(() => import('../components/base_component/LargeImage/LargeImage'));
const Heading       = React.lazy(() => import('../components/base_component/Heading/Heading'));
const CarouselThree = React.lazy(() => import('../components/base_component/Carousel/CarouselThree'));
const Button        = React.lazy(() => import('../components/base_component/Button/Button'));

/**
 * The Vessel Component
 *
 * ## Usage
 */
const Vessel: React.FC<VesselProps> = (props): JSX.Element => {
    // const dispatch = useDispatch();
    /**
     * Carousel Memo
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
        () => (
            <React.Fragment>
                <HeadingText
                    heading={props.heading}
                    text={props.text}
                    containerClassName="w-full mx-auto max-w-3xl"
                    textClassName="px-6"
                />
                <LargeImage
                    images={props.images}
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
            <div className="relative container mx-auto px-6 xl:px-0 lg:px-0 md:px-0 xl:py-40 lg:py-32 md:py-24 py-20 xl:max-w-container-2">
                <CarouselCardText 
                    containerClassName="xl:max-w-container-2 relative my-16 z-20 pb-12"
                    store={props.carousel}
                    isStaticImage
                />
            </div>
        )
    ,[]);

    return (
        <div id="vessel">
            <section>
                {Slider}
            </section>

            <section className={"py-24 "}>
                {HeadingImage}
            </section>

            <section className={"py-20 "}>
                {CarouselThreeHeading}
            </section>

            <section className={"pt-40 pb-56 "}>
                {CarouselCard}
            </section>
        </div>
    );
};

Vessel.defaultProps = DefaultProps;
export default Vessel;
