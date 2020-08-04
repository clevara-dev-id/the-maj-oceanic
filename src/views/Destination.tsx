import React from 'react';
import _ from 'lodash';
import staticDestination, { DestinationProps } from '../static/destination';
import { CardTextImageSmallItem } from '../components/base/Card/CardTextImage/CardTextImageSmall';

/** Components */
const SliderAwesome         = React.lazy(() => import('../components/base/Slider/SliderAwesome'));
const CarouselCardText      = React.lazy(() => import('../components/base/Carousel/CarouselCardText'));
const Tabs                  = React.lazy(() => import('../components/base/Tab/Tabs'));
const CardTextImageSmall    = React.lazy(() => import('../components/base/Card/CardTextImage/CardTextImageSmall'));

const Destination: React.FC<DestinationProps> = (props): JSX.Element => {
    /** Slider Awesome */
    const MemoSliderAwesome = React.useMemo<JSX.Element>(
        () => (
            <SliderAwesome store={props.slider} isStaticImage />
        ),
    [props.slider]);

    /** Carousel Card Text */
    const MemoCarouselCardText = React.useMemo<JSX.Element>( 
        () => (
            <CarouselCardText 
                isStaticImage
                cardClassName="ml-auto mr-auto xl:mr-0 lg:mr-4 md:mr-5 top-0 mt-16 xl:mt-16 lg:mt-16 md:mt-12 right-0 pl-8 pr-8 pt-12 w-full max-w-md md:w-6/12"
                captionClassName="mt-2 text-primary-300"
                headingClassName="mt-2"
                buttonClassName="mt-10 mx-auto xl:mx-0 lg:mx-0 md:mx-0"
                store={props.carousel_card_text}
                containerArrow="mb-12"
                prevButtonClassName="ml-4"
                buttonTitle="learn more"
            />
        ),
    [props.carousel_card_text]);

    /** Tabs */
    const MemoTabItemCardTextImageSmall = React.useMemo<(params: CardTextImageSmallItem, is_reverse?: boolean) => JSX.Element>(
        () => (params, is_reverse=false) => (
            <CardTextImageSmall
                key={params.heading || params.id}
                heading={params.heading}
                text={params.text}
                image={params.image} 
                isStaticImage
                reverse={is_reverse}
                buttonTitle="read more"
                buttonMode="custom"
                buttonClassName="text-primary-300 hover:opacity-50"
            />
        ),
    []);

    let b = 'border border-black';
    return (
        <div id="destination">
            <section className="">
                {MemoSliderAwesome}
            </section>

            <section className={"py-20 xl:mb-20 lg:mb-20 md:mb-20 mb-0 "}>
                {MemoCarouselCardText}
            </section>

            <section className={"py-20 "}>
                <Tabs removeContainer tabUlClassName="tmo__container_component">
                    {_.map(props.tabs_card_text_image_small, (data, index) => (
                        <div key={index} title={data.label}>
                            {MemoTabItemCardTextImageSmall(data)}
                        </div>
                    ))}
                </Tabs>
            </section>
        </div>
    );
};
Destination.defaultProps = staticDestination;
export default Destination;
