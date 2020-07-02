import React, { lazy, Fragment } from 'react';

const CardTextImage = lazy(() => import('./base_component/Card/CardTextImage/CardTextImage'));

const CardTextImageComponent = props => {
    const _renderItem = data => (
        <CardTextImage key={data.id} {...data} />
    );

    return (
        <Fragment>
            <div className="container mx-auto px-4 py-32">
                {props.properties.map(_renderItem)}
            </div>
        </Fragment>
    );
};

export default CardTextImageComponent;