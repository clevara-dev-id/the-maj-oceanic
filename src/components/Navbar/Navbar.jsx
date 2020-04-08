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
            textColor: "text-white",
            margin: "ml-32 mr-32",
            navList: {
                bgColor: "",
            }
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

    componentDidUpdate(prevProps) {
        if (this.props.navbarChange !== prevProps.navbarChange) {
            if (this.state.textColor === "text-white") {
                this.setState({
                    textColor: "text-black",
                    margin: "",
                    navList: {
                        bgColor: "bg-white"
                    },
                })
            } else {
                this.setState({
                    textColor: "text-white",
                    margin: "ml-32 mr-32",
                    navList: {
                        bgColor: "",
                    }
                })
            }
        }
    }
    
    render() {
        const { textColor, margin, navList, localStore } = this.state
        const onHover = {
            backgroundColor: "transparent",
            opacity: 0.6,
            transition: "opacity .3s"
        }
        
        return (
            <nav className="w-full h-auto fixed px-12 z-10" style={{
                backgroundColor: "rgba(47, 46, 46, 0.35)",
                transform: `translateY(${this.props.navbarChange? "-275px": "0"})`,
                transition: "transform 1s",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
            }}>
                <div className="mx-auto flex mt-16 mb-32" style={{
                    opacity: this.props.navbarChange? 0: 1,
                    transform: `scale(${this.props.navbarChange? "0.9,0.9": 1})`,
                    transition: "opacity .5s, transform 1s",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
                }}>
                    <div className="w-1/4 flex items-center h-20">
                        <Button
                            search
                            className="
                                box-border
                                flex
                                items-center
                                justify-around
                                w-32
                                h-10
                                text-white
                                uppercase
                                tracking-widest
                                focus:outline-none
                                mr-2
                            "
                            hover={onHover}
                        >
                            search
                        </Button>
                        <Button
                            className="
                                box-border
                                bg-transparent
                                text-white
                                uppercase
                                px-5
                                py-2
                                focus:outline-none
                            "
                            hover={{
                                backgroundColor: "transparent",
                                opacity: 0.6,
                                transition: "opacity .3s"
                            }}
                        >
                            the maj group
                        </Button>
                    </div>

                    <div className="w-1/2 h-20">
                        <div className="bg-cover bg-center bg-no-repeat mx-auto" style={{backgroundImage: `url(${Logo})`, width: "450px", height: "80px"}} />
                    </div>

                    <div className="w-1/4 h-20 flex items-center justify-end">
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
                                focus:outline-none
                            "
                            hover={onHover}
                        >
                            book now
                        </Button>
                    </div>
                </div>

                <div id="nav-list" className={`border-t border-solid border-white flex items-center px-12 h-24 ${navList.bgColor}`} style={{
                    maxHeight: "100px",
                    transform: `scale(${this.props.navbarChange? "1.05": 1})`,
                    transition: "transform 1s",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
                }}>
                    <div className={`w-1/6 ${!this.props.navbarChange? "hidden": "block"}`}>
                        <Button
                            search
                            className={`
                                box-border
                                flex
                                items-center
                                justify-around
                                bg-transparent
                                w-32
                                h-10
                                uppercase
                                tracking-widest
                                focus:outline-none
                                text-black
                                font-bold
                            `}
                            iconSearch={SearchBlack}
                            hover={onHover}
                        >
                            search
                        </Button>
                    </div>

                    <div className={`flex w-full justify-between ${margin}`}>
                        {localStore.length && localStore.map((data) => {
                            return (
                                <NavLink key={data.id} to={data.to} className={`uppercase font-bold ${textColor}`}>
                                    {data.name}
                                </NavLink>
                            )
                        })}
                    </div>

                    <div className={`w-1/4 flex items-center justify-end ${!this.props.navbarChange? "hidden": "block"}`}>
                        <Button
                            className="
                                box-border
                                bg-transparent
                                uppercase
                                py-2
                                px-8
                                focus:outline-none
                                text-black
                                font-bold"
                            hover={onHover}
                        >
                            login
                        </Button>
                        <Button
                            className="
                            box-border
                            bg-transparent
                            border-2
                            border-solid
                            border-black
                            uppercase
                            ml-6
                            px-5
                            pt-2
                            pb-3
                            focus:outline-none
                            text-black
                            font-bold"
                            hover={onHover}
                        >
                            book now
                        </Button>
                    </div>
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


