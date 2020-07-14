import * as React from 'react';
import _ from 'lodash';
import staticOccasions, { OccasionsProps } from '../static/occasions';
import { CardTextImageRLItem } from '../components/base_component/Card/CardTextImage/CardTextImageRL';

/**
 * Components
 */
const SliderAwesome     = React.lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'));
const HeadingText       = React.lazy(() => import('../components/base_component/Heading/HeadingText'));
const LargeImage        = React.lazy(() => import('../components/base_component/LargeImage/LargeImage'));
const CardTextImage     = React.lazy(() => import('../components/base_component/Card/CardTextImage/CardTextImageRL'));

const Occasions: React.FC<OccasionsProps> = (props): JSX.Element => {

    /**
     * Slider
     */
    const Slider = React.useMemo<JSX.Element>(
        () => (
            <SliderAwesome store={props.slider} isStaticImage />
        ),
    [props.slider]);

    /**
     * Heading Text & Large Image
     */
    const HeadingImage = React.useMemo<JSX.Element>( 
        () => (
            <React.Fragment>
                <HeadingText
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
    [props.heading, props.text, props.image]);

    /**
     * Card Text Image (Right/Left)
     */
    const CardText = React.useMemo<(params: CardTextImageRLItem, index: number) => JSX.Element>( 
        () => (params, index) => {
            const is_reverse = index % 2 ? false : true;
            return (
                <section className={"py-20 "}>
                    <CardTextImage 
                        key={index}
                        heading={params.heading}
                        text={params.text}
                        image={params.image}
                        linkTo={params.linkTo}
                        isStaticImage={true}
                        reverse={is_reverse}
                    />
                </section>
            )
        },
    [props.card_text_image]);

    return (
        <div id="occasions">
            <section>
                {Slider}
            </section>

            <section className={"py-20 "}>
                {HeadingImage}
            </section>

            {_.map(props.card_text_image, CardText)}
        </div>
    );
};
Occasions.defaultProps = staticOccasions;
export default Occasions;
