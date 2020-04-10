import React, { Component, lazy } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Img1 from '../../../../../assets/img/home/card-image/1.png'

/* Components */
const CardItem = lazy(() => import('./CardItem'))
const Button = lazy(() => import('../../../Button'))



/**
* @augments {Component<{    containerClassName:string,    store:arrayOfobject).isRequired,    buttonTitle:string.isRequired,    onClick:Function.isRequired,>}
*/
class CardThree extends Component {
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
    }
    
    render() {
        return (
            <div className="max-w-container-2 mx-auto w-screen">
                <div className="flex flex-row max-w-container-2">
                    {this.state.localStore.length && this.state.localStore.map((data, index) => (
                        <CardItem 
                            caption={false}
                            containerClassName={`${this.state.localStore.length === (index + 1)? "ml-3": (index + 1) === 1? "mr-3": "mx-3"}`}
                            containerImageClassName="w-auto"
                            headingClassName="uppercase mt-6"
                            textClassName="mt-4"
                            key={index}
                            image={data.image}
                            heading={data.heading}
                            text={data.text}
                            center
                        />
                    ))}
                </div>
                
                {this.props.buttonTitle? (
                    <div className="flex mt-16">
                        <Button className="mx-auto" large outline onClick={this.props.onClick}> {this.props.buttonTitle.toUpperCase()} </Button>
                    </div>
                ): null}
            </div>
        )
    }
}

CardThree.defaultProps = {
    store : [{
        id: 1,
        image: Img1,
        heading: "Card Three 1",
        text: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
    },{
        id: 2, 
        image: Img1,
        heading: "Card Three 2",
        text: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
    },{
        id: 3,
        image: Img1,
        heading: "Card Three 3",
        text: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit"
    }],
    buttonTitle: "Button Title",
    onClick: () => {
        alert('clicked')
    }
}

CardThree.propTypes = {
    store: PropTypes.arrayOf(PropTypes.object).isRequired,
    buttonTitle: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default CardThree