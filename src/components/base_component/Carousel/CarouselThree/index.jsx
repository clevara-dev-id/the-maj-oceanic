import React, { Component, createRef, lazy } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

import Img1 from '../../../../assets/img/home/slick/1.svg'

/**
 * Component
 */
const CardItem = lazy(() => import('../../Card/CardImage/CardImageThree/CardItem'))
const PrevArrow = lazy(() => import('../../Button/PrevArrow'))
const NextArrow = lazy(() => import('../../Button/NextArrow'))

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
            <div id="carousel-three" className={`flex flex-col justify-center max-w-container-2 mx-auto ...${this.props.containerClassName}`}>
                <Slider
                    arrows={false}
                    centerMode={true}
                    centerPadding="-20px"
                    customPaging={() => <div id="dots" />}
                    dots={true}
                    slidesToShow={3}
                    slidesToScroll={1}
                    lazyLoad={true}
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
                <PrevArrow
                    backgroundColor="#208CB2"
                    color="#FFFFFF"
                    hover={{
                        backgroundColor: "#FFFFFF",
                        color: "#208CB2",
                        outline: "none",
                    }}
                    className="prev-arrow"
                    onClick={this.prev} 
                />
                <NextArrow
                    backgroundColor="#208CB2"
                    color="#FFFFFF"
                    hover={{
                        backgroundColor: "#FFFFFF",
                        color: "#208CB2",
                        outline: "none",
                    }}
                    className="next-arrow"
                    onClick={this.next} 
                />
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
