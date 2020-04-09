import React, { lazy } from 'react'
import { connect } from 'react-redux'
import Base from './Base'
import Footer from '../components/Footer'


/* Components */
// const HeadBackground = lazy(() => import('../components/HeadBackground'))
const NavigationBar = lazy(() => import('../components/NavigationBar'))

const mapStateToProps = state => ({
    head_background: state.page.head_background,
})

class connectApplicationLayout extends Base {
    render() {
        return (
            <div>
                <header>
                    <NavigationBar store={this.props.properties} />
                    {/* <HeadBackground bg={this.props.head_background.image} text={this.props.head_background.text} /> */}
                    
                </header>

                {this.props.children}

                <footer>
                    <Footer store="" />
                </footer>
            </div>
        )
    }
}
connectApplicationLayout.defaultProps = {
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

const ApplicationLayout = connect(mapStateToProps, null)(connectApplicationLayout)
export default ApplicationLayout
