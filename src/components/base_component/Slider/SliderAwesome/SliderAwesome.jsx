import PropTypes from "prop-types";
import React, { Fragment } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

import './style.scss'
import { BaseUrlImage } from '../../../../helper/axios';

const SliderAwesome = props => {
    const _renderItem = (data, index) => (
        <div key={index} data-src={BaseUrlImage + data.images} className="z-10" >
            {data.text?(
                <h1 className="text-white text-center max-w-2xl capitalize">{data.text}</h1>
            ):null}
        </div>
    );

    return (
        <Fragment>
            <AwesomeSlider
                animation="foldOutAnimation"
                bullets={false}
                cssModule={[CoreStyles, AnimationStyles]}
                infinite={false}
                className="lg:h-screen awesome-slider aws-btn">
                {props.properties.map(_renderItem)}
            </AwesomeSlider>
        </Fragment>
    );
};

SliderAwesome.propTypes = {
    properties: PropTypes.arrayOf(PropTypes.object),
}

export default SliderAwesome