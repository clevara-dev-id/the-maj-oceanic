import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as DataSailing from '../static/sailing';
import { HeadingText } from '../components/base_component/Heading/HeadingText';

const SailingSoon = (props: DataSailing.SailingSoonProps) => {
    return (
        <div id="sailing-soons">
            <section className="flex flex-col lg:flex-row xl:flex-row md:flex-row justify-center md:justify-between items-center lg:px-20 py-40 xl:pt-64 lg:pt-64">
                <div className="container relative mx-auto w-4/5 sm:max-w-md md:max-w-sm lg:max-w-md xl:max-w-lg lg:mr-12 md:mr-6 md:px-4">
                    <img className="bg-center h-full w-full" 
                        src={props.images}
                        alt="image-sailing-soons"
                    />
                    <img className="bg-center absolute w-2/3 top-0 left-0 -ml-20 lg:-ml-24 xl:-ml-32" 
                        src={require("../assets/img/sailing/2.png")}
                        alt="img-2"
                    />
                </div>

                <div className="container mx-auto mt-20 w-4/5 max-w-full md:max-w-lg sm:max-w-md">
                    <HeadingText
                        headingClassName="capitalize text-left"
                        heading={props.head}
                        textClassName="w-full text-left font-light"
                        text={props.text}
                    />
                    <div className="mt-8 flex flex-col items-start xl:flex-row lg:flex-row md:flex-row">
                        <Link
                            className="body-1 font-light block lg:inline-block xl:inline-block mb-4" to="/contact-us"
                        >
                            Contact Us
                        </Link>
                        <span className="separator mx-8 hidden md:inline-block lg:inline-block xl:inline-block">|</span>
                        <Link
                            className="body-1 font-light block lg:inline-block xl:inline-block" to="/"
                        >
                            Return to the Homepage
                        </Link>
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
