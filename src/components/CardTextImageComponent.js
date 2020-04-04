import React, { lazy } from 'react'

const CardTextImage = lazy(() => import('./base_component/Card/CardTextImage/CardTextImage'))

const CardTextImageComponent = props => {
    return (
        <>
            <div className="container mx-auto px-4 py-32">
                <CardTextImage {...props} />
            </div>
        </>
    )
}

export default CardTextImageComponent