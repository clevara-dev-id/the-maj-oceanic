import React, { Component, lazy } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'

import Img1 from '../../../../assets/img/home/card-image/1.png'

/* Components */
const CardItem = lazy(() => import('./CardItem'))

class CardThree extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            localStore: [],
            isLoading: true,
        }
    }

    static getDeriverStateFromProps(nextProps, prevState) {
        if (nextProps.store.length !== prevState.localStore) {
            return {
                localStore: nextProps.store
            }
        }
    }
    
    render() {
        return (
            <Container className="grid grid-cols-3">
                {/* {this.state.localStore.length && this.state.localStore.map((data, index) => (
                ))} */}
            
                    <CardItem 
                        border
                        image={Img1}
                        heading="cheng he"
                        text="Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit"
                    />
                
            </Container>
        )
    }
}

const Container = styled.div(
    props => ({
        border: props.border? "1px solid": null,
        margin: props.containerMargin,
        padding: props.containerPadding,
    })
)

CardThree.propTypes = {
    border: PropTypes.bool,
    containerMargin: PropTypes.string,
}

export default CardThree
