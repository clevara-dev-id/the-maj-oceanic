import * as React from 'react';
import _ from 'lodash';
import Slider from 'react-slick';

import './style.scss';
import Img1 from '../../../../assets/img/header/3.png';
const Button = React.lazy(() => import('../../Button/Button'));

/**
 * ## ItemSlide
 * 
 * @param id ` number `
 * @param images ` string `
 * @param caption ` string ` (optional)
 * @param heading  ` string `
 * @param text ` string ` (optional)
 * @param list ` Array<string> `
 */
export type CarouselCardTextItem = {
    id: number;
    images: string;
    caption?: string;
    heading: string;
    text?: string;
    list?: Array<string>;
};

type T = {
    containerClassName?: string;
    store: Array<CarouselCardTextItem>;
    onClick?: () => void;
    buttonTitle?: string;
    isStaticImage?: boolean;
    className?: {
        cardClassName?: string;
        imageClassName?: string;
    }
};

/**
 * ## CarouselCardText
 * 
 * @param store ` Array<{ id: number; image: string; caption?: string; heading: string; text?: string; list?: Array<string>}> `
 * @param onClick ` () => void ` (optional);
 * @param buttonTitle ` string ` (optional);
 * @param isStaticImage ` boolean ` (optional);
 * @param cardClassName ` string ` (optional)
 */

const CarouselCardText: React.FC<T> = props => {
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
        (image: string) => <img src={image} className="w-full" alt="carousel-card-text-image"/>
    ,[]);

    /**
     * Render Slide Item
     */
    function _renderSlideItem(data: CarouselCardTextItem, index: number): JSX.Element {
        const Images: string = props.isStaticImage ? data.images : `${process.env.REACT_APP_BASE_URL_IMAGE}/${data.images}`;

        return (
            <div id="slide-item" key={index} className="focus:outline-none flex lg:flex-no-wrap flex-wrap">
                    <div className="w-full lg:w-2/3 md:w-3/4 carousel-card-text-component">
                        {ImageContain(Images)}

                        <div className="absolute hidden xl:inline lg:inline md:inline arrows-container bottom-0 left-0 mb-5 ml-5">
                            <ButtonSlick mode="prev" onClick={_prev}>
                                <i className="fas fa-angle-left text-base"></i>
                            </ButtonSlick>
                            
                            <ButtonSlick mode="next" onClick={_next}>
                                <i className="fas fa-angle-right text-base"></i>
                            </ButtonSlick>
                        </div>
                    </div>
            </div>
        );
    };

    /** 
     * Render Card Item
     */
    const _onButtonClick = React.useCallback(() => alert("push to location"), []);
    function _renderCardItem(data: CarouselCardTextItem, index: number): JSX.Element | null {
        if (indexActive === index) {
            return <CardTextItem key={index} {...data} buttonTitle="discover" onButtonClick={_onButtonClick} />
        };

        return null;
    };

    /** 
     * Prev and Next Button Action
     */
    const _prev = React.useCallback(function() { carousel.current.slickPrev() }, []);
    const _next = React.useCallback(function() { carousel.current.slickNext() }, []);

    return (
        <div id="carousel-card-text-component" className={`${props.containerClassName}`}>
            <Slider 
                lazyLoad="progressive"
                dots={true}
                fade={true}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={false}
                ref={carousel}
                dotsClass="slick-dots center"
                useCSS={true}
                customPaging={i => <div 
                    className="dots hidden xl:inline-flex lg:inline-flex md:inline-flex rounded-full w-3 h-3 bg-dot-100 opacity-25 hover:bg-primary-300 hover:opacity-100" 
                />}
                afterChange={(currentSlide: number) => setIndexActive(currentSlide)}>
                {!_.isEmpty(localStore) && _.map(localStore, _renderSlideItem)}
            </Slider>

            {props.children}
            {localStore && _.map(localStore, _renderCardItem)}
        </div>
    );
};


interface CardTextItemProps extends CarouselCardTextItem {
    cardClassName?: string;
    onButtonClick?: () => void;
    buttonTitle: string;
};
/**
 * CardTextItem
 * 
 * @param id ` number `
 * @param images ` string `
 * @param caption ` string ` (optional)
 * @param heading  ` string `
 * @param text ` string ` (optional)
 * @param list ` Array<string> `
 * @param cardClassName `string`
 * @param onButtonClick `() => void`
 * @param buttonTitle `string`
 */
const CardTextItem: React.FC<CardTextItemProps> = (props): JSX.Element => {
    const { 
        caption, heading,
        text, list, onButtonClick, 
        buttonTitle, cardClassName,
    } = props;
    
    const ButtonTitle = React.useMemo(() => 
        <Button mode="outline" to="#" className="mt-12">
            {buttonTitle || "discover"}
        </Button>
    ,[])

    return (
        <div id="card-text" 
            className={`container w-full h-full sm:h-full md:h-auto lg:h-full xl:h-full xl:w-5/12 lg:w-5/12 md:w-6/12 bg-white shadow-xl z-20 flex xl:absolute lg:absolute md:absolute top-0 my-20 right-0 px-8 py-8 md:mr-5 ${cardClassName}`}>
            <div className="h-full text-left">
                <h6 className="primary mb-3 leading-7 tracking-caption2">{caption}</h6>
                <h1 className="leading-7 tracking-wide"> {heading} </h1>

                <p className="body-1 font-light mt-10">
                    {text}
                </p>

                {list
                    ?
                        <div className="mt-4">
                            <ul>
                                {_.map(list, (item: string, idx: number) => (
                                    <li key={idx} className="py-2">
                                        <p className="body-1 font-normal">
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    : null
                }

                {ButtonTitle}
            </div>
        </div>
    );
};

const ButtonSlick = React.memo(({
    mode,
    onClick,
    children
}:{
    mode: "prev" | "next";
    onClick?: () => void;
    children?: React.ReactNode;
}): 
    JSX.Element => {

    let style = mode === "prev"
        ? "w-8 h-8 relative left-0 rounded-full arrows mr-3"
        : "w-8 h-8 relative left-0 rounded-full arrows";

    return (
        <button className={`${style} bg-white text-primary-300 hover:bg-primary-300 hover:text-white`} onClick={onClick}>
            {children}
        </button>
    )
}, (prevProps, nextProps) => _.isEqual(prevProps, nextProps));

CarouselCardText.defaultProps = {
    store: [{
        id: 1,
        images: Img1,
        caption: "spesification 1",
        heading: "Lorem Ipsum 1",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
        // list: ["Lorem ipsum dolor sit amet", "Laboris lar aliquip", "Lorem ipsum dolor sit amet", "Laboris lar aliquip"]
    }, {
        id: 2,
        images: Img1,
        caption: "spesification 2",
        heading: "Lorem Ipsum 2",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
        list: ["Lorem ipsum dolor sit amet", "Laboris lar aliquip", "Lorem ipsum dolor sit amet", "Laboris lar aliquip"]
    }],
    onClick: () => {
        alert("clicked")
    }
};

export default CarouselCardText;
