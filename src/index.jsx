import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import { Badge } from 'reactstrap';
import Nav from './components/Nav';
const menuItems = [
    { link: 'https://geekbrains.com', title: 'Home' },
    { link: 'https://geekbrains.com/news', title: 'News' }
];

ReactDOM.render(
    (<nav className="nav d-flex justify-content-between">{menuItems.map(item => <a className="p-2 text-muted">{item.title}</a>)}</nav>),
    document.getElementById('naw-header')
);



class Apps extends Component {
  render () {
    return (
      <Nav/>
    )
  }
}

 class Example extends React.Component {
    render() {
        return (
            <div>
                <h1>Heading <Badge color="secondary">New</Badge></h1>
                <h2>Heading <Badge color="secondary">New</Badge></h2>
                <h3>Heading <Badge color="secondary">New</Badge></h3>
                <h4>Heading <Badge color="secondary">New</Badge></h4>
                <h5>Heading <Badge color="secondary">New</Badge></h5>
                <h6>Heading <Badge color="secondary">New</Badge></h6>
            </div>

        );
    }
}

ReactDOM.render(<Apps />, document.getElementById('root'));
//ReactDOM.render(<Menu />, document.getElementById('naw-header'));
const element = <h1>
    <Example>

    </Example>
</h1>;
ReactDOM.render(
    element, // название элемента
    document.getElementById('main') // вызов элементов корневом узле
);

