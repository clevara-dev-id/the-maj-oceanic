import * as React from 'react';
import { connect, useDispatch } from 'react-redux';
import rafSchedule from 'raf-schd';
import { RootState } from '../redux';
import axios from '../helper/axios';
import { pageNavigationsReceived, pageStatus, pageHomeReceived, pageSpecReceived } from '../redux/pages/reducers';
import ErrorBoundary from '../helper/ErrorBoundary';

/* Component */
const NavigationBar = React.lazy(() => import('../components/NavigationBar'));
const Navbar = React.lazy(() => import('../components/Navbar/Navbar'));
const Footer = React.lazy(()=> import('../components/Footer'));
const Sidebar = React.lazy(() => import('../components/Sidebar'));

export interface AppLayoutProp extends mapStateProps {};
const AppLayout: React.FC<AppLayoutProp> = (props): JSX.Element => {
    const dispatch = useDispatch();
    const [isScroll, setScroll] = React.useState<boolean>(false);

    const onScroll = (args: number) => {
        const lastScroll = 100;

        if (args > lastScroll) {
            return setScroll(true);
        };

        return setScroll(false);
    };
    // const onScroll = React.useCallback((args: number) => {
    //     let lastScroll = 100;
    //     args > lastScroll 
    //         ? setScroll(true)
    //         : setScroll(false);
    // }, []);
    
    React.useLayoutEffect(() => {
        const scheduleUpdate = rafSchedule<(args: number) => void>(onScroll);
        window.addEventListener("scroll", function() {
            scheduleUpdate(window.scrollY)
        });
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

    const NavStore = React.useMemo(() => props.navigation, [props.navigation]);
    const Navigation = React.useMemo<JSX.Element>(
        () => <Navbar navbarChange={isScroll} store={NavStore} />,
    [isScroll, NavStore]);

    /**
     * searching
     */
    const [search, setSearch] = React.useState<string>("");
    const searching = React.useCallback((e) => setSearch(e.target.value), []);

    /**
     * side bar
     */
    const NavigationSide = React.useMemo<JSX.Element>(
        () => (
            <Sidebar
                store={NavStore}
                styles={{bmBurgerBars: { background: isScroll ? "#000000" : "#ffffff" }}}
                value={search}
                onChange={searching}
            />
        ), 
    [isScroll]);

    return (
        <ErrorBoundary>
            {NavigationSide}
            {Navigation}

            <main id="page-wrap">
                {props.children}
            </main>

            <footer>
                <Footer store="" />
            </footer>
        </ErrorBoundary>
    );
};

type mapStateProps = { navigation: Array<any> };
const mapStateToProps = (state: RootState) => ({
    navigation: state.page.navigations || [],
});

export default connect(mapStateToProps)(AppLayout);
