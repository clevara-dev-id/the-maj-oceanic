import * as React from 'react';
import _ from 'lodash';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback: React.FC<FallbackProps> = (props): JSX.Element => {
    return (
        <div role="alert" className="bg-red-200 opacity-75 w-1/2 mx-auto p-6 rounded-sm shadow-lg">
            <h1 className="text-left text-2xl mb-3">Oops!, my apologies</h1>

            <p className="text-left text-base font-medium whitespace-pre-line">
                Something went wrong. We are working
                on getting this fixed as soon as we can.
                
                You may be able to try again.
            </p>

            <details className="text-left mt-4">
                <summary className="text-base">
                    For Developer
                </summary>
                <dl className="mt-4">
                    <dt> <h1>Error Messages</h1> </dt>
                    <dd className="whitespace-pre-wrap py-2">
                        <pre> {props.error?.message} </pre>
                    </dd>

                    <dt> <h1>Component stack</h1> </dt>
                    <dd className="whitespace-pre-wrap py-2">
                        <code> {props.componentStack} </code>
                    </dd>
                </dl>
            </details>
            
            <button className="bg-primary-200 py-2 px-4 text-white rounded-md mx-auto mt-3" onClick={props.resetErrorBoundary}>
                Try again
            </button>
        </div>
    );
};

export default React.memo(ErrorFallback, (prevProps, nextProps) => _.isEqual(prevProps, nextProps));
