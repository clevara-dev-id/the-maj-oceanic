import * as React from 'react';
import _ from 'lodash';
import Slider, { Settings } from 'react-slick'
import { withErrorBoundary } from 'react-error-boundary';
import { HeadingTextItem } from '../../Heading/HeadingText';
import ErrorFallback from '../../../../helper/ErrorFallback';
import './style.scss'

/** Components */
const HeadingText   = React.lazy(() => import('../../Heading/HeadingText'));
const Button        = React.lazy(() => import('../../Button/Button'));
const ButtonSlick   = React.lazy(() => import('../../Button/ButtonSlick'));

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
 * @param {CarouselTextProps} props
 * @see `CarouselTextProps`
 * @returns {JSX.Element} JSX Element
 * 
 * ## Usage
 * ```js
 * <CarouselText
 *   store={[
 *      {
 *        id: 1,
 *        image: require('./assets/1.png'),
 *        caption: "Cabin 1",
 *        heading: "Carousel Text 1",
 *        text: "Laboris esse culpa.",
 *        list: ["Lorem ipsum dolor sit amet", "Laboris lar aliquip"]
 *      },
 *   ]}
 *   bottonTitle="Discover"
 *   isStaticImage
 * />
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
                    textClassName="pr-8"
                    list={params.list}
                    headingClassName="mb-4 mt-3 whitespace-no-wrap"
                    listContainerClassName="mt-4"
                />
                {props.bottonTitle ? (
                    <Button className={`mx-6 xl:mx-0 lg:mx-0 md:mx-5 mt-5`} mode={props.mode || "outline"} to={params.linkTo || "#"}>
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
                        loading="lazy"
                    />
                </div>
            )
        },
    [props.store]);

    /** 
     * Button Action
     */
    const _onClick = React.useCallback((callback) => { callback() }, []);

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
            ? "mb-12 xl:mb-0 lg:mb-0 md:mb-0" : "mt-12 xl:mt-0 lg:mt-0 md:mt-0";

    return (
        <div className={`carousel-text tmo__container_component flex flex-wrap items-center relative focus:outline-none ${containerClass} ${props.containerClassName}`}>
            <div className={"select-none xl:text-left lg:text-left md:text-left mx-auto xl:mx-0 lg:mx-0 md:mx-0 w-full xl:w-3/5 lg:w-3/5 md:w-1/2 max-w-md xl:max-w-full lg:max-w-full md:max-w-full"}>
                {source && _.map(source, (data, index: number) => {
                    if (activeIndex === index) {
                        return HeadText(data)
                        
                    }
                })}
            </div>

            <div className={`relative w-full xl:w-2/5 lg:w-2/5 md:w-1/2  ${marginTop}`}>
                <Slider
                    ref={carousel}
                    {...SettingSlider}
                >
                    {source && _.map(source, DataItem)}
                </Slider>

                <div className={`arrows_container ${props.containerArrow}`}>
                    <ButtonSlick 
                        mode="prev"
                        onClick={() => _onClick(carousel.current.slickPrev)}
                    />
                    <ButtonSlick 
                        mode="next"
                        onClick={() => _onClick(carousel.current.slickNext)}
                    />
                </div>
            </div>
        </div>
    )
};

const CarouselTextWithErrorBoundary = withErrorBoundary(CarouselText, {FallbackComponent: ErrorFallback});
export default React.memo(CarouselTextWithErrorBoundary, (prevProps, nextProps) => _.isEqual(prevProps, nextProps));