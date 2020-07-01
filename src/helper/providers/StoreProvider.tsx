import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux';

const StoreProvider: React.FC = (props): JSX.Element => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
};

export default StoreProvider;
