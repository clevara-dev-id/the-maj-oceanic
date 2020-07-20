import * as React from 'react';
import { NavLink, Link, LinkProps } from 'react-router-dom';
import _ from 'lodash';

/** Image, Svg & Style */
import './style.scss';
import { ReactComponent as SearchBlack} from '../../assets/icons/searchBlack.svg';
import { ReactComponent as Search } from '../../assets/icons/Search.svg'
import Logo from '../../assets/logo.svg';

/** component */
const ErrorBoundary = React.lazy(() => import('../../helper/ErrorBoundary'));
const LogoSvg = React.lazy(() => import('../../assets/Logo'));

/** Type State */
type I = {
    id: number;
    path: string;
    page: string;
}
/** NavProps */
type NavProps = {
    navbarChange?: boolean;
    store: Array<I>;
};
/** Navbar  */
const Navbar: React.FC<NavProps> = (props) => {
    /** localStore */
    const [localStore, setStore] = React.useState<I[]>(DefaultProps.store);
    React.useLayoutEffect(() => {
        if (!_.isEqual(localStore, props.store)) {
            setStore(props.store)
        };

    }, [props.store]);

    /** search input first */
    const [q1, setQ1] = React.useState<string>("");
    const _onSearch = React.useCallback((e) => setQ1(e.target.value), []);
    const SearchInput = React.useMemo<JSX.Element>(
        () => (
            <div className="justify-center items-center relative">
                <Search className="absolute mt-1 ml-1" />
                <input id="search-input"
                    name="search-first"
                    type="text"
                    placeholder="SEARCH"
                    className="bg-transparent placeholder-white appearance-none leading-tight focus:outline-none focus:shadow-outline text-white w-32 py-2 pr-3 pl-10"
                    value={q1}
                    onChange={_onSearch}
                    inputMode="text"
                    onFocus={e => e.target.select()}
                    
                />
            </div>
        ), 
    [q1]);
    
    /** search input second */
    const [q2, setQ2] = React.useState<string>("");
    const _onSearchSecond = React.useCallback((e) => setQ2(e.target.value), []);
    const SearchInputSecond = React.useMemo<JSX.Element>(
        () => (
            <div className="button hidden xl:flex lg:flex justify-center items-center relative">
                <SearchBlack className="absolute mt-1 ml-1" />
                <input id="search-input-second"
                    name="search-second"
                    type="text"
                    placeholder="SEARCH"
                    className="bg-transparent placeholder-black appearance-none leading-tight focus:outline-none focus:shadow-outline w-32 py-2 pr-3 pl-10"
                    value={q2}
                    onChange={_onSearchSecond}
                    inputMode="text"
                    onFocus={e => e.target.select()}
                />
            </div>
        ),
    [q2]);

    /**
     * Button Login, Inquire, Image
     */
    const ButtonLink = React.useMemo<(linkProp: LinkProps) => JSX.Element>(
        () => (linkProp) => (
            <Link {...linkProp}
            />
        ),
    []);

    return (
        <ErrorBoundary>
            <nav id="nav" className={`w-screen h-auto fixed flex flex-col z-50 mx-auto select-none ${props.navbarChange ? "scroll-active" : null}`}>
                <div className={`nav-top hidden lg:flex xl:flex lg:w-auto mt-16 mb-20 xl:mb-24 ${props.navbarChange ? "scroll-active" : null}`}>
                    <div className="w-1/4 flex-grow lg:flex items-center h-20">
                        {SearchInput}
                        {ButtonLink({
                            children: 'the maj group',
                            itemID: 'button-header',
                            to: '/',
                            replace: true,
                            className: 'box-border whitespace-no-wrap bg-transparent text-white uppercase lg:px-5 py-2 focus:outline-none tracking-wide'
                        })}
                    </div>
                    
                    {ButtonLink({
                        children: <img src={Logo} className="w-screen mx-auto" alt="oceanic-logo" />,
                        itemID: 'button-image-1',
                        to: '/',
                        replace: true,
                        className: 'max-w-xs w-1/4 p-0 focus:outline-none'
                    })}

                    <div className="w-1/4 h-20 flex-grow lg:flex items-center justify-end">
                        {ButtonLink({
                            children: 'login',
                            itemID: 'button-login-1',
                            to: '#',
                            className: 'button-login whitespace-no-wrap box-border bg-transparent text-white hover:opacity-50 uppercase py-2 px-8 focus:outline-none'
                        })}
                        {ButtonLink({
                            children: 'inquire now',
                            itemID: 'button-inquire-now-1',
                            to: '/contact-us',
                            className: 'border-2 whitespace-no-wrap box-border bg-transparent hover:bg-white border-solid border-white hover:border-white text-white hover:text-black uppercase ml-6 px-5 pt-2 pb-3 focus:outline-none'
                        })}
                    </div>
                </div>

                <div className={`nav-list flex xl:border-t xl:border-solid xl:border-white lg:border-t lg:border-solid lg:border-white items-center justify-around px-4 h-24 ${props.navbarChange ? "scroll-active shadow-xl" : null}`}>
                    {SearchInputSecond}
                    
                    <div className="hidden w-full justify-evenly my-auto xl:flex lg:flex flex-wrap">
                        {_.map(localStore, ((data: I) => {
                            if (data.page !== 'home') return (
                                <NavLink
                                    key={data.id}
                                    to={data.path}
                                    className="text-center uppercase font-bold outline-none transition-opacity duration-500 ease-in-out hover:opacity-25">
                                    {data.page}
                                </NavLink>
                            )
                        }))}
                    </div>

                    {ButtonLink({
                        children: 'login',
                        itemID: 'button-login-2',
                        to: '#',
                        className: 'button-2 button-login-2 whitespace-no-wrap hidden xl:inline-block lg:inline-block box-border bg-transparent uppercase focus:outline-none text-white mx-4'
                    })}

                    {ButtonLink({
                        children: 'inquire now',
                        itemID: 'button-inquire-now-2',
                        to: '/contact-us',
                        className: 'button-2 inquire-now-2 whitespace-no-wrap bg-transparent border-2 hidden xl:inline-block lg:inline-block uppercase ml-6 px-5 pt-2 pb-3 focus:outline-none'
                    })}

                    {ButtonLink({
                        children: <LogoSvg className="logo-second" fill={props.navbarChange ? "#000000" : "#ffffff"} />,
                        itemID: 'button-image-2',
                        to: '/',
                        replace: true,
                        className: 'focus:outline-none mx-auto'
                    })}
                    
                    {ButtonLink({
                        children: 'login',
                        itemID: 'button-login-3',
                        to: '#',
                        className: `book-link whitespace-no-wrap uppercase xl:hidden lg:hidden ${props.navbarChange ? "text-black" : "text-white"}`
                    })}
                </div>
            </nav>
        </ErrorBoundary>
    )
};

export default React.memo(Navbar, (prev, next) => _.isEqual(prev, next));

const DefaultProps = {
    navbarChange: false,
    store: [
        {
            id: 1,
            page: "the vessel",
            path: "/"
        }, {
            id: 2,
            page: "voyages",
            path: "#voyages"
        }, {
            id: 3,
            page: "dining",
            path: "#dining"
        }, {
            id: 4,
            page: "activities",
            path: "#activities"
        }, {
            id: 5,
            page: "occasions",
            path: "#occasions"
        }, {
            id: 6,
            page: "offers",
            path: "#offers"
        },{
            id: 7,
            page: "destinations",
            path: "#destinations"
        }
    ]
};

Navbar.defaultProps = DefaultProps;
