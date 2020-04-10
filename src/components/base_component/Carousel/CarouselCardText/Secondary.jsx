import React, { Component, Fragment } from 'react'
import PropTypes, { arrayOf } from 'prop-types'
import Slider from 'react-slick'

import './style.css'
import { Card } from './Card'

class Secondary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            localStore: [],
            indexActive: 0,
        }
    }

    componentDidMount() {
        let arrwPrev = document.getElementsByClassName('slick-prev')
        let arrwNext = document.getElementsByClassName('slick-next')
        let icon1 = document.createElement("i")
        let icon2 = document.createElement("i")
        icon1.className += "fas fa-angle-left text-base"
        icon2.className += "fas fa-angle-right text-base"
        arrwPrev[0].className += " w-8 h-8 rounded-full focus:outline-none"
        arrwNext[0].className += " w-8 h-8 rounded-full focus:outline-none"
        
        arrwPrev[0].appendChild(icon1)
        arrwNext[0].appendChild(icon2)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.store !== prevState.localStore) {
            return {
                localStore: nextProps.store
            }
        }
        return null
    }
    
    render() {
        return (
            <div id="carousel-card-text-secondary" className="max-w-container-2 relative mx-auto">
                <Slider
                    afterChange={(indexActive) => this.setState({indexActive})}
                    dots={true}
                    customPaging={i => <div className="dot rounded-full" />
                    }
                    lazyLoad={true}
                >
                    {this.state.localStore && this.state.localStore.map((data, index) => {
                        return (
                            <Fragment key={index}>
                                <img className="focus:outline-none" src={data.image} alt="img-slick-secondary" />
                            </Fragment>
                        )
                    })}
                </Slider>

                <Card 
                    buttonClassName="border-b border-solid border-primary-300 pb-2 w-auto primary"
                    buttonTitle="discover now" 
                    containerClassName="card-text-secondary"
                    store={this.state.localStore} 
                    indexActive={this.state.indexActive} 
                    onClick={() => alert('clicked')} />
            </div>
        )
    }
}

Secondary.propTypes = {
    store: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Secondary
