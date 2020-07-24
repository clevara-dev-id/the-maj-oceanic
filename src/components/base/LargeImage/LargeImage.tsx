import * as React from 'react';
import _ from 'lodash';
import { BaseUrlImage } from '../../../helper/axios';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../../../helper/ErrorFallback';

export type LargeImageProps = {
    imageClassName?: string | null;
    imageStyle?: React.CSSProperties;
    isStaticImage?: boolean;
    images: string;
    alt?: string;
};

/**
 * ## LargeImage
 * large image is react class pure component
 * 
 * @param imageClassName string
 * @param imageStyle CSSProperties 
 * @param isStaticImage boolean 
 * @param images string 
 * @param alt string
 * 
 * ### Usage
 * ```js
 * <LargeImage
 *    isStaticImage
 *    images={images}
 *    imageClassName="max-w-container-2 max-h-large-image mx-auto mt-16"
 * />
 * ```
 */
class LargeImage extends React.PureComponent<LargeImageProps, {}> {
    static defaultProps = {
        images: require("../../../assets/img/header/4.png"),
        alt: "large-image"
    };

    render() {
        const { 
            imageClassName,
            imageStyle,
            isStaticImage,
            images,
            alt 
        } = this.props;
        return (
            <img draggable={false}
                className={`w-full h-auto ${imageClassName}`}
                style={imageStyle}
                src={isStaticImage ? images :  `${BaseUrlImage}/${images}`}
                alt={alt ? alt : "large-image"}
                loading="lazy"
            />
        )
    };
};

const LargeImageWithErrorBoundary = withErrorBoundary(LargeImage, {FallbackComponent: ErrorFallback});
export default React.memo(LargeImageWithErrorBoundary, (prevProps, nextProps) => _.isEqual(prevProps, nextProps));
