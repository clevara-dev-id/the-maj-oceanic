import * as React from 'react';
import _ from 'lodash';
import Slider, { Settings } from 'react-slick'

import './style.scss'
import Img1 from '../../../../assets/img/home/carousel-text/1.png'
import Button from '../../Button/Button';
import { HeadingTextItem } from '../../Heading/HeadingText';

/** Components */
const HeadingText   = React.lazy(() => import('../../Heading/HeadingText'));

/** ## Carousel Text Item */
export type CarouselTextItem = HeadingTextItem & {
    id?: React.ReactText,
    image: string,
    linkTo?: string
};
export type CarouselTextProps = {
    containerClassName?: string,
    containerArrow?: string,
    isStaticImage?: boolean | null,
    reverse?: boolean | null,
    store: any[],
    bottonTitle?: string | null,
    mode?: "outline" | "contain",
};
/**
 * ## Carousel Text
 * 
 * ## Usage
 * ```js
 * <CarouselText
 *   bottonTitle="Discover"
 *   store={[{
 *        id: 1,
 *        image: require('./assets/1.png'),
 *        caption: "Cabin 1",
 *        heading: "Carousel Text 1",
 *        text: "Laboris esse culpa.",
 *        list: [
 *            "Lorem ipsum dolor sit amet",
 *            "Laboris lar aliquip",
 *            "Lorem ipsum dolor sit amet",
 *            "Laboris lar aliquip",
 *        ]
 *      }]}
        isStaticImage
    />
 *```
 */
const CarouselText: React.FC<CarouselTextProps> = (props): JSX.Element => {
    const [activeIndex, setActive] = React.useState<number>(0);
    const carousel = React.useRef<any>(null);
    const [source, setSource] = React.useState<any | null>(null);
    React.useLayoutEffect(() => {
        if (_.isEqual(source, props.store) == false) {
            setSource(props.store);
        }
    }, [props.store]);

    /**
     * Heading Text list
     */
    const HeadText = React.useMemo( 
        () => (params: CarouselTextItem) => (
            <React.Fragment>
                <HeadingText
                    caption={params.caption}
                    heading={params.heading}
                    text={params.text}
                    list={params.list}
                    headingClassName="mb-4 whitespace-no-wrap"
                    textClassName="mb-4"
                />
                {props.bottonTitle ? (
                    <Button className={`mx-6 xl:mx-0 lg:mx-0 md:mx-5 ${params.list ? "" : "mt-6"}`} mode={props.mode || "outline"} to={params.linkTo || "#"}>
                        {props.bottonTitle}
                    </Button>
                ) : null}
            </React.Fragment>
        ),
    [props.store]);

    /**
     * Data Item
     */
    const DataItem = React.useMemo( 
        () => (params: any, index: number) => {
            const ImgUri = props.isStaticImage ? params.image : `${process.env.REACT_APP_BASE_URL_IMAGE}/${params.image}`;
            return (
                <div key={index} className="">
                    <img src={ImgUri}
                        alt="image-data-text"
                        className="bg-no-repeat mx-auto xl:float-right lg:float-right md:float-right"
                        width="445px"
                        height="716px"
                    />
                </div>
            )
        },
    [props.store]);

    /** OnClick Prev / Next */
    const _Prev = React.useCallback<(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void>(
        (e) => {
            e.preventDefault();
            carousel.current.slickPrev();
        }, 
    []);
    const _Next = React.useCallback<(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void>(
        (e) => {
            e.preventDefault();
            carousel.current.slickNext();
        }, 
    []);

    /** Button Prev Next */
    const ArrowButton = React.useMemo<(params: ButtonSlickProps) => JSX.Element>(
        () => (params) => <ButtonSlick {...params} />,
    []);

    /** Custom Button */
    const Dots = React.useMemo<(index: number) => JSX.Element>(
        () => (index) => 
            <div className="dots mt-4 rounded-full w-3 h-3 bg-dot-100 opacity-25 hover:bg-primary-300 hover:opacity-100" />,
    []);

    const SettingSlider: Settings = {
        className: "max-w-md mx-auto",
        dots: true,
        lazyLoad: "ondemand",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        afterChange: (currentSlide) => setActive(currentSlide),
        customPaging: Dots,
    };
    
    let containerClass: string = 
        props.reverse 
            ? "flex-col-reverse xl:flex-row-reverse lg:flex-row-reverse md:flex-row-reverse" : "flex-col xl:flex-row lg:flex-row md:flex-row";
    let marginTop: string = 
        props.reverse
            ? "mb-16 xl:mb-0 lg:mb-0 md:mb-0" : "mt-6 xl:mt-0 lg:mt-0 md:mt-0"
    return (
        <div className={`carousel-text flex flex-wrap items-center relative max-w-container-2 mx-auto box-border focus:outline-none px-6 xl:px-0 lg:px-4 md:px-5 ${containerClass} ${props.containerClassName}`}>
            <div className={"select-none xl:text-left lg:text-left md:text-left pr-0 md:pr-4 mx-auto xl:mx-0 lg:mx-0 md:mx-0 w-screen xl:w-3/5 lg:w-3/5 md:w-1/2 max-w-md xl:max-w-full lg:max-w-full md:max-w-full"}>
                {source && _.map(source, (data, index: number) => {
                    if (activeIndex === index) {
                        return HeadText(data)
                        
                    }
                })}
            </div>

            <div className={`relative w-full xl:w-2/5 lg:w-2/5 md:w-1/2 ${marginTop}`}>
                <Slider
                    ref={carousel}
                    {...SettingSlider}
                >
                    {source && _.map(source, DataItem)}
                </Slider>

                <div className={`absolute hidden xl:inline lg:inline md:inline bottom-0 left-0 ${props.containerArrow}`}>
                    {ArrowButton({
                        mode: "prev",
                        children: <i className="fas fa-angle-left text-base"></i>,
                        onClick: _Prev,
                    })}
                    {ArrowButton({
                        mode: "next",
                        children: <i className="fas fa-angle-right text-base"></i>,
                        onClick: _Next,
                    })}
                </div>
            </div>
        </div>
    )
};

export default CarouselText

/**
 * Button Slick
 */
type ButtonSlickProps = {
    mode: "prev" | "next",
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    children?: React.ReactNode,
}
const ButtonSlick = React.memo(({
    mode,
    onClick,
    children
}: ButtonSlickProps): JSX.Element => {
    let style = mode == "prev"
        ? "arrow-left mr-3" : "arrow-right";
    return (
        <button onClick={onClick} className={` w-8 h-8 rounded-full arrows ${style}`}>
            {children}
        </button>
    );
});