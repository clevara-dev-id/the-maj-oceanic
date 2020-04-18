import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tab extends Component {
    _handleClick = () => {
        const { label, onClick } = this.props
        onClick(label)
    }

    render() {
        const { label } = this.props
        let className = `item ${this.props.classNameTabLI}`
        if (this.props.activeTab === label) {
            className += ` active`
        }

        return (
            <li
                className={className}
                onClick={this._handleClick}
            >
                {this.props.activeTab === label? (
                    <a 
                        href={`#${label.toLowerCase().replace(/\s/g,"-")}`} 
                        className={this.props.classNameLabelActive}
                    >
                        {label} 
                    </a>
                ) : (
                    <a href={`#${label.toLowerCase().replace(/\s/g,"-")}`}> {label} </a>
                )}
            </li>
        )
    }
}

Tab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    classNameLabelActive: PropTypes.string,
    classNameTabLI: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Tab
