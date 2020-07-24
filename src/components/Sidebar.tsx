import * as React from 'react';
import { stack as Menu, Props } from 'react-burger-menu';
import * as Router from 'react-router-dom';
import _ from 'lodash';
import '../styles/style.sidebar.scss';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../helper/ErrorFallback';

/** Components */
const IconSearch = React.lazy(() => import("../assets/icons/IconSearch"));

interface FT {
    value?: string | number | string[] | undefined;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    onSubmit?: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
};
type ST = Array<I>
type I = { id: number | string; path: string; page: string };
interface T extends Props, FT, Props {
    store: ST;
};

const Sidebar = (props: T) => {
    const [localStore, setStore] = React.useState<ST | []>([]);

    React.useLayoutEffect(() => {
        if (!_.isEqual(props.store, localStore)) {
            setStore(props.store);
        };
    }, [props.store, localStore]);

    /**
     * form search
     */
    const [q, setQ] = React.useState<string>("");
    const _onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value), []);
    const _onSubmit = React.useCallback(
        () => console.log(q),
    [q]);
    const SearchForm = React.useMemo<JSX.Element>(
        () => (
            <form className="inline-block ml-2" onSubmit={_onSubmit}>
                <input className="appearance-none w-full px-2 py-2 bg-transparent"
                    value={q}
                    onChange={_onChange}
                    type="text"
                    name="search"
                    id="search"
                    placeholder="SEARCH"
                    width="100%"
                    onFocus={(e) => e.target.select()}
                />
            </form>
        ),
    [q, _onSubmit, _onChange]);
    const _onIconSearch = React.useCallback((e) => console.log(q), [q])

    const NavLink = React.useMemo<(params: Router.NavLinkProps & React.RefAttributes<HTMLAnchorElement>) => JSX.Element>(
        () => (params) => <Router.NavLink  {...params} />,
    []);

    return (
        <Menu
            width="100%"
            disableCloseOnEsc
            disableOverlayClick
            pageWrapId="page-wrap"
            outerContainerId="root"
            className="lg:hidden xl:hidden"
            styles={props.styles}
            burgerButtonClassName="lg:hidden sm:w-6 sm:h-6 w-4 h-4 box-border">
            
            <img className="focus:outline-none bg-contain bg-center bg-no-repeat" 
                src={require("../assets/logo/oceanic-blue.png")}
                width="50%"
                alt="oceanic-blue"
                loading="lazy"
            />
            
            <div className="w-full items-center border-t h-16 py-4 my-8 border-b border-solid border-gray-400 focus:outline-none">
                <IconSearch
                    size={30}
                    fill="rgb(160, 174, 192)"
                    className="inline-block mb-1" 
                    onClick={_onIconSearch}
                />
                {SearchForm}
            </div>
            
            {!_.isEmpty(localStore)
                ? _.map(localStore, (data: I, idx: number) => (
                    NavLink({
                        key: idx,
                        to: data.path,
                        className: "menu-item uppercase mb-6",
                        children: data.page
                    })
                ))
                : null
            }
        </Menu>
    );
};

const SidebarWithErrorBoundary = withErrorBoundary(Sidebar, {FallbackComponent: ErrorFallback});
export default React.memo(SidebarWithErrorBoundary, (prev, next) => _.isEqual(prev, next))
