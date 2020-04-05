
import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

const Home = lazy(() => import('./views/Home'))

const BaseRoute = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
        </div>
    )
}

export default BaseRoute
