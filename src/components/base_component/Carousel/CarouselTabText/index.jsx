import PropTypes from "prop-types";
import React, { Component, Fragment } from 'react'
import Slider from 'react-slick'

import Img from '../../../../assets/img/home/carousel-tab/1.png'
import style from './style.css'
import PrevArrow from "../../Button/PrevArrow";
import NextArrow from "../../Button/NextArrow";

export default class CarouselTabText extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             localStore: [],
             indexActive: 0,
        }

        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.store !== prevState.localStore) {
            return {
                localStore: nextProps.store
            }
        }
        return null
    }

    prev = () => {
        this.carousel.slickPrev()
    }

    next = () => {
        this.carousel.slickNext()
    }
    
    render() {
        const { localStore, indexActive } = this.state
        const { imagewidth, imageHeight } = this.props
        return (
            <Fragment>
                <div className="mb-12 whitespace-normal body-1">
                    {localStore.length && localStore.map((data, index) => {
                        if (indexActive === index) {
                            return data.text
                        }
                        return null
                    })}
                </div>
                
                <Slider
                    afterChange={indexActive => this.setState({indexActive})}
                    arrows={false}
                    className="border border-solid border-black max-w-5xl w-auto mx-auto"
                    dots={true}
                    lazyLoad={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    customPaging={i => <div 
                        className="
                            w-3 
                            h-3 
                            rounded-full 
                            bg-dot-100 
                            opacity-25
                            hover:bg-primary-300
                            hover:opacity-100
                        " 
                    />}
                    ref={ref => this.carousel = ref}
                >
                    {localStore.length && localStore.map((data, index) => {
                        return (
                            <Fragment key={index}>
                                <div
                                    className={`bg-image bg-no-repeat bg-cover max-w-container-2 w-auto h-64 ${this.props.containerImageClassName}`}
                                    style={{
                                        backgroundImage: `url(${data.image})`,
                                    }}
                                />
                            </Fragment>
                        )
                    })}
                </Slider>
                <PrevArrow
                    primary
                    className="prev-arrow outline-none focus:outline-none"
                    onClick={this.prev}
                />
                <NextArrow
                    primary
                    className="next-arrow outline-none focus:outline-none"
                    onClick={this.next}
                />
            </Fragment>
        )
    }
}

CarouselTabText.defaultProps = {
    store: [{
        id: 1,
        label: "Main",
        image: Img,
        text: "Tab Main Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. ",
    },{
        id: 2,
        label: "Upper",
        image: Img,
        text: "Tab Upper Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. ",
    },{
        id: 3,
        label: "Lower",
        image: Img,
        text: "Tab Lower Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. ",
    }],
    imagewidth: "1106px",
    imageHeight: "256px",
}

CarouselTabText.propTypes = {
  imageHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  imagewidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  store: PropTypes.arrayOf(PropTypes.object).isRequired
}
