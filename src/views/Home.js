import React, { lazy } from 'react'

/* Component */
import Base from './Base'

const Heading = lazy(() => import('../components/base_component/Heading/Heading'))
const HeadingText = lazy(() => import('../components/base_component/Heading/HeadingText'))
const HeadingTextList = lazy(() => import('../components/base_component/Heading/HeadingTextList'))

const CarouselText = lazy(() => import('../components/base_component/Carousel/CarouselText'))
const CarouselCardText = lazy(() => import('../components/base_component/Carousel/CarouselCardText'))
const CarouselThree = lazy(() => import('../components/base_component/Carousel/CarouselThree'))

const CardThree = lazy(() => import('../components/base_component/Card/CardImage/CardImageThree/CardThree'))
const CardTextImage = lazy(() => import('../components/base_component/Card/CardTextImage/CardTextImage'))
const CardTextImageSmall = lazy(() => import('../components/base_component/Card/CardTextImage/CardTextImageSmall'))

const Tabs = lazy(() => import('../components/base_component/Tab/Tabs'))

const Table = lazy(() => import('../components/base_component/Table'))


class Home extends Base {
    render() {
        return (
            <div id="home">

                <section>
                    <div className="flex justify-center py-16 border border-solid border-black">
                        <div>
                            <Heading />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex justify-center py-16 border border-solid border-black">
                        <HeadingText />
                    </div>
                </section>

                <section>
                    <div className="flex justify-center py-16 border border-solid border-black">
                        <HeadingTextList />
                    </div>
                </section>

                <section>
                    <div className="flex justify-center py-16 border border-solid border-black">
                        <CarouselText />
                    </div>
                </section>
                
                <section>
                    <div className="flex justify-center h-auto py-16 border border-solid border-black">
                        <CarouselCardText />
                    </div>
                </section>

                <section>
                    <div className="flex justify-center h-auto py-16 border border-solid border-black">
                        <CarouselThree />
                    </div>
                </section>


                <section>
                    <div className="flex justify-center h-auto py-16 border border-solid border-black">
                        <CardThree />
                    </div>
                </section>

                <section>
                    <div className="flex justify-center py-16 border border-solid border-black">
                        <CardTextImage />
                    </div>
                </section>

                <section>
                    <div className="flex justify-center py-16 border border-solid border-black">
                        <CardTextImageSmall />
                    </div>
                </section>
                
                <section>
                    <div className="flex justify-center py-16 border border-solid border-black">
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
                    <div className="flex justify-center py-16 border border-solid border-black">
                        <Table />
                    </div>
                </section>

                <section>
                    <div className="flex justify-center py-16 border border-solid border-black">
                        <Table />
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
