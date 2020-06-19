import * as React from 'react';
import * as DataHome from '../static/home';

import { HeadingText } from '../components/base_component/Heading/HeadingText';
import SliderAwesome from '../components/base_component/Slider/SliderAwesome/SliderAwesome';
import LargeImage from '../components/base_component/LargeImage/LargeImage';
import CarouselCardText from '../components/base_component/Carousel/CarouselCardText';


const DefaultProps: DataHome.HomeProps = DataHome.default;

class Home extends React.Component<DataHome.HomeProps, {}> {
    constructor(props: DataHome.HomeProps) {
        super(props)
    };

    static defaultProps = DefaultProps;
    
    render() {
        return (
            <div id="home">
                <section className="leading">
                    <div className="">
                        <SliderAwesome
                            isStaticImage
                            store={this.props.slider}
                        />
                    </div>
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
                        heading={this.props.heading}
                        text={this.props.text}
                        textClassName="mt-8 lg:max-w-xl leading-6"
                    />
                    <LargeImage
                        isStaticImage={true}
                        images={this.props.images}
                        imageClassName="max-w-container-2 max-h-large-image mx-auto mt-16"
                    />
                </section>

                <section>
                    <div className="relative container mx-auto xl:py-40 lg:py-32 md:py-24 py-20 xl:max-w-container-2">
                        <CarouselCardText
                            containerClassName="xl:max-w-container-2 relative my-16 z-20"
                            isStaticImage={true}
                            store={this.props.carousel}
                        />

                        <img id="image-stamps" src={require("../assets/tmo-stamps-brown.png")}
                            className="absolute max-w-sm top-0 right-0 xl:mt-32 lg:mt-24 z-10"
                            alt="the-maj-oceanic-stamps-bromn"
                        />

                    </div>
                </section>
            </div>
        );
    };
};

export default Home;