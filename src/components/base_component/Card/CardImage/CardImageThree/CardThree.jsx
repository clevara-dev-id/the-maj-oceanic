import React, { Component, lazy } from 'react'
import PropTypes from 'prop-types'

import Img1 from '../../../../../assets/img/home/card-image/1.png'
import './style.scss'

/* Components */
const CardItem = lazy(() => import('./CardItem'))



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
        if (nextProps.properties.length !== prevState.localStore.length) {
            return {
                localStore: nextProps.properties,
                isLoading: false,
            }
        }
    }
    
    render() {
        return (
            <div>
                <div className="flex flex-wrap">
                    {this.state.localStore.length && this.state.localStore.map((data, index) => (
                        <CardItem
                            containerClassName={`w-full md:w-1/3 lg:w-1/3 px-2 pb-8`}
                            headingClassName="uppercase mt-3 text-xl w-full"
                            textClassName="mt-4"
                            key={index}
                            image={data.images}
                            heading={data.heading}
                            text={data.text}
                            center
                        />
                    ))}
                </div>
            </div>
        )
    }
}

CardThree.defaultProps = {
    store : [{
        id: 1,
        images: Img1,
        heading: "Card Three 1",
        text: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
    },{
        id: 2, 
        images: Img1,
        heading: "Card Three 2",
        text: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
    },{
        id: 3,
        images: Img1,
        heading: "Card Three 3",
        text: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit"
    }],
    buttonTitle: "Button Title",
    onClick: () => {
        alert('change in prop onClick')
    }
}

CardThree.propTypes = {
    containerClassName: PropTypes.string,
    store: PropTypes.arrayOf(PropTypes.object).isRequired,
    buttonTitle: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default CardThree