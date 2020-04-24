import PropTypes from "prop-types";
import React, { lazy } from 'react'
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Pages = lazy(() => import('./views/Pages'))

const ConnectBaseRoute = props => {
    const { pages } = props;

    return pages && pages.map(data => {
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
