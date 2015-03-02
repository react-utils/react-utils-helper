/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Repeat = require('./index.jsx');

var arr = [1, 2, 3, 4, 5 ];


module.exports = React.createElement("div", null, 
			Repeat(arr, function(val){
				return React.createElement("span", null, val);
			})
		);
