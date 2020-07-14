import * as React from 'react';
import staticSustainability, { SustainabilityProps } from '../static/sustainability';
import { CardTextImageSmallProps } from '../components/base_component/Card/CardTextImage/CardTextImageSmall';

/**
 * Components 
 */
const SliderAwesome         = React.lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'));
const HeadingText           = React.lazy(() => import('../components/base_component/Heading/HeadingText'));
const LargeImage            = React.lazy(() => import('../components/base_component/LargeImage/LargeImage'));
const CardTextImageSmall    = React.lazy(() => import('../components/base_component/Card/CardTextImage/CardTextImageSmall'));

const Sustainabiliy: React.FC<SustainabilityProps> = (props): JSX.Element => {
    /**
    * Slider
    */
    const Slider = React.useMemo<JSX.Element>(
        () => (
            <SliderAwesome store={props.slider} isStaticImage />
        ),
    [props.slider]);

    /**
        * Heading Image
        */
    const HeadingImage = React.useMemo<JSX.Element>( 
        () => (
            <React.Fragment>
                <HeadingText
                    caption={props.caption}
                    heading={props.heading}
                    text={props.text}
                    containerClassName="w-full mx-auto max-w-3xl"
                    textClassName="px-6"
                    headingClassName=" mt-4"
                />
                <LargeImage
                    images={props.image}
                    imageClassName="max-w-container-2 max-h-large-image mt-16 mx-auto"
                    isStaticImage
                />
            </React.Fragment>
        ), 
    [props.heading, props.text]);

    /**
     * Card Text Image Small
     */
    const CardTextImage = React.useMemo<(params: CardTextImageSmallProps, is_reverse?: boolean) => JSX.Element>(
        () => (params, is_reverse = false) => (
            <CardTextImageSmall
                heading={params.heading}
                text={params.text}
                image={params.image} 
                isStaticImage
                reverse={is_reverse}
            />
        ),
    []);

    return (
        <div id="sustainabiliy">
            <section>
                {Slider}
            </section>
            
            <section className={"py-20"}>
                {HeadingImage}
            </section>

            <section className={"py-20"}>
                {CardTextImage(props.card_text_image_small[0])}
            </section>

            <section className={"py-20"}>
                {CardTextImage(props.card_text_image_small[1], true)}
            </section>
        </div>
    );
};
Sustainabiliy.defaultProps = staticSustainability;
export default Sustainabiliy;
