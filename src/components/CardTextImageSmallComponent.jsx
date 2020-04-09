import React, { lazy } from 'react'

const CardTextImageSmall = lazy(() => import('./base_component/Card/CardTextImage/CardTextImageSmall'))

const CardTextImageSmallComponent = props => {
    return (
        <>
            <div className="container mx-auto px-4 py-32">
                {props.properties.map((data) =>{
                    return(
                        <CardTextImageSmall key={data.id} {...data} />
                    )
                })}
            </div>
        </>
    )
}

export default CardTextImageSmallComponent