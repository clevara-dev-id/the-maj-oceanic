import React, { Component, lazy } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Img1 from '../../../../../assets/img/home/card-image/1.png'

/* Components */
const CardItem = lazy(() => import('./CardItem'))
const Button = lazy(() => import('../../../Button'))


/**
* @augments {Component<{    store:arrayOfobject).isRequired,    buttonName:string.isRequired,>}
*/
class CardThree extends Component {
    static propTypes = {
        store: PropTypes.arrayOf(PropTypes.object).isRequired,
        buttonName: PropTypes.string.isRequired,
    }
    
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
            <Container width="1110px" className={this.props.className}>
                <div className="grid grid-cols-3 gap-6 mx-auto">
                    {this.state.localStore.length && this.state.localStore.map((data, index) => (
                        <CardItem 
                            key={index}
                            image={data.image}
                            heading={data.heading}
                            text={data.text}
                        />
                    ))}
                </div>
                
                <div className="flex mt-16">
                    <Button className="mx-auto" large outline> {this.props.buttonName} </Button>
                </div>
            </Container>
        )
    }
}

const Container = styled.div(
    props => ({
        width: props.width,
        height: props.height
    })
)

CardThree.defaultProps = {
    store : [{
        id: 1,
        image: Img1,
        heading: "cheng he",
        text: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
    },{
        id: 2, 
        image: Img1,
        heading: "vasco da gama",
        text: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit",
    },{
        id: 3,
        image: Img1,
        heading: "gajah mada",
        text: "Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit"
    }],
    buttonName: "Discover More"
}

// CardThree.propTypes = {
//     store: PropTypes.arrayOf(PropTypes.object).isRequired,
//     buttonName: PropTypes.string.isRequired,
// }

export default CardThree