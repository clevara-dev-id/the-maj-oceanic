import * as React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './style.scss';

import Img from '../../../../assets/img/home/card-text-image/1-croped.png';
import { BaseUrlImage } from '../../../../helper/axios';

const Button = React.lazy(() => import('../../Button'));
const HeadingText = React.lazy(() => import('../../Heading/HeadingText'));

export type CardTextImageProps = {
    reverse?: boolean,
    isStaticImage?: boolean,
    onClick?: () => void,

    containerClassName?: string,
    textClassName?: string,

    caption?: string,
    heading: string,
    images: string,
    text?: string,
    list?: Array<string>,
    buttonTitle?: string,
};

const CardTextImage: React.FC<CardTextImageProps> = (props): JSX.Element => {
    const ImageUri =  props.isStaticImage 
        ?  props.images
        :  `${BaseUrlImage}/${props.images.replace(/\\/g, "/")}`;

    return (
        <div className="flex flex-wrap card-text-image">
            {!props.reverse
                ? First()
                : Second()
            }
        </div>
    );
    
    function First() {
        return (
            <React.Fragment>
                <div className="w-full lg:w-2/4 bg-no-repeat bg-cover mb-5 max-h-full h-100 lg:order-none order-first"
                    style={{ backgroundImage: `url${ImageUri}` }}
                />
                
                <HeadingText
                    containerClassName="w-full lg:w-2/4 pl-6 self-center"
                    caption={props.caption}
                    heading={props.heading}
                    text={props.text}
                    list={props.list}
                    textClassName={`mb-8 ${props.textClassName}`}
                >
                    <Button
                        small
                        ghost
                        onClick={props.onClick}>
                            {props.buttonTitle} 
                    </Button>
                </HeadingText>
            </React.Fragment>
        );
    };

    function Second() {
        return (
            <React.Fragment>
                <HeadingText 
                    containerClassName="w-full lg:w-2/4 pr-6 self-center"
                    caption={props.caption} 
                    heading={props.heading}
                    text={props.text}
                    list={props.list}
                    textClassName="mb-8"
                >
                    <Button
                        small
                        ghost
                        onClick={props.onClick}>
                            {props.buttonTitle} 
                    </Button>
                </HeadingText>
                <div className="w-full lg:w-2/4 bg-no-repeat bg-cover mb-5 max-h-full h-100 lg:order-none order-first" 
                    style={{backgroundImage: `url(${ImageUri})`}}
                />
            </React.Fragment>
        )
    };
};

export default React.memo(
    CardTextImage,
    (prev, next) => _.isEqual(prev, next)
);
