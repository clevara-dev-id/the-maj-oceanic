import React, { lazy } from 'react'
import { connect } from 'react-redux'
import Base from './Base'

/* Svg Skeleton */
import HeadSvg from '../assets/img/home/svg/head.svg'

/* Components */
import { ContentLoader } from '../components/base_component/Loader'
const HeadBackground = lazy(() => import('../components/HeadBackground'))
const NavigationBar = lazy(() => import('../components/NavigationBar'))

const mapStateToProps = state => ({
    head_background: state.page.head_background,
})

class connectApplicationLayout extends Base {
    render() {
        return (
            <div>
                <header>
                    {/* <NavigationBar /> */}
                    <HeadBackground bg={this.props.head_background.image} text={this.props.head_background.text} />
                </header>

                {this.props.children}

                <footer>
                </footer>
            </div>
        )
    }
}

const ApplicationLayout = connect(mapStateToProps, null)(connectApplicationLayout)
export default ApplicationLayout

const HeadSkeleton = props => (
    <div>
        <ContentLoader style={{backgroundColor: "#FFFFFF", justifyContent: "center"}}>
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />

            {/* <rect x="46" y="20" rx="3" ry="3" width="50" height="50" fill="#C4C4C4"/>
            <rect x="80" y="20" rx="3" ry="3" width="50" height="50" fill="#C4C4C4"/> */}
        </ContentLoader>
    </div>
)
