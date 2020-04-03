import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';


import img1 from '../../../../assets/img/header/1.png'
import img2 from '../../../../assets/img/header/2.png'
import img4 from '../../../../assets/img/header/4.png'

export default class extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="relative w-screen h-screen">
              <AwesomeSlider 
                    animation="foldOutAnimation"
                    bullets={false}
                    cssModule={[CoreStyles, AnimationStyles]}
                    infinite={false}
                >
                    <div data-src={img4} >1 </div>
                    <div data-src={img1} >1 </div>
                </AwesomeSlider>  
            </div>
        )
    }
}