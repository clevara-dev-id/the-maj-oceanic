import React from 'react'
import PropTypes from 'prop-types'

const HeadBackground = (props) => (
    <div id="head-bg" className="bg-cover bg-no-repeat flex justify-center items-center" style={{
        backgroundImage: `url(${props.bg})`,
        height: "700px"
    }}>
        <div className="border border-solid border-black">    
            <strong>{props.text}</strong>
        </div>
    </div>

)

export default HeadBackground

HeadBackground.propTypes = {
    bg: PropTypes.string,
    text: PropTypes.string,
}