'use strict';

var React = require('react');
var Router = require('react-router-component');
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');

var InternalLink = Router.Link;

var NAV_LINKS = {
  'getting-started': {
    link: '/getting-started.html',
    title: 'Getting started'
  },
  'components': {
    link: '/components.html',
    title: 'Components'
  }
};

var NavMain = React.createClass({
  propTypes: {
    activePage: React.PropTypes.string
  },

  render: function () {
    var brand = <span className="navbar-brand"><a href="http://react-utils.github.io">React Utils</a> > <InternalLink href="/">React Component Helper</InternalLink></span>;

    return (
      <Navbar componentClass='header' brand={brand} staticTop className="bs-docs-nav" role="banner" toggleNavKey={0}>
        <Nav className="bs-navbar-collapse" role="navigation" eventKey={0} id="top">
          {Object.keys(NAV_LINKS).map(this.renderNavItem)}
        </Nav>
      </Navbar>
    );
  },

  renderNavItem: function (linkName) {
    var link = NAV_LINKS[linkName];

    return (
        <li className={this.props.activePage === linkName ? 'active' : null} key={linkName}>
          <InternalLink href={link.link}>{link.title}</InternalLink>
        </li>
      );
  }
});

module.exports = NavMain;
