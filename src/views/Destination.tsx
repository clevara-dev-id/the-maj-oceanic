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
                containerClassName="max-w-container-2 relative pb-12 mx-auto"
                store={props.carousel_card_text}
                isStaticImage
                containerArrow="mb-24"
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
            />
        ),
    []);

    let b = 'border border-black';
    return (
        <div id="destination">
            <section className="">
                {MemoSliderAwesome}
            </section>

            <section className={"py-20 "}>
                {MemoCarouselCardText}
            </section>

            <section className={"py-20 "}>
                <Tabs>
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
