import './Header.css';
import React, { Component } from 'react';

import classNames from 'classnames';

import Menu from '../Menu';


export default class Content extends Component {
  static defaultProps = {
    size: 'maxi'
  }

  render () {
    const { size, children } = this.props;
    const headerClasses = classNames({
      header: true,
      'header--mini': size === 'mini',
      'header--maxi': size === 'maxi',
    })

    return (
      <div className={headerClasses}>
        Hello from header
        <div>{children}</div>
        <Menu items={menuItems} />
      </div>
    )
  }
}