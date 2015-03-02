/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Repeat = require('./index');

var arr = [1, 2, 3, 4, 5 ];


module.exports = <div>
			{Repeat(arr, function(val){
				return <span>{val}</span>;
			})}
		</div>;
