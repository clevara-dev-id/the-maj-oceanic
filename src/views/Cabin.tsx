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
                cardClassName="ml-auto mr-auto xl:mr-0 lg:mr-4 md:mr-5 top-0 mt-12 right-0 px-8 pt-8 xl:pb-20 lg:pb-20 md::pb-16 w-full max-w-md md:w-6/12"
                headingClassName="mt-2"
                listContainerClassName="mt-4 p-0"
                store={props.carousel_card_text}
                isStaticImage
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
                containerArrow="mb-6 ml-6"
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
                    containerClassName="xl:mt-16 lg:mt-16 md:mt-10 mt-8"
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

            <section className={`py-20 mb-0 xl:mb-24 lg:mb-24 md:mb-24`}>
                {MemoCarouselCardText}
            </section>

            <section className={`py-20 mt-0 xl:mt-24 lg:mt-24 md:mt-24 mb-24 xl:mb-24 lg:mb-24 md:mb-24`}>
                {MemoCarouselText}
            </section>

            <section className={`pt-20 pb-32 mt-24 bg-bizarre`}>
                {MemoHeadingCarouselCardThree}
            </section>
        </div>
    );
};

Cabin.defaultProps = staticCabin;
export default React.memo(Cabin, (prev, next) => isEqual(prev, next));
