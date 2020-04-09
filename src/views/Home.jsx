import React, { lazy, Component } from 'react'
import SliderAwesome from '../components/base_component/Slider/SliderAwesome/SliderAwesome'

import img1 from '../assets/img/header/1.png'
import img2 from '../assets/img/header/2.png'



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
                    <div className="w-full h-screen">
                        <SliderAwesome properties={this.props.properties} />
                    </div>
                </section>

                
            </div>
        )
    }
}

export default Home

Home.defaultProps = {
    properties:[
        {
            id:1,
            images: `${img1}`,
            text:"Lorem Ipsum Dolor Sit Amet"
        },
        {
            id:2,
            images: `${img2}`,
            text:"Lorem Ipsum Dolor Sit Amet"
        }
    ]
}