import * as React from 'react';
import '../styles/style.scss';

class SuspenseLoader extends React.PureComponent {
    render() {
        return(
            <div className="w-full h-screen suspense">
                {/* <img className="m-auto" src={Logo} alt="Logo The MAJ Oceanic" /> */}
                <div className="suspense-backgrounds" />
            </div>
        );
    };
};

export default SuspenseLoader;