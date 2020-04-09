// import React, { lazy } from 'react'

// /* Component */
// import Base from './Base'
// import Skeleton from '../components/base_component/Skeleton/Skeleton'

// const Videojs = lazy(() => import('../components/base_component/Video/video'))

// const Heading = lazy(() => import('../components/base_component/Heading/Heading'))
// const HeadingText = lazy(() => import('../components/base_component/Heading/HeadingText'))
// const HeadingTextList = lazy(() => import('../components/base_component/Heading/HeadingTextList'))

// const CarouselText = lazy(() => import('../components/base_component/Carousel/CarouselText'))
// const CarouselCardText = lazy(() => import('../components/base_component/Carousel/CarouselCardText'))
// const CarouselThree = lazy(() => import('../components/base_component/Carousel/CarouselThree'))

// const CardThree = lazy(() => import('../components/base_component/Card/CardImage/CardImageThree/CardThree'))
// const CardTextImage = lazy(() => import('../components/base_component/Card/CardTextImage/CardTextImage'))
// const CardTextImageSmall = lazy(() => import('../components/base_component/Card/CardTextImage/CardTextImageSmall'))

// const Tabs = lazy(() => import('../components/base_component/Tab/Tabs'))

// const Table = lazy(() => import('../components/base_component/Table'))



// const SliderAwesome = lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'))
// const TextLargeImageComponent = lazy(() => import('../components/TextLargeImageComponent'))
// const CarouselCardTextComponent = lazy(() => import('../components/CarouselCardTextComponent'))
// const TextTabComponent = lazy(() => import('../components/TextTabComponent'))
// const DeviderComponent = lazy(() => import('../components/DeviderComponent'))
// const CardTextImageComponent = lazy(() => import('../components/CardTextImageComponent'))
// const SingleButtonComponent = lazy(() => import('../components/SingleButtonComponent'))
// const CardTextImageSmallComponent = lazy(() => import('../components/CardTextImageSmallComponent'))

// class Home extends Base {
//     render() {
//         return (
//             <div id="home">
//                 <SliderAwesome />

//                 <TextLargeImageComponent />

//                 <CarouselCardTextComponent />

//                 <TextTabComponent />

//                 <CardTextImageComponent reverse />

//                 <DeviderComponent />

//                 <CardTextImageComponent />

//                 <CardTextImageComponent reverse />

//                 <DeviderComponent caption="The Destinations" />

//                 <CardTextImageSmallComponent />

//                 <CardTextImageSmallComponent reverse />

//                 <SingleButtonComponent buttonName="read more STORIES" />


                
//                 {/* <section>
//                     <div className="flex justify-center py-16 border border-solid border-black">
//                         <div>
//                             <Heading />
//                         </div>
//                     </div>
//                 </section>

//                 <section>
//                     <div className="flex justify-center py-16 border border-solid border-black">
//                         <HeadingText />
//                     </div>
//                 </section>

//                 <section>
//                     <div className="flex justify-center py-16 border border-solid border-black">
//                         <HeadingTextList />
//                     </div>
//                 </section>

//                 <section>
//                     <div className="flex justify-center py-16 border border-solid border-black">
//                         <CarouselText />
//                     </div>
//                 </section>
                
//                 <section>
//                     <div className="flex justify-center h-auto py-40 border border-solid border-black">
//                         <CarouselCardText className="border border-solid border-black" />
//                     </div>
//                 </section>

//                 <section>
//                     <div className="flex justify-center h-auto py-16 border border-solid border-black">
//                         <CarouselThree />
//                     </div>
//                 </section>


//                 <section>
//                     <div className="flex justify-center h-auto py-16 border border-solid border-black">
//                         <CardThree />
//                     </div>
//                 </section>

//                 <section>
//                     <div className="flex justify-center py-16 border border-solid border-black">
//                         <CardTextImage />
//                     </div>
//                 </section>

//                 <section>
//                     <div className="flex justify-center py-16 border border-solid border-black">
//                         <CardTextImageSmall />
//                     </div>
//                 </section>
                
//                 <section>
//                     <div className="flex justify-center py-16 border border-solid border-black">
//                         <Tabs>
//                             <div label="Tabs 1">
//                                 <CardTextImageSmall caption={false} heading="Tabs 1" />
//                             </div>
//                             <div label="Tabs 2">
//                                 <CardTextImageSmall caption={false} heading="Tabs 2" />
//                             </div>
//                         </Tabs>
//                     </div>
//                 </section>

//                 <section>
//                     <div className="flex justify-center py-16 border border-solid border-black">
//                         <Table />
//                     </div>
//                 </section>
//                 <section>
//                     <div className="container mx-auto px-4 py-16">
//                         <Skeleton width="300px" height="100px" />
//                         <Skeleton circle width="300px" height="100px" />
//                     </div>
//                 </section>
//                 <section>
//                     <div className="container mx-auto px-4 py-16">
//                         <Videojs />
//                     </div>
//                 </section> */}
//             </div>
//         )
//     }
// }

// export default Home
import React, { lazy, Component } from 'react'

/** Image */
import ImgTabCarousel from '../assets/img/home/carousel-tab/1.png'

/* Component */
import Skeleton from '../components/base_component/Skeleton/Skeleton'
const Videojs = lazy(() => import('../components/base_component/Video/video'))

const Heading = lazy(() => import('../components/base_component/Heading/Heading'))
const HeadingText = lazy(() => import('../components/base_component/Heading/HeadingText'))
const HeadingTextList = lazy(() => import('../components/base_component/Heading/HeadingTextList'))

const CarouselText = lazy(() => import('../components/base_component/Carousel/CarouselText'))
const CarouselCardText = lazy(() => import('../components/base_component/Carousel/CarouselCardText'))
const CarouselThree = lazy(() => import('../components/base_component/Carousel/CarouselThree/index'))
const CarouselTabText = lazy(() => import('../components/base_component/Carousel/CarouselTabText/index'))

const CardThree = lazy(() => import('../components/base_component/Card/CardImage/CardImageThree/CardThree'))
const CardTextImage = lazy(() => import('../components/base_component/Card/CardTextImage/CardTextImage'))
const CardTextImageSmall = lazy(() => import('../components/base_component/Card/CardTextImage/CardTextImageSmall'))

const Tabs = lazy(() => import('../components/base_component/Tab/Tabs'))

const Table = lazy(() => import('../components/base_component/Table'))


class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div id="home">
                
                <section>
                    <div className="container mx-auto py-16 border border-solid border-black">
                        <Heading />
                    </div>
                </section>

                <section>
                    <div className="container mx-auto py-16 border border-solid border-black">
                        <HeadingText />
                    </div>
                </section>

                <section>
                    <div className="container mx-auto py-16 border border-solid border-black">
                        <HeadingTextList />
                    </div>
                </section>

                <section>
                    <div className="container mx-auto py-16 border border-solid border-black">
                        <CarouselText />
                    </div>
                </section>
                
                <section>
                    <div className="container mx-auto h-auto py-40 border border-solid border-black">
                        <CarouselCardText />
                    </div>
                </section>

                <section>
                    <div className="container mx-auto h-auto py-16 border border-solid border-black">
                        <CarouselThree />
                    </div>
                </section>


                <section>
                    <div className="container mx-auto h-auto py-16 border border-solid border-black">
                        <CardThree />
                    </div>
                </section>

                <section>
                    <div className="container mx-auto py-16 border border-solid border-black">
                        <CardTextImage />
                    </div>
                </section>

                <section>
                    <div className="container mx-auto py-16 border border-solid border-black">
                        <CardTextImageSmall />
                    </div>
                </section>
                
                <section>
                    <div className="container mx-auto py-16 border border-solid border-black">
                        <Tabs>
                            <div label="Tabs 1">
                                <CardTextImageSmall caption={false} heading="Tabs 1" />
                            </div>
                            <div label="Tabs 2">
                                <CardTextImageSmall caption={false} heading="Tabs 2" />
                            </div>
                        </Tabs>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto py-16 border border-solid border-black">
                        <Tabs>
                            <div label="Main">
                                <CarouselTabText store={[{
                                        id: 1,
                                        image: ImgTabCarousel,
                                        text: "Tab Main Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. ",
                                    }, { id: 2, image: ImgTabCarousel, text: "Tab Main"}]} 
                                />
                            </div>
                            <div label="Upper">
                                <CarouselTabText store={[{
                                        id: 1,
                                        image: ImgTabCarousel,
                                        text: "Tab Upper Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. ",
                                    }, { id: 2, image: ImgTabCarousel, text: "Tab Upper"}]} 
                                />
                            </div>
                            <div label="Lower">
                                <CarouselTabText store={[{
                                        id: 1,
                                        image: ImgTabCarousel,
                                        text: "Tab Lower Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. ",
                                    }, { id: 2, image: ImgTabCarousel, text: "Tab Lower"}]} 
                                />
                            </div>
                        </Tabs>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto py-16 border border-solid border-black">
                        <Table />
                    </div>
                </section>
                <section>
                    <div className="container mx-auto px-4 py-16">
                        <Skeleton width="300px" height="100px" />
                        <Skeleton circle width="300px" height="100px" />
                    </div>
                </section>
                <section>
                    <div className="container mx-auto px-4 py-16">
                        <Videojs />
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
