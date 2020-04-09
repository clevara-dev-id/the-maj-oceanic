import React, { lazy } from 'react'

const CarouselCardText = lazy(() => import('./base_component/Carousel/CarouselCardText'))

const CarouselCardTextComponent = props => {
    return(
        <>
            <div className="container px-4 mx-auto py-32 carousel-card-text-component">
                <CarouselCardText {...props} />
            </div>
        </>
    )
}
export default CarouselCardTextComponent