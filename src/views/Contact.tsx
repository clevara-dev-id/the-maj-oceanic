import * as React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import * as DataContact from '../static/contact';

/** Component */
const SliderAwesome = React.lazy(() => import("../components/base/Slider/SliderAwesome"));
const Heading       = React.lazy(() => import('../components/base/Heading/Heading'));
const Breadcrumb    = React.lazy(() => import("../components/BreadcrumbComponent"));

interface S {
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    message: string | undefined;
};
type Evalue = { target: { value: string } };

const DefaultProps = DataContact.default;
export class Contact extends React.Component<DataContact.ContactProps, S> {
    static defaultProps = DefaultProps;
    state: Readonly<S> = {
        name: undefined,
        email: undefined,
        phone: undefined,
        message: undefined,
    };

    onSubmit = () => {
        let value: S;
        value = {...this.state};
    };

    render() {
        return (
            <div id="contact">
                <section>
                    <SliderAwesome isStaticImage={true} store={this.props.slider} />
                </section>

                <section className="text-left px-4 md:px-6 xl:px-0 lg:px-0">
                    <Breadcrumb page="contact us" />
                </section>

                <section>
                    <div className="container flex flex-wrap mx-auto justify-between xl:mt-48 lg:mt-48 mt-10 mb-40 px-4 md:px-6 xl:px-0 lg:px-0" >
                        <div className="w-full px-12 lg:w-1/2 md:w-1/2 mb-12 text-left xl:pt-20 lg:pt-20 md:pt-20">
                            <Heading heading={this.props.title} headingClassName="" />
                            <p className="text-base font-light xl:w-3/5 lg:w-4/5 md:w-11/12">
                                {this.props.text}
                            </p>

                            {_.map(this.props.list, (data, idx) => (
                                <React.Fragment key={idx}>
                                    <h6 className="uppercase font-bold mt-12">{data.title}</h6>
                                    <p className="font-light text-base mt-2">
                                        <a href={_.includes(data.value, "@") ? `mailto:${data.value}`: `tel:${data.value.replace(/\s/g, "")}`}>
                                            {data.value}
                                        </a>
                                    </p>
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="container-form w-full lg:w-1/2 md:w-1/2 bg-white py-20 px-12 text-left shadow-xl">
                            <p className="uppercase font-bold mb-10">make an enquiry</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="mb-5">
                                    <label className="block text-gray-700 mb-2">Name</label>
                                    <input className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        value={this.state.name}
                                        type="text"
                                        name="name"
                                        id="name"
                                        style={{ backgroundColor: "#fafafa" }}
                                        onChange={this._onChangeName}
                                    />
                                </div>

                                <div className="mb-5">
                                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                    <input className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        value={this.state.email}
                                        type="email"
                                        name="mail"
                                        id="mail"
                                        style={{ backgroundColor: "#fafafa" }}
                                        onChange={this._onChangeEmail}
                                    />
                                </div>

                                <div className="mb-5">
                                    <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                                    <input className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        value={this.state.phone}
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        style={{ backgroundColor: "#fafafa" }}
                                        onChange={this._onChangePhone}
                                    />
                                </div>

                                <div className="mb-5">
                                    <label className="block text-gray-700 mb-2" htmlFor="msg">Message</label>
                                    <textarea className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={this.state.message}
                                    name="msg"
                                    id="msg"
                                    cols={30}
                                    onChange={this._onChangeText}
                                    rows={5}></textarea>
                                </div>
                            </form>

                            <button className="uppercase border-2 bg-primary-300 text-white text-base py-2 w-32 hover:bg-transparent hover:border-primary-300 hover:text-primary-300"
                                onClick={this.onSubmit}
                            >
                                submit
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        );
    };

    _onChangeName = (e: Evalue) => {
        this.setState({ name: e.target.value });
    };

    _onChangeEmail = (e: Evalue) => {
        this.setState({ email: e.target.value });
    };

    _onChangePhone = (e: Evalue) => {
        this.setState({ phone: e.target.value });
    };

    _onChangeText = (e: Evalue) => {
        this.setState({ message: e.target.value });
    };
};

const mapStateToProps = (state: any) => ({
    
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
