import * as React from 'react'
import PropTypes from "prop-types";
import { Route, withRouter, Redirect } from 'react-router-dom';
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
const Vessel = React.lazy(() => import('./views/Vessel'));

const BaseRoute: React.FC = () => {
    return( 
        <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog/raja-ampat" component={Blogs} />
            <Route exact path="/cabin/zheng-he-cabin" component={Cabin} />
            <Route exact path="/the-vessel/spesification" component={Spesification} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/sailing-soon" component={Sailing} />
            <Route exact path="/the-vessel" component={Vessel} />
        </React.Fragment>
    )
};

export default BaseRoute;
