
import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

const Home = lazy(() => import('./views/Home'))

const BaseRoute = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
        </>
    )
}

export default BaseRoute
