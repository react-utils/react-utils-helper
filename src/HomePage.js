'use strict';

var React = require('react');

var NavMain = require('./NavMain');
var PageHeader = require('./PageHeader');
var PageFooter = require('./PageFooter');

var HomePage = React.createClass({
  render: function () {
    return (
        <div>
          <NavMain activePage="home" />

          <main className="bs-docs-masthead" id="content" role="main">
            <div className="container">
              <span className="bs-docs-booticon bs-docs-booticon-lg bs-docs-booticon-outline"></span>
              <p className="lead">A bunch of React Component Helpers</p>
              <p>React Utils Helper adds syntactic sugar to <a href="http://reactjs.org">React JS</a> Templates. With inspiration from <a href="http://angularjs.org">AngularJS</a>’s ng-hide, ng-show, ng-switch and ng-model, React Utils Helper adds components like {"<RU.Show />"}, {"<RU.Hide />"}, {"<RU.Switch />"} and Two way binding helpers similar to <a href="http://angularjs.org">AngularJS</a>.</p>
            </div>
          </main>

          <div className="bs-docs-section">
            <div className="container">
                  <div className="bs-callout bs-callout-warning">
                          <h4>Here is the List of Components</h4>
                          <div className="clearfix">
                            <div className="col-md-4">
                              <ul className="nav nav-stacked span4">
                                <li><a href="components.html#show">{"<RU.Show />"}</a></li>
                                <li><a href="components.html#hide">{"<RU.Hide />"}</a></li>
                                <li><a href="components.html#switch">{"<RU.Switch />"}</a></li>
                                <li><a href="components.html#repeat">{"<RU.Repeat />"}</a></li>
                                
                              </ul>
                            </div>

                             <div className="col-md-4">
                              <ul className="nav nav-stacked span4">
                                <li><a href="components.html#input">{"<RU.Input />"}</a></li>
                                <li><a href="components.html#textarea">{"<RU.Textarea />"}</a></li>
                                <li><a href="components.html#select">{"<RU.Select />"}</a></li>
                                <li><a href="components.html#radio">{"<RU.Radio />"}</a></li>
                                
                              </ul>
                            </div>

                            <div className="col-md-4">
                              <ul className="nav nav-stacked span4">
                                <li><a href="components.html#checkbox">{"<RU.Checkbox />"}</a></li>
                                
                              </ul>
                            </div>

                          </div>
                  </div>
            </div>
          </div>
                 

          <PageFooter />
        </div>
      );
  }
});

module.exports = HomePage;