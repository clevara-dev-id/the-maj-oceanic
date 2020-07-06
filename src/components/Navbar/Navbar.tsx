import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import _ from 'lodash';
import './style.scss';
import { ReactComponent as SearchBlack} from '../../assets/icons/searchBlack.svg';
import { ReactComponent as Search } from '../../assets/icons/Search.svg'
import Logo from '../../assets/logo.svg';

const ErrorBoundary = React.lazy(() => import('../../helper/ErrorBoundary'));
const LogoSvg = React.lazy(() => import('../../assets/Logo'));

type I = {
    id: number;
    path: string;
    page: string;
}
interface NavProps {
    navbarChange?: boolean;
    store: Array<I>;
};

const Navbar: React.FC<NavProps> = (props) => {
    /**
     * localStore
     */
    const [localStore, setStore] = React.useState<I[]>(DefaultProps.store);
    React.useLayoutEffect(() => {
        if (!_.isEqual(localStore, props.store)) {
            setStore(props.store)
        };

    }, [props.store]);

    /**
     * search input first
     */
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
    
    /**
     * search input second
     */
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

    const ImageSecond = React.useMemo<JSX.Element>(
        () => (
            <LogoSvg className="logo-second mx-auto" fill={props.navbarChange ? "#000000" : "#ffffff"} />
        ),
    [props.navbarChange]);

    const ButtonSecond = React.useMemo<JSX.Element>(
        () => (
            <Link to="/" className={`book-link uppercase xl:hidden lg:hidden ${props.navbarChange ? "text-black" : "text-white"}`}>
                book
            </Link>
        ),
    [props.navbarChange]);

    return (
        <ErrorBoundary>
            <nav id="nav" className={`w-screen h-auto fixed flex flex-col z-50 mx-auto ${props.navbarChange ? "scroll-active" : null}`}>
                <div className={`nav-top hidden lg:flex xl:flex lg:w-auto mt-16 mb-32 ${props.navbarChange ? "scroll-active" : null}`}>
                    <div className="w-1/4 flex-grow lg:flex items-center h-20">
                        {SearchInput}
                        <Link to="/" className="box-border bg-transparent text-white uppercase lg:px-5 py-2 focus:outline-none tracking-wide">
                            the maj group
                        </Link>
                    </div>

                    <a href='/' className="max-w-xs w-1/4 p-0">
                        <img src={Logo} className="w-screen mx-auto" />
                    </a>

                    <div className="w-1/4 h-20 flex-grow lg:flex items-center justify-end">
                        <Link to="#" className="box-border bg-transparent text-white hover:text-black uppercase py-2 px-8 focus:outline-none">
                            login
                        </Link>

                        <Link to="#" className="border-2 box-border bg-transparent hover:bg-white border-solid border-white hover:border-black text-white hover:text-black uppercase ml-6 px-5 pt-2 pb-3 focus:outline-none">
                            inquire now
                        </Link>
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
                                    className="text-center uppercase font-bold ">
                                    {data.page}
                                </NavLink>
                            )
                        }))}
                    </div>

                    <Link to="#" className="button hidden xl:inline-block lg:inline-block box-border bg-transparent uppercase focus:outline-none text-white mx-4">
                        login
                    </Link>

                    <Link to="/" className="button bg-transparent hidden xl:inline-block lg:inline-block border-2 border-solid border-white uppercase ml-6 px-5 pt-2 pb-3 focus:outline-none text-white whitespace-no-wrap">
                        book now
                    </Link>

                    {ImageSecond}
                    {ButtonSecond}
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
        },
        // {
        //     id: 7,
        //     page: "destinations",
        //     path: "#destinations"
        // }
    ]
};

Navbar.defaultProps = DefaultProps;
