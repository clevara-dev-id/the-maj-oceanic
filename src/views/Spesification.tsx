import * as React from 'react';
import _ from 'lodash';
import { connect, useDispatch } from 'react-redux';
import { pageSetActive, InitialStatePageProps, pageSpecReceived, pageStatus } from '../redux/pages/reducers';
import staticSpecProps, { SpecProps } from '../static/spec';
import { RootState } from '../redux';
import { useLocation } from 'react-router-dom';
import { PageItem } from '../redux/pages/types';
import axios, { BaseUrl } from '../helper/axios';

/** Components */
const SliderAwesome     = React.lazy(() => import('../components/base/Slider/SliderAwesome'));
const Tabs              = React.lazy(() => import('../components/base/Tab/Tabs'));
const HeadingText       = React.lazy(() => import('../components/base/Heading/HeadingText'));
const LargeImage        = React.lazy(() => import('../components/base/LargeImage/LargeImage'));
const Table             = React.lazy(() => import('../components/base/Table'));
const Breadcrumb        = React.lazy(() => import('../components/BreadcrumbComponent'));

const Spesification: React.FC<SpecProps & MapStateProps> = (props): JSX.Element => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [source, setSource] = React.useState<SpecProps | undefined>(undefined);

    React.useLayoutEffect(() => {
        console.log(location);
        
        async function fetchAll() {
            /** fetch spesification */
            async function fetchSpesification() {
                const specResult = await axios.get(`${BaseUrl}/get_spesification_page`);
                dispatch(pageSpecReceived(specResult.data));
                setSource(specResult.data);
            };

            try {
                await Promise.all([fetchSpesification()]);
            } catch (err) {
                console.error(err);
            } finally {
                dispatch(pageStatus("done"))
            };
        };

        dispatch(pageStatus("pending"));
        fetchAll();
    }, []);

    /** Slider Awesome */
    const MemoSliderAwesome = React.useMemo<JSX.Element>(
        () => (
            <SliderAwesome store={source?.slider!} />
        ),
    [source?.slider]);

    /** Heading Text & Large Image */
    const MemoHeadingTextLargeImage = React.useMemo<JSX.Element>(
        () => (
            <React.Fragment>
                <HeadingText
                    containerClassName="container select-none flex flex-col items-center justify-center mx-auto lg:max-w-4xl text-center p-8"
                    headingClassName=" text-center leading-none"
                    heading={source?.heading}
                    text={source?.text}
                    textClassName="mt-8 xl:px-16 lg:px-16 md:px-10 leading-6"
                />
                <LargeImage
                    images={source?.images}
                    imageClassName="max-w-container-2 max-h-large-image mx-auto xl:mt-16 lg:mt-16"
                />
            </React.Fragment>
        ),
    [source?.heading, source?.text, source?.images]);

    /** Tabs & tab item */
    const MemoTabs = React.useMemo<({ children }: {
        children: any;
    }) => JSX.Element>(
        () => ({children}) => (
            <Tabs
                containerClassName="my-auto py-12"
                tabUlClassName="pb-8 xl:pb-20 whitespace-pre-line"
                children={children}
            />
        ),
    [props.page.tabs]);
    const MemoTabItem = React.useMemo<(params: any, index: number) => JSX.Element>(
        () => (params, index) => (
            <div key={index} title={params.label}>
                <img title={params.label} draggable={false} className="mx-auto bg-contain bg-no-repeat bg-center md:bg-cover xl:bg-cover lg:bg-cover"
                    src={params.images} alt="tab-image"/>
                <p title={params.text} className="whitespace-pre-line select-none text-base pt-10 sm:pt-10 lg:pt-12 xl:pt-24">{params.text}</p>
            </div>
        ),
    []);

    /** Table */
    const MemoTable = React.useMemo(
        () => (
            <Table
                containerClassName="pb-20 px-8 xl:px-0 lg:px-0"
                store={source?.table.data!}
                headClassName="mt-24 mb-8 leading-normal"
                dataTableClassName="py-6"
            />
        ),
    []);

    return (
        <div id="spesification">
            <section>
                {MemoSliderAwesome}
            </section>

            <section className="text-left px-4 md:px-6 xl:px-0 lg:px-0">
                <Breadcrumb page='spesification' />
            </section>

            <section>
                {MemoHeadingTextLargeImage}
            </section>

            <section className="flex mt-56 items-stretch bg-tabs-deck h-auto xl:h-screen lg:h-screen max-h-container-tabs">
                {MemoTabs({
                    children: _.map(props.page.tabs, MemoTabItem)
                })}
            </section>

            <section className="pb-16" >
                {MemoTable}
            </section>
        </div>
    );
};

type MapStateProps = { page: InitialStatePageProps }
const mapStateToProps = (state: RootState) => ({
    page: state.page
});

Spesification.defaultProps = staticSpecProps;
export default connect(mapStateToProps)(Spesification)
