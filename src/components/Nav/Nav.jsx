//import './Header.css';
import React, { Component } from 'react';
//import classNames from 'classnames';



export default class Nav extends Component {
  render () {
      const menuItems = [
          { link: 'https://geekbrains.com', title: 'Home' },
          { link: 'https://geekbrains.com/news', title: 'News' }
      ];

      return (
          <nav className="nav d-flex justify-content-between">{menuItems.map(item => <a className="p-2 text-muted">{item.title}</a>)}</nav>
      )
  }
}