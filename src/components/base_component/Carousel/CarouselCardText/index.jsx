import React, { Component, lazy } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

import Img1 from '../../../../assets/img/home/slick/1.svg'

/**
 * Component
 */
const PrevArrow = lazy(() => import('../../Button/PrevArrow'))
const NextArrow = lazy(() => import('../../Button/NextArrow'))
const Button = lazy(() => import('../../Button'))


class CarouselCardText extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            localStore: [],
            isLoading: true,
            indexActive: 0,
        }
        
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.store.length !== prevState.localStore.length) {
            return {
                localStore: nextProps.store,
                isLoading: false,
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
            <div id="carousel-card-text" className="max-w-container-2 w-auto relative mx-auto">
                <Slider
                    afterChange={(indexActive) => this.setState({indexActive})}
                    arrows={false}
                    dots={true}
                    customPaging={i => <div className="dot rounded-full" />
                    }
                    fade={true}
                    lazyLoad={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    ref={ref => this.carousel = ref}
                >
                    
                    {this.state.localStore.length && this.state.localStore.map((data, index) => {
                        return (
                            <div key={index} className="outline-none">
                                <img
                                    className="outline-none"
                                    src={data.image} 
                                    width="730px" 
                                    height="493px" 
                                    alt="img-slick" 
                                />
                            </div>
                        )
                    })}
                </Slider>

                <PrevArrow 
                    onClick={this.prev}
                    backgroundColor="#FFFFFF"
                    color="#208CB2"
                    hover={{
                        backgroundColor: "#208CB2",
                        color: "#FFFFFF"
                    }}
                    style={{
                        outline: "none",
                        top: "-64px",
                        left: "24px"
                    }}
                />

                <NextArrow 
                    onClick={this.next}
                    backgroundColor="#FFFFFF"
                    color="#208CB2"
                    hover={{
                        backgroundColor: "#208CB2",
                        color: "#FFFFFF"
                    }}
                    style={{
                        outline: "none",
                        top: "-64px",
                        left: "50px"
                    }}
                />

                <div className="card-text bg-white w-2/5 px-6 inset-y-0 right-0 mt-12 absolute">
                    {this.state.localStore.length && this.state.localStore.map((data, index) => {
                        if (this.state.indexActive === index) {
                            return (
                                <div key={index}>
                                    <h6 className="primary tracking-caption2 mt-12"> {data.caption} </h6>
                                    <h1> {data.heading} </h1>
                                    <p className="body-1 my-6">
                                        {data.text}
                                    </p>

                                    {data.list && data.list.length? (
                                        <ul className="mb-5">
                                            {data.list.map((itemList, indexList) => (
                                                <li key={indexList}> 
                                                    <p className="body-1"> {itemList} </p>
                                                </li>
                                            ))}
                                        </ul>
                                    ): null}
                                    <Button className="btn-2 mb-12" {...this.props} onClick={this.props.onClick}> {this.props.buttonTitle.toUpperCase()} </Button>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

CarouselCardText.defaultProps = {
    store: [{
        id: 1,
        image: Img1,
        caption: "specification 1",
        heading: "Lorem Ipsum 1",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
        // list: ["Lorem ipsum dolor sit amet", "Laboris lar aliquip", "Lorem ipsum dolor sit amet", "Laboris lar aliquip"]
    },{
        id: 2,
        image: Img1,
        caption: "specification 2",
        heading: "Lorem Ipsum 2",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
        list: ["Lorem ipsum dolor sit amet", "Laboris lar aliquip", "Lorem ipsum dolor sit amet", "Laboris lar aliquip"]
    }],
    buttonTitle: "button title",
    onClick: () => {
        alert("clicked")
    }
}

CarouselCardText.propTypes = {
    store: PropTypes.arrayOf(PropTypes.object).isRequired,
    border: PropTypes.bool,
    containerMargin: PropTypes.string,
    containerPadding: PropTypes.string,
    className: PropTypes.string,
    buttonTitle: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default CarouselCardText
