import React, { lazy, Fragment } from 'react';

const CardTextImageSmall = lazy(() => import('./base_component/Card/CardTextImage/CardTextImageSmall'));

const CardTextImageSmallComponent = props => {
    const _renderItem = data => (
        <CardTextImageSmall key={data.id} {...data} />
    );

    return (
        <Fragment>
            <div className="container mx-auto px-4 py-32">
                {props.properties.map(_renderItem)}
            </div>
        </Fragment>
    );
};

export default CardTextImageSmallComponent;