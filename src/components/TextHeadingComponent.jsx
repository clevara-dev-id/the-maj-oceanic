import React, { lazy } from 'react';
const HeadingText = lazy(() => import('./base/Heading/HeadingText'));

const TextHeadingComponent = props => {
    const _renderItem = (data, index) => (
        <HeadingText key={data.id || index} {...data} />
    );

    return (
        <div className="container px-4 mx-auto pt-32 pb-0 heading-text-component">
            {props.properties.map(_renderItem)}
        </div>
    );
};

export default TextHeadingComponent;