import * as React from 'react';
import _ from 'lodash';

import DefaultProps, { VesselProps } from '../static/vessel';

/**
 * Components
 */
const SliderAwesome = React.lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'));
const HeadingText   = React.lazy(() => import('../components/base_component/Heading/HeadingText'));
const LargeImage    = React.lazy(() => import('../components/base_component/LargeImage/LargeImage'));
const Heading       = React.lazy(() => import('../components/base_component/Heading/Heading'));
const CarouselThree = React.lazy(() => import('../components/base_component/Carousel/CarouselThree'));
const Button        = React.lazy(() => import('../components/base_component/Button/Button'));
const CarouselCardText = React.lazy(() => import('../components/base_component/Carousel/CarouselCardText'));
const CardTextImage = React.lazy(() => import('../components/base_component/Card/CardTextImage/CardTextImageRL'));

/**
 * The Vessel Component
 *
 * ## Usage
 */
const Vessel: React.FC<VesselProps> = (props): JSX.Element => {
    // const dispatch = useDispatch();
    /**
     * Carousel Memo
     */
    const Slider = React.useMemo<JSX.Element>(
        (): JSX.Element => (
            <SliderAwesome store={props.slider} isStaticImage />
        ),
    [props.slider]);

    /**
     * Heading
     */
    const HeadingImage = React.useMemo<JSX.Element>( 
        () => (
            <React.Fragment>
                <HeadingText
                    heading={props.heading}
                    text={props.text}
                    containerClassName="w-full mx-auto max-w-3xl"
                    textClassName="px-6"
                />
                <LargeImage
                    images={props.images}
                    imageClassName="max-w-container-2 max-h-large-image mt-16 mx-auto"
                    isStaticImage
                />
            </React.Fragment>
        ), 
    [props.heading, props.text]);

    /**
     * Carousel Three
     */
    const CarouselThreeHeading = React.useMemo<JSX.Element>(
        () => (
            <React.Fragment>
                <Heading caption={props.carousel_three.caption} heading={props.carousel_three.heading} />
                <CarouselThree
                    isStaticImage
                    containerClassName="relative mt-20 max-w-6xl mx-auto"
                    store={props.carousel_three.data} 
                    
                />
                <Button mode="outline" to="#" className="mt-20">
                    Discover More
                </Button>
            </React.Fragment>
        ),
    []);

    /**
     * Carousel Card
     */
    const CarouselCard = React.useMemo<JSX.Element>( 
        () => (
            <div className="relative container mx-auto px-6 xl:px-0 lg:px-0 md:px-0 xl:max-w-container-2 pb- border border-black box-border">
                <CarouselCardText 
                    containerClassName="xl:max-w-container-2 relative z-20 pb-12 border border-black"
                    store={props.carousel}
                    isStaticImage
                />
            </div>
        )
    ,[]);

    /**
     * Carousel Three Team 
     */
    const CarouselThreeTeam = React.useMemo<JSX.Element>(
        () => (
            <React.Fragment>
                <Heading caption={props.carousel_three_team.caption} heading={props.carousel_three_team.heading} />
                <CarouselThree
                    isStaticImage
                    containerClassName="relative max-w-6xl mx-auto mt-20"
                    store={props.carousel_three_team.data}
                />
            </React.Fragment>
        )
    ,[]);

    /**
     * Card Text Image
     */
    const CardText = React.useMemo<JSX.Element>( 
        () => (
            <React.Fragment>
                <CardTextImage 
                    caption='sustainbility'
                    heading='Lorem Ipsum Dolor'
                    text='Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. Proident irure proident eiusmod voluptate velit aliquip velit est minim cillum consequat excepteur aliquip esse. Quis adipisicing commodo voluptate esse culpa.'
                    list={[
                        'Lorem ipsum dolor sit amet',
                        'Lorem lar aliquip',
                        'Lorem ipsum dolor sit amet',
                        'Lorem lar aliquip',
                    ]}
                    image={require('../assets/img/CardTextImage/1.png')}
                    isStaticImage={true}
                    to="#"
                >
                    <Button mode="outline" to="#">
                        Learn More
                    </Button>
                </CardTextImage>
            </React.Fragment>
        )
    ,[]);

    let border = 'border border-black';

    return (
        <div id="vessel">
            <section>
                {Slider}
            </section>

            <section className={"py-24 " + border}>
                {HeadingImage}
            </section>

            <section className={"py-20 " + border}>
                {CarouselThreeHeading}
            </section>

            <section className={"pt-40 pb-48 " + border}>
                {CarouselCard}
            </section>

            <section className={"py-20 " + border}>
                {CarouselThreeTeam}
            </section>

            <section className={"py-20 " + border}>
                {CardText}
            </section>
        </div>
    );
};

Vessel.defaultProps = DefaultProps;
export default Vessel;
