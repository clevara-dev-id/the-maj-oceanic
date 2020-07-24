import * as React from 'react';
import '../styles/style.scss';
import { isEqual } from 'lodash';

class SuspenseLoader extends React.PureComponent<{}> {
    render() {
        return(
            <div className="w-full h-screen suspense">
                {/* <img className="m-auto" src={Logo} alt="Logo The MAJ Oceanic" /> */}
                <div className="suspense-backgrounds" />
            </div>
        );
    };
};

export default React.memo(SuspenseLoader, (prevProps, nextProps) => isEqual(prevProps, nextProps));