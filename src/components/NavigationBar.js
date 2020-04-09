import React, { Component, lazy } from 'react'
import './style.scss'
// import { NavLink } from 'react-router-dom'

import LogoImg from '../assets/logo.svg'

// import '../css/navbar.css'

/* Components */
const Button = lazy(() => import('../components/base_component/Button'))

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
                    <ul className={`justify-between items-center flex-wrap pt-12 pb-20 mx-12 border-b-2 border-white lg:flex hidden ${this.state.isScroll ? `lg:hidden` : ``}`}>
                        <div className="items-center">
                            <Button
                                className="mr-6"
                                search
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
                                SEARCH
                            </Button>
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
                                THE MAJ GROUP
                            </Button>
                        </div>
                        <div className="items-center">
                            <img src={LogoImg} alt="logo-the-maj-oceanic" />
                        </div>
                        <div className="items-center">
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
                                className=""
                                padding="0"
                                margin="0"
                                color={this.state.isScroll?`#232323`:`#FFFFFF`}
                                border="2px solid #FFFFFF"
                                height="40px"
                                fontSize="13px"
                                hover={{ color: "#208CB2" }}
                                letterSpacing="2px"
                                href="#"
                            >
                                BOOK
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
                            <img src={LogoImg} alt="logo-the-maj-oceanic" />
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
                                    <Button
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
                                        key={data.id}
                                    >
                                        {data.name}
                                    </Button>
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
                                        border={this.state.isScroll?`2px solid #232323`:`2px solid #FFFFFF`}
                                        height="40px"
                                        fontSize="13px"
                                        hover={{ color: "#208CB2" }}
                                        letterSpacing="2px"
                                        href="#"
                                    >
                                        BOOK
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