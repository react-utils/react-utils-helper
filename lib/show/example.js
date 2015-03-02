/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Show = require('./index.jsx');
module.exports = React.createElement("div", null, 
				React.createElement(Show, {model: true}, 
					React.createElement("div", null, 
						"Hello" 
					), 
					React.createElement("div", null, 
						"World"
					), 
					"asdasd"
				)

		);
