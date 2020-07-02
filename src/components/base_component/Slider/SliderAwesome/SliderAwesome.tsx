import * as React from 'react';
import PropTypes from "prop-types";
import _ from 'lodash';
import AwesomeSlider from 'react-awesome-slider';

import './style.scss'
import { BaseUrlImage } from '../../../../helper/axios';

const CoreStyles = require('react-awesome-slider/src/core/styles.scss');
const AnimationStyles = require('react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss');


/**
 * @property SliderItem
 * 
 * @param id number
 * 
 * @param images string
 * 
 * @param text string
 */
export interface SliderItem {
    id?: number;

    images: string;

    text: string;
};

/**
 * @property SliderAwesome
 * 
 * @param store Array<{ id: number; images: string; text: string; }>
 * 
 * @param isStaticImage boolean
 * 
 * @param imageClassName string
 * 
 * @param textClassName string
 */
export interface SliderProps {
    isStaticImage?: boolean;

    imageClassName?: string;

    textClassName?: string;

    store: Array<SliderItem>;
};

/**
 * @component SliderAwesome
 * 
 * @param store Array<{ id: number; images: string; text: string; }>
 * 
 * @param isStaticImage boolean
 * 
 * @param imageClassName string
 * 
 * @param textClassName string
 * 
 * @example
 * ```typescript
 * <SliderAwesome
 *    isStaticImage={true}
 *    store={[{
 *      id: 0,
 *      text: "string",
 *       image: require("../asset/images/1.png")
 *    }]
 *    
 * } />
 * 
 * <SliderAwesome 
 * ```
 */
const SliderAwesome: React.FC<SliderProps> = (props): JSX.Element => {
    const { isStaticImage, store, children } = props;

    return (
        <AwesomeSlider
            animation="foldOutAnimation"
            bullets={false}
            cssModule={[CoreStyles, AnimationStyles]}
            infinite={false}
            className="lg:h-screen awesome-slider aws-btn">
            {_.map(store, _renderItem)}
        </AwesomeSlider>
    );

    function _renderItem(data: SliderItem, index: number): JSX.Element {
        const images = isStaticImage
            ? data.images
            : `${process.env.REACT_APP_BASE_URL_IMAGE}/${data.images}` 
        return (
            <div key={index}
                data-src={images}
                className="z-10"
            >
                {data.text 
                    ? <h1 className="
                            text-white
                            text-center
                            max-w-2xl
                            capitalize"
                        >
                        {data.text}
                      </h1>
                    : null}
            </div>
        );
    };
};

export default React.memo(
    SliderAwesome,
    (prev, next) => _.isEqual(prev, next)
);