import React, { lazy, memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import LogoImg from '../assets/logo.svg';
import './style.scss';


/* Components */
const Button = lazy(() => import('./base_component/Button'))

const NavigationBar = memo(({isScroll = false, store = []}) => (
    <div className={`w-full fixed ${isScroll?`bg-white`:`bg-semi-transparent`}`} id="navbar" /*className={this.state.isScroll?"bg-white":"bg-dark-transparent"}*/ >
        <ul className={`flex items-center flex-wrap pt-12 pb-20 mx-12 border-b-2 border-white lg:flex hidden ${isScroll ? `lg:hidden` : ``}`}>
            <div className="w-1/3 mr-auto flex justify-start">
                <div className="search-input">
                    <label htmlFor="search-input" className="text-white fa fa-search"></label>
                    <input id="search-input" type="text" className="bg-transparent outline-none text-white w-16 ml-3" placeholder="SEARCH" />
                </div>
                <Button
                    className="mr-6"
                    padding="0"
                    margin="0"
                    color={isScroll?`#232323`:`#FFFFFF`}
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
                    color={isScroll?`#232323`:`#FFFFFF`}
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
                    color={isScroll?`#232323`:`#FFFFFF`}
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
                    color={isScroll?`#232323`:`#FFFFFF`}
                    border="transparent"
                    height="40px"
                    fontSize="13px"
                    hover={{ color: "#208CB2" }}
                    letterSpacing="2px"
                    href="#">
                </Button>
            </div>
            <div className="mx-auto lg:hidden">
                <a href="/">
                    <img src={LogoImg} alt="logo-the-maj-oceanic" className="w-1/2 mx-auto" />
                </a>
            </div>
            <div className="lg:block hidden">
                {isScroll ? (
                    <Button
                        search
                        className="mr-6 uppercase"
                        padding="0"
                        margin="0"
                        color={isScroll?`#232323`:`#FFFFFF`}
                        border="transparent"
                        height="40px"
                        fontSize="13px"
                        hover={{ color: "#208CB2" }}
                        letterSpacing="2px"
                        href="#"
                    >
                        search
                    </Button>
                ) : null}
                {store.map((data, index) => {
                    return (
                        <NavLink 
                            key={index}
                            to={data.path}
                            className={`mr-10 uppercase ${isScroll?"text-dark nav-item-dark":"text-white nav-item"}`}
                            default={data.id}>
                            {data.page}
                        </NavLink>
                    )
                })}
                {isScroll ? (
                    <Fragment>
                        <Button
                            className="mr-6"
                            padding="0"
                            margin="0"
                            color={isScroll?`#232323`:`#FFFFFF`}
                            border="transparent"
                            height="40px"
                            fontSize="13px"
                            hover={{ color: "#208CB2" }}
                            letterSpacing="2px"
                            href="#">
                            LOGIN
                        </Button>
                        <Button
                            className="mr-6"
                            padding="0"
                            margin="0"
                            color={isScroll?`#232323`:`#FFFFFF`}
                            border={isScroll?`1px solid #232323`:`1px solid #FFFFFF`}
                            height="40px"
                            fontSize="13px"
                            hover={{ color: "#ffffff", backgroundColor:"#208CB2", borderColor:"#208CB2" }}
                            letterSpacing="2px"
                            href="#">
                            BOOK NOW
                        </Button>
                    </Fragment>
                ) : null}
            </div>
        </ul>
    </div>
));

NavigationBar.propTypes = {
    isScroll: PropTypes.bool.isRequired,
    store: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavigationBar;