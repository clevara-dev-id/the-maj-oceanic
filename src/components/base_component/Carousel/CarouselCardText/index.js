import React, { Component, lazy } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import styled from 'styled-components'

import './style.css'
import Img1 from '../../../../assets/img/home/slick/1.svg'
import NextArrow from '../../Button/NextArrow'
import PrevArrow from '../../Button/PrevArrow'

const Button = lazy(() => import('../../Button'))

/**
* @augments {Component<{    store:arrayOfobject).isRequired,    border:boolean,    containerMargin:string,    containerPadding:string,    className:string,>}
*/
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
            <div id="carousel-card-text" className="max-w-container-2" style={{width: "1110px"}}>
                <Slider
                    ref={ref => this.carousel = ref}
                    arrows={false}
                    dots={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    dotsClass="slick-dots center outline-none"
                    customPaging={i => <div id="dot" className="rounded-full" />
                    }
                    afterChange={(indexActive) => this.setState({indexActive})}
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

                <CardItem>
                    {this.state.localStore.length && this.state.localStore.map((data, index) => {
                        if (this.state.indexActive === index) {
                            return (
                                <Content key={index} border={this.props.border}>
                                    <H6 className="primary"> {data.caption} </H6>
                                    <h1> {data.heading} </h1>
                                    <P className="body-1" margin="29px 0 25px">
                                        {data.text}
                                    </P>
    
                                    <List border={this.props.border} margin="0 0 39px">
                                        <UL style={{padding: "0 20px"}}>
                                            {data.list && data.list.map((itemList, indexList) => (
                                                <LI className="body-1" key={indexList}> {itemList} </LI>
                                            ))}
                                        </UL>
                                    </List>
                                    <Button className="btn-2" small outline>Learn More</Button>
                                </Content>
                            )
                        }
                    })}
                </CardItem>
            </div>
        )
    }
}

const Container = styled.div(
    props => ({
        border: props.border? "1px solid": null,
        margin: props.containerMargin,
        padding: props.containerPadding,
        width: props.containerWidth,
        height: props.containerHeight,
    })
)

const CardItem = styled.div(
    props => ({
        background: "#FFFFFF", 
        padding: "51px 29px", 
        position: "relative", 
        top: "-44%", 
        marginLeft: "670px", 
        width: "445px", 
        height: "525px",
    })
)

const Content = styled.div(
    props => ({
        width: props.width,
        height: props.height,
        border: props.border? "1px solid" : null,
    })
)

const List = styled.div(
    props => ({
        border: props.border? "1px solid" : null,
        margin: props.margin,
        padding: props.padding,
    })
)

const H6 = styled.h6(
    props => ({
        letterSpacing: "3px",
    })
)

const P = styled.p(
    props => ({
        margin: props.margin,
    })
)

const UL = styled.ul(
    props => ({
        listStyleType: "disc",
    })
)

const LI = styled.li(
    props => ({
        margin: "11px 0",
    })
        
)

const Dot = styled.div(
    props => ({
        width: "12px",
        height: "12px",
        background: "#4E5E79",
        opacity: "0.25",
        borderRadius: "8px",
    })
)

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
    }]
}

CarouselCardText.propTypes = {
    store: PropTypes.arrayOf(PropTypes.object).isRequired,
    border: PropTypes.bool,
    containerMargin: PropTypes.string,
    containerPadding: PropTypes.string,
    className: PropTypes.string,
}

export default CarouselCardText
