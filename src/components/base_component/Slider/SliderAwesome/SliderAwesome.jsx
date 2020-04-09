import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

const SliderAwesome = props => {
    return (
        <>
            <AwesomeSlider
                animation="foldOutAnimation"
                bullets={false}
                cssModule={[CoreStyles, AnimationStyles]}
                infinite={false}
                className="h-screen"
            >
                {props.properties.map((data,d) => {
                    return(
                        <div key={d} data-src={data.images} >1 </div>
                    )
                })}
            </AwesomeSlider>
        </>
    )
}
export default SliderAwesome