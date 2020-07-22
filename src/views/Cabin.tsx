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
                cardClassName="ml-auto mr-auto xl:mr-0 lg:mr-4 md:mr-5 top-0 mt-16 xl:mt-16 lg:mt-16 md:mt-12 right-0 pl-8 pr-8 pt-8 w-full max-w-md md:w-6/12"
                headingClassName="mt-2"
                listContainerClassName="mt-6"
                containerArrow="mb-6 ml-10 xl:ml-6 lg:ml-6"
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

            <section className={`py-20 mb-0 xl:mb-48 lg:mb-48 md:mb-48 card-text`}>
                {MemoCarouselCardText}
            </section>
            
            <section className={`py-20 mt-0 xl:mt-20 lg:mt-20 md:mt-40 mb-0 xl:mb-20 lg:mb-20 md:mb-20`}>       
                {MemoCarouselText}
            </section>

            <section className={`py-24 bg-bizarre`}>
                {MemoHeadingCarouselCardThree}
            </section>
        </div>
    );
};

Cabin.defaultProps = staticCabin;
export default React.memo(Cabin, (prev, next) => isEqual(prev, next));
