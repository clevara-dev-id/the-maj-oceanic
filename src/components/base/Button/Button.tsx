import * as React from 'react';
import _ from 'lodash';
import { Link, LinkProps } from 'react-router-dom';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../../../helper/ErrorFallback';

export type ButtonProps = LinkProps & {
    mode: Mode
};

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
    const style = getMode(props.mode);

    return (
        <Link {...props} to={props.to || '#'} className={`inline-block whitespace-no-wrap uppercase text-xs tracking-wider font-bold text-center outline-none focus:outline-none ${style} ${props.className}`}>
            {props.children}
        </Link>
    );
};

const ButtonWithErrorBoundary = withErrorBoundary(Button, {FallbackComponent: ErrorFallback});
export default React.memo(ButtonWithErrorBoundary, (prev, next) => _.isEqual(prev, next));

type Mode = "outline" | "contain" | "custom";
function getMode(params: Mode): string | null {
    switch (params) {
        case "outline":
            return 'bg-transparent border-2 border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white py-2 px-6 w-40 justify-center';

        case "contain":
            return 'bg-primary-300 text-white hover:bg-transparent border-2 border-primary-300 hover:text-primary-300 py-2 px-6 w-40 justify-center';

        case "custom":
            return null;
    }
}
