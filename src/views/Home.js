import React, { lazy } from 'react'

import Img1 from '../assets/img/home/1.svg'

/* Component */
import Base from './Base'
import Voyages from '../components/Voyages'
import Tabs from '../components/base_component/Tab/Tabs'
const CardTextSecondary = lazy(() => import('../components/base_component/Card/CardText/CardTextSecondary'))
const SliderCardImage = lazy(() => import('../components/base_component/Slider/SliderCardImage/SliderCardImage'))
const CardThree = lazy(() => import('../components/base_component/Card/CardImage/CardImageThree/CardThree'))
const CardImageLeftRight = lazy(() => import('../components/base_component/Card/CardImage/CardImageLeftRight'))

class Home extends Base {
    render() {
        return (
            <div id="home">
                <section>
                    <div className="flex flex-col items-center justify-between h-auto py-24 border border-solid border-black">
                        <CardTextSecondary
                            className="text-center mb-16 border border-solid border-black"
                            containerWidth="730px"
                            caption="the vessel"
                            title="Lorem Dulur sit Amit"
                            text="Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit."
                        />
                        <img src={Img1} width="1109px" height="100%"  alt="img1" />
                    </div>
                </section>

                <section>
                    <div className="flex justify-center h-auto py-40 border border-solid border-black">
                        <SliderCardImage className="border border-solid border-black" />
                    </div>
                </section>

                <section>
                    <div className="flex justify-center h-auto py-16 border border-solid border-black">
                        <CardThree className="border border-solid border-black" />
                    </div>
                </section>

                <section>
                    <div className="flex justify-center py-20 border border-solid border-black">
                        <CardImageLeftRight className="border border-solid border-black"/>
                    </div>
                </section>

                <section>
                    <div className="flex justify-center py-20 border border-solid border-black">
                        <Voyages className="border border-solid border-black" />
                    </div>
                </section>

                <section>
                    <div className="flex justify-center py-20 border border-solid border-black">
                        <CardImageLeftRight className="border border-solid border-black" caption="Dining" reversed />
                    </div>
                </section>

                <section>
                    <div className="flex justify-center h-auto py-40 border border-solid border-black">
                        <SliderCardImage className="border border-solid border-black" />
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
