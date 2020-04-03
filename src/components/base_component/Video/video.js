import React, { Component } from 'react'
import Video from '../../../assets/video/videoplayback.mp4'

export default class Videojs extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <>
                <video width="100%" >
                    <source src={Video} type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
            </>
        )
    }
}