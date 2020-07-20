import React, { lazy } from 'react';

const Devider = lazy(() => import('./base/Heading/Devider'));

const DeviderComponent = props => {
    const _renderItem = data => (
        <Devider key={data.id} {...data} />
    );

    return(
        <div className="container px-4 mx-auto py-8">
            {props.properties.map(_renderItem)}
        </div>
    );
};

export default DeviderComponent;