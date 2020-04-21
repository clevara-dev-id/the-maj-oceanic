import React, { lazy } from 'react'
import ImgTabCarousel from '../assets/img/home/carousel-tab/1.png'
import Tabs from './base_component/Tab/Tabs'
import CarouselTabText from './base_component/Carousel/CarouselTabText'

const Tables = lazy(() => import('./base_component/Table'))


const SpesificationComponent = props => {
    return(
        <>
        <div className="bg-secondary-300">
            <div className="container mx-auto py-16">
            <Tabs>
                <div label="Main">
                    <CarouselTabText store={[{
                        id: 1,
                        image: ImgTabCarousel,
                        text: "Tab Main Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. ",
                    }, { id: 2, image: ImgTabCarousel, text: "Tab Main" }]}
                    />
                </div>
                <div label="Upper">
                    <CarouselTabText store={[{
                        id: 1,
                        image: ImgTabCarousel,
                        text: "Tab Upper Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. ",
                    }, { id: 2, image: ImgTabCarousel, text: "Tab Upper" }]}
                    />
                </div>
                <div label="Lower">
                    <CarouselTabText store={[{
                        id: 1,
                        image: ImgTabCarousel,
                        text: "Tab Lower Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. ",
                    }, { id: 2, image: ImgTabCarousel, text: "Tab Lower" }]}
                    />
                </div>
            </Tabs>
            </div>
        </div>
        <div className="container mx-auto px-4 py-16">
            <Tables />
        </div>
        </>
    )
}
export default SpesificationComponent