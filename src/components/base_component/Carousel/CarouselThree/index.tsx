import * as React from 'react';
import PropTypes from 'prop-types';
import Slider, { Settings } from 'react-slick';
import _ from 'lodash';
import './style.scss'

import CardItem, { CardItemProps, CardItemDataProps } from '../../Card/CardImage/CardImageThree/CardItem';
import { ButtonProps } from '../../Button/Button';
const Setting: Settings = {
    dots: true,
    lazyLoad: "ondemand",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "30px",
    responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            arrows: false
        }
    },{
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false
        }
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
    }
    // {
    //     breakpoint: 426,
    //     settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         centerMode: true,
    //         centerPadding: "0px",
    //         infinite: true,
    //         dots: true,
    //         arrows: false
    //     }
    // }
    ],
};

export type CarouselThreeItem = CardItemDataProps & {
    id: React.ReactText,
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
     * Card Item
     */
    const Item = React.useMemo( 
        () => (params: CarouselThreeItem, index: number): JSX.Element => (
            <CardItem 
                key={params.id || index}
                image={params.image}
                caption={params.caption}
                heading={params.heading}
                text={params.text}
                containerClassName="px-6"
                captionClassName={props.captionClassName}
                headingClassName="text-xl"
                buttonTitle={params.buttonTitle!}
                isStaticImage={props.isStaticImage}
                mode={props.mode || "outline"}
                to={params.linkTo || props.to || "#"}
            />
        )
    , [props.store]);

    /**
     * Button Prev & Next
     */
    const _Prev = React.useCallback(() => {
        carousel.current.slickPrev();
    }, []);
    const _Next = React.useCallback(() => {
        carousel.current.slickNext();
    }, []);
    const ButtonPrev = React.useMemo(() => (
        <ButtonSlick mode="prev" onClick={_Prev}>
            <i className="fas fa-angle-left text-base"></i>
        </ButtonSlick>
    ), []);
    const ButtonNext = React.useMemo(() => (
        <ButtonSlick mode="next" onClick={_Next}>
            <i className="fas fa-angle-right text-base"></i>
        </ButtonSlick>
    ), []);

    return (
        <div id="carousel-three" className={props.containerClassName}>
            {ButtonPrev}
            {ButtonNext}

            <Slider
                {...Setting}
                customPaging={() => <div className="dots" />}
                ref={carousel}
            >
                {source && _.map(source, Item)}
            </Slider>
        </div>
    );
};

export default CarouselThree;


/**
 * Button Slick
 */
const ButtonSlick = React.memo(({
    mode,
    onClick,
    children
}: {
    mode: "prev" | "next",
    onClick?: () => void,
    children?: React.ReactNode,
}): JSX.Element => {
    let style = mode == "prev"
        ? "arrow-left mr-3" : "arrow-right";
    return (
        <button onClick={onClick} className={`absolute w-8 h-8 rounded-full arrows ${style}`}>
            {children}
        </button>
    );
});
