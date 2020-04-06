
import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./views/Home'))

const routes = [{
    path: "/",
    component: Home
}]

const BaseRoute = props => (
    <Switch>
    {routes.map((route, i) => (
        <Route
            path={route.path}
            render={props => (
            <route.component {...props} routes={route.routes} />
            )}
        />
        ))}
    </Switch>
)
export default BaseRoute
