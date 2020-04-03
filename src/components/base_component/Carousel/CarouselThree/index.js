import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

import CardItem from '../../Card/CardImage/CardImageThree/CardItem'
import Img1 from '../../../../assets/img/home/slick/1.svg'
import Button from '../../Button'

/**
* @augments {Component<{    containerClassName:string,    store:arrayOfobject).isRequired,>}
*/
class CarouselThree extends Component {
    constructor(props) {
        super(props)

        this.state = {
            localStore: [],
        }

        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.store && nextProps.store.length !== prevState.localStore.length) {
            return {
                localStore: nextProps.store,
            }
        }
        return null
    }

    next = () => {
        this.carousel.slickNext()
    }

    prev = () => {
        this.carousel.slickPrev()
    }

    render() {
        return (
            <div id="carousel-three" className={`flex flex-col justify-center max-w-container-2 ...${this.props.containerClassName}`}>
                <Slider
                    dots={true}
                    centerMode={true}
                    centerPadding="-20px"
                    slidesToShow={3}
                    slidesToScroll={1}
                    customPaging={() => <div id="dots" />}
                    arrows={false}
                    ref={c => this.carousel = c}
                >
                    {this.state.localStore.length && this.state.localStore.map((data, index) => {
                        return (
                            <CardItem
                                key={index}
                                image={data.image}
                            />
                        )
                    })}
                </Slider>
                <PrevArrow onClick={this.prev} />
                <NextArrow onClick={this.next} />
            </div>
        )
    }
}

CarouselThree.propTypes = {
    containerClassName: PropTypes.string,
    store: PropTypes.arrayOf(PropTypes.object).isRequired,
}

CarouselThree.defaultProps = {
    store: [{
        id: 1,
        image: Img1
    },{
        id: 2,
        image: Img1
    },{
        id: 3,
        image: Img1
    },{
        id: 4,
        image: Img1
    }]
}

export default CarouselThree

const PrevArrow = props => {
    const { className, style, onClick } = props
    return (
        <Button
            primary
            className={`w-8 h-8 relative left-0 rounded-full`}
            onClick={onClick}
            style={{
                left: "-4.5%",
                bottom: "45%",
                outline: "none"
            }}
        >
            <i className="fas fa-angle-left text-base"></i>
        </Button>
    )
}

const NextArrow = props => {
    const { className, style, onClick } = props
    return (
        <Button
            primary
            className={`w-8 h-8 relative right-0 rounded-full`}
            onClick={onClick}
            style={{
                left: "101.5%",
                bottom: "54%",
                outline: "none"
            }}
        >
            <i className="fas fa-angle-right text-base"></i>
        </Button>
    )
}
