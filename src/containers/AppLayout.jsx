import React, { Component, lazy } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Head from '../assets/img/home/1.svg'
import { setPages } from '../redux/action/actionCreators'

/* Component */
const NavigationBar = lazy(() => import('../components/NavigationBar'))
const Footer = lazy(()=>import('../components/Footer'))
// const  HeadBackground = lazy(() => import('../components/HeadBackground'))
// const SliderAwesome = lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'))

export default function AppLayout(props) {
    const { children } = props;
    return (
        <>
            <header className="flex justify-center">
                <NavigationBar />
            </header>

            {children}

            <footer>
                <Footer store="" />
            </footer>
        </>
    )
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
