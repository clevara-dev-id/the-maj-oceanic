import React, { lazy, Component } from 'react'

/** Image */
import ImgActivity from '../assets/img/home/carousel-card-text/1.png'
import ImgTabCarousel from '../assets/img/home/carousel-tab/1.png'

/* Component */
import Skeleton from '../components/base_component/Skeleton/Skeleton'
const Videojs = lazy(() => import('../components/base_component/Video/video'))

const Heading = lazy(() => import('../components/base_component/Heading/Heading'))
const HeadingText = lazy(() => import('../components/base_component/Heading/HeadingText'))
const HeadingTextList = lazy(() => import('../components/base_component/Heading/HeadingTextList'))

const CarouselText = lazy(() => import('../components/base_component/Carousel/CarouselText'))
const CarouselCardText = lazy(() => import('../components/base_component/Carousel/CarouselCardText/index'))
const CarouselCardTextSecondary = lazy(() => import('../components/base_component/Carousel/CarouselCardText/Secondary'))
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
                        <HeadingText heading="lorem dulur sit amet" headingClassName="capitalize" center />
                    </div>
                </section>
                
                <section>
                    <div className="container mx-auto h-auto py-40 border border-solid border-black">
                        <CarouselCardText small outline />
                    </div>
                </section>

                <section>
                    <div className="container mx-auto h-auto py-16 border border-solid border-black">
                        <HeadingText containerClassName="mb-16" center caption="The Cabin" heading="Lorem ipsum dolor" text={false} />
                        <CardThree  />
                    </div>
                </section>

                <section>
                    <div className="container mx-auto py-16 border border-solid border-black">
                        <CardTextImage headingClassName="capitalize" heading="lorem ipsum dolor" buttonTitle="learn more" />
                    </div>
                </section>
                
                <section>
                    <div className="container mx-auto py-16 border border-solid border-black">
                        <HeadingText containerClassName="mb-24" center caption={false} heading="voyages" headingClassName="uppercase" />
                        <Tabs>
                            <div label="Flores Sea">
                                <CardTextImageSmall caption={false} heading="Explore Flores Sea" />
                            </div>
                            <div label="Raja Ampat">
                                <CardTextImageSmall caption={false} heading="Explore Raja Ampat" />
                            </div>
                        </Tabs>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto py-16 border border-solid border-black">
                        <CardTextImage reverse caption="dining" headingClassName="capitalize" heading="lorem ipsum dolor" buttonTitle="learn more" />
                    </div>
                </section>
                
                <section>
                    <div className="container mx-auto h-auto py-40 border border-solid border-black">
                        <HeadingText center containerClassName="mb-16" caption="activities" heading="lorem ipsum dolor sit amet" />
                        <CarouselCardTextSecondary
                            store={[{
                                id: 1,
                                image: ImgActivity,
                                heading: "Wellness",
                                text: "Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.",
                            },{
                                id: 2,
                                image: ImgActivity,
                                heading: "Wellness 2",
                                text: "Esse tempor qui enim ut aute cupidatat in dolor magna irure voluptate consequat Lorem. Occaecat ad adipisicing enim Lorem minim ea elit exercitation dolor et ad consequat aliqua.",
                            }]}
                        />
                    </div>
                </section>

                <section>
                    <div className="container mx-auto py-16 border border-solid border-black">
                        <CardTextImage 
                            caption="occasions" 
                            heading="exclusive saving" 
                            headingClassName="capitalize"
                            text="Book in advance and enjoy great savings. It’s the perfect excuse for an unforgettable adventure."
                            list={["Luxuri accomodation", "Booking conditions apply"]} 
                            buttonTitle="learn more" 
                        />
                    </div>
                </section>

                <section>
                    <div className="container mx-auto py-16 border border-solid border-black">
                        <CarouselText />
                    </div>
                </section>

                <section>
                    <div className="container mx-auto py-16 border border-solid border-black">
                        <HeadingTextList />
                    </div>
                </section>

                <section>
                    <div className="container mx-auto h-auto py-16 border border-solid border-black">
                        <CarouselThree />
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
