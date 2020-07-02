import React from 'react'
import '../styles/style.scss'

// import Logo from '../assets/logo.svg'

const SuspenseLoader = props => {
    return(
        <div className="w-full h-screen suspense">
            {/* <img className="m-auto" src={Logo} alt="Logo The MAJ Oceanic" /> */}
            <div className="suspense-backgrounds" />
        </div>
    )
}
export default SuspenseLoader