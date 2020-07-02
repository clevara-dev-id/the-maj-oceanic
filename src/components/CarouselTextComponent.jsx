import React, { lazy } from 'react'

const CarouselText = lazy(()=>import('./base_component/Carousel/CarouselText/'))

const CarouselTextComponent = props => {
    return(
        <div className="container mx-auto px-4 py-32">
            <CarouselText {...props} />
        </div>
    )
}
export default CarouselTextComponent