import * as React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './style.scss';

import Img from '../../../../assets/img/home/card-text-image/1-croped.png';
import { BaseUrlImage } from '../../../../helper/axios';

const Button = React.lazy(() => import('../../Button'));
const HeadingText = React.lazy(() => import('../../Heading/HeadingText'));

type T = {
    reverse?: boolean;

    isStaticImage?: boolean;

    containerClassName?: string;

    images: string;

    caption?: string;

    heading: string;

    text?: string;

    textClassName?: string;

    list?: Array<string>;

    onClick?: () => void;

    buttonTitle?: string;
};

const CardTextImage: React.FC<T> = props => {
    const { 
        isStaticImage,
        reverse,
        caption,
        heading,
        text,
        textClassName,
        list,
        images,
        buttonTitle,
        onClick
    } = props;

    const Image =  isStaticImage 
        ?  images
        :  BaseUrlImage + images.replace(/\\/g, "/");

    return (
        <div className="flex flex-wrap card-text-image">
            {!reverse
                ? First()
                : Second()
            }
        </div>
    );
    
    function First() {
        return (
            <React.Fragment>
                <div 
                    className="
                        w-full
                        lg:w-2/4
                        bg-no-repeat
                        bg-cover
                        mb-5
                        max-h-full
                        h-100
                        lg:order-none
                        order-first
                    "
                    style={{ backgroundImage: `url${Image}` }}
                />
                <HeadingText
                    containerClassName="
                        w-full
                        lg:w-2/4
                        pl-6
                        self-center
                    "
                    caption={caption}
                    heading={heading}
                    text={text}
                    list={list}
                    textClassName={`mb-8 ${textClassName}`}
                >
                    
                    <Button
                        small
                        ghost
                        onClick={onClick}>
                            {buttonTitle} 
                    </Button>
                </HeadingText>
            </React.Fragment>
        );
    };

    function Second() {
        return (
            <React.Fragment>
                <HeadingText 
                    containerClassName="
                        w-full
                        lg:w-2/4
                         pr-6
                        self-center
                    "
                    caption={caption} 
                    heading={heading}
                    text={text}
                    list={list}
                    textClassName="mb-8"
                >
                    <Button
                        small
                        ghost
                        onClick={onClick}>
                            {buttonTitle} 
                    </Button>
                </HeadingText>
                <div className="
                        w-full
                        lg:w-2/4
                        bg-no-repeat
                        bg-cover
                        mb-5
                        max-h-full
                        h-100
                        lg:order-none
                        order-first
                    " 
                    style={{backgroundImage: `url(${Image})`}}
                />
            </React.Fragment>
        )
    };
};

export default React.memo(
    CardTextImage,
    (prev, next) => _.isEqual(prev, next)
);
