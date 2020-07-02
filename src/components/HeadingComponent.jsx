import React, {lazy} from 'react';

const Heading = lazy(()=>import('./base_component/Heading/Heading'));

const HeadingComponent = props => {
    return props.properties.map((data, i) => {
        return(
            <div key={i} className="container mx-auto px-4 pt-10">
                <Heading key={data.id || i} {...data} />
            </div>
        );
    });
};

export default HeadingComponent;