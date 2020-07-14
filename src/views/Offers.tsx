import * as React from 'react';
import _ from 'lodash';
import staticOffers, { OffersProps } from '../static/offers';
import { CardTextImageRLItem } from '../components/base_component/Card/CardTextImage/CardTextImageRL';

/**
 * Components
 */
const SliderAwesome = React.lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'));
const HeadingText   = React.lazy(() => import('../components/base_component/Heading/HeadingText'));
const LargeImage    = React.lazy(() => import('../components/base_component/LargeImage/LargeImage'));
const CardText      = React.lazy(() => import('../components/base_component/Card/CardTextImage/CardTextImageRL'));

const Offers: React.FC<OffersProps> = (props): JSX.Element => {
    /**
     * Slider
     */
    const Slider = React.useMemo<JSX.Element>(
        (): JSX.Element => (
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
     * Card Text // Card Text Image
     */
    const CardTextImage = React.useMemo<(params: CardTextImageRLItem, index: number) => JSX.Element>( 
        () => (params, index) => (
            <section key={index} className={"py-20"}>
                <CardText 
                    heading={params.heading}
                    text={params.text}
                    list={params.list}
                    image={params.image}
                    linkTo={params.linkTo}
                    isStaticImage={true}
                    mode="outline"
                    buttonTitle="learn more"
                    reverse={index % 2 ? false : true}
                />
            </section>
        ),
    [props.card_text]);

    return (
        <div id="offers">
            <section>
                {Slider}
            </section>

            <section className={"py-20"}>
                {HeadingImage}
            </section>

            {_.map(props.card_text, CardTextImage)}
        </div>
    );
};
Offers.defaultProps = staticOffers;
export default Offers;
