import React, { lazy } from 'react'

const CardTextImage = lazy(() => import('./base_component/Card/CardTextImage/CardTextImage'))

const CardTextImageComponent = props => {
    return (
        <>
            <div className="container mx-auto px-4 py-32">
                {props.properties.map((data) => {
                    return(
                        <CardTextImage key={data.id} {...data} />
                    )
                })}
            </div>
        </>
    )
}

export default CardTextImageComponent