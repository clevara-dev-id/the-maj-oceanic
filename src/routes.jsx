import PropTypes from "prop-types";
import * as React from 'react'
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// dummy data
// import img1 from './assets/img/header/1.png'
// import img2 from './assets/img/header/2.png'
// import img3 from './assets/img/home/slick/1.svg'
// import Img4 from './assets/img/home/carousel-text/1.png'
// import { getPages } from "./redux/action/actionCreators";

const Home = React.lazy(() => import("./views/Home"));
const Blogs = React.lazy(() => import('./views/Blogs'));
const Pages = React.lazy(() => import('./views/Pages'));
const Cabin = React.lazy(() => import('./views/Cabin'));
const Spesification = React.lazy(() => import('./views/Spesification'));
const Contact = React.lazy(() => import('./views/Contact'));
const Sailing = React.lazy(() => import('./views/SailingSoon'));

const ConnectBaseRoute = props => {
    const { pages } = props;

    return(
        <>
            {pages && pages.map(data => {
                return (
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
                )
            })}
            <Route exact path="/" component={Home} />
            <Route exact path="/blog/raja-ampat" component={Blogs} />
            <Route exact path="/cabin/zheng-he-cabin" component={Cabin} />
            <Route exact path="/spesification" component={Spesification} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/sailing-soon" component={Sailing} />
        </>
    )
};

ConnectBaseRoute.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
    pages: state.occeanic.pages.data,
});

const BaseRoute = withRouter(connect(mapStateToProps, null)(ConnectBaseRoute));
export default BaseRoute
