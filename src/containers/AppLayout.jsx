import React, { Component, lazy } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import rafSchedule from 'raf-schd'

import Head from '../assets/img/home/1.svg'

/**
 * Component
 */
const Navbar = lazy(() => import('../components/Navbar/Navbar'))
const  HeadBackground = lazy(() => import('../components/HeadBackground'))
const SliderAwesome = lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'))

class connectLayout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            navbarChange: false
        }
        this.handleScroll = this.handleScroll.bind(this)

        this.scheduleUpdate = rafSchedule(this.handleScroll)
    }

    handleScroll(args) {
        console.log(args)
        // if (args > 323) {
            if (args >= 547) {
            this.setState({navbarChange: true})
        } else {
            this.setState({navbarChange: false})
        }
    }

    componentDidMount() {
        let onScroll = (args) => this.scheduleUpdate(args)
        window.addEventListener("scroll", function() {
            onScroll(window.scrollY)
        })
    }

    componentWillUnmount() {
        this.scheduleUpdate.cancel()
    }
    
    render() {
        const { children, head_background } = this.props
        return (
            <div>
                <header>
                    <Navbar navbarChange={this.state.navbarChange} />
                    <HeadBackground bg={head_background.image} text={head_background.text} />
                    {/* <SliderAwesome /> */}
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