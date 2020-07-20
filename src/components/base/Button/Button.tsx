import * as React from 'react';
import _ from 'lodash';
import { Link, LinkProps } from 'react-router-dom';

export type ButtonProps = LinkProps & {
    mode: Mode
};

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
    const style = getMode(props.mode);

    return (
        <Link {...props} className={`inline-flex whitespace-no-wrap uppercase text-xs py-2 px-6 w-40 justify-center tracking-wider font-bold text-center outline-none focus:outline-none ${style} ${props.className}`}>
            {props.children}
        </Link>
    );
};

export default React.memo(Button, (prev, next) => _.isEqual(prev, next));

type Mode = "outline" | "contain" | "custom";
function getMode(params: Mode): string | null {
    switch (params) {
        case "outline":
            return 'bg-transparent border-2 border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white';

        case "contain":
            return 'bg-primary-300 text-white hover:bg-transparent border-2 border-primary-300 hover:text-primary-300';

        case "custom":
            return null;
    }
}
