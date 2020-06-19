import * as React from 'react';
import _ from 'lodash';
import { BaseUrlImage } from '../../../helper/axios';

/**
 * @component LargeImage
 * 
 * @property
 * 
 * properties with "?" is optional
 * ```
 * imageClassName?: string;
 * 
 * imageStyle?: CSSProperties;
 * 
 * // set to true if the data is static
 * isStaticImage?: boolean;
 * 
 * images: string;
 * // if the alt not set, 
 * // default alt is the name of component it self
 * alt?: string;
 * ```
 */
export type LargeImageProps = {
    imageClassName?: string | null;

    imageStyle?: React.CSSProperties;

    isStaticImage?: boolean;

    images: string;

    alt?: string;
};

/**
 * @component LargeImage
 * 
 * @param imageClassName string
 * 
 * @param imageStyle CSSProperties
 * 
 * @param isStaticImage boolean
 * 
 * @param images string
 * 
 * @param alt string
 */
export default class LargeImage extends React.PureComponent<LargeImageProps, {}> {
    static defaultProps = defaultProps;
    render() {
        const { 
            imageClassName,
            imageStyle,
            isStaticImage,
            images,
            alt 
        } = this.props;
        return <img 
            className={`w-full h-auto ${imageClassName}`}
            style={imageStyle}
            src={isStaticImage ? images : BaseUrlImage + images}
            alt={alt ? alt : "large-image"}
        />
    };
};

var defaultProps: LargeImageProps = {
    images: require("../../../assets/img/header/4.png"),
    alt: "large-image"
};
