/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Hide = require('./index.jsx');
module.exports = React.createElement("div", null, 
				React.createElement(Hide, {model: false}, 
					React.createElement("div", null, 
						"Hello" 
					), 
					React.createElement("div", null, 
						"World"
					), 
					"asdasd"
				)

		);
