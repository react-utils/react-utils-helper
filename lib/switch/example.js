/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Switch = require('./index.jsx');
var When = require('./when.jsx');
var Default = require('./default.jsx');
var value=2;
module.exports = React.createElement("div", null, 
				React.createElement(Switch, {expression: value}, 
					React.createElement(When, {switchCase: 1}, "one"), 
					React.createElement(When, {switchCase: 2}, "two"), 
					React.createElement(When, {switchCase: 3}, "three"), 
					React.createElement(When, {switchCase: 4}, "four"), 
					React.createElement(When, {switchCase: 5}, "five"), 
					React.createElement(When, {switchCase: 6}, "six"), 
					React.createElement(Default, null, "default")
				)

		);
