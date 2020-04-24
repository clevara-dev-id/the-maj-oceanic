import React, { lazy } from 'react';

const Tabs = lazy(() => import('./base_component/Tab/Tabs'));
const CardTextImageSmall = lazy(() => import('./base_component/Card/CardTextImage/CardTextImageSmall'));

const TextTabComponent = props => {
    const _renderItem = data => (
        <div key={data.id} label={data.heading}>
            <CardTextImageSmall {...data} />
        </div>
    );

    return (
        <div className="container px-4 mx-auto py-32 text-tabs-component">
            <Tabs>
                {props.properties.map(_renderItem)}
            </Tabs>
        </div>
    );
};

export default TextTabComponent;