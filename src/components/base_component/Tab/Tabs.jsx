import React, { Component, lazy } from 'react'
import PropTypes from 'prop-types'

/* Component */
const Tab = lazy(() => import('./Tab'))

class Tabs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            activeTab: this.props.children && this.props.children[0].props.label
        }
    }

    _handleClickTabItem = (tab) => {
        this.setState({
            activeTab: tab
        })
    }
    

    render() {
        const classNameTabs = `tabs ${this.props.classNameTabs}`
        const classNameTabUL = `tab-list ${this.props.classNameTabUL}`

        const classNameTabcontent = `tab-content ${this.props.classNameTabcontent}`
        return (
            <div className={classNameTabs}>
                <ul className={`${classNameTabUL} flex pb-20`}>
                    {this.props.children && this.props.children.map((child) => {
                        const { label } = child.props
                        return (
                            <Tab
                                classNameLabelActive={`${this.props.classNameLabelActive} text-primary-300`}
                                classNameTabLI={`${this.props.classNameTabLI} mr-10`}
                                activeTab={this.state.activeTab}
                                key={label}
                                label={label}
                                onClick={this._handleClickTabItem}
                            />
                        )
                    })}
                </ul>

                <div className={`${classNameTabcontent} flex`}>
                    {this.props.children && this.props.children.map((child) => {
                        if (child.props.label !== this.state.activeTab) return undefined
                        return child.props.children
                    })}
                </div>
            </div>
        )
    }
}


Tabs.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    classNameTabs: PropTypes.string,
    classNameTablist: PropTypes.string,
    classNameTabcontent: PropTypes.string,
}

export default Tabs
