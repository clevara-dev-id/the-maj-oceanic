import React, { Component, lazy, useState } from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import $ from 'jquery';

import Button from '../../Button'
import logo from '../../../../assets/icons/footer/logooceanic.svg';
import logoFacebook from '../../../../assets/icons/footer/logo-facebook.svg';
import logoInstagram from '../../../../assets/icons/footer/logo-instagram.svg';
import logoTwitter from '../../../../assets/icons/footer/logo-twitter.svg';
import theMajExperience from '../../../../assets/icons/footer/the-maj-experience.svg';
import theMajGroup from '../../../../assets/icons/footer/the-maj-group.svg';
import './footerdesktop.css';


const FooterDesktop = props => {
    // const [title,setTitle]=useState('');
    // const [name,setName]=useState('');
    // const [email,setEmail]=useState('');
    // const [errors,setError]=useState({});
    const nameValidation = () => {
        let valueInput, text, formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("grid-full-name").value;
          
        // If x is Not a Number or less than one or greater than 10
        if (!valueInput) {
          text = "Name cannot be empty !";
          formIsValid=false;
        } 
        else {
          text = "";
        }
        document.getElementById("errorValueName").innerHTML = text;
        return formIsValid;
    }

    const emailValidation = () => {
        let valueInput, text="", formIsValid=true;
      
        // Get the value of the input field with id="numb"
        valueInput = document.getElementById("grid-email").value;
        if (!valueInput) {
            text = "e-Mail cannot be empty !";
            formIsValid=false;
        }
        else if(typeof valueInput !== "undefined"){
            let lastAtPos = valueInput.lastIndexOf('@');
            let lastDotPos = valueInput.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && valueInput.indexOf('@@') == -1 && lastDotPos > 2 && (valueInput.length - lastDotPos) > 2)) {
                text = "Invalid Format";
                formIsValid=false;
            }
        }
  
        document.getElementById("errorValueEmail").innerHTML = text;
        return formIsValid;
    }

    const onClickHandle = () => {
        let formIsValid= true;
        if(emailValidation()===false){
            formIsValid=false;
        }
        if(nameValidation()===false){
            formIsValid=false;
        }
        return formIsValid;
    }

    $(document).ready(()=> {
        $("#buttonFormFooter").click(()=>{
            if(onClickHandle()){
                $("#buttonFormFooter").attr("onclick",props.onClickButton);
            }

        });
    });

    return (
        <>
        <div className="container" id="footerdesktop">
            <div className="grid grid-cols-1" id="rowfooterdesktop">
                <div className="grid grid-cols-12">
                    <div className="col-span-3">
                        <div className="grid grid-rows-1"><img src={logo} width="177px" height="31px" /></div>
                        <div className="grid grid-rows-1">
                            <div className="grid grid-cols-3" id="logopartfooter">
                                <div><img src={logoFacebook} width="15px" height="15px" /></div>
                                <div><img src={logoInstagram} width="15px" height="15px" /></div>
                                <div><img src={logoTwitter} width="15px" height="15px"  /></div>
                            </div>
                        </div>
                        <div className="grid grid-rows-1" id="partoffooter"><PARTOFH5>PART OF</PARTOFH5></div>
                        <div className="grid grid-rows-1">
                            <div className="grid grid-cols-2">
                                <div><img src={theMajExperience} width="73px" height="38px" /></div>
                                <div><img src={theMajGroup} width="78px" height="43px" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-rows-1"><TitleCol>Join Our Family</TitleCol></div>
                        <div className="grid grid-rows-1" id="childOurFamily"><DivTitleSecondCol>Careers</DivTitleSecondCol></div>
                        <div className="grid grid-rows-1"><DivTitleSecondCol>Investor</DivTitleSecondCol></div>
                    </div>
                    <div className="col-span-3">
                        <div className="grid grid-rows-1"><TitleCol>Explore Our World</TitleCol></div>
                        <div className="grid grid-rows-1" id="childOurFamily"><DivTitleSecondCol>Contact Us</DivTitleSecondCol></div>
                        <div className="grid grid-rows-1"><DivTitleSecondCol>Ancora Capital Management</DivTitleSecondCol></div>
                        <div className="grid grid-rows-1"><DivTitleSecondCol>Media Center</DivTitleSecondCol></div>
                        <div className="grid grid-rows-1"><DivTitleSecondCol>Privacy</DivTitleSecondCol></div>
                        <div className="grid grid-rows-1"><DivTitleSecondCol>Terms and Conditions</DivTitleSecondCol></div>
                    </div>
                    <div className="col-span-4">
                        <div className="grid grid-rows-1"><TitleCol>Subscribe For Exclusive News {`&`} Offers</TitleCol></div>
                        <div className="grid grid-rows-1" id="childOurFamily">
                            <div className="grid grid-cols-12 gap-2" id="firstrowform">
                                <div className="col-span-4">
                                    <div className="relative">
                                        <select className="block appearance-none w-full bg-gray-200 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option selected="true" disabled="disabled" className="titleformselect" placeholder="Title">Title</option>
                                        <option value="mr" onClick={props.onClickTitle}>Mr.</option>
                                        <option value="ms" onClick={props.onClickTitle}>Ms.</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-8">
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="grid-full-name" 
                                    type="text" 
                                    placeholder="Fullname"
                                    onChange={props.onChangeName}
                                    onBlur={()=>{nameValidation()}}
                                    />
                                    <p id="errorValueName" class="text-red-500 text-xs italic"></p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-rows-1" id="secondrowrform">
                            <div className="col-span-12">
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-email" 
                                type="text" 
                                placeholder="Email Address"
                                onChange={props.onChangeEmail}
                                onBlur={()=>{emailValidation()}}
                                />
                                <p id="errorValueEmail" class="text-red-500 text-xs italic"></p>
                            </div>
                        </div>
                        <div className="grid grid-rows-1" id="buttonrowrform">
                            <Button 
                                id="buttonFormFooter"
                                className="btn-2" small >
                                    SUBSRIBE
                                </Button>
                        </div>
                        <div className="grid grid-rows-1" id="creditrowrform">
                            <div className="grid grid-cols-12">
                                <div className="col-span-11">
                                    By entering your details you consent to be contacted via email by The MAJ Group with offers and updates. 
                                    To opt out, use the unsubscribe link or email unsubsribe@themajgroup.com.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{color : "white"}}>
                    <div className="grid grid-cols-12" id="copyrightfooter">
                        <div className="col-span-11">
                            Copyright 2020 All right reserved 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

const PARTOFH5 = styled.h6`
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    line-height: 36px;

    /* identical to box height, or 400% */
    letter-spacing: 3px;
    text-transform: uppercase;


    color: #FFFFFF;
`;

const TitleCol = styled.h5`
    font-style: normal;
    font-weight: bold;
    font-size: 11px !important;
    line-height: 16px;

    /* identical to box height, or 133% */
    letter-spacing: 3px;
    text-transform: uppercase;

    /* white */
    color: #FFFFFF;
`;

const DivTitleSecondCol = styled.div`
    font-size: 16px;
    line-height: 26px;

    /* identical to box height, or 162% */

    /* white */
    color: #FFFFFF;
`;

FooterDesktop.propTypes = {
    onClickTitle  : PropTypes.func,
    onChangeName  : PropTypes.func,
    onChangeEmail : PropTypes.func,
    onClickButton : PropTypes.func
}

export default FooterDesktop;