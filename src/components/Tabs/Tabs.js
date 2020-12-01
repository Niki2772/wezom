import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from '../Tab/Tab';
import './Tabs.css';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ul className="tabList">
          {children.map((child) => {
            const { label } = child.props;
            const { icon } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                icon={icon}
                onClick={onClickTabItem}
              />
            );
          })}
        </ul>
        <div className="tabContent">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
