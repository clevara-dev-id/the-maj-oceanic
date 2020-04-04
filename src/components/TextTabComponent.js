import React, { lazy } from 'react'

const HeadingText = lazy(() => import('./base_component/Heading/HeadingText'))
const Tabs = lazy(() => import('./base_component/Tab/Tabs'))
const CardTextImageSmall = lazy(() => import('./base_component/Card/CardTextImage/CardTextImageSmall'))

const TextTabComponent = props => {
    return (
        <>
            <div className="container px-4 mx-auto py-32 text-tabs-component">
                <div className="mb-20" >
                    <HeadingText center caption={false} />
                </div>
                <Tabs>
                    <div label="Tabs 1">
                        <CardTextImageSmall caption={false} heading="Tabs 1" />
                    </div>
                    <div label="Tabs 2">
                        <CardTextImageSmall caption={false} heading="Tabs 2" /> 
                    </div>
                </Tabs>
            </div>
        </>
    )
}
export default TextTabComponent