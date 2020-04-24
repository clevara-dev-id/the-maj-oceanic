import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import './style.scss'

import CardItem from '../../Card/CardImage/CardImageThree/CardItem';
// import Img1 from '../../../../assets/img/home/slick/1.svg'
// import Button from '../../Button'

class CarouselThree extends Component {
    constructor(props) {
        super(props)

        this.state = {
            localStore: [],
        };

        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)

        this.settings = {
            dots: true,
            lazyLoad: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            customPaging: () => (<div id="dots" />),
            arrows: false,
            centerPadding: "30px",
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },{
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0px",
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            }],
        };
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.properties.length !== prevState.localStore.length) {
            return {
                localStore: nextProps.properties,
            };
        };
        return null;
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.properties.length !== this.props.properties.length ||
            this.state.localStore !== nextProps.properties
    };

    componentDidUpdate(prevProps, nextProps) {
        if (prevProps.properties.length !== this.props.properties.length) {
            this.setState({ localStore: this.props.properties });
        };
    };

    next() {
        this.carousel.slickNext()
    };

    prev() {
        this.carousel.slickPrev()
    };

    render() {
        return (
            <div id="carousel-three" className="">
                <button className="absolute w-8 h-8 rounded-full arrows arrow-left mr-3"
                    onClick={this.prev}
                >
                    <i className="fas fa-angle-left text-base"></i>
                </button>
                <button className="absolute w-8 h-8 rounded-full arrows arrow-right"
                    onClick={this.next}
                >
                    <i className="fas fa-angle-right text-base"></i>
                </button>
                <Slider
                    {...this.settings}
                ref={c => this.carousel = c}
                >
                    {this.state.localStore.length && this.state.localStore.map((data, index) => {
                        return (
                            <CardItem
                                key={data.id || index}
                                image={data.images}
                                heading={data.heading}
                                text={data.text}
                                center={data.center}
                                containerClassName="px-2"
                                headingClassName="text-xl"
                                button={data.button_title}
                            />
                        )
                    })}
                </Slider>
            </div>
        );
    };
};

CarouselThree.propTypes = {
    containerClassName: PropTypes.string,
    store: PropTypes.arrayOf(PropTypes.object),
};

export default CarouselThree;
