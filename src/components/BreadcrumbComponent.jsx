import React from 'react'
import {Link} from 'react-router-dom'

const Breadcrumb = props => {
    return(
        <div className="container mx-auto px-4 py-8 breadcrumb">
            <h5 className="uppercase text-primary">
                <Link to="/" className="text-gray-500">home</Link>
                /
                {props.page}
            </h5>
        </div>
    )
}
export default Breadcrumb