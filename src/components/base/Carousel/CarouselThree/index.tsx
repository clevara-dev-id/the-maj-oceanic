import * as React from 'react';
import PropTypes from 'prop-types';
import Slider, { Settings, CustomArrowProps } from 'react-slick';
import _ from 'lodash';
import './style.scss'

import CardItem, { CardItemProps, CardItemDataProps } from '../../Card/CardImage/CardImageThree/CardItem';
import { ButtonProps } from '../../Button/Button';

export type CarouselThreeItem = CardItemDataProps & {
    id?: React.ReactText,
    linkTo?: string,
}

export type CarouselThreeProps = ButtonProps & {
    containerClassName?: string,
    captionClassName?: string,
    /**
     * ### Example
     * ```js
     * [{
     *   id: 0, // string or number
     *   caption: null, // optional
     *   heading: 'Heading 1' //optional,
     *   text: 'Text 1', // optional,
     *   list: string[],
     *   image: 'storage/aimdafsadf.png'
     * }]
     * ```
     */
    store: Array<CarouselThreeItem>,
    isStaticImage?: boolean,
    
};

/**
 * Carousel Three
 * 
 * ## Usage
 * ```js
 * <CarouselThree
 *    containerClassName="w-full"
 *    store={[{
 *        id: 0,
 *        caption: null,
 *        heading: 'Heading 1',
 *        text: 'Text 1',
 *        list: null,
 *        image: 'https://www.goole.com/image/awefasd.png',
 *    }]}
 * />
 * ```
 * 
 * ### props
 * @param containerClassName string
 * @param center boolean
 */
const CarouselThree: React.FC<CarouselThreeProps> = (props): JSX.Element => {
    const carousel = React.useRef<any>(null);
    const [source, setSource] = React.useState<CarouselThreeItem[] | null>(null);
    React.useLayoutEffect(() => {
        if (_.isEqual(source, props.store) == false) {
            setSource(props.store);
        };
    }, [props.store]);

    /** 
     * Card Item / Slide Item
     */
    const MemoSlideItem = React.useMemo( 
        () => (params: CarouselThreeItem, index: number): JSX.Element => {
            return (
                <CardItem 
                    key={params.id || index}
                    image={params.image}
                    caption={params.caption}
                    heading={params.heading}
                    text={params.text}
                    containerClassName={`p-1`}
                    captionClassName={props.captionClassName}
                    headingClassName="text-xl"
                    buttonTitle={params.buttonTitle!}
                    isStaticImage={props.isStaticImage}
                    mode={props.mode || "outline"}
                    to={params.linkTo || props.to || "#"}
                />
            )
        },
    [props.store]);
    // <div className="lg:"></div>

    type SlickArrow = CustomArrowProps & { children?: React.ReactNode };
    const SlickArrow = React.useMemo<(params?: SlickArrow) => JSX.Element>(
        () => (params) => <button {...params} />,
    []);

    const Setting: Settings = {
        dots: true,
        infinite: false,
        lazyLoad: "ondemand",
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: SlickArrow(),
        prevArrow: SlickArrow(),
        customPaging: (index): JSX.Element => <div className="dots" />,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                arrows: false
            }
        },{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }],
    };

    return (
        <div id="carousel-three" className={`${props.containerClassName} max-w-container-2 relative mx-auto `}>

            <Slider
                {...Setting}
                className="px-6 xl:px-0 lg:px-0 md:px-4 max-w-4xl mx-auto"
                ref={carousel}
            >
                {source && _.map(source, MemoSlideItem)}
            </Slider>
        </div>
    );
};

export default CarouselThree;
