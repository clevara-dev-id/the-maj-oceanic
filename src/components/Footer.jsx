import React, { lazy } from 'react'
import { Link } from 'react-router-dom'
import ImgLogo from '../assets/logo.svg'
import ImgLogoXp from '../assets/logo_the_maj_experience.svg'
import ImgLogoG from '../assets/logo_the_maj_group.svg'
import './style.scss'
const Button = lazy(() => import('./base_component/Button')) 

const Footer = props => {
    return (
        <div className="w-100 bg-dark">
            <div className="container mx-auto px-4 pt-16 pb-24">
                <div className="flex flex-wrap">
                    <div className="lg:w-1/4 w-full">
                        <img src={ImgLogo} alt="Logo The MAJ Oceanic" />
                        <div className="text-white mt-8 mb-10 lg:mb-24">
                            <i className="fa fa-instagram mr-5"></i>
                            <i className="fa fa-facebook mr-5"></i>
                            <i className="fa fa-twitter mr-5"></i>
                        </div>
                        <div>
                            <h6 className="text-white mb-3">PART OF</h6>
                            <div className="flex">
                                <img className="mr-8" src={ImgLogoXp} alt="logo the maj experience" />
                                <img className="mr-8" src={ImgLogoG} alt="logo the maj group" />
                            </div>
                        </div>
                    </div>
                    <div className="border-b-2 border-white my-10 w-full lg:hidden"></div>
                    <div className="text-white lg:w-1/5 lg:mb-0 w-full mb-10">
                        <h5 className="mb-6 text-white">JOIN OUR FAMILY</h5>
                        <ol>
                            <li className="mb-2">
                                <Link to="#" >Careers</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="#" >Investors</Link>
                            </li>
                        </ol>

                    </div>
                    <div className="text-white lg:w-1/5 w-full mb-10 lg:mb-0">
                        <h5 className="mb-6 text-white">EXPLORE OUR WORLD</h5>
                        <ol>
                            <li className="mb-2">
                                <Link to="#" >Contact Us</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="#" >Ancora Capital Management</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="#" >Media Center</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="#" >Privacy</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="#" >Terms and Conditions</Link>
                            </li>
                        </ol>
                    </div>
                    <div className="lg:w-1/3 w-full">
                        <div className="grid grid-rows-1 mb-6"><h5 className="text-white">Sign up for news {`&`} Offers</h5></div>
                        <div className="grid grid-rows-1" id="childOurFamily">
                            <div className="grid grid-cols-12 gap-2 mb-4" id="firstrowform">
                                <div className="col-span-4">
                                    <div className="relative">
                                        <select defaultValue="Title" className="block appearance-none w-full bg-gray-200 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option disabled="disabled" className="titleformselect" placeholder="Title">Title</option>
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
                                    id="grid-last-name" 
                                    type="text" 
                                    placeholder="Fullname"
                                    value={props.valueName}
                                    onChange={props.onChangeName}
                                    onBlur={props.onBlurName}
                                    />
                                    {(props.nameError) ? <p className="text-red-500 text-xs italic">{props.nameError}</p> : ""}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-rows-1 mb-4" id="secondrowrform">
                            <div className="col-span-12">
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-last-name" 
                                type="text" 
                                placeholder="Email Address"
                                value={props.valueEmail}
                                onChange={props.onChangeEmail}
                                onBlur={props.onBlurEmail}
                                />
                                {(props.emailError) ? <p className="text-red-500 text-xs italic">{props.emailError}</p> : ""}
                            </div>
                        </div>
                        <div className="grid grid-rows-1 mb-4" id="buttonrowrform">
                        <Button
                            className="w-32 btn-2 bg-white uppercase"
                            padding="0"
                            margin="0"
                            color="#232323"
                            border="transparent"
                            height="40px"
                            fontSize="13px"
                            hover={{ color: "#208CB2" }}
                            letterSpacing="2px"
                            href="#"
                        >
                            SUBSCRIBE
                        </Button>
                        </div>
                        <div className="grid grid-rows-1" id="creditrowrform">
                            <div className="grid grid-cols-12">
                                <div className="col-span-11 text-white">
                                    By entering your details you consent to be contacted via email by the Maj group with offers
                                    and updates. To opt out, use the unsubscribe link or email unsubscribe@themaj.com.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-10 text-center">
                <p className="text-white">Copyright &copy; 2020 All right reserved</p>
            </div>
        </div>
    )
}
export default Footer