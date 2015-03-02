/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var _ = require('lodash');

var When = React.createClass({displayName: "When",

	render: function(){
		return (React.createElement("div", null, 
	        this.props.children
	      )
    	);
	}
});

module.exports = When;