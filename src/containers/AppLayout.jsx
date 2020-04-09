import React, { Component, lazy } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import rafSchedule from 'raf-schd'

import Head from '../assets/img/home/1.svg'

/**
 * Component
 */
// const Navbar = lazy(() => import('../components/Navbar/Navbar'))
const NavigationBar = lazy(() => import('../components/NavigationBar'))
const Footer = lazy(()=>import('../components/Footer'))
// const  HeadBackground = lazy(() => import('../components/HeadBackground'))
// const SliderAwesome = lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'))

class connectLayout extends Component {
    
    render() {
        const { children, head_background } = this.props
        return (
            <div>
                <header className="flex justify-center">
                    {/* <Navbar navbarChange={this.state.navbarChange} /> */}
                    <NavigationBar store={this.props.properties} />
                    {/* <HeadBackground bg={head_background.image} text={head_background.text} /> */}
                    {/* <SliderAwesome /> */}
                </header>

                {children}

                <footer>
                    <Footer store="" />
                </footer>
            </div>
        )
    }
}

connectLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
connectLayout.defaultProps = {
    properties:[
        {
            id: 1,
            name: "the vessel",
            link: "/vessel",
        },
        {
            id: 2,
            name: "voyages",
            link: "/#",
        },
        {
            id: 3,
            name: "dining",
            link: "/#",
        },
        {
            id: 4,
            name: "activities",
            link: "/#",
        },
        {
            id: 5,
            name: "occasions",
            link: "/#",
        },
        {
            id: 6,
            name: "offers",
            link: "/#",
        },
        {
            id: 7,
            name: "destinations",
            link: "/#",
        },
    ]
}


const mapStateToProps = state => ({
    head_background: state.page.head_background
})

const AppLayout = connect(mapStateToProps)(connectLayout)
export default AppLayout
