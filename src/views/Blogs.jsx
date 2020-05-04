import React, { lazy } from 'react'
const BlogComponent = lazy(() => import('../components/BlogComponent'))

const Blogs = props => {
    return(
        <BlogComponent />
    )
}
export default Blogs