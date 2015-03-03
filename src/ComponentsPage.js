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
                  <h1 id="compoonent-helpers" className="page-header">Component Helpers<small></small></h1>

                   <div>
                    <h2 id="show">Show <small></small></h2>
                    <p>The Show component shows or hides the given HTML element based on the props provided to the show component.</p>
                    <ReactPlayground codeText={fs.readFileSync(__dirname + '/../examples/Show.js', 'utf8')} />
                   </div> 


                    <div>
                      <h2 id="hide">Hide <small></small></h2>
                      <p>The Hide component shows or hides the given HTML element based on the props provided to the show component.</p>
                      <ReactPlayground codeText={fs.readFileSync(__dirname + '/../examples/Hide.js', 'utf8')} />
                    </div>                 


                  <div>
                    <h2 id="switch">Switch</h2>
                    <p>The Switch component is used to conditionally swap DOM structure on your template based on a expression.</p>
                    <ReactPlayground codeText={fs.readFileSync(__dirname + '/../examples/Switch.js', 'utf8')} />
                    {/*<div className="bs-callout bs-callout-warning">
                                        <h4>Button spacing</h4>
                                        <p>Because React doesn't output newlines between elements, buttons on the same line are displayed
                                        flush against each other. To preserve the spacing between multiple inline buttons, wrap your
                                        button group in <code>{'<ButtonToolbar />'}</code>.</p>
                                      </div>*/}
                    {/*<h2 id="buttons-sizes">Sizes</h2>
                                      <p>Fancy larger or smaller buttons? Add <code>bsSize="large"</code>, <code>bsSize="small"</code>, or <code>bsSize="xsmall"</code> for additional sizes.</p>
                                    <ReactPlayground codeText={fs.readFileSync(__dirname + '/../examples/Repeat.js', 'utf8')} />*/}
                  </div>

                  <div>
                    <h2 id="repeat">Repeat</h2>
                    <p>The Repeat component instantiates a template once per item from a collection.</p>
                    <ReactPlayground codeText={fs.readFileSync(__dirname + '/../examples/Repeat.js', 'utf8')} />
                  </div>

                </div>


                <div className="bs-docs-section">
                  <h1 id="two-way-binding" className="page-header">Two Way Binding Helpers<small></small></h1>
                  <div className="bs-callout bs-callout-warning">
                          <h4>Data Binding</h4>
                          <p>These components binds data between the state and view components. When the state changes, the view reflects the change, and vice versa.</p>
                  </div>
                    
                    <div>
                      <h2 id="input">Input <small></small></h2>
                      <p>When passed model props, it provides data-binding and input state control.</p>
                      <ReactPlayground codeText={fs.readFileSync(__dirname + '/../examples/Input.js', 'utf8')} />
                    </div> 

                    <div>
                      <h2 id="textarea">Textarea <small></small></h2>
                      <p>When passed model props, it provides data-binding and input state control.</p>
                      <ReactPlayground codeText={fs.readFileSync(__dirname + '/../examples/Textarea.js', 'utf8')} />
                    </div>

                     <div>
                      <h2 id="checkbox">Checkbox <small></small></h2>
                      <p>When passed model props, it provides data-binding and input state control.</p>
                      <ReactPlayground codeText={fs.readFileSync(__dirname + '/../examples/Checkbox.js', 'utf8')} />
                    </div>

                    <div>
                      <h2 id="radio">Radio <small></small></h2>
                      <p>When passed model props, it provides data-binding and input state control.</p>
                      <ReactPlayground codeText={fs.readFileSync(__dirname + '/../examples/Radio.js', 'utf8')} />
                    </div>


                    <div>
                      <h2 id="select">Select <small></small></h2>
                      <p>When passed model props, it provides data-binding and input state control.</p>
                      <ReactPlayground codeText={fs.readFileSync(__dirname + '/../examples/Select.js', 'utf8')} />
                    </div>


                </div>

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
                   {/* <SubNav href="#buttons" key={1} text="Buttons">s
                                         <NavItem href="#btn-groups" key={2}>Button groups</NavItem>
                                         <NavItem href="#btn-dropdowns" key={3}>Button dropdowns</NavItem>
                                       </SubNav>*/}
                    <NavItem href="#switch" key={1}>Switch</NavItem>
                    <NavItem href="#repeat" key={2}>Repeat</NavItem>
                    <NavItem href="#show" key={3}>Show</NavItem>
                    <NavItem href="#hide" key={4}>Hide</NavItem>
                    <NavItem href="#input" key={5}>Input</NavItem>
                    <NavItem href="#textarea" key={6}>Textarea</NavItem>
                    <NavItem href="#checkbox" key={7}>Checkbox</NavItem>
                    <NavItem href="#radio" key={8}>Radio</NavItem>
                    <NavItem href="#select" key={9}>Select</NavItem>
                   
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
