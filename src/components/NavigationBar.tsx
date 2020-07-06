import * as React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/Logo';
import './style.scss';


/* Components */
const Button = React.lazy(() => import('./base_component/Button'));

export interface NavigationBarProps {
    isScroll: boolean;
    store: Array<any>;
};
const NavigationBar: React.FC<NavigationBarProps> = ({isScroll = false, store = []}): JSX.Element => (
    <div className={`w-full fixed shadow-lg ${isScroll?`bg-white`:`bg-semi-transparent`}`} id="navbar" /*className={this.state.isScroll?"bg-white":"bg-dark-transparent"}*/ >
        <ul className={`flex items-center flex-wrap pt-12 pb-20 mx-12 border-b-2 border-white lg:flex ${isScroll ? `lg:hidden` : ``}`}>
            <div className="w-1/3 mr-auto flex justify-start">
                <div className="search-input">
                    <label htmlFor="search-input" className="text-white fa fa-search"></label>
                    <input id="search-input" type="text" className="bg-transparent outline-none text-white w-16 ml-3" placeholder="SEARCH" />
                </div>
                <Button
                    className="mr-6 p-0"
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
                    <Logo />
                </NavLink>
            </div>
            <div className="w-1/3 ml-auto flex justify-end">
                <Button
                    className="mr-6 p-0"
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
                    className="p-0 m-0"
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
                    className="mr-6 p-0 m-0"
                    collapse
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
                    <Logo className="w-1/2 mx-auto" />
                </a>
            </div>
            <div className="lg:block hidden">
                {isScroll ? (
                    <Button
                        search
                        className="mr-6 uppercase p-0"
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
                            className={`mr-10 uppercase ${isScroll?"text-dark nav-item-dark":"text-white nav-item"}`}>
                            {data.page}
                        </NavLink>
                    )
                })}
                {isScroll ? (
                    <React.Fragment>
                        <Button
                            className="mr-6 p-0"
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
                            className="mr-6 p-0"
                            color={isScroll?`#232323`:`#FFFFFF`}
                            border={isScroll?`1px solid #232323`:`1px solid #FFFFFF`}
                            height="40px"
                            fontSize="13px"
                            hover={{ color: "#ffffff", backgroundColor:"#208CB2", borderColor:"#208CB2" }}
                            letterSpacing="2px"
                            href="#">
                            BOOK NOW
                        </Button>
                    </React.Fragment>
                ) : null}
            </div>
        </ul>
    </div>
);

NavigationBar.propTypes = {
    isScroll: PropTypes.bool.isRequired,
    store: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default React.memo(NavigationBar);