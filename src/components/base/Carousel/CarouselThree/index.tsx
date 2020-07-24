import * as React from 'react';
import Slider, { Settings, CustomArrowProps } from 'react-slick';
import _ from 'lodash';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../../../../helper/ErrorFallback';
import { CardItemDataProps } from '../../Card/CardImage/CardImageThree/CardItem';
import { ButtonProps } from '../../Button/Button';
import './style.scss'

/** Components */
const CardItem = React.lazy(() => import('../../Card/CardImage/CardImageThree/CardItem'));

export type CarouselThreeItem = CardItemDataProps & {
    id?: React.ReactText,
    linkTo?: string,
};
export type CarouselThreeProps = {
    containerClassName?: string,
    captionClassName?: string,
    store: Array<CarouselThreeItem>,
    isStaticImage?: boolean,
    buttonMode?: "outline" | "contain" | "custom",
};

/**
 * ## Carousel Three
 * 
 * @param {CarouselThreeProps} props
 * @see `CarouselThreeProps`
 * @returns {JSX.Element} JSX Element
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
                    mode={props.buttonMode || "outline"}
                    to={params.linkTo || "#"}
                />
            )
        },
    [props.store]);

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
                className="px-6 xl:px-0 lg:px-0 md:px-4 max-w-full xl:max-w-full lg:max-w-4xl mx-auto"
                ref={carousel}
            >
                {source && _.map(source, MemoSlideItem)}
            </Slider>
        </div>
    );
};

const CarouselThreeWithErrorBoundary = withErrorBoundary(CarouselThree, {FallbackComponent: ErrorFallback});
export default React.memo(CarouselThreeWithErrorBoundary, (prevProps, nextProps) => _.isEqual(prevProps, nextProps));
