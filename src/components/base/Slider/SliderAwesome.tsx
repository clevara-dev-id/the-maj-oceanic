import * as React from 'react';
import _ from 'lodash';
import AwesomeSlider from 'react-awesome-slider';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../../../helper/ErrorFallback';
import useIntersection from '../../../helper/useInterSection';
import { useDispatch } from 'react-redux';
import { navbarGotFire } from '../../../redux/animates/reducers';
import { BaseUrlImage } from '../../../helper/axios';
import './style.scss'
const CoreStyles = require('react-awesome-slider/src/core/styles.scss');
const AnimationStyles = require('react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss');

export type SliderItem = {
    id?: React.ReactText;
    images: string;
    text: string;
};

export type SliderProps = {
    /**
     * @default false
     */
    isStaticImage?: boolean;
    /**
     * @default null
     */
    imageClassName?: string;
    /**
     * @default null
     */
    textClassName?: string;
    /**
     * Data item slider where it is required with propType:
     * ```js
     * [{
     *    id?: string | number | undefined,
     *    images: string, //url to image location
     *    text: string,
     * }]
     * ```
     */
    store: Array<SliderItem>;
};
/**
 * ## Slider Awesome
 *
 * @param {SliderProps} props `
 * {
 *      isStaticImage: boolean,
 *      imageClassName?: string | undefined,
 *      textClassName?: string | undefined,
 *      store: [{
 *          id?: string | number | undefined,
 *          images: string,
 *          text: string,
 *      }]
 * }`
 * @returns {JSX.Element} JSX Elemet from module AwesomeSlider
 */
const SliderAwesome: React.FC<SliderProps> = ({
    isStaticImage=false,
    imageClassName=null,
    textClassName=null,
    store,
}): JSX.Element => {

    const ref = React.useRef(null);
    const navChange = useIntersection(ref, '-100px');
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(navbarGotFire(navChange));
    }, [navChange]);

    /**
     * Render Slide Item
     */
    const MemoRenderItem = React.useMemo<(params: SliderItem, index: number) => JSX.Element>(
        () => (params, index) => {
            const ImageUri: string = 
                isStaticImage 
                    ?   params.images
                    :   `${BaseUrlImage}/${params.images}`;

                    // mt-12 xl:mt-48 lg:mt-48 md:mt-32
            return (
                <div key={index} className={`z-10 mt-16 lg:mt-56 container-text-class ${imageClassName}`} data-src={ImageUri}>
                    {params.text 
                    ?       <h1 ref={ref} className={`text-white tmo__head_slider text-center capitalize whitespace-pre-line px-4 xl:px-0 lg:px-0 leading-10 ${textClassName}`}>
                                {params.text}
                            </h1>
                    : null}
                </div>
            )
        },
    [store]);

    return (
        <AwesomeSlider
            animation="foldOutAnimation"
            bullets={false}
            cssModule={[CoreStyles, AnimationStyles]}
            infinite={false}
            className="h-auto container xl:h-screen mx-auto awesome-slider aws-btn select-none">
            {_.map(store, MemoRenderItem)}
        </AwesomeSlider>
    );
};

const SliderAwesomeWithErrorBoundary = withErrorBoundary(SliderAwesome, {FallbackComponent: ErrorFallback});
export default React.memo(SliderAwesomeWithErrorBoundary, (prev, next) => _.isEqual(prev, next));