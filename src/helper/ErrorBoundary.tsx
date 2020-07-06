import * as React from 'react';

type P = { children: React.ReactNode };
type S = { hasError: boolean; error?: any, errorInfo?: any };
class ErrorBoundary extends React.Component<P, S> {
    readonly state: S;
    constructor(props: P) {
        super(props)
    
        this.state = {
            hasError: false,
            error: undefined,
        }
    }
    
    static getDerivedStateFromError(error: any) {
        return { hasError: true, error: error }
    };

    componentDidCatch(error: any, errorInfo: any) {
        console.log('errorrrrrrrrrrrrrr')
        console.log(error, errorInfo);
        // this.setState({
        //     error,
        //     errorInfo
        // });
    };


    render() {
        if (this.state.error) {
            return (
                <div>
                    <h1>{this.state.error}tst</h1>
                    <p>{this.state.errorInfo}</p>
                    <p>Something when wrong!</p>
                </div>
            );
        };

        return this.props.children;
    };
};

export default ErrorBoundary;
