import React, { Component, lazy } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';

import './style.scss';
import { BaseUrlImage } from '../../../../helper/axios';
import Img1 from '../../../../assets/img/home/slick/1.svg'

const Button = lazy(() => import('../../Button'));

class CarouselCardText extends Component {
    constructor(props) {
        super(props)

        this.state = {
            localStore: [],
            isLoading: true,
        };

        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
    };

    prev = () => {
        this.carousel.slickPrev();
    };

    next = () => {
        this.carousel.slickNext();
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.properties.length !== prevState.localStore.length) {
            return {
                localStore: nextProps.properties,
                isLoading: false,
            };
        };

        return null;
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.properties.length !== this.props.properties.length;
    };

    componentDidUpdate(prevProps, prevState) {
        this.setState({ isLoading: true });

        if (prevProps.properties.length !== this.props.properties.length) {
            return this.setState({
                localStore: this.props.properties,
                isLoading: false,
            });
        };

        return this.setState({ isLoading: false });
    };

    _renderItem = (data, index) => (
        <div key={index} className="focus:outline-none">
            <div className="flex lg:flex-no-wrap flex-wrap h-full h-full-plus-10">
                <div className="w-full lg:w-2/3 carousel-card-text-component">
                    <img src={BaseUrlImage + data.images} className="w-full" alt="img-slick" />
                    <div className="absolute arrows-container">
                        <button className="w-8 h-8 relative left-0 rounded-full arrows mr-3"
                            onClick={this.prev}>
                            <i className="fas fa-angle-left text-base"></i>
                        </button>
                        <button className="w-8 h-8 relative left-0 rounded-full arrows"
                            onClick={this.next}>
                            <i className="fas fa-angle-right text-base"></i>
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-5/12 bg-white px-6 py-16 mt-20 ml-min-12">
                    <Content border={this.props.border}>
                        <H6 className="primary mb-3"> {data.caption} </H6>
                        <h1> {data.heading} </h1>
                        <P className="body-1" margin="29px 0 25px">
                            {data.text}
                        </P>

                        <List border={this.props.border} margin="0 0 39px">
                            <UL style={{ padding: "0 20px" }}>
                                {data.list && data.list.map(this._renderListLi)}
                            </UL>
                        </List>
                        <Button small outline onClick={this.props.onClick}>Learn More</Button>
                    </Content>
                </div>
            </div>
        </div>
    );

    _renderListLi = (itemList, indexList) => (
        <LI className="body-1" key={indexList}> {itemList} </LI>
    );

    render() {
        return (
            <Slider
                id="carousel-card-component"
                lazyLoad={true}
                dots={true}
                fade={true}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={false}
                ref={ref => this.carousel = ref}
                dotsClass="slick-dots center"
                customPaging={i => <Dot id="dot" />}>
                    
                {this.state.localStore.length && this.state.localStore.map(this._renderItem)}
            </Slider>
        );
    };
};

const Content = styled.div(
    props => ({
        width: props.width,
        height: props.height,
        border: props.border ? "1px solid" : null,
    })
)

const List = styled.div(
    props => ({
        border: props.border ? "1px solid" : null,
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
        lineHeight: "25px !important"
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

CarouselCardText.propTypes = {
    store: PropTypes.arrayOf(PropTypes.object),
    border: PropTypes.bool,
    containerMargin: PropTypes.string,
    containerPadding: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}

CarouselCardText.defaultProps = {
    store: [{
        id: 1,
        images: Img1,
        caption: "spesification 1",
        heading: "Lorem Ipsum 1",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
        // list: ["Lorem ipsum dolor sit amet", "Laboris lar aliquip", "Lorem ipsum dolor sit amet", "Laboris lar aliquip"]
    }, {
        id: 2,
        images: Img1,
        caption: "spesification 2",
        heading: "Lorem Ipsum 2",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
        list: ["Lorem ipsum dolor sit amet", "Laboris lar aliquip", "Lorem ipsum dolor sit amet", "Laboris lar aliquip"]
    }],
    onClick: () => {
        alert("clicked")
    }
}

export default CarouselCardText
