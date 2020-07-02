import * as React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Tab extends React.Component {
    static propTypes = {
        classNameLabelActive: PropTypes.string,
        classNameTabLI: PropTypes.string,
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    }

    _handleClick = () => {
        const { label, onClick } = this.props
        onClick(label)
    }

    render() {
        const { label } = this.props
        let className = `tab-list-item ${this.props.classNameTabLI}`
        if (this.props.activeTab === label) {
            className += ` active`
        }

        return (
            <li
                className={className}
                onClick={this._handleClick}
            >
                {this.props.activeTab === label? (
                    <Label active classNameLabelActive={this.props.classNameLabelActive}> {label} </Label>
                ) : (
                    <Label> {label} </Label>
                )}
            </li>
        )
    }
}

const Label = styled.p.attrs(
    props => ({
        active: props.active,
        className: props.active? props.classNameLabelActive: null
    })
)
(
    props => ({
    fontFamily: "Verlag B",
    transition:".2s all",
    paddingBottom: "22px",
    borderBottom: props.active? "2px solid": null,
    textTransform: "capitalize",
    cursor: "pointer"
    })
)

export default React.memo(Tab, (prev, next) => _.isEqual(prev.activeTab, next.activeTab))
