import React, { Component, lazy } from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'

import LogoImg from '../assets/logo.svg'

// import '../css/navbar.css'

/* Components */
const Button = lazy(() => import('./base_component/Button'))

export default class NavigationBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isScroll: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let lastScroll = 100;
        const currentScroll = window.scrollY;
        // console.log(window.scrollY)
        if (currentScroll > lastScroll) {
            this.setState({ isScroll: true });
        } else if (this.state.isScroll) {
            this.setState({ isScroll: false });
        }
    }

    render() {
        return (
            <>
                <div className={`w-full fixed ${this.state.isScroll?`bg-white`:`bg-semi-transparent`}`} id="navbar" /*className={this.state.isScroll?"bg-white":"bg-dark-transparent"}*/ >
                    <ul className={`flex items-center flex-wrap pt-12 pb-20 mx-12 border-b-2 border-white lg:flex hidden ${this.state.isScroll ? `lg:hidden` : ``}`}>
                        <div className="w-1/3 mr-auto flex justify-start">
                            <div className="search-input">
                                <label for="search-input" className="text-white fa fa-search"></label>
                                <input id="search-input" type="text" className="bg-transparent outline-none text-white w-16 ml-3" placeholder="SEARCH" />
                            </div>
                            <Button
                                className="mr-6"
                                padding="0"
                                margin="0"
                                color={this.state.isScroll?`#232323`:`#FFFFFF`}
                                border="transparent"
                                height="40px"
                                fontSize="13px"
                                hover={{ color: "#ffffff" }}
                                letterSpacing="2px"
                                href="#"
                            >
                                THE MAJ GROUP
                            </Button>
                        </div>
                        <div className="mx-auto">
                            <NavLink to="/" >
                                <img src={LogoImg} alt="logo-the-maj-oceanic" />
                            </NavLink>
                        </div>
                        <div className="w-1/3 ml-auto flex justify-end">
                            <Button
                                className="mr-6"
                                padding="0"
                                margin="0"
                                color={this.state.isScroll?`#232323`:`#FFFFFF`}
                                border="transparent"
                                height="40px"
                                fontSize="13px"
                                hover={{ color: "#ffffff" }}
                                letterSpacing="2px"
                                href="#"
                            >
                                LOGIN
                            </Button>
                            <Button
                                className=""
                                padding="0"
                                margin="0"
                                color={this.state.isScroll?`#232323`:`#FFFFFF`}
                                border="1px solid #FFFFFF"
                                height="40px"
                                fontSize="13px"
                                hover={{ color: "#208CB2", backgroundColor:"#ffffff" }}
                                letterSpacing="2px"
                                href="#"
                            >
                                BOOK NOW
                            </Button>
                        </div>
                    </ul>



                    <ul className="flex lg:justify-center items-center flex-wrap my-5 uppercase">
                        <div className="absolute lg:hidden">
                            <Button
                                className="mr-6"
                                collapse
                                padding="0"
                                margin="0"
                                color={this.state.isScroll?`#232323`:`#FFFFFF`}
                                border="transparent"
                                height="40px"
                                fontSize="13px"
                                hover={{ color: "#208CB2" }}
                                letterSpacing="2px"
                                href="#">
                            </Button>
                        </div>
                        <div className="mx-auto lg:hidden">
                            <a href="/"><img src={LogoImg} alt="logo-the-maj-oceanic" className="w-1/2 mx-auto" /></a>
                        </div>
                        <div className="lg:block hidden">
                            {this.state.isScroll ? (
                                <>
                                    <Button
                                        search
                                        className="mr-6 uppercase"
                                        padding="0"
                                        margin="0"
                                        color={this.state.isScroll?`#232323`:`#FFFFFF`}
                                        border="transparent"
                                        height="40px"
                                        fontSize="13px"
                                        hover={{ color: "#208CB2" }}
                                        letterSpacing="2px"
                                        href="#"
                                    >
                                        search
                                    </Button>
                                </>
                            ) : null}
                            {this.props.store.map((data) => {
                                return (
                                    <NavLink to={data.link}
                                        className={`mr-10 uppercase ${this.state.isScroll?"text-dark nav-item-dark":"text-white nav-item"}`}
                                        key={data.id}
                                    >
                                        {data.name}
                                    </NavLink>
                                )
                            })}
                            {this.state.isScroll ? (
                                <>
                                    <Button
                                        className="mr-6"
                                        padding="0"
                                        margin="0"
                                        color={this.state.isScroll?`#232323`:`#FFFFFF`}
                                        border="transparent"
                                        height="40px"
                                        fontSize="13px"
                                        hover={{ color: "#208CB2" }}
                                        letterSpacing="2px"
                                        href="#"
                                    >
                                        LOGIN
                                    </Button>
                                    <Button
                                        className="mr-6"
                                        padding="0"
                                        margin="0"
                                        color={this.state.isScroll?`#232323`:`#FFFFFF`}
                                        border={this.state.isScroll?`1px solid #232323`:`1px solid #FFFFFF`}
                                        height="40px"
                                        fontSize="13px"
                                        hover={{ color: "#ffffff", backgroundColor:"#208CB2", borderColor:"#208CB2" }}
                                        letterSpacing="2px"
                                        href="#"
                                    >
                                        BOOK NOW
                                    </Button>
                                </>
                            ) : null}
                        </div>
                    </ul>
                </div>
            </>
        )
    }
}