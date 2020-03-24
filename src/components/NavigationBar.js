import React, { Component, lazy } from 'react'
import styled from 'styled-components'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import LogoImg from '../assets/logo.svg'

// import '../css/navbar.css'

/* Components */
const Button = lazy(() => import('../components/base_component/Button'))

export default class NavigationBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            isScroll:false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let lastScroll = 100;
        const currentScroll = window.scrollY;
        console.log(window.scrollY)
        if(currentScroll > lastScroll){
            this.setState({isScroll:true});
        }else if(this.state.isScroll){
            this.setState({isScroll:false});
        }
    }

    render(){
        return(
            <>
                <Container id="navbar" /*className={this.state.isScroll?"bg-white":"bg-dark-transparent"}*/ >
                    <NavHead 
                        className={this.state.isScroll?"hide":"show"}
                    >
                        <Navbar style={{padding: "0 50px"}}>
                            <Nav className="justify-content-start">
                                <Button 
                                    search 
                                    padding="0" 
                                    margin="0" 
                                    color="#FFFFFF" 
                                    border="transparent" 
                                    width="107px" 
                                    height="40px" 
                                    fontSize="13px"
                                    hover={{color: "#FFFFFF"}}
                                    letterSpacing="2px"
                                >
                                    search 
                                </Button>
                                <Button 
                                    padding="0" 
                                    margin="0" 
                                    color="#FFFFFF" 
                                    border="transparent" 
                                    width="155px" 
                                    height="40px" 
                                    fontSize="13px"
                                    hover={{color: "#FFFFFF"}}
                                >
                                    THE MAJ GROUP
                                </Button>
                            </Nav>
                            <Navbar.Brand className="mx-auto" href="/">
                                <Img src={LogoImg} alt="Logo The Maj Group" />
                            </Navbar.Brand>
                            <Nav className="justify-content-end">
                                <Button color="#FFFFFF" hover={{color: "#FFFFFF"}} fontSize="13px" width="120px" height="40px">
                                    Login
                                </Button>
                                <Button  color="#FFFFFF" hover={{color: "#FFFFFF"}} fontSize="13px" width="120px" height="40px" border="1px solid #FFFFFF">
                                    Book Now
                                </Button>
                            </Nav>
                        </Navbar>
                    </NavHead>
                    <NavBottom 
                        className={this.state.isScroll?"border-none":"border-top-1"}
                    >
                        <div style={{borderTop: "1px solid #FFFFFF", margin: "0 50px", paddingTop: "", height: "50px"}}>
                            <NavBottomContainer>
                                <Button 
                                    search 
                                    padding="0" 
                                    margin="0" 
                                    color="#FFFFFF" 
                                    border="transparent" 
                                    width="107px" 
                                    fontSize="13px"
                                    hover={{color: "#FFFFFF"}}
                                    letterSpacing="2px"
                                    visibility="hidden"
                                >
                                    search 
                                </Button>
                                <NavItemLink to="#"> the viesel </NavItemLink>
                                <NavItemLink to="#"> voyages </NavItemLink>
                                <NavItemLink to="#"> dining </NavItemLink>
                                <NavItemLink to="#"> activities </NavItemLink>
                                <NavItemLink to="#"> occasions </NavItemLink>
                                <NavItemLink to="#"> offers </NavItemLink>
                                <NavItemLink to="#"> destinations </NavItemLink>
                                <Button 
                                    color="#FFFFFF" 
                                    hover={{color: "#FFFFFF"}} 
                                    fontSize="13px" 
                                    width="120px"
                                    height="40px"
                                    padding="0" 
                                    margin="0"
                                    display="none"
                                >
                                    Login
                                </Button>
                                <Button 
                                    color="#FFFFFF" 
                                    hover={{color: "#FFFFFF"}} 
                                    fontSize="13px" 
                                    width="120px"
                                    height="40px"
                                    border="1px solid #FFFFFF"
                                    padding="0" 
                                    margin="0"
                                    visibility="hidden"
                                >
                                    Book Now
                                </Button>
                            </NavBottomContainer>
                        </div>
                    </NavBottom>
                </Container>
            </>
        )
    }
}
const Container = styled.div`
    width:100%;
    height:auto;
    position:fixed;
    z-index:9;
    background: rgba(47, 46, 46, 0.35);
`;
const NavHead = styled.div`
    max-width:1337px;
    width:100%;
    margin: 45px auto 100px auto;
`;
const NavBottom = styled.div`
    max-width:1337px;
    width: 100%;
    margin-bottom:34px;
    margin-left:auto;
    margin-right:auto;
    padding-top:25px;
`;
const NavBottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    // max-width:848px;
    width:100%;
    margin-bottom:34px;
    margin-left:auto;
    margin-right:auto;
`;
const Img = styled.img`
    width:318.83px;
`;

const NavItemLink = styled(NavLink)({
    alignSelf: "center",
    color: "#FFFFFF",
    fontFamily: "Verlag",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "13px",
    lineHeight: "18px",
    textTransform: "uppercase",
})