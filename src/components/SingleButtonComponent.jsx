import PropTypes from "prop-types";
import React, { lazy } from 'react';
const Button = lazy(() => import('./base_component/Button'));

const SingleButtonComponent = props => {
    return(
        <div className="container mx-auto pt-10 pb-40 text-center">
            <Button className="mx-auto uppercase" large outline onClick={props.onClick}>{props.buttonName}</Button>
        </div>
    );
};

SingleButtonComponent.propTypes = {
  buttonName: PropTypes.string,
  onClick: PropTypes.func
};

SingleButtonComponent.defaultProps = {
    buttonName: "Read More",
    onClick: () => {
        alert("clicked")
    }
};

export default SingleButtonComponent;