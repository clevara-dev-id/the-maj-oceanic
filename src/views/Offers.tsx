import * as React from 'react';
import _ from 'lodash';
import staticOffers, { OffersProps } from '../static/offers';
import { CardTextImageItem } from '../components/base/Card/CardTextImage/CardTextImage';

/** Components */
const SliderAwesome     = React.lazy(() => import('../components/base/Slider/SliderAwesome'));
const HeadingText       = React.lazy(() => import('../components/base/Heading/HeadingText'));
const LargeImage        = React.lazy(() => import('../components/base/LargeImage/LargeImage'));
const CardTextImage     = React.lazy(() => import('../components/base/Card/CardTextImage/CardTextImage'));

const Offers: React.FC<OffersProps> = (props): JSX.Element => {
    /**
     * Slider Awesome
     */
    const MemoSliderAwesome = React.useMemo<JSX.Element>(
        () => (
            <SliderAwesome store={props.slider} isStaticImage />
        ),
    [props.slider]);

    /**
     * Heading Text & Large Image
     */
    const MemoHeadingTextLargeImage = React.useMemo<JSX.Element>( 
        () => (
            <div className="px-6 xl:px-0 lg:px-4 md:px-5">
                <HeadingText
                    heading={(props.heading)}
                    text={props.text}
                    containerClassName="max-w-3xl"
                    textClassName="px-6"
                />
                <LargeImage
                    images={props.image}
                    imageClassName="max-w-container-2 max-h-large-image mt-16 mx-auto"
                    isStaticImage
                />
            </div>
        ), 
    [props.heading, props.text, props.image]);

    /**
     * Card Text // Card Text Image
     */
    const MemoCardTextImage = React.useMemo<(params: CardTextImageItem, index: number) => JSX.Element>( 
        () => (params, index) => (
            <section key={index} className={"py-20"}>
                <CardTextImage 
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
                {MemoSliderAwesome}
            </section>

            <section className={"py-20"}>
                {MemoHeadingTextLargeImage}
            </section>

            {_.map(props.card_text, MemoCardTextImage)}
        </div>
    );
};

Offers.defaultProps = staticOffers;
export default React.memo(Offers, (prevProp, nextProp) => _.isEqual(prevProp, nextProp));
