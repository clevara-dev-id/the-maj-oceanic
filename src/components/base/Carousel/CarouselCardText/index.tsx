import * as React from 'react';
import _ from 'lodash';
import Slider, { Settings } from 'react-slick';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../../../../helper/ErrorFallback';
import { HeadingTextItem } from '../../Heading/HeadingText';
import { BaseUrlImage } from '../../../../helper/axios';
import './style.css';

/** Component */
const Button        = React.lazy(() => import('../../Button/Button'));
const ButtonSlick   = React.lazy(() => import('../../Button/ButtonSlick'));
const HeadingText   = React.lazy(() => import('../../Heading/HeadingText'));

export type CarouselCardTextItem = {
    id?: React.ReactText,
    image: string,
    caption?: string,
    heading: string,
    text?: string,
    list?: Array<string>,
    linkTo?: string,
};

type CarouselCardTextItemProps = {
    containerClassName?: string,
    containerArrow?: string,
    cardClassName?: string,
    captionClassName?: string,
    headingClassName?: string,
    textClassName?: string,
    listContainerClassName?: string,
    slickButtonClassName?: string,

    store: Array<CarouselCardTextItem>,
    onClick?: () => void,
    buttonTitle: string,
    isStaticImage?: boolean,

    buttonClassName?: string,
    prevButtonClassName?: string,
    nextButtonClassName?: string,
};

/**
 * ## Carousel Card Text
 *
 * @param {CarouselCardTextItemProps} props
 * @see `CarouselCardTextItemProps`
 * @returns {JSX.Element}
 *
 * ### Usage
 * ```js
 *  <CarouselCardText
 *      containerClassName="relative max-w-container-2 mx-auto p-0"
 *      store={[
 *          {
 *              id: 0,
 *              caption: 'presidential suite 1',
 *              heading: 'Zheng He',
 *              text: 'Laboris dolore laborum sit',
 *              list: ['Lorem ipsum dolor sit amet', 'Laboris lar aliquip'],
 *              image: require('../assets/img/CarouselCard/1.png')
 *          },
 *      ]}
 *      isStaticImage{true}
    />
 * ```
 */
const CarouselCardText: React.FC<CarouselCardTextItemProps> = (props): JSX.Element => {
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
        (image: string, index: number) =>
            <img
                key={index}
                src={image}
                className="bg-cover bg-no-repeat" alt="carousel_card_text_image"
                loading="lazy"
            />
    ,[]);

    /** Memo Heading Text */
    const MemoHeadingText = React.useMemo<(params: HeadingTextItem & {linkTo?: string}, index: number) => JSX.Element>(
        () => (params, index) => (
            <HeadingText
                key={index}
                containerClassName={`xl:text-left lg:text-left md:text-left bg-white shadow-xl inline-block xl:absolute lg:absolute md:absolute top-0 right-0 select-none h-auto pb-10 ${props.cardClassName}`}
                captionClassName={props.captionClassName}
                headingClassName={props.headingClassName}
                textClassName={props.textClassName}
                listContainerClassName={props.listContainerClassName}
                {...params}
            >
                <Button title={props.buttonTitle} mode="outline" to={params.linkTo!} className={`${props.buttonClassName} mt-4`}>
                    {props.buttonTitle}
                </Button>
            </HeadingText>
        ),
    [])

    /**
     * Button Action
     */
    const _onClick = React.useCallback((callback) => { callback() }, []);

    /** MemoDots */
    const Dots = React.useMemo<(index: number) => JSX.Element>(
        () => (index) => (
            <div className="dots mt-6" />
        ),
    []);

    /** Setting Slider */
    const SettingSlider: Settings = {
        lazyLoad: "ondemand",
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        customPaging: Dots,
        afterChange: (current) => setIndexActive(current),
    }

    return (
        <div className={`tmo__container_component relative ${props.containerClassName}`}>
            <div className="slide-item focus:outline-none w-full lg:w-2/3 md:w-9/12 relative">
                    <Slider
                        {...SettingSlider}
                        ref={carousel}>
                        {!_.isEmpty(localStore) && _.map(localStore, (data, index) => {
                            const image: string = props.isStaticImage
                                ? data.image
                                : `${BaseUrlImage}/${data.image}`;
                            return ImageContain(image, index)
                        })}
                    </Slider>

                    <div className={`arrows_container ${props.containerArrow}`}>
                        <ButtonSlick
                            mode="prev"
                            onClick={() => _onClick(carousel.current.slickPrev)}
                            buttonClassName={`${props.slickButtonClassName} ${props.prevButtonClassName}`}
                        />
                        <ButtonSlick
                            mode="next"
                            onClick={() => _onClick(carousel.current.slickNext)}
                            buttonClassName={`${props.slickButtonClassName} ${props.nextButtonClassName}`}
                        />
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

CarouselCardText.defaultProps = {
    captionClassName: "text-primary-300"
}
const CarouselCardTextWithErrorBoundary = withErrorBoundary(CarouselCardText, {FallbackComponent: ErrorFallback});
export default React.memo(CarouselCardTextWithErrorBoundary, (prevProps, nextProps) => _.isEqual(prevProps, nextProps));

