import * as React from 'react';
import _ from 'lodash';
import staticVoyages, { VoyagesProps } from '../static/voyages';

/** Components */
const SliderAwesome     = React.lazy(() => import('../components/base/Slider/SliderAwesome'));
const Tab               = React.lazy(() => import('../components/base/Tab/Tabs'));
const HeadingText       = React.lazy(() => import('../components/base/Heading/HeadingText'));
const Heading           = React.lazy(() => import('../components/base/Heading/Heading'));
const CarouselThree     = React.lazy(() => import('../components/base/Carousel/CarouselThree'));
const CarouselCardText  = React.lazy(() => import('../components/base/Carousel/CarouselCardText'));


const Voyages: React.FC<VoyagesProps> = (props): JSX.Element => {
    /** Slider Awesome */
    const MemoSliderAwesome = React.useMemo<JSX.Element>(
        () => (
            <SliderAwesome store={props.slider} isStaticImage />
        ),
    [props.slider]);

    /** Tabs */
    const MemoTabItem = React.useMemo<(params: any) => JSX.Element>(
        () => (params) => (
            <HeadingText
                heading={params.heading}
                text={params.text}
            />
        ),
    []);

    /** Video */
    const MemoVideoTabItem = React.useMemo<(
        params: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> &
        React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>
    ) => any>(
        () => (params) => 
            <video
                key={params.key}
                className=" mt-12"
                width="100%"
                height="20%"
                defaultValue={require('../assets/video/videoplayback.mp4')}
                muted
                preload="none"
                controls
                playsInline
                poster={params.poster}>
                    <source src={params.src} type={params.type} />
                    Your device doesn't support
            </video>
        ,
    []);

    /** Heading & Carousel Three */
    const MemoHeadingCarouselThree = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <React.Fragment>
                <Heading
                    caption={props.carousel_three.caption}
                    heading={props.carousel_three.heading}
                    headingClassName="mt-4"
                />
                <CarouselThree
                    isStaticImage
                    containerClassName="mx-auto mt-6"
                    captionClassName="text-black capitalize mt-5"
                    store={props.carousel_three.data}
                />
            </React.Fragment>
        )
    ,[props.carousel_three]);

    /** Carousel Card Text */
    const MemoCarouselCardText = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <CarouselCardText
                cardClassName="ml-auto mr-auto xl:mr-0 lg:mr-4 md:mr-5 top-0 mt-12 right-0 px-8 pt-8 xl:pb-20 lg:pb-20 md::pb-16 w-full max-w-md md:w-6/12"
                listContainerClassName="mt-4 p-0"
                store={props.carousel_card_text}
                isStaticImage
                buttonTitle="book now"
            />
        ),
    [props.carousel_card_text]);
    
    return (
        <div id="voyages">
            <section>
                {MemoSliderAwesome}
            </section>
            
            <section className={"py-20"}>
                <Tab isStaticImage>
                    {_.map(props.tabs, (data, index) => {
                        return (
                            <div 
                                title={data.label}
                                key={index}>
                                {MemoTabItem(data)}
                                {MemoVideoTabItem({
                                    key: data.video,
                                    poster: require('../assets/video-poster.png'),
                                    type: 'video/mp4',
                                    src: data.video,
                                })}
                            </div>
                        )
                    })}
                </Tab>
            </section>
            
            <section className={"py-20"}>
                {MemoHeadingCarouselThree}
            </section>

            <section className={"py-20 mb-6 xl:mb-40 lg:mb-40 md:mb-40"}>
                {MemoCarouselCardText}
            </section>
        </div>
    );
    
};
Voyages.defaultProps = staticVoyages;
export default React.memo(Voyages, (prevProps, nextProps) => _.isEqual(prevProps, nextProps));
