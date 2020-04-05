import React, { Component, lazy, createRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Img from '../assets/img/home/voyages/1-croped.png'

/* Component */
const CardTextSecondary = lazy(() => import('./base_component/Card/CardText/CardTextSecondary'))
const Tabs = lazy(() => import('./base_component/Tab/Tabs'))
const Button = lazy(() => import('./base_component/Button'))


export default class Voyages extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            localStore: [],
            isLoading: true
        }
        this.tablinkRef = createRef()
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.store !== prevState.localStore) {
            return {
                localStore: nextProps.store,
                isLoading: false,
            }
        }
        return null
    }

    render() {
        return (
            <Container className={`flex flex-col w-auto self-center ${this.props.className}`}>
                <CardTextSecondary 
                    caption={false}
                    title="VOYAGES"
                    text="Exercitation nostrud ex elit qui eiusmod pariatur. Non cillum adipisicing duis ullamco esse et velit sint. Consectetur consequat sint ex est eiusmod deserunt nulla officia."
                    className="container w-2/3 text-center self-center"
                    textClassName="mt-6"
                />
                
                <Tabs classNameTabUL="flex py-20" classNameTabLI="mr-10" classNameTabcontent="flex" classNameLabelActive="text-primary-300">
                {this.state.localStore && this.state.localStore.map((data, index) => {
                    return (
                        <div label={data.title} key={index}>
                            <div className="bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${data.image})`, width: this.props.imageWidth, height: this.props.imageHeight}} />
                            <div className="w-1/2 self-center ml-8">
                                <H2>{data.heading}</H2>
                                <p className="body-1 mt-4 mb-8">
                                    {data.text}
                                </p>
                                <Button small ghost onClick={() => alert(`clicked ${data.title}`)}>LEARN MORE</Button>
                            </div>
                        </div>
                    )
                })}
                </Tabs>
            </Container>
        )
    }
}

const H2 = styled.h2({
    textTransform: "capitalize"
})

const Container = styled.div({
    maxWidth: "1110px",
})

Voyages.defaultProps = {
    store: [{
        id: 1,
        image: Img,
        title: "flores sea",
        heading: "flores sea",
        text: "Sunt excepteur laborum reprehenderit duis sunt fugiat eu dolore. Laborum mollit nostrud quis proident esse cillum sint laboris in deserunt eu consectetur ad adipisicing. Mollit nulla in quis nisi elit occaecat eu dolore aliquip",
    },{
        id: 2,
        image: Img,
        title: "raja ampat",
        heading: "explore raja ampat",
        text: "Sunt excepteur laborum reprehenderit duis sunt fugiat eu dolore. Laborum mollit nostrud quis proident esse cillum sint laboris in deserunt eu consectetur ad adipisicing. Mollit nulla in quis nisi elit occaecat eu dolore aliquip"
    }],
    imageWidth: "540px",
    imageHeight: "400px"
}

Voyages.propTypes = {
    className: PropTypes.string,
    store: PropTypes.arrayOf(PropTypes.object).isRequired,
    imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
