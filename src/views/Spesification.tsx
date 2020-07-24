import * as React from 'react';
import _ from 'lodash';
import { connect, useDispatch } from 'react-redux';
import { InitialStatePageProps, pageSpecReceived, pageStatus } from '../redux/pages/reducers';
import staticSpecProps, { SpecProps } from '../static/spec';
import { RootState } from '../redux';
import { useLocation } from 'react-router-dom';
// import { PageItem } from '../redux/pages/types';
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
            <div className="px-6 xl:px-0 lg:px-4 md:px-5">
                <HeadingText
                    containerClassName="max-w-3xl"
                    textClassName="mt-6 px-8"
                    heading={source?.heading}
                    text={source?.text}
                />
                <LargeImage
                    images={source?.images!}
                    imageClassName="max-w-container-2 max-h-large-image mx-auto mt-16"
                />
            </div>
        ),
    [source?.heading, source?.text, source?.images]);

    /** tab item */
    const MemoTabItem = React.useMemo<(params: any, index: number) => JSX.Element>(
        () => (params, index) => (
            <div key={index} title={params.label}>
                <img title={params.label} 
                    draggable={false}
                    className="px-8 xl:px-0 lg:px-4 md:px-6 mx-auto bg-contain bg-no-repeat bg-center md:bg-cover xl:bg-cover lg:bg-cover"
                    src={params.images}
                    alt={params.label}
                    loading="lazy"
                />
                <p title={params.text} className="whitespace-pre-line select-none px-8 xl:px-0 lg:px-4 md:px-6 pt-10 sm:pt-10 lg:pt-12 xl:pt-24">{params.text}</p>
            </div>
        ),
    []);

    /** Table */
    const MemoTable = React.useMemo(
        () => (
            <Table
                store={source?.table.data!}
                headClassName="mb-8 leading-normal"
                dataTableClassName="py-6"
            />
        ),
    [source?.table.data]);

    return (
        <div id="spesification">
            <section>
                {MemoSliderAwesome}
            </section>

            <section className="text-left px-4 md:px-6 xl:px-0 lg:px-0">
                <Breadcrumb page='spesification' />
            </section>

            <section className="pt-6 md:pt-16 lg:pt-24 xl:pt-24 pb-20 md:pb-24 lg:pb-32 xl:pb-32">
                {MemoHeadingTextLargeImage}
            </section>

            <section className="py-10 md:py-12 lg:py-20 bg-tabs-deck h-auto xl:h-screen lg:h-screen max-h-container-tabs">
                <Tabs tabContentClassName="pt-10 md:pt-16">
                    {_.map(props.page.tabs, MemoTabItem)}
                </Tabs>
            </section>

            <section className="pb-24 pt-10 md:pt-12 lg:pt-16 xl:pt-16">
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
