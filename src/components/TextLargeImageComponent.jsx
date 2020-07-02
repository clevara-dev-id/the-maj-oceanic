import React, { lazy, Fragment } from 'react';

const LargeImage = lazy(() => import('./base_component/LargeImage/LargeImage'));
const HeadingText = lazy(() => import('./base_component/Heading/HeadingText'));

const TextLargeImageComponent = props => {
    
    const _renderItemHeadText = data => (
        <HeadingText key={data.id} {...data} />
    );

    const _renderItemLargeImg = data => (
        <LargeImage key={data.id} {...data} />
    );

    return (
        <Fragment>
            <div className="container mx-auto px-4 py-32">
                <div className="mb-20" >
                    {props.properties.map(_renderItemHeadText)}
                </div>
                <div>
                    {props.properties.map(_renderItemLargeImg)}
                </div>
            </div>
        </Fragment>
    );
};

export default TextLargeImageComponent;