import React, { Component, lazy } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * Component
 */
const  HeadBackground = lazy(() => import('../components/HeadBackground'))
const SliderAwesome = lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'))

class connectLayout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const { children } = this.props
        return (
            <div>
                <header>
                    <SliderAwesome />
                </header>

                {children}

                <footer>

                </footer>
            </div>
        )
    }
}

connectLayout.propTypes = {
  children: PropTypes.element.isRequired,
}


const mapStateToProps = state => ({
    head_background: state.page.head_background
})

const AppLayout = connect(mapStateToProps)(connectLayout)
export default AppLayout
