import * as React from 'react';
import _ from 'lodash';
import { connect, useDispatch } from 'react-redux';

import * as Static from '../static/spec';

import SliderAwesome from '../components/base_component/Slider/SliderAwesome/SliderAwesome';
import Tabs from '../components/base_component/Tab/Tabs';
import { HeadingText } from '../components/base_component/Heading/HeadingText';
import LargeImage from '../components/base_component/LargeImage/LargeImage';
import Table from '../components/base_component/Table';
import SuspenseLoader from './SuspenseLoader';
import { pageSetActive } from '../redux/pages/reducers';

const DefaultProps = Static.default;
const Spesification = (props) => {
    const dispatch = useDispatch();
    const [source, setSource] = React.useState(undefined);

    React.useLayoutEffect(() => {
        if (!source) {
            setSource(_.find(props.page.pages, {page_name: 'spesification'}));
        };
    }, [props.page.pages]);

    React.useEffect(() => {
        if (!_.isEqual(source, props.page.activePage)) {
            dispatch(pageSetActive(source));
        };
    }, [source]);

    if (!source) {
        return <SuspenseLoader />
    };

    return (
        <div id="spesification">
            <section>
                <SliderAwesome store={source.slider} />
            </section>

            <section>
                <HeadingText
                    containerClassName="container flex flex-col items-center justify-center mx-auto lg:max-w-4xl text-center p-8"
                    headingClassName=" text-center leading-none"
                    heading={source.heading}
                    text={source.text}
                    textClassName="mt-8 xl:px-16 lg:px-16 md:px-10 leading-6"
                />
                <LargeImage
                    images={source.images}
                    imageClassName="max-w-container-2 max-h-large-image mx-auto xl:mt-16 lg:mt-16"
                />
            </section>

            <section style={{ background: "#efe1dc"}} className="">
                <Tabs
                    classNameTabs="py-10 lg:py-24 xl:py-24 px-10 mt-20 border-2 max-w-screen-xl mx-auto"
                    classNameTabUL="lg:ml-1 xl:ml-10 justify-between md:justify-start lg:justify-start xl:justify-start"
                    classNameTabcontent="flex-col justify-center items-center text-justify xl:w-7/12 mx-auto"
                >
                    {_.map(props.page.tabs, (data, idx) => (
                        <div key={data.id || idx} label={data.label}>
                            <img className="bg-contain bg-no-repeat bg-center md:bg-cover xl:bg-cover lg:bg-cover"
                                src={data.images} alt="tab-image"/>
                            <p className="text-base mt-8 sm:mt-10 lg:mt-12 xl:mt-20">{data.text}</p>
                        </div>
                    ))}
                </Tabs>
            </section>

            <section>
                <Table  
                    containerClassName="pb-20 px-8"
                    store={source.data}
                    headClassName="mt-24 mb-8 leading-normal"
                    dataTableClassName="py-6"
                    marginValueList={4}
                />
            </section>
        </div>
    );
};
Spesification.defaulProps = DefaultProps;
const mapStateToProps = (state) => ({
    page: state.page
});

export default connect(mapStateToProps)(Spesification)
