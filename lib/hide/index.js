/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var _ = require('lodash');

module.exports = React.createClass({displayName: "exports",

	getDefaultProps: function(){
		model: true
	},

	render: function(){
		var child = this.props.children ? this.props.children : null;
		var renderChildren = function(){
			return _.map(child, function(val){
				if(typeof(val) == "object")
					return	val.props.children;		
				else 
					return val;
			});
		}
		return React.createElement("div", null, 
			this.props.model ? null : renderChildren()
		)
	}
});