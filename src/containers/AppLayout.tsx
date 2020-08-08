import * as React from 'react';
import { connect, useDispatch } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import { RootState } from '../redux';
import axios, { BaseUrl } from '../helper/axios';
import { pageNavigationsReceived, pageStatus, pageHomeReceived } from '../redux/pages/reducers';
import { PageItem } from '../redux/pages/types';

/* Component */
const Navbar = React.lazy(() => import('../components/Navbar/Navbar'));
const Footer = React.lazy(()=> import('../components/Footer'));
const Sidebar = React.lazy(() => import('../components/Sidebar'));

export type AppLayoutProp = mapStateProps & {};
/**
 * ## App Layout
 *
 * @param {AppLayoutProp} props
 * @returns {JSX.Element} JSX Element
 */
const AppLayout: React.FC<AppLayoutProp> = (props): JSX.Element => {
    const dispatch = useDispatch();
    
    React.useLayoutEffect(() => {
        async function fetchAll() {
            /** fecth navigation route */
            async function fetchNavigations() {
                const navResult = await axios.get(`${BaseUrl}/get_all_pages`);
                dispatch(pageNavigationsReceived(navResult.data.pages));
            };
            /** fetch home page */
            async function fetchHome() {
                const homResult = await axios.get(`${BaseUrl}/get_all_pages`);
                dispatch(pageHomeReceived(homResult.data));
            };
            // /** fetch spesification */
            // async function fetchSpesification() {
            //     const specResult = await axios.get(`${BaseUrl}/get_spesification_page`);
            //     dispatch(pageSpecReceived(specResult.data));
            // };

            try {
                await Promise.all([fetchNavigations(), fetchHome()]);
            } catch (err) {
                console.error(err);
            } finally {
                dispatch(pageStatus("done"));
            };
        };
        dispatch(pageStatus("pending"));
        
        fetchAll();
    }, []);

    /**
     * navigation & data navigation
     */
    const NavStore = React.useMemo(() => props.navigation, [props.navigation]);
    const Navigation = React.useMemo<JSX.Element>(
        () => <Navbar navbarChange={!props.navbar.isFire} store={NavStore} />,
    [props.navbar.isFire, NavStore]);

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
                styles={{bmBurgerBars: { background: !props.navbar.isFire ? "#000000" : "#ffffff" }}}
                value={search}
                onChange={searching}
            />
        ), 
    [props.navbar.isFire]);

    return (
        <React.Fragment>
            <Router>
                <header>
                  {NavigationSide}
                  {Navigation}
                </header>

                <main id="page-wrap">
                    {props.children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </Router>
        </React.Fragment>
    );
};

type mapStateProps = { 
    navigation: Array<any>,
    pages: PageItem[],
    navbar: { isFire: boolean },
};
const mapStateToProps = (state: RootState) => ({
    navigation: state.page.navigations || [],
    pages: state.page.pages,
    navbar: state.anim.navbar,
});

export default connect(mapStateToProps)(AppLayout);
