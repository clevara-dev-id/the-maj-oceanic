import React, { lazy, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import rafSchedule from 'raf-schd';
import { setPages, getPages } from '../redux/action/actionCreators';

/* Component */
// const  HeadBackground = lazy(() => import('../components/HeadBackground'))
// const SliderAwesome = lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'))
const NavigationBar = lazy(() => import('../components/NavigationBar'));
const Footer = lazy(()=>import('../components/Footer'));

function ConnectAppLayout(props) {
    const [isScroll, setScroll] = useState(false);

    const onScroll = args => {
        const lastScroll = 100;

        if (args > lastScroll) {
            return setScroll(true);
        };

        return setScroll(false);
    };
    const scheduleUpdate = rafSchedule(onScroll);

    useEffect(() => {
        window.addEventListener("scroll", function() {
            scheduleUpdate(window.scrollY)
        });

        getPages()
        .then(res => props.dispatchPages(res.data.status, res.data.pages))
        .catch(err => props.dispatchPages(err.response && err.response.statusText, []));

        return () => {
            scheduleUpdate.cancel();
        };
    },[]);

    return (
        <>
            <header className="flex justify-center">
                <NavigationBar isScroll={isScroll} store={props.store} />
            </header>

            {props.children}

            <footer>
                <Footer store="" />
            </footer>
        </>
    );
};

const mapStateToProps = state => ({
    store: state.occeanic.pages.data,
});

const mapDispatchToProps = dispatch => ({
    dispatchPages: (a, b) => (
        dispatch(setPages(a, b))
    )
});

const AppLayout = connect(mapStateToProps, mapDispatchToProps)(ConnectAppLayout);
export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
