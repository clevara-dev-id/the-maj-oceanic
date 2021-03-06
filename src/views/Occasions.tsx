import * as React from 'react';
import _ from 'lodash';
import staticOccasions, { OccasionsProps } from '../static/occasions';
import { CardTextImageItem } from '../components/base/Card/CardTextImage/CardTextImage';

/** Components */
const SliderAwesome     = React.lazy(() => import('../components/base/Slider/SliderAwesome'));
const HeadingText       = React.lazy(() => import('../components/base/Heading/HeadingText'));
const LargeImage        = React.lazy(() => import('../components/base/LargeImage/LargeImage'));
const CardTextImage     = React.lazy(() => import('../components/base/Card/CardTextImage/CardTextImage'));

const Occasions: React.FC<OccasionsProps> = (props): JSX.Element => {
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
            <div className="tmo__container_component">
                <HeadingText
                    heading={props.heading}
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
     * Card Text Image (Right/Left)
     */
    const MemoCardTextImage = React.useMemo<(params: CardTextImageItem, index: number) => JSX.Element>(
        () => (params, index) => {
            const is_reverse = index % 2 ? false : true;
            return (
                <section className={"py-20"}>
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
                {MemoSliderAwesome}
            </section>

            <section className={"py-20 "}>
                {MemoHeadingTextLargeImage}
            </section>

            {_.map(props.card_text_image, MemoCardTextImage)}
        </div>
    );
};

Occasions.defaultProps = staticOccasions;
export default React.memo(Occasions, (prevProp, nextProp) => _.isEqual(prevProp, nextProp));
