import * as React from 'react';
import _ from 'lodash';
import Slider from 'react-slick';

import './style.scss';
import './style.css';
import { BaseUrlImage } from '../../../../helper/axios';
import Img1 from '../../../../assets/img/header/3.png';
const Button = React.lazy(() => import('../../Button'));

/**
 * @property ItemSlide
 * 
 * @param id ` number `
 * 
 * @param images ` string `
 * 
 * @param caption ` string ` (optional)
 * 
 * @param heading  ` string `
 * 
 * @param text ` string ` (optional)
 * 
 * @param list ` Array<string> `
 */
export interface ItemSlide {
    id: number;

    images: string;

    caption?: string;

    heading: string;

    text?: string;

    list?: Array<string>;
};

type T = {
    containerClassName?: string;

    store: Array<ItemSlide>;
 
    onClick?: () => void;

    buttonTitle?: string;

    isStaticImage?: boolean;

    className?: {
        cardClassName?: string;
        imageClassName?: string;
    }
};

/**
 * @property CarouselCardText
 * 
 * @param store ` Array<{ id: number; image: string; caption?: string; heading: string; text?: string; list?: Array<string>}> `
 * 
 * @param onClick ` () => void ` (optional);
 * 
 * @param buttonTitle ` string ` (optional);
 * 
 * @param isStaticImage ` boolean ` (optional);
 * 
 * @param cardClassName ` string ` (optional)
 */

const CarouselCardText: React.FC<T> = props => {
    const carousel = React.useRef<any>(null);
    const [localStore, setLocalStore] = React.useState<Array<ItemSlide>>([])
    const [idxActive, setIdxActive] = React.useState<number>(0);

    React.useLayoutEffect(() => {
        if (!_.isEqual(localStore, props.store)) {
            setLocalStore(props.store);
        };
    }, [props.store]);

    return (
        <div id="carousel-card-text-component" className={props.containerClassName}>
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
                afterChange={(currentSlide: number) => setIdxActive(currentSlide)}
                customPaging={(i: any) => 
                    <div 
                        id="dot"
                        className="rounded-full"
                    />
                }>
                    
                {localStore.length && _.map(
                    localStore, (data, index) => (
                        <CardTextItem 
                            key={index}
                            isStaticImage={true}
                            {...data}
                            {...props.className}
                            onClickNext={next}
                            onClickPrev={prev}
                            onClick={() => alert("clicked")}
                            buttonTitle="Learn More"
                        />
                    )
                )}
            </Slider>
        </div>
    )

    function prev(): void {
        carousel.current.slickPrev();
    };

    function next(): void {
        carousel.current.slickNext();
    };
};

/**
 * @property CardTextItem
 * 
 * @param cardClassName ` string ` (optional)
 * 
 * @param imageClassName ` string ` (optional)
 * 
 * @param key ` string | number `
 * 
 * @param isStaticImage ` boolean ` (optional)
 * 
 * @param onClickPrev ` () => void ` // button slider left
 * 
 * @param onClickNext ` () => void ` // button slider right
 * 
 * @param onClick ` () => void ` button card
 * 
 * @param buttonTitle ` string `
 * 
 * @description properties extends ItemSlide
 * 
 * @param id ` number `
 * 
 * @param images ` string `
 * 
 * @param caption ` string ` (optional)
 * block
 * 
 * @param list ` string ` (optional)
 */
interface CardTextItemProps extends ItemSlide {
    key?: number | string;
    
    isStaticImage?: boolean;

    cardClassName?: string;

    imageClassName?: string;

    onClickPrev?: () => void;

    onClickNext?: () => void;

    onClick?: () => void;

    buttonTitle: string;
};

const CardTextItem: React.FC<CardTextItemProps> = (props): JSX.Element => {
    const { 
        images, caption, heading,
        text, list, isStaticImage,
        key, onClickPrev, onClickNext,
        onClick, buttonTitle,
        cardClassName, imageClassName
    } = props;

    let Image = isStaticImage ? images : BaseUrlImage + images;

    const ImageSlide = React.useMemo(() => (
        <div className="w-full lg:w-2/3 carousel-card-text-component">
            <img src={Image} className={`w-full ${imageClassName}`} alt="img-slick" />

            <div className="absolute arrows-container">
                <ButtonSlick mode="prev" onClick={onClickPrev}>
                    <i className="fas fa-angle-left text-base"></i>
                </ButtonSlick>
                
                <ButtonSlick mode="next" onClick={onClickNext}>
                    <i className="fas fa-angle-right text-base"></i>
                </ButtonSlick>
            </div>
        </div>
    ), [images]);

    const CardSlide = React.useMemo(() => (
        <div id="card-text" className={`container mx-auto w-full xl:w-5/12 lg:w-5/12 bg-white px-6 py-16 mt-20 ml-min-12 shadow-xl z-20 xl:left-0 lg:left-0 ${cardClassName}`}
            style={{
                maxWidth: 445,
                maxHeight: 506
            }}>
            <div className="h-full">
                <h6 className="primary mb-3">{caption}</h6>
                <h1 className="leading-7"> {heading} </h1>

                <p className="my-8 body-1"> {/* 29px 0 25px */}
                    {text}
                </p>

                {list
                    ? (
                        <div className="mb-8"> {/* 0 0 39px */}
                            <ul style={{ listStyleType: "circle", padding: "0 20px"}}>
                                {_.map(list, (item: string, idx: number) => (
                                    <li key={idx} className="body-1">{item}</li>
                                ))}
                            </ul>
                        </div>
                    )
                    : null
                }
                <Button small outline onClick={onClick}>
                    {buttonTitle}
                </Button>
            </div>
        </div>
    ), [caption, heading, list]);

    return (
        <div id="slide-item" key={key} className="focus:outline-none flex lg:flex-no-wrap flex-wrap">
            {ImageSlide}
            {CardSlide}
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
        <button className={style} onClick={onClick}>
            {children}
        </button>
    )
});

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
