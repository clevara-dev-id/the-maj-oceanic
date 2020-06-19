import * as React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import * as DataSpec from '../static/spec';

import SliderAwesome from '../components/base_component/Slider/SliderAwesome/SliderAwesome';
import Tabs from '../components/base_component/Tab/Tabs';
import { HeadingText } from '../components/base_component/Heading/HeadingText';
import LargeImage from '../components/base_component/LargeImage/LargeImage';
import Table from '../components/base_component/Table';

const DefaultProps = DataSpec.default;
export class Spesification extends React.Component{
    static defaultProps = DefaultProps;
    render() {
        return (
            <div id="spesification">
                <section>
                    <SliderAwesome isStaticImage store={this.props.slider} />
                </section>

                <section>
                    <HeadingText
                        containerClassName="container flex flex-col items-center justify-center mx-auto lg:max-w-4xl text-center p-8"
                        headingClassName="lg:max-w-xl text-center leading-none"
                        heading={this.props.heading}
                        text={this.props.text}
                        textClassName="mt-8 lg:max-w-xl leading-6"
                    />
                    <LargeImage
                        isStaticImage={true}
                        images={this.props.images}
                        imageClassName="max-w-container-2 max-h-large-image mx-auto xl:mt-16 lg:mt-16"
                    />
                </section>

                <section style={{ background: "#efe1dc"}} className="">
                    <Tabs
                        classNameTabs="py-10 lg:py-24 xl:py-24 px-10 mt-20"
                        classNameTabUL="lg:ml-20 xl:ml-40 mx-auto justify-between md:justify-around lg:justify-start xl:justify-start"
                        classNameTabcontent="flex-col justify-center items-center text-justify xl:w-7/12 mx-auto"
                    >
                        {_.map(this.props.tabs, (data, idx) => (
                            <div key={data.id || idx} label={data.label}>
                                <img className="bg-contain bg-no-repeat bg-center md:bg-cover xl:bg-cover lg:bg-cover"
                                    src={data.images} alt="tab-image"/>
                                <p className="text-base mt-8 sm:mt-10 lg:mt-12 xl:mt-20">{data.id} {data.text}</p>
                            </div>
                        ))}
                    </Tabs>
                </section>

                <section>
                    <Table  
                        containerClassName="pb-20 px-8"
                        head={this.props.table.head}
                        store={this.props.table.data}
                        headClassName="mt-24 mb-8 leading-normal"
                        dataTableClassName="py-6"
                        marginValueList={4}
                    />
                </section>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Spesification)
