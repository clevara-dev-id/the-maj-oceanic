import * as React from 'react';
import _ from 'lodash';

/* Component */
const Tab = React.lazy(() => import('./Tab'));


const Tabs: React.FC<any> = (props) => {
    const [activeTab, setActiveTab] = React.useState<string>(props.children[0]!.props.label);
    
    const _handleClickTabItem = (tab: string) => setActiveTab(tab);

    return (
        <div className={`tabs ${props.classNameTabs}`}>
            <ul className={`tab-list ${props.classNameTabUL} flex pb-20`}>
                {props.children && _.map(props.children, (child, index) => (
                    <Tab
                        classNameLabelActive={`${props.classNameLabelActive} text-primary-300`}
                        classNameTabLI={`${props.classNameTabLI} xl:mr-10 lg:mr-10 md:mr-10`}
                        activeTab={activeTab}
                        key={index}
                        label={child.props.label}
                        onClick={_handleClickTabItem}
                    />
                ))}
            </ul>

            <div className={`tab-content ${props.classNameTabcontent} flex`}>
                {props.children && _.map(props.children, (child: JSX.Element) => {
                    if (child.props.label !== activeTab) return undefined
                    return child.props.children
                })}
            </div>
        </div>
    );
};

export default Tabs;
