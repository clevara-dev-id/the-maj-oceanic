import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as DataSailing from '../static/sailing';
import { HeadingText } from '../components/base_component/Heading/HeadingText';

const SailingSoon = (props: DataSailing.SailingSoonProps) => {
    return (
        <div id="sailing-soons">
            <section>
                <div style={{ background: '#f3e9e5'}} 
                    className="flex flex-col lg:flex-row xl:flex-row justify-center md:justify-between items-center lg:px-20 py-40 xl:pt-64 lg:pt-64">

                    <div className="container relative mx-auto w-4/5 sm:max-w-md md:max-w-sm lg:max-w-md xl:max-w-lg">
                        <img className=" bg-center h-full w-full md:h-1/2" 
                            src={props.images}
                            alt="image-sailing-soons"
                        />
                        <img className="bg-center absolute w-2/3 top-0 left-0 -ml-8 sm:-ml-20 md:-ml-20 lg:-ml-20 xl:-ml-20" 
                            src={require("../assets/img/sailing/2.png")}
                            alt="img-2"
                        />
                    </div>
                    <div className="container mx-auto mt-20 w-4/5 max-w-full md:max-w-lg sm:max-w-md">
                        <HeadingText
                            headingClassName="capitalize"
                            heading={props.head}
                            text={props.text}
                        />
                        <div className="mt-8">
                            <Link
                                className="body-1 font-light block lg:inline-block xl:inline-block mb-4" to="/contact-us"
                            >
                                Contact Us
                            </Link>
                            <span className="separator mx-8 hidden lg:inline-block xl:inline-block">|</span>
                            <Link
                                className="body-1 font-light block lg:inline-block xl:inline-block" to="/"
                            >
                                Return to the Homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    
})

const mapDispatchToProps = {
    
}

SailingSoon.defaultProps = DataSailing.default;

export default connect(mapStateToProps, mapDispatchToProps)(SailingSoon)
