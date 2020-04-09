import React, { lazy } from 'react'
const HeadingText = lazy(() => import('./base_component/Heading/HeadingText'))

const TextHeadingComponent = props => {
    return (
        <div className="container px-4 mx-auto pt-32 pb-0 heading-text-component">
            {props.properties.map((data, i) => {
                return(
                    <HeadingText key={data.id || i} {...data} />
                )
            })}
        </div>

    )
}
export default TextHeadingComponent