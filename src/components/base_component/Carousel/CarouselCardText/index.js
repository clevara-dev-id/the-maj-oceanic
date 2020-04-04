import React, { Component, lazy } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import styled from 'styled-components'

import './style.scss'
import Img1 from '../../../../assets/img/home/slick/1.svg'

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
        }
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

    render() {
        return (
            <Slider
                    id="carousel-card-component"
                    dots={true}
                    // fade={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    arrows={false}
                    dotsClass="slick-dots center"
                    customPaging={i => <Dot id="dot" />}
                >
                    
                    {this.state.localStore.length && this.state.localStore.map((data, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <div className="flex h-full-plus-10">
                                        <div className="w-2/3">
                                            <img src={data.image} className="w-full" alt="img-slick" />
                                        </div>
                                        <div className="w-5/12 bg-white px-6 py-16 mt-20 ml-min-12">
                                            <Content border={this.props.border}>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
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
        top: "50px", 
        marginLeft: "650px", 
        width: "445px", 
        height: "570px",
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
        listStyleType: "circle",
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
        caption: "spesification 1",
        heading: "Lorem Ipsum 1",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
        // list: ["Lorem ipsum dolor sit amet", "Laboris lar aliquip", "Lorem ipsum dolor sit amet", "Laboris lar aliquip"]
    },{
        id: 2,
        image: Img1,
        caption: "spesification 2",
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
