import React, { lazy } from 'react'

const Devider = lazy(() => import('./base_component/Heading/Devider'))

const DeviderComponent = props => {
    return(
        <>
            <div className="container px-4 mx-auto py-8">
                <Devider {...props} />
            </div>
        </>
    )
}
export default DeviderComponent