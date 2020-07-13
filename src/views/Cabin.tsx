import * as React from 'react';
import staticCabin, { CabinProps } from '../static/cabin';

/**
 * Component
 */
const SliderAwesome     = React.lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'));
const CarouselCardText  = React.lazy(() => import('../components/base_component/Carousel/CarouselCardText'));
const CarouselText      = React.lazy(() => import('../components/base_component/Carousel/CarouselText'));
const CarouselThree     = React.lazy(() => import('../components/base_component/Carousel/CarouselThree'));
const Heading           = React.lazy(() => import('../components/base_component/Heading/Heading'));

const Cabin: React.FC<CabinProps> = (props) => {
    /**
     * Slider
     */
    const Slider = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <SliderAwesome store={props.slider} isStaticImage />
        ),
    [props.slider]);

    /**
     * Carousel
     */
    const Carousel = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <CarouselCardText
                containerClassName="relative max-w-container-2 mx-auto p-0"
                store={props.carousel_card_text}
                isStaticImage
                containerArrow="mb-6"
            />
        ),
    [props.carousel_card_text]);

    /**
     * Carousel Card Text
     */
    const CarouselCard = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <CarouselText
                bottonTitle="Discover"
                store={props.carousel_text}
                isStaticImage
            />
        ),
    [props.carousel_text]);

    /**
     * Carousel Card Three
     */
    const CarouselThreeHeading = React.useMemo(
        () => (
            <React.Fragment>
                <Heading
                    caption={props.carousel_three.caption}
                    heading={props.carousel_three.heading}
                    headingClassName="mt-4"
                />
                <CarouselThree
                    isStaticImage
                    containerClassName="relative mt-20 max-w-6xl mx-auto"
                    mode="outline"
                    to="#"
                    store={props.carousel_three.data}
                />
            </React.Fragment>
        )
    ,[props.carousel_three]);

    return (
        <div id="vessel">
            <section>
                {Slider}
            </section>

            <section className={`py-20`}>
                {Carousel}
            </section>
            
            <section className={`py-20`}>
                {CarouselCard}
            </section>

            <section className={`py-24`} style={{background: '#EFE1DC'}}>
                {CarouselThreeHeading}
            </section>
        </div>
    );
};
Cabin.defaultProps = staticCabin;
export default Cabin;
