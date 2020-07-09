import * as React from 'react';
import { useDispatch, connect } from 'react-redux';
import _ from 'lodash';

import * as Static from '../static/home';
import axios from '../helper/axios';
import { pageHomeReceived, pageStatus, pageSetActive } from '../redux/pages/reducers';

import { HeadingText } from '../components/base_component/Heading/HeadingText';
import SliderAwesome from '../components/base_component/Slider/SliderAwesome/SliderAwesome';
import LargeImage from '../components/base_component/LargeImage/LargeImage';
import CarouselCardText from '../components/base_component/Carousel/CarouselCardText';
import { RootState } from '../redux';
import { PageState, PageItem } from '../redux/pages/types';


const DefaultProps: Static.HomeProps = Static.default;

export interface HomeProps extends Static.HomeProps, mapStateProps {};
const Home: React.FC<HomeProps> = (props): JSX.Element =>  {
    const dispatch = useDispatch();
    const [source, setSource] = React.useState<PageItem|undefined>(undefined);

    React.useLayoutEffect(() =>  {
        if (!source) {
            const find = _.find(props.page.pages, {page_name: 'home'});
            setSource(find);
        };
    }, [props.page.pages]);

    React.useEffect(() => {
        if (!_.isEqual(source, props.page.activePage)) {
            dispatch(pageSetActive(source));
        }
    }, [source]);

    /**e
     * Slider
     */
    const Slider = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <SliderAwesome store={source?.slider!} />
        ),
    [source?.slider])

    /**
     * Carousel
     */
    const Carousel = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <CarouselCardText
                containerClassName="xl:max-w-container-2 relative my-16 z-20"
                store={source?.carousel!}
            >
                <img src={require('../assets/tmo-stamps-brown.png')}
                    alt="tmo-stamps-brown"
                    className="tmo-stamps-brown absolute mx-w-sm top-0 right-0 -mt-20 -mr-3 hidden xl:inline lg:inline md:inline"
                />
            </CarouselCardText>
        ),
    [source?.carousel]);
    
    return (
        <div id="home">
            <section className="leading">
                {Slider}
            </section>

            <section>
                <HeadingText
                    containerClassName="
                        container
                        flex 
                        flex-col
                        items-center
                        justify-center
                        mx-auto
                        lg:max-w-4xl
                        text-center
                        p-8
                    "
                    headingClassName="lg:max-w-xl text-center leading-none"
                    heading={source?.heading!}
                    text={source?.text}
                    textClassName="mt-8 lg:max-w-xl leading-6"
                />
                <LargeImage
                    images={source?.images}
                    imageClassName="max-w-container-2 max-h-large-image mx-auto mt-16"
                />
            </section>

            <section className="h-full">
                <div className="relative container mx-auto px-6 xl:px-0 lg:px-0 md:px-0 xl:py-40 lg:py-32 md:py-24 py-20 xl:max-w-container-2">
                    {Carousel}
                </div>
            </section>
        </div>
    );
};
Home.defaultProps = DefaultProps;

type mapStateProps = { page: PageState }
const mapStateToProps = (state: RootState) => ({
    page: state.page
});
export default connect(mapStateToProps)(Home);