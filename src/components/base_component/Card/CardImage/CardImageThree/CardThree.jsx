import React, { Component, lazy } from 'react'
import PropTypes from 'prop-types'

import Img1 from '../../../../../assets/img/home/card-image/1.png'

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
        console.log(this.state.localStore)
        return (
            <div>
                <div className="flex flex-wrap justify-center">
                    {this.state.localStore.length && this.state.localStore.map((data, index) => (
                        <CardItem 
                            caption={false}
                            containerClassName={`${this.state.localStore.length === (index + 1)? "ml-3": (index + 1) === 1? "mr-3": "mx-3"}`}
                            headingClassName="uppercase mt-6"
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