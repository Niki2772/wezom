import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../Tabs/Tabs.css';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label, icon },
    } = this;

    let className = "tabListItem";

    if (activeTab === label) {
      className += " tabListActive";
    }

    return (
      <li className={className} onClick={onClick}>
        {icon} {label}
      </li>
    );
  }
}

export default Tab;