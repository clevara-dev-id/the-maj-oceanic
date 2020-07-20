import * as React from 'react';
import _ from 'lodash';
import Slider from 'react-slick';

import './style.scss';
const Button = React.lazy(() => import('../../Button/Button'));

/**
 * ## Carousel Card Text Item
 */
export type CarouselCardTextItem = {
    id?: React.ReactText,
    images: string,
    caption?: string,
    heading: string,
    text?: string,
    list?: Array<string>,
    linkTo?: string,
};

type T = {
    containerClassName?: string,
    containerArrow?: string,
    store: Array<CarouselCardTextItem>,
    onClick?: () => void,
    buttonTitle: string,
    isStaticImage?: boolean,
    className?: {
        cardClassName?: string,
        imageClassName?: string,
    },
    buttonClassName?: string,
    prevButtonClassName?: string,
    nextButtonClassName?: string,
};

/**
 * Carousel Card Text
 * 
 * ### Usage
 * ```js
 *  <CarouselCardText
 *      containerClassName="relative max-w-container-2 mx-auto p-0"
 *      store={[{
 *          id: 0,
 *          caption: 'presidential suite 1',
 *          heading: 'Zheng He',
 *          text: 'Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.',
 *          list: [
 *              'Lorem ipsum dolor sit amet',
 *              'Laboris lar aliquip',
 *              'Lorem ipsum dolor sit amet',
 *              'Laboris lar aliquip',
            ],
            images: require('../assets/img/CarouselCard/1.png')
        }]}        
        isStaticImage{true}
    />
 * ```
 */
const CarouselCardText: React.FC<T> = (props): JSX.Element => {
    const carousel = React.useRef<any>(null);
    const [localStore, setLocalStore] = React.useState<Array<CarouselCardTextItem>>([])
    const [indexActive, setIndexActive] = React.useState<number>(0);

    React.useLayoutEffect(() => {
        if (!_.isEqual(localStore, props.store)) {
            setLocalStore(props.store);
        };
    }, [props.store]);

    /** 
     * Image memo
     */
    const ImageContain = React.useMemo(() => 
        (image: string, index: number) => <img key={index} src={image} className="w-full" alt="carousel-card-text-image"/>
    ,[]);

    /**
     * Render Slide Item
     */
    function _renderSlideItem(data: CarouselCardTextItem, index: number): JSX.Element {
        const Images: string = props.isStaticImage ? data.images : `${process.env.REACT_APP_BASE_URL_IMAGE}/${data.images}`;

        return ImageContain(Images, index)
    };

    /** 
     * Render Card Item
     */
    const _onButtonClick = React.useCallback(() => alert("push to location"), []);
    function _renderCardItem(data: CarouselCardTextItem, index: number): JSX.Element | null {
        if (indexActive === index) {
            return <CardTextItem key={index} {...data} linkTo={data.linkTo} buttonTitle={props.buttonTitle} onButtonClick={_onButtonClick} />
        };

        return null;
    };

    /** 
     * Prev and Next Button Action
     */
    const _prev = React.useCallback(function() { carousel.current.slickPrev() }, []);
    const _next = React.useCallback(function() { carousel.current.slickNext() }, []);
    const MemoButtonSlick = React.useMemo<(params: ButtonSlickProps) => JSX.Element>(
        () => (params) => (
            <ButtonSlick {...params} />
        ),
    []);

    return (
        <div className={`carousel-card-text-component ${props.containerClassName}`}>
        <div className="slide-item focus:outline-none flex lg:flex-no-wrap flex-wrap">
            <div className="w-full lg:w-2/3 md:w-9/12">
                <Slider 
                    lazyLoad="progressive"
                    dots={true}
                    // fade={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    arrows={false}
                    ref={carousel}
                    dotsClass="slick-dots center"
                    useCSS={true}
                    customPaging={i => <div 
                        className="dots mt-6 rounded-full w-3 h-3 bg-dot-100 opacity-25 hover:bg-primary-300 hover:opacity-100" 
                    />}
                    afterChange={(currentSlide: number) => setIndexActive(currentSlide)}>
                    {!_.isEmpty(localStore) && _.map(localStore, _renderSlideItem)}
                </Slider>

                <div className={`absolute hidden xl:inline lg:inline md:inline arrows-container bottom-0 left-0 ml-5 ${props.containerArrow}`}>
                    {MemoButtonSlick({
                        mode: 'prev',
                        children: <i className="fas fa-angle-left text-base"></i>,
                        onClick: _prev,
                        buttonClassName: `${props.buttonClassName} ${props.prevButtonClassName}`,
                    })}
                    {MemoButtonSlick({
                        mode: 'next',
                        children: <i className="fas fa-angle-right text-base"></i>,
                        onClick: _next,
                        buttonClassName: `${props.buttonClassName} ${props.nextButtonClassName}`,
                    })}
                </div>
            </div>
        </div>

            {props.children}
            {localStore && _.map(localStore, _renderCardItem)}
        </div>
    );
};

export default CarouselCardText;

interface CardTextItemProps extends CarouselCardTextItem {
    cardClassName?: string;
    onButtonClick?: () => void;
    buttonTitle: string;
    linkTo?: string,
};
/**
 * ## CardTextItem
 */
const CardTextItem: React.FC<CardTextItemProps> = (props): JSX.Element => {
    const ButtonTitle = React.useMemo(() => 
        <Button title={_.capitalize(props.buttonTitle)} mode="outline" to={props.linkTo || "#"} className="mt-6">
            {props.buttonTitle}
        </Button>
    ,[]);

    const _renderList = () => (
        <div className="mt-4">
            <ul className="list-disc pl-4">
                {_.map(props.list, (item: string, idx: number) => (
                    <li key={idx} className="py-1">
                        <p className="body-1 font-normal">
                            {item}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className={`card-text w-full max-w-md md:w-6/12 h-full sm:h-full md:h-auto lg:h-full xl:h-full bg-white shadow-xl z-20 flex xl:absolute lg:absolute md:absolute mx-auto xl:mx-0 lg:mx-0 md:mx-0 top-0 mt-12 right-0 px-8 py-8 select-none ${props.cardClassName}`}>
            <div className="h-full text-left">
                <h6 title={props.caption} className="primary whitespace-no-wrap mb-3 leading-7 tracking-caption2">
                    {props.caption}
                </h6>
                <h1 title={props.heading} className="leading-7 whitespace-normal tracking-wide">
                    {props.heading}
                </h1>
                <p title={props.text} className="body-1 whitespace-pre-line font-light mt-10">
                    {props.text}
                </p>

                {props.list ? _renderList() : null}
                {ButtonTitle}
            </div>
        </div>
    );
};

type ButtonSlickProps = {
    mode: "prev" | "next",
    onClick?: () => void,
    children?: React.ReactNode,
    buttonClassName?: string | null,
};
/**
 * ## Button Slick
 */
const ButtonSlick = React.memo((props: ButtonSlickProps): JSX.Element => {
        let style = props.mode === "prev" ? "w-8 h-8 relative left-0 rounded-full arrows mr-3" : "w-8 h-8 relative left-0 rounded-full arrows";

        return (
            <button title={_.capitalize(props.mode)} className={`${style} whitespace-no-wrap bg-white text-primary-300 hover:bg-primary-300 hover:text-white ${props.buttonClassName}`} onClick={props.onClick}>
                {props.children}
            </button>
        );
    }, 
    (prevProps, nextProps) => _.isEqual(prevProps, nextProps)
);
