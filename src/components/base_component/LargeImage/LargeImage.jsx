import React from 'react'

const LargeImage = props => {
    return(
        <>
            <img className="w-full h-auto" src={props.images} alt={props.alt || 'example'} />
        </>
    )
}
export default LargeImage