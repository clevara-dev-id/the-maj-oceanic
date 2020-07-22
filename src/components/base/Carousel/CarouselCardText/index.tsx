import * as React from 'react';
import _ from 'lodash';
import Slider, { Settings } from 'react-slick';

import './style.scss';
import { HeadingText, HeadingTextItem } from '../../Heading/HeadingText';
const Button = React.lazy(() => import('../../Button/Button'));

/**
 * ## Carousel Card Text Item
 */
export type CarouselCardTextItem = {
    id?: React.ReactText,
    image: string,
    caption?: string,
    heading: string,
    text?: string,
    list?: Array<string>,
    linkTo?: string,
};

type T = {
    containerClassName?: string,
    containerArrow?: string,
    cardClassName?: string,
    captionClassName?: string | null,
    headingClassName?: string | null,
    textClassName?: string | null,
    listContainerClassName?: string | null,
    slickButtonClassName?: string | null,

    store: Array<CarouselCardTextItem>,
    onClick?: () => void,
    buttonTitle: string,
    isStaticImage?: boolean,

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
            image: require('../assets/img/CarouselCard/1.png')
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
        const image: string = props.isStaticImage ? data.image : `${process.env.REACT_APP_BASE_URL_IMAGE}/${data.image}`;

        return ImageContain(image, index)
    };

    /** Memo Heading Text */
    const MemoHeadingText = React.useMemo<(params: HeadingTextItem & {linkTo?: string}, index: number) => JSX.Element>(
        () => (params, index) => (
            <HeadingText
                key={index}
                containerClassName={`xl:text-left lg:text-left md:text-left bg-white shadow-xl inline-flex flex-col xl:absolute lg:absolute md:absolute top-0 right-0 select-none h-full pb-20 ${props.cardClassName}`}
                captionClassName={props.captionClassName}
                headingClassName={props.headingClassName}
                textClassName={props.textClassName}
                listContainerClassName={props.listContainerClassName}
                {...params}
            >
                <Button title={props.buttonTitle} mode="outline" to={params.linkTo!} className={props.buttonClassName}>
                    {props.buttonTitle}
                </Button>
            </HeadingText>
        ),
    [])

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

    /** MemoDots */
    const Dots = React.useMemo<(index: number) => JSX.Element>(
        () => (index) => (
            <div className="dots mt-6 rounded-full w-3 h-3 bg-dot-100 opacity-25 hover:bg-primary-300 hover:opacity-100" />
        ),
    []);

    /** Setting Slider */
    const SettingSlider: Settings = {
        lazyLoad: "progressive",
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        customPaging: Dots,
        afterChange: (current) => setIndexActive(current),
    }

    return (
        <div className={`carousel-card-text-component relative max-w-container-2 mx-auto px-6 xl:px-0 lg:px-4 md:px-5 ${props.containerClassName}`}>
            <div className="slide-item focus:outline-none flex lg:flex-no-wrap flex-wrap">
                <div className="w-full lg:w-2/3 md:w-9/12">
                    <Slider 
                        {...SettingSlider}
                        ref={carousel}>
                        {!_.isEmpty(localStore) && _.map(localStore, _renderSlideItem)}
                    </Slider>

                    <div className={`absolute hidden xl:inline lg:inline md:inline arrows-container bottom-0 left-0 ml-5 ${props.containerArrow}`}>
                        {MemoButtonSlick({
                            mode: 'prev',
                            children: <i className="fas fa-angle-left text-base"></i>,
                            onClick: _prev,
                            buttonClassName: `${props.slickButtonClassName} ${props.prevButtonClassName}`,
                        })}
                        {MemoButtonSlick({
                            mode: 'next',
                            children: <i className="fas fa-angle-right text-base"></i>,
                            onClick: _next,
                            buttonClassName: `${props.slickButtonClassName} ${props.nextButtonClassName}`,
                        })}
                    </div>
                </div>
            </div>

            {props.children}
            {localStore && _.map<CarouselCardTextItem, JSX.Element | null>(
                localStore, (data, index) => {
                    if (indexActive === index) 
                        return MemoHeadingText(data, index)
                    
                    return null;
                }
            )}
        </div>
    );
};

export default CarouselCardText;

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
