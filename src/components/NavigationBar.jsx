import React, { Component, lazy } from 'react'
import { connect } from 'react-redux';
import './style.scss'
import { NavLink } from 'react-router-dom'
import rafSchedule from 'raf-schd'
import LogoImg from '../assets/logo.svg'
import { getPages, setPages } from '../redux/action/actionCreators';


/* Components */
const Button = lazy(() => import('./base_component/Button'))

class ConnectNavigationBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isScroll: false
        }

        this.scheduleUpdate = rafSchedule(this.handleScroll);
        
        this.dispatchPages = (a, b) => this.props.dispatchPages(a, b);
    }

    componentDidMount() {
        this._getPages();

        let onScroll = args => this.scheduleUpdate(args);
        window.addEventListener('scroll', function() {
            onScroll(window.scrollY)
        });
    };

    componentWillUnmount() {
        this.scheduleUpdate.cancel();
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.store.length != this.props.store.length 
    // };

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.store.length !== prevProps.store.length) {
    //         this._getPages();
    //     };
    // };

    _getPages = () => (
        getPages()
        .then(res => this.dispatchPages(res.statusText, res.data.pages))
        .catch(err => this.dispatchPages(err.response && err.response.statusText, []))
    );

    handleScroll = (args) => {
        const lastScroll = 100;

        if (args > lastScroll) {
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
                            {this.props.store && this.props.store.map((data) => {
                                return (
                                    <NavLink 
                                        to={data.path}
                                        isActive={(match, location) => {
                                            // console.log("match: "+ JSON.stringify(match),"location: "+ JSON.stringify(location));
                                            if (match) {
                                                console.log(location);
                                            } 
                                        }}
                                        className={`mr-10 uppercase ${this.state.isScroll?"text-dark nav-item-dark":"text-white nav-item"}`}
                                        keyexport default ={data.id}
                                    >
                                        {data.page}
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
};

const mapStateToProps = state => ({
    store: state.occeanic.pages.data,
});

const mapDispatchToProps = dispatch => ({
    dispatchPages: (status, data) => (
        dispatch(setPages(status, data))
    ),
});

const NavigationBar = connect(mapStateToProps, mapDispatchToProps)(ConnectNavigationBar)
export default NavigationBar;