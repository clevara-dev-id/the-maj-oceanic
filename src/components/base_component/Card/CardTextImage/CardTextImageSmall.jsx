import React, { lazy, Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './style.scss';
import Img1 from '../../../../assets/img/home/card-text-image/1-small.png';
import { BaseUrlImage } from '../../../../helper/axios';

const HeadingText = lazy(() => import('../../Heading/HeadingText'));
// const Button = lazy(() => import('../../Button'))


const CardTextImageSmall = props => {
    const Image = BaseUrlImage + props.images.replace(/\\/g, "/");

    return (
        <div className={`card-text-image-small flex flex-wrap max-w-container-2 ${props.containerClassName}`}>
        {!props.reverse? (
            <Fragment>
                <div className="order-first w-full lg:w-2/4">
                    <div 
                        className="bg-no-repeat bg-cover" 
                        style={{
                            backgroundImage: `url(${Image})`,
                            maxHeight: "400px",
                            width: props.imageWidth, 
                            height: props.imageHeight
                        }} 
                    />
                </div>
                <HeadingText 
                    containerClassName="w-full lg:w-2/4 pl-6 self-center"
                    caption={props.caption} 
                    heading={props.heading}
                    text={props.text}
                    textClassName="mb-8"
                >
                    <Link className="primary-link text-sm uppercase" to={props.link} onClick={props.onClick}> {props.button_title} </Link>
                </HeadingText>
            </Fragment>
            ) : (
            <Fragment>
                <HeadingText 
                    containerClassName="w-full lg:w-2/4 pl-6 self-center"
                    caption={props.caption} 
                    heading={props.heading}
                    text={props.text}
                    textClassName="mb-8"
                >
                    <Link className="primary-link text-sm uppercase" to={props.link} onClick={props.onClick}> {props.button_title} </Link>
                </HeadingText>
                <div className="order-last w-full lg:w-2/4">
                    <div 
                        className="bg-no-repeat bg-cover" 
                        style={{
                            backgroundImage: `url(${Image})`,
                            maxHeight: "400px",
                            width: props.imageWidth, 
                            height: props.imageHeight
                        }} 
                    />
                </div>
            </Fragment>
            )
        }
        </div>
    );
};

CardTextImageSmall.propTypes = {
    containerClassName: PropTypes.string,
    images: PropTypes.string.isRequired,
    imageWidth: PropTypes.string,
    imageHeight: PropTypes.string.isRequired,
    caption: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    button_title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

CardTextImageSmall.defaultProps = {
    images: Img1,
    imageWidth: "100%",
    imageHeight: "400px",
    caption: false,
    heading: "Card Text Image Small",
    text: "Sunt excepteur laborum reprehenderit duis sunt fugiat eu dolore. Laborum mollit nostrud quis proident esse cillum sint laboris in deserunt eu consectetur ad adipisicing. Mollit nulla in quis nisi elit occaecat eu dolore aliquip.",
    button_title: "Button Title",
    link:"#",
    onClick: () => {
        alert("clicked")
    }
}

export default memo(CardTextImageSmall)
