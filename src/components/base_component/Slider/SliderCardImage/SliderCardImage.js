import React, { Component, lazy } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import styled from 'styled-components'

import './slider.css'
import Img1 from '../../../../assets/img/home/slick/1.svg'

const Button = lazy(() => import('../../Button'))

class SliderCardImage extends Component {
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
            <Container {...this.props} containerWidth="1110px" containerHeight="575px">
                <Slider
                    dots={true}
                    fade={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    dotsClass="slick-dots center"
                    customPaging={i => <Dot id="dot" />}
                >
                    
                    {this.state.localStore.length && this.state.localStore.map((data, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <img src={data.image} width="730px" height="493px" style={{position: "absolute"}} alt="img-slick" />
                                    <CardItem>
                                        <Content border={this.props.border}>
                                            <H6 className="primary"> {data.caption} </H6>
                                            <h1> {data.heading} </h1>
                                            <P className="body-1" margin="29px 0 25px">
                                                {data.text}
                                            </P>

                                            <List border={this.props.border} margin="0 0 39px">
                                                <ul style={{padding: "0 20px"}}>
                                                    {data.list && data.list.map((itemList, indexList) => (
                                                        <LI key={indexList}> {itemList} </LI>
                                                    ))}
                                                </ul>
                                            </List>
                                            <Button className="btn-2" small outline>Learn More</Button>
                                        </Content>
                                    </CardItem>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </Container>
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

SliderCardImage.propTypes = {
    store: PropTypes.array,
    border: PropTypes.bool,
    containerMargin: PropTypes.string,
    containerPadding: PropTypes.string,
}

SliderCardImage.defaultProps = {
    store: [{
        id: 1,
        image: Img1,
        caption: "spesification 1",
        heading: "Lorem Ipsum 1",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
        list: ["Lorem ipsum dolor sit amet", "Laboris lar aliquip", "Lorem ipsum dolor sit amet", "Laboris lar aliquip"]
    },{
        id: 2,
        image: Img1,
        caption: "spesification 2",
        heading: "Lorem Ipsum 2",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
        list: ["Lorem ipsum dolor sit amet", "Laboris lar aliquip", "Lorem ipsum dolor sit amet", "Laboris lar aliquip"]
    }]
}

export default SliderCardImage