import * as React from 'react';
import staticSustainability, { SustainabilityProps } from '../static/sustainability';
import { CardTextImageSmallProps } from '../components/base/Card/CardTextImage/CardTextImageSmall';

/** Components */
const SliderAwesome         = React.lazy(() => import('../components/base/Slider/SliderAwesome'));
const HeadingText           = React.lazy(() => import('../components/base/Heading/HeadingText'));
const LargeImage            = React.lazy(() => import('../components/base/LargeImage/LargeImage'));
const CardTextImageSmall    = React.lazy(() => import('../components/base/Card/CardTextImage/CardTextImageSmall'));

const Sustainabiliy: React.FC<SustainabilityProps> = (props): JSX.Element => {
    /**
    * Slider
    */
    const MemoSliderAwesome = React.useMemo<JSX.Element>(
        () => (
            <SliderAwesome store={props.slider} isStaticImage />
        ),
    [props.slider]);

    /**
        * Heading Image
        */
    const MemoHeadingTextImage = React.useMemo<JSX.Element>( 
        () => (
            <div className="px-6 xl:px-0 lg:px-4 md:px-5">
                <HeadingText
                    caption={props.caption}
                    heading={props.heading}
                    text={props.text}
                    containerClassName="max-w-3xl"
                    textClassName="px-6"
                    headingClassName="mt-4"
                />
                <LargeImage
                    images={props.image}
                    imageClassName="max-w-container-2 max-h-large-image mt-16 mx-auto"
                    isStaticImage
                />
            </div>
        ), 
    [props.caption, props.heading, props.text, props.image]);

    /**
     * Card Text Image Small
     */
    const MemoCardTextImageSmall = React.useMemo<(params: CardTextImageSmallProps, is_reverse?: boolean) => JSX.Element>(
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
                {MemoSliderAwesome}
            </section>
            
            <section className={"pt-20 pb-12 md:pb-16 lg:pb-24 xl:pb-24"}>
                {MemoHeadingTextImage}
            </section>

            <section className={"pb-12 md:pb-16 lg:pb-24 xl:pb-24 pt-10 md:pt-16 lg:pt-24 xl:pt-24"}>
                {MemoCardTextImageSmall(props.card_text_image_small[0])}
            </section>

            <section className={"pt-12 md:pt-16 lg:pt-24 xl:pt-24 pb-20"}>
                {MemoCardTextImageSmall(props.card_text_image_small[1], true)}
            </section>
        </div>
    );
};
Sustainabiliy.defaultProps = staticSustainability;
export default Sustainabiliy;
