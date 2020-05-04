import PropTypes from "prop-types";
import React, { Fragment, memo } from 'react';
import { BaseUrlImage } from '../../../helper/axios';

const LargeImage = props => {
    return (
        <Fragment>
            <img className="w-full h-auto" src={BaseUrlImage + props.images} alt={props.alt} />
        </Fragment>
    );
};

LargeImage.propTypes = {
  alt: PropTypes.string,
  images: PropTypes.object
};

LargeImage.defaultProps = {
    alt: "example",
};

export default memo(LargeImage);