import React, { lazy } from 'react'
const Button = lazy(() => import('./base_component/Button'))

const SingleButtonComponent = props => {
    return(
        <>
            <div className="container mx-auto pt-10 pb-40 text-center">
                <Button className="btn-2 mx-auto" small outline>{props.buttonName}</Button>
            </div>
        </>
    )
}
export default SingleButtonComponent