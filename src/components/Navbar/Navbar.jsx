import PropTypes from "prop-types";
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'
import SearchBlack from '../../assets/icons/searchBlack.svg'
import Logo from '../../assets/logo.svg'

import Button from '../base_component/Button'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            localStore: [],
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.store !== prevState.localStore) {
            return {
                localStore: nextProps.store,
            }
        }
        return null
    }
    
    render() {
        const { localStore } = this.state
        const onHover = {
            backgroundColor: "transparent",
            opacity: 0.6,
            transition: "opacity .3s"
        }
        const onClick = (args) => {
            alert(`clicked ${args}`)
        }
        
        return (
            <nav id="nav" className={`lg:max-w-screen-4k md:max-w-screen-md w-screen h-auto fixed flex flex-col px-12 z-10 mx-auto ${this.props.navbarChange? "scroll-active": null}`}>
                <div className={`nav-top sm:hidden flex-grow lg:flex lg:w-auto mt-16 mb-32 ${this.props.navbarChange? "scroll-active": null}`}>
                    <div className="w-1/4 flex-grow lg:flex items-center h-20">
                        <Button
                            search
                            className="
                                box-border
                                flex
                                items-center
                                justify-around
                                lg:w-32
                                h-10
                                text-white
                                uppercase
                                tracking-widest
                                focus:outline-none
                                lg:mr-2
                            "
                            hover={onHover}
                            onClick={() => onClick("search")}
                        >
                            search
                        </Button>
                        <Button
                            className="
                                box-border
                                bg-transparent
                                text-white
                                uppercase
                                lg:px-5
                                py-2
                                focus:outline-none
                            "
                            hover={onHover}
                            onClick={() => onClick("the maj group")}
                        >
                            the maj group
                        </Button>
                    </div>

                    <div className="w-1/2 h-20">
                        <div className="bg-cover bg-center bg-no-repeat mx-auto" style={{backgroundImage: `url(${Logo})`, width: "450px", height: "80px"}} />
                    </div>

                    <div className="w-1/4 h-20 flex-grow lg:flex items-center justify-end">
                        <Button
                            className="
                                box-border
                                bg-transparent
                                text-white
                                uppercase
                                py-2
                                px-8
                                focus:outline-none
                            "
                            hover={onHover}
                            onClick={() => onClick("login")}
                        >
                            login
                        </Button>
                        <Button
                            className="
                                border-2 border-solid border-black
                                box-border
                                bg-transparent
                                border-solid
                                border-white
                                text-white
                                uppercase
                                ml-6
                                px-5
                                pt-2
                                pb-3
                                focus:outline-none"
                            hover={onHover}
                            onClick={() => onClick("book now")}
                        >
                            book now
                        </Button>
                    </div>
                </div>

                <div className={`nav-list sm:mt-20 lg:max-w-screen-4k md:max-w-screen-lg lg:w-auto border border-solid border-white flex items-center justify-center lg:px-12 md:px-6 h-24 ${this.props.navbarChange? "scroll-active": null}`}>
                        <Button search 
                            className="
                            flex
                            items-center
                            justify-around
                            bg-transparent
                            lg:w-32
                            h-10
                            uppercase
                            tracking-widest
                            focus:outline-none
                            text-black
                            font-bold mr-4"
                            iconSearch={SearchBlack}
                            hover={onHover}
                            onClick={() => onClick("navlist search")}
                        >
                            search
                        </Button>

                        <div className="w-full h-auto flex flex-wrap">
                            {localStore.length && localStore.map((data) => {
                                return (
                                    <NavLink key={data.id} to={data.to} className="flex-grow text-center uppercase font-bold">
                                        {data.name}
                                    </NavLink>
                                )
                            })}
                        </div>

                        <Button
                            className="box-border bg-transparent uppercase focus:outline-none text-black font-bold mx-4"
                            hover={onHover}
                            onClick={() => onClick("navlist login")}
                        >
                            login
                        </Button>

                        <Button
                            className="
                            bg-transparent
                            border-2
                            border-solid
                            border-black
                            uppercase
                            px-5
                            pt-2
                            pb-3
                            focus:outline-none
                            text-black
                            font-bold
                            whitespace-no-wrap"
                            hover={onHover}
                            onClick={() => onClick("navlist book now")}
                        >
                            book now
                        </Button>
                </div>
                <div>

                </div>
            </nav>
        )
    }
}

Navbar.defaultProps = {
    store: [{
        id: 1,
        name: "the vessel",
        to: "/"
    },{
        id: 2,
        name: "voyages",
        to: "#voyages"
    },{
        id: 3,
        name: "dining",
        to: "#dining"
    },{
        id: 4,
        name: "activities",
        to: "#activities"
    },{
        id: 5,
        name: "occasions",
        to: "#occasions"
    },{
        id: 6,
        name: "offers",
        to: "#offers"
    },{
        id: 7,
        name: "destinations",
        to: "#destinations"
    }]
}

Navbar.propTypes = {
  navbarChange: PropTypes.bool.isRequired,
  store: PropTypes.arrayOf(PropTypes.object).isRequired,
}


