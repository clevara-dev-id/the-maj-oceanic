import PropTypes from "prop-types";
import React, { lazy } from 'react'
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// dummy data
// import img1 from './assets/img/header/1.png'
// import img2 from './assets/img/header/2.png'
// import img3 from './assets/img/home/slick/1.svg'
// import Img4 from './assets/img/home/carousel-text/1.png'
// import { getPages } from "./redux/action/actionCreators";

const Blogs = lazy(() => import('./views/Blogs'))
const Pages = lazy(() => import('./views/Pages'))

const ConnectBaseRoute = props => {
    const { pages } = props;

    return pages && pages.map(data => {
        return (
            <>
                <Route key={data.id} exact path={data.path}
                    render={routeProps => (
                        <Pages key={data.id} 
                            {...routeProps} 
                            component={data.components}
                            id={data.page}
                            page={data.page} 
                        />
                    )} 
                />
                <Route exact path="/blog/raja-ampat" component={Blogs} />
            </>
        )
    });
};

ConnectBaseRoute.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
    pages: state.occeanic.pages.data,
});

const BaseRoute = withRouter(connect(mapStateToProps, null)(ConnectBaseRoute));
export default BaseRoute
