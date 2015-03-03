'use strict';

var React = require('react');
var fs = require('fs');

var Affix = require('react-bootstrap/lib/Affix');
var Nav = require('react-bootstrap/lib/Nav');
var SubNav = require('react-bootstrap/lib/SubNav');
var NavItem = require('react-bootstrap/lib/NavItem');

var NavMain = require('./NavMain');
var PageHeader = require('./PageHeader');
var PageFooter = require('./PageFooter');
var ReactPlayground = require('./ReactPlayground');

var ComponentsPage = React.createClass({
  getInitialState: function () {
    return {
      activeNavItemHref: null,
      navOffsetTop: null
    };
  },

  handleNavItemSelect: function (key, href) {
    this.setState({
      activeNavItemHref: href
    });

    window.location = href;
  },

  componentDidMount: function () {
    var elem = this.refs.sideNav.getDOMNode(),
        domUtils = Affix.domUtils,
        sideNavOffsetTop = domUtils.getOffset(elem).top,
        sideNavMarginTop = parseInt(domUtils.getComputedStyles(elem.firstChild).marginTop, 10),
        topNavHeight = this.refs.topNav.getDOMNode().offsetHeight;

    this.setState({
      navOffsetTop: sideNavOffsetTop - topNavHeight - sideNavMarginTop,
      navOffsetBottom: this.refs.footer.getDOMNode().offsetHeight
    });
  },

  render: function () {
    return (
        <div>
          <NavMain activePage="components" ref="topNav" />

          <PageHeader
            title="Components"
            subTitle="" />

          <div className="container bs-docs-container">
            <div className="row">
              <div className="col-md-9" role="main">

                {/* Buttons */}
                <div className="bs-docs-section">
                  <h1 id="buttons" className="page-header">Repeat <small></small></h1>
                  <h2 id="buttons-options">Options</h2>
                  <p>The Repeat component instantiates a template once per item from a collection.</p>
                  <ReactPlayground codeText={fs.readFileSync(__dirname + '/../examples/Switch.js', 'utf8')} />
                  <div className="bs-callout bs-callout-warning">
                    <h4>Button spacing</h4>
                    <p>Because React doesn't output newlines between elements, buttons on the same line are displayed
                    flush against each other. To preserve the spacing between multiple inline buttons, wrap your
                    button group in <code>{'<ButtonToolbar />'}</code>.</p>
                  </div>
                  <h2 id="buttons-sizes">Sizes</h2>
                  <p>Fancy larger or smaller buttons? Add <code>bsSize="large"</code>, <code>bsSize="small"</code>, or <code>bsSize="xsmall"</code> for additional sizes.</p>
                  <ReactPlayground codeText={fs.readFileSync(__dirname + '/../examples/Repeat.js', 'utf8')} />

                </div>

              <div className="col-md-3">
                <Affix
                  className="bs-docs-sidebar hidden-print"
                  role="complementary"
                  offsetTop={this.state.navOffsetTop}
                  offsetBottom={this.state.navOffsetBottom}>
                  <Nav
                    className="bs-docs-sidenav"
                    activeHref={this.state.activeNavItemHref}
                    onSelect={this.handleNavItemSelect}
                    ref="sideNav">
                    <SubNav href="#buttons" key={1} text="Buttons">
                      <NavItem href="#btn-groups" key={2}>Button groups</NavItem>
                      <NavItem href="#btn-dropdowns" key={3}>Button dropdowns</NavItem>
                    </SubNav>
                    <NavItem href="#panels" key={4}>Panels</NavItem>
                    <NavItem href="#modals" key={5}>Modals</NavItem>
                    <NavItem href="#tooltips" key={6}>Tooltips</NavItem>
                    <NavItem href="#popovers" key={7}>Popovers</NavItem>
                    <NavItem href="#progress" key={8}>Progress bars</NavItem>
                    <NavItem href="#navs" key={9}>Navs</NavItem>
                    <NavItem href="#navbars" key={10}>Navbars</NavItem>
                    <NavItem href="#tabs" key={11}>Togglable tabs</NavItem>
                    <NavItem href="#pager" key={12}>Pager</NavItem>
                    <NavItem href="#alerts" key={13}>Alerts</NavItem>
                    <NavItem href="#carousels" key={14}>Carousels</NavItem>
                    <NavItem href="#grids" key={15}>Grids</NavItem>
                    <NavItem href="#listgroup" key={16}>List group</NavItem>
                    <NavItem href="#labels" key={17}>Labels</NavItem>
                    <NavItem href="#badges" key={18}>Badges</NavItem>
                    <NavItem href="#jumbotron" key={19}>Jumbotron</NavItem>
                    <NavItem href="#page-header" key={20}>Page Header</NavItem>
                    <NavItem href="#wells" key={21}>Wells</NavItem>
                    <NavItem href="#glyphicons" key={22}>Glyphicons</NavItem>
                    <NavItem href="#tables" key={23}>Tables</NavItem>
                    <NavItem href="#input" key={24}>Input</NavItem>
                  </Nav>
                  <a className="back-to-top" href="#top">
                  Back to top
                  </a>
                </Affix>
              </div>
            </div>
          </div>

          <PageFooter ref="footer" />
        </div>
      );
  }
});

module.exports = ComponentsPage;
