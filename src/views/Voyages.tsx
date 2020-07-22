import * as React from 'react';
import staticVoyages, { VoyagesProps } from '../static/voyages';

/** Components */
const SliderAwesome     = React.lazy(() => import('../components/base/Slider/SliderAwesome'));
const TabSecond         = React.lazy(() => import('../components/base/Tab/Tabs'));
const HeadingText       = React.lazy(() => import('../components/base/Heading/HeadingText'));
const LargeImage        = React.lazy(() => import('../components/base/LargeImage/LargeImage'));
const Heading           = React.lazy(() => import('../components/base/Heading/Heading'));
const CarouselThree     = React.lazy(() => import('../components/base/Carousel/CarouselThree'));
const CarouselCardText  = React.lazy(() => import('../components/base/Carousel/CarouselCardText'));

const StaticVideoSvg =  
    <svg width="1110" height="400" viewBox="0 0 1110 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.25" width="1110" height="400" fill="#232323"/>
        <g filter="url(#filter0_d)">
        <path d="M541.467 170.6C540.558 169.919 539.343 169.808 538.326 170.315C537.309 170.825 536.667 171.863 536.667 173V227C536.667 228.137 537.309 229.175 538.326 229.685C538.749 229.895 539.211 230 539.667 230C540.303 230 540.939 229.796 541.467 229.4L577.467 202.4C578.223 201.836 578.667 200.945 578.667 200C578.667 199.055 578.223 198.167 577.467 197.6L541.467 170.6Z" fill="white"/>
        </g>
        <defs>
        <filter id="filter0_d" x="472.667" y="113" width="170" height="188" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="7"/>
        <feGaussianBlur stdDeviation="32"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        </defs>
    </svg>
    

const Voyages: React.FC<VoyagesProps> = (props): JSX.Element => {

    /**
     * Slider
     */
    const Slider = React.useMemo<JSX.Element>(
        () => (
            <SliderAwesome store={props.slider} isStaticImage />
        ),
    [props.slider]);

    /**
     * Tabs
     */
    const Tabs = React.useMemo<JSX.Element>(
        () => (
            <TabSecond
                isStaticImage
            >
                <div title="Flores sea">
                    <HeadingText
                        containerClassName="box-border"
                        heading="lorem ipsum dolor sit amet (Flores sea)"
                        text="Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit. "
                        headingClassName="leading-9"
                        textClassName="my-3"
                    />
                    <div className="mt-8">
                        {StaticVideoSvg}
                    </div>
                </div>

                <div title="Raja Ampat">
                    <HeadingText
                        containerClassName="box-border"
                        heading="lorem ipsum dolor sit amet (Raja Ampat)"
                        text="Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit. "
                        headingClassName="leading-9"
                        textClassName="my-3"
                    />
                    <div className="mt-8">
                        {StaticVideoSvg}
                    </div>
                </div>
            </TabSecond>
        ),
    []);

    /**
     * Carousel Three
     */
    const CarouselThreeHeading = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <React.Fragment>
                <Heading
                    caption={props.carousel_three.caption}
                    heading={props.carousel_three.heading}
                    headingClassName="mt-4"
                />
                <CarouselThree
                    isStaticImage
                    containerClassName="mx-auto"
                    captionClassName="text-black capitalize mt-5"
                    mode="outline"
                    to="#"
                    store={props.carousel_three.data}
                />
            </React.Fragment>
        )
    ,[props.carousel_three]);

    /**
     * Carousel Card Text
     */
    const Carousel = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <CarouselCardText
                cardClassName="ml-auto mr-auto xl:mr-0 lg:mr-4 md:mr-5 top-0 mt-12 right-0 px-8 pt-8 w-full max-w-md md:w-6/12"
                listContainerClassName="mt-5"
                store={props.carousel_card_text}
                isStaticImage
                containerArrow="mb-6"
                prevButtonClassName="ml-4"
                buttonTitle="book now"
            />
        ),
    [props.carousel_card_text]);
    
    return (
        <div id="voyages">
            <section>
                {Slider}
            </section>
            
            <section className={"py-20"}>
                {Tabs}
            </section>

            <section className={"py-20"}>
                {CarouselThreeHeading}
            </section>

            <section className={"py-20 mb-6 xl:mb-40 lg:mb-40 md:mb-40"}>
                {Carousel}
            </section>
        </div>
    );
    
};
Voyages.defaultProps = staticVoyages;
export default Voyages;
