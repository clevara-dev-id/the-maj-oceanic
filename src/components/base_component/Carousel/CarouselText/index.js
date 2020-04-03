import React, { Component, lazy } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

import './style.css'
import Img1 from '../../../../assets/img/home/carousel-text/1.png'

const HeadingTextList = lazy(() => import('../../Heading/HeadingTextList'))
const Button = lazy(() => import('../../Button'))

/**
* @augments {Component<{    store:arrayOfobject).isRequired,    imageWidth:string.isRequired,    imageHeight:string.isRequired,    buttonTitle:string.isRequired,>}
*/
class CarouselText extends Component {
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
        if (nextProps.store.length !== prevState.localStore.length) {
            return {
                localStore: nextProps.store,
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
        return (
            <div id="carousel-text" className="flex flex-row max-w-container-2 self-center items-center">
            {
                this.props.reverse? (
                <>
                    {this.state.localStore && this.state.localStore.map((data, index) => {
                        if (this.state.indexActive === index) {
                            return <HeadingTextList
                                key={index}
                                containerClassName="w-7/12 mr-6"
                                caption={data.caption}
                                heading={data.heading}
                                text={data.text}
                                textClassName="w-full"
                                list={data.list}
                            />
                        }
                        return null
                    })}
    
                    <Slider
                        ref={ref => this.carousel = ref}
                        arrows={false}
                        dots={true}
                        slidesToShow={1}
                        slidesToScroll={1}
                        className="w-4/12"
                        afterChange={(indexActive) => this.setState({indexActive})}
                        customPaging={() => <div 
                                id="dots" 
                                className="w-3 h-3 rounded-full"
                            />
                        }
                    >
                    {this.state.localStore && this.state.localStore.map((data, index) => {
                        return (
                            <img
                                key={index}
                                src={data.image}
                                width="445px"
                                height="716px"
                                alt="img-data-text"
                            />
                        )
    
                    })}
                    </Slider>

                    <PrevArrow 
                        onClick={this.prev}
                        left="-115.3px"
                        bottom="-255px"
                    />
                    <NextArrow 
                        onClick={this.next}
                        left="-91.3px"
                        bottom="-255px"
                    />
                </>
                ) : (
                <> 
                    <Slider
                        ref={ref => this.carousel = ref}
                        arrows={false}
                        dots={true}
                        slidesToShow={1}
                        slidesToScroll={1}
                        className="w-4/12"
                        afterChange={(indexActive) => this.setState({indexActive})}
                        customPaging={() => <div 
                                id="dots" 
                                className="w-3 h-3 rounded-full"
                            />
                        }
                    >
                    {this.state.localStore && this.state.localStore.map((data, index) => {
                        return (
                            <img
                                key={index}
                                src={data.image}
                                width="445px"
                                height="716px"
                                alt="img-data-text"
                            />
                        )
    
                    })}
                    </Slider>

                    <PrevArrow 
                        onClick={this.prev}
                        left="-115.3px"
                        bottom="-255px"
                    />
                    <NextArrow 
                        onClick={this.next}
                        left="-91.3px"
                        bottom="-255px"
                    />

                    {this.state.localStore && this.state.localStore.map((data, index) => {
                        if (this.state.indexActive === index) {
                            return <HeadingTextList
                                key={index}
                                containerClassName="w-7/12 ml-6"
                                caption={data.caption}
                                heading={data.heading}
                                text={data.text}
                                textClassName="w-full"
                                list={data.list}
                                buttonTitle={this.props.buttonTitle}
                            />
                        }
                        return null
                    })}
                </>
                )
            }
            </div>
        )
    }
}

CarouselText.propTypes = {
    store: PropTypes.arrayOf(PropTypes.object).isRequired,
    imageWidth: PropTypes.string.isRequired,
    imageHeight: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired,
}

CarouselText.defaultProps = {
    store: [{
        id: 1,
        image: Img1,
        caption: "Cabin 1",
        heading: "Carousel Text 1",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. Proident irure proident eiusmod voluptate velit aliquip velit est minim cillum consequat excepteur aliquip esse. Quis adipisicing commodo voluptate esse culpa.",
        list: [
            "Lorem ipsum dolor sit amet",
            "Laboris lar aliquip",
            "Lorem ipsum dolor sit amet",
            "Laboris lar aliquip",
        ]
    },{
        id: 2,
        image: Img1,
        caption: "Cabin 2",
        heading: "Carousel Text 2",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. Proident irure proident eiusmod voluptate velit aliquip velit est minim cillum consequat excepteur aliquip esse. Quis adipisicing commodo voluptate esse culpa.",
        list: [
            "Lorem ipsum dolor sit amet",
            "Laboris lar aliquip",
            "Lorem ipsum dolor sit amet",
            "Laboris lar aliquip",
        ]
    }],
    imageWidth: "445px",
    imageHeight: "716px",
    buttonTitle: "Button Title"
}

export default CarouselText

const PrevArrow = props => {
    return (
        <Button
            border="transparent"
            color="#208CB2"
            hover={{
                color: "#FFFFFF",
                backgroundColor: "#208CB2"
            }}
            backgroundColor="#FFFFFF"
            className="w-8 h-8 relative left-0 rounded-full"
            onClick={props.onClick}
            style={{
                left: props.left,
                bottom: props.bottom,
                outline: "none"
            }}
        >
            <i className="fas fa-angle-left text-base"></i>
        </Button>
    )
}

const NextArrow = props => {
    return (
        <Button
            border="transparent"
            color="#208CB2"
            hover={{
                color: "#FFFFFF",
                backgroundColor: "#208CB2"
            }}
            backgroundColor="#FFFFFF"
            className="w-8 h-8 relative right-0 rounded-full"
            onClick={props.onClick}
            style={{
                left: props.left,
                bottom: props.bottom,
                outline: "none"
            }}
        >
            <i className="fas fa-angle-right text-base"></i>
        </Button>
    )
}
