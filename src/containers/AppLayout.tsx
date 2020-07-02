import * as React from 'react';
import { connect, useDispatch } from 'react-redux';
import rafSchedule from 'raf-schd';
import { RootState } from '../redux';
import axios from '../helper/axios';
import { pageNavigationsReceived, pageStatus, pageHomeReceived, pageSpecReceived } from '../redux/pages/reducers';
import { useLocation } from 'react-router-dom';

/* Component */
const NavigationBar = React.lazy(() => import('../components/NavigationBar'));
const Footer = React.lazy(()=> import('../components/Footer'));

export interface AppLayoutProp extends mapStateProps {};
const AppLayout: React.FC<AppLayoutProp> = (props): JSX.Element => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [isScroll, setScroll] = React.useState<boolean>(false);

    const onScroll = (args: number) => {
        const lastScroll = 100;

        if (args > lastScroll) {
            return setScroll(true);
        };

        return setScroll(false);
    };
    const scheduleUpdate = rafSchedule<(args: number) => void>(onScroll);

    React.useLayoutEffect(() => {
        window.addEventListener("scroll", function() {
            scheduleUpdate(window.scrollY)
        });
        console.log(props.navigation)
        /** 
         * get navigation route
         */
        axios.get(process.env.REACT_APP_BASE_URL + '/get_all_pages')
        .then(res => {
            dispatch(pageStatus("pending"));
            dispatch(pageNavigationsReceived(res.data.pages));
        })
        .catch(err => { throw new Error(err) });
        /**
         * get home page
         */
        axios.get(process.env.REACT_APP_HOME_PAGE!)
        .then(res => {
            dispatch(pageStatus("pending"));
            dispatch(pageHomeReceived(res.data));
        })
        .catch(err => { throw new Error(err) });
        /**
         * get spesification page
         */
        axios.get(process.env.REACT_APP_BASE_URL + '/get_spesification_page')
        .then(res => {
            dispatch(pageStatus("pending"));
            dispatch(pageSpecReceived(res.data));
        })
        .catch(err => { throw new Error(err) });
        
        return () => {
            scheduleUpdate.cancel();
        };
    },[]);

    const Navigation = React.useMemo<JSX.Element>(
        () => <NavigationBar isScroll={isScroll} store={props.navigation} />,
    [isScroll, props.navigation])

    return (
        <React.Fragment>
            <header className="flex justify-center">
                {Navigation}
            </header>

            {props.children}

            <footer>
                <Footer store="" />
            </footer>
        </React.Fragment>
    );
};

type mapStateProps = { navigation: Array<any> };
const mapStateToProps = (state: RootState) => ({
    navigation: state.page.navigations || [],
});

export default connect(mapStateToProps)(AppLayout);