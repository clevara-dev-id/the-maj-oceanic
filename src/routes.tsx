import * as React from 'react';
import { Route } from 'react-router-dom';

/**
 * component
 */
const Home          = React.lazy(() => import("./views/Home"));
// const Blogs         = React.lazy(() => import('../un_used/Blogs'));
const Cabin         = React.lazy(() => import('./views/Cabin'));
const Spesification = React.lazy(() => import('./views/Spesification'));
const Contact       = React.lazy(() => import('./views/Contact'));
const Sailing       = React.lazy(() => import('./views/SailingSoon'));
const Vessel        = React.lazy(() => import('./views/Vessel'));
const CabinDetail   = React.lazy(() => import('./views/CabinDetail'));
const Sustainabiliy = React.lazy(() => import('./views/Sustainabiliy'));
const Voyages       = React.lazy(() => import('./views/Voyages'));
const Dining        = React.lazy(() => import('./views/Dining'));
const Occasions     = React.lazy(() => import('./views/Occasions'));
const Offers        = React.lazy(() => import('./views/Offers'));
const OffersDetail  = React.lazy(() => import('./views/OffersDetail'));
const Destination   = React.lazy(() => import('./views/Destination'));

const BaseRoute: React.FC = () => {
    return( 
        <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/voyages" component={Voyages} />
            <Route exact path="/sustainability" component={Sustainabiliy} />
            <Route exact path="/dining" component={Dining} />
            <Route exact path="/occasions" component={Occasions} />

            <Route exact path="/offers" component={Offers} />
            <Route exact path="/offers/detail" component={OffersDetail} />

            <Route exact path="/destination" component={Destination} />

            {/* <Route exact path="/blog/raja-ampat" component={Blogs} /> */}
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/sailing-soon" component={Sailing} />

            <Route exact path="/the-vessel" component={Vessel} />
            <Route exact path="/the-vessel/spesification" component={Spesification} />
            <Route exact path="/the-vessel/the-cabin" component={Cabin} />
            <Route exact path="/the-vessel/the-cabin/detail" component={CabinDetail} />
        </React.Fragment>
    )
};

export default BaseRoute;
