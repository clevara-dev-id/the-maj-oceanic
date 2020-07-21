import * as React from 'react';
import staticCabin, { CabinProps } from '../static/cabin';
import { isEqual } from 'lodash';

/** Component */
const SliderAwesome     = React.lazy(() => import('../components/base/Slider/SliderAwesome'));
const CarouselCardText  = React.lazy(() => import('../components/base/Carousel/CarouselCardText'));
const CarouselText      = React.lazy(() => import('../components/base/Carousel/CarouselText'));
const CarouselThree     = React.lazy(() => import('../components/base/Carousel/CarouselThree'));
const Heading           = React.lazy(() => import('../components/base/Heading/Heading'));


const Cabin: React.FC<CabinProps> = (props): JSX.Element => {
    /** SliderAwesome */
    const MemoSliderAwesome = React.useMemo<JSX.Element>(
        () => (
            <SliderAwesome store={props.slider} isStaticImage />
        ),
    [props.slider]);

    /** Carousel Card Text */
    const MemoCarouselCardText = React.useMemo<JSX.Element>(
        () => (
            <CarouselCardText
                containerClassName="relative p-0"
                store={props.carousel_card_text}
                isStaticImage
                containerArrow="mb-6 ml-10 xl:ml-6 lg:ml-6"
                buttonTitle="discover"
            />
        ),
    [props.carousel_card_text]);

    /** Carousel Text */
    const MemoCarouselText = React.useMemo<JSX.Element>(
        () => (
            <CarouselText
                bottonTitle="discover"
                store={props.carousel_text}
                containerArrow="mb-6 ml-10 xl:ml-6 lg:ml-6"
                isStaticImage
            />
        ),
    [props.carousel_text]); 

    /** Heading & CarouselThree */
    const MemoHeadingCarouselCardThree = React.useMemo<JSX.Element>(
        () => (
            <React.Fragment>
                <Heading
                    caption={props.carousel_three.caption}
                    heading={props.carousel_three.heading}
                    headingClassName="mt-4 select-none"
                />
                <CarouselThree
                    isStaticImage
                    containerClassName="mt-20"
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
                {MemoSliderAwesome}
            </section>

            <section className={`py-20 mb-0 xl:mb-20 lg:mb-20 md:mb-20`}>
                {MemoCarouselCardText}
            </section>
            
            <section className={`py-20 my-0 xl:my-20 lg:my-20 md:my-20`}>       
                {MemoCarouselText}
            </section>

            <section className={`py-24`} style={{background: '#EFE1DC'}}>
                {MemoHeadingCarouselCardThree}
            </section>
        </div>
    );
};

Cabin.defaultProps = staticCabin;
export default React.memo(Cabin, (prev, next) => isEqual(prev, next));
