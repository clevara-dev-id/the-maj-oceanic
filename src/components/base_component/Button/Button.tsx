import * as React from 'react';
import _ from 'lodash';
import { NavLink, NavLinkProps } from 'react-router-dom';

export type ButtonProps = NavLinkProps & {
    mode: 'outline' | "contain"
};

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
    const style = 
        props.mode === 'outline'
        ? 'bg-transparent border-2 border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white'
        : 'bg-primary-300 text-white hover:bg-transparent border-2 border-primary-300 hover:text-primary-300';

    return (
        <NavLink {...props} className={`inline-flex uppercase text-xs py-2 px-6 w-40 justify-center tracking-wider font-bold text-center outline-none focus:outline-none ${style} ${props.className}`}>
            {props.children}
        </NavLink>
    );
};

export default React.memo(Button, (prev, next) => _.isEqual(prev, next));
