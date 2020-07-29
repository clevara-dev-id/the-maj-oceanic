import * as React from 'react';
import { useDispatch, connect } from 'react-redux';
import _ from 'lodash';

import { pageSetActive } from '../redux/pages/reducers';
import { RootState } from '../redux';
import { PageState, PageItem } from '../redux/pages/types';
import staticHome, { HomeProps } from '../static/home';

/** Component */
const SliderAwesome     = React.lazy(() => import('../components/base/Slider/SliderAwesome'));
const HeadingText       = React.lazy(() => import('../components/base/Heading/HeadingText'));
const LargeImage        = React.lazy(() => import('../components/base/LargeImage/LargeImage'));
const CarouselCardText  = React.lazy(() => import('../components/base/Carousel/CarouselCardText'));

const Home: React.FC<HomeProps & mapStateProps> = (props): JSX.Element =>  {
    const dispatch = useDispatch();
    const [source, setSource] = React.useState<PageItem|undefined>(undefined);
    const section1 = React.useRef(null);

    React.useLayoutEffect(() =>  {
        if (!source && _.isEmpty(props) === false) {
            const DATA = {
                heading: props.heading,
                text: props.text,
                images: props.images,
                slider: props.slider,
                carousel_card_text: props.carousel_card_text,
            }
            // const find = _.find(props.page.pages, {page_name: 'home'});
            setSource(DATA);
        };
    }, [props]);

    // React.useEffect(() => {
    //     if (!_.isEqual(source, props.page.activePage)) {
    //         dispatch(pageSetActive(source));
    //     }
    // }, [source]);

    /* anim effect will be fire */
    React.useEffect(() => {
        const _observer = new IntersectionObserver(
            // callback
            ([entry]) => {
                // console.log(entry);
            },
            // option
            {
                root: null,
                rootMargin: '0px',
                threshold: 0,
            }
        );

        if (section1.current!)
            _observer.observe(section1.current!);

        return () => {
            _observer.unobserve(section1.current!);
        };
    }, []);

    /** Slider Awesome */
    const MemoSliderAwesome = React.useMemo<JSX.Element>(
        ()  => (
            <SliderAwesome isStaticImage store={source?.slider!} />
        ),
    [source?.slider]);

    /** Heading Text & Large Image */
    const MemoHeadingTextLargeImage = React.useMemo<JSX.Element>( 
        () => (
            <div className="tmo__container_component">
                <HeadingText 
                    containerClassName="lg:max-w-xl md:max-w-lg max-w-md"
                    heading={source?.heading!}
                    text={source?.text}
                    textClassName="px-6 mt-8"
                />
                <LargeImage
                    isStaticImage
                    images={source?.images!}
                    imageClassName="max-h-large-image mx-auto mt-16"
                />
            </div>
        ),
    [source?.heading, source?.text, source?.images]);

    /** Carousel Card Text */
    const MemoCarouselCardText = React.useMemo<JSX.Element>(
        () => (
            <CarouselCardText
                store={source?.carousel_card_text!}
                cardClassName="ml-auto mr-auto xl:mr-0 lg:mr-4 md:mr-5 top-0 mt-16 xl:mt-16 lg:mt-16 md:mt-12 right-0 pl-8 pr-10 xl:pt-12 lg:pt-12 md:pt-12 pt-8 xl:pb-40 lg:pb-40 md:pb-20 w-full max-w-md md:w-6/12"
                headingClassName="mt-4"
                textClassName="pr-0 xl:pr-4 lg:pr-4 md:pr-4"
                containerArrow="mb-6 ml-10 xl:ml-6 lg:ml-6"
                buttonTitle="discover"
                buttonClassName="mt-10 xl:mt-8 lg:mt-8 md:mt-8 mx-auto xl:mx-0 lg:mx-0 md:mx-0"
                isStaticImage
            >
                <img draggable={false} src={require('../assets/logo/tmo-stamps-brown.png')}
                    className="tmo-stamps-brown select-none absolute mx-w-sm top-0 right-0 -mt-24 -mr-6 hidden xl:inline lg:inline md:inline"
                    alt="tmo-stamps-brown"
                    loading="lazy"
                />
            </CarouselCardText>
        ),
    [source?.carousel_card_text]);
    
    return (
        <div id="home">
            <section className="box-border">
                {MemoSliderAwesome}
            </section>

            <section ref={section1} className="py-20 mb-0 xl:mb-20 lg:mb-20 md:mb-20">
                {MemoHeadingTextLargeImage}
            </section>

            <section className="py-20 xl:mb-20 lg:mb-20 md:mb-20 mb-0">
                {MemoCarouselCardText}
            </section>
        </div>
    );
};

type mapStateProps = { page: PageState }
const mapStateToProps = (state: RootState) => ({
    page: state.page
});

Home.defaultProps = staticHome;
export default connect(mapStateToProps)(React.memo(Home, (prevProp, nextProp) => _.isEqual(prevProp, nextProp)));