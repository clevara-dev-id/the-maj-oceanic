import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Devider = props => {
    return(
            <h1 className={props.position === 'center' ? 'text-center devider' : props.position === 'right devider' ? 'text-right' : 'text-left devider'} >
                {props.caption}
            </h1>
    );
};

Devider.propTypes = {
    position: PropTypes.string,
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

Devider.defaultProps = {
    caption: "Occassion & Offers",
};

export default memo(Devider);