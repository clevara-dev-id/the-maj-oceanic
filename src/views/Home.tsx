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

    /** Slider Awesome */
    const MemoSliderAwesome = React.useMemo<JSX.Element>(
        ()  => (
            <SliderAwesome isStaticImage store={source?.slider!} />
        ),
    [source?.slider]);

    /** Heading Text & Large Image */
    const MemoHeadingTextLargeImage = React.useMemo<JSX.Element>( 
        () => (
            <React.Fragment>
                <HeadingText containerClassName="container select-none flex flex-col items-center justify-center mx-auto lg:max-w-4xl text-center p-8"
                    headingClassName="lg:max-w-xl text-center leading-none"
                    heading={source?.heading!}
                    text={source?.text}
                    textClassName="mt-8 lg:max-w-xl leading-6"
                />
                <LargeImage
                    isStaticImage
                    images={source?.images}
                    imageClassName="max-w-container-2 max-h-large-image mx-auto mt-16"
                />
            </React.Fragment>
        ),
    [source?.heading, source?.text, source?.images]);

    /** Carousel Card Text */
    const MemoCarouselCardText = React.useMemo<JSX.Element>(
        () => (
            <div className="relative container mx-auto px-6 xl:px-0 lg:px-0 md:px-0 xl:py-40 lg:py-32 md:py-24 py-20 xl:max-w-container-2">
                <CarouselCardText
                    containerClassName="xl:max-w-container-2 relative my-16 z-20"
                    store={source?.carousel_card_text!}
                    containerArrow="mb-4"
                    buttonTitle="discover"
                    isStaticImage
                >
                    <img draggable={false} src={require('../assets/tmo-stamps-brown.png')}
                        alt="tmo-stamps-brown"
                        className="tmo-stamps-brown select-none absolute mx-w-sm top-0 right-0 -mt-20 -mr-3 hidden xl:inline lg:inline md:inline"
                    />
                </CarouselCardText>
            </div>
        ),
    [source?.carousel_card_text]);
    
    return (
        <div id="home">
            <section className="leading">
                {MemoSliderAwesome}
            </section>

            <section>
                {MemoHeadingTextLargeImage}
            </section>

            <section className="h-full">
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