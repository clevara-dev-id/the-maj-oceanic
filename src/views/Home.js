import React, { lazy } from 'react'

import Img1 from '../assets/img/home/1.svg'

/* Component */
import Base from './Base'
import CardThree from '../components/base_component/Card/CardImage/CardThree'
const CardTextSecondary = lazy(() => import('../components/base_component/Card/CardText/CardTextSecondary'))
const SliderCardImage = lazy(() => import('../components/base_component/Slider/SliderCardImage/SliderCardImage'))

class Home extends Base {
    render() {
        return (
            <div id="home">
                <section>
                    <div className="flex flex-col items-center justify-between h-auto py-24">
                        <CardTextSecondary
                            className="text-center mb-16"
                            containerWidth="730px"
                            caption="the vessel"
                            title="Lorem Dulur sit Amit"
                            text="Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit."
                        />
                        <img src={Img1} width="1109px" height="100%"  alt="img1" />
                    </div>
                </section>

                <section>
                    <div className="flex justify-center h-auto py-40">
                        <SliderCardImage
                        />
                    </div>
                </section>

                <section>
                    <div className="flex justify-center">
                        <CardThree 
                            border
                        />
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
