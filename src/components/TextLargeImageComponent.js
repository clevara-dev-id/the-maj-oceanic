import React, { lazy } from 'react'

const LargeImage = lazy(()=> import('./base_component/LargeImage/LargeImage'))
const HeadingText = lazy(() => import('./base_component/Heading/HeadingText'))

const TextLargeImageComponent = props => {
    return(
        <>
            <div className="container mx-auto px-4 py-32">
                <div className="mb-20" >
                    <HeadingText center caption={false} />
                </div>
                <div>
                    <LargeImage />
                </div>
            </div>
        </>
    )
}
export default TextLargeImageComponent