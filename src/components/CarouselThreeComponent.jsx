import React, {lazy} from 'react';

const CarouselThree = lazy(()=>import('./base_component/Carousel/CarouselThree/'));

const CarouselThreeComponent = props => {
    return(
        <div className="container mx-auto px-4 py-32">
            <CarouselThree {...props} />
        </div>
    );
};

export default CarouselThreeComponent;