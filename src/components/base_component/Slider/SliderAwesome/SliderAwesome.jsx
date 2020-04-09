import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

import './style.scss'

const SliderAwesome = props => {
    return (
        <>
            <AwesomeSlider
                animation="foldOutAnimation"
                bullets={false}
                cssModule={[CoreStyles, AnimationStyles]}
                infinite={false}
                className="h-screen awesome-slider aws-btn"
            >
                {props.properties.map((data,d) => {
                    return(
                        <div key={d} data-src={data.images} className="z-10" >
                            {data.text?(
                                <h1 className="text-5xl text-white text-center max-w-md capitalize">{data.text}</h1>
                            ):null}
                        </div>
                    )
                })}
            </AwesomeSlider>
        </>
    )
}
export default SliderAwesome