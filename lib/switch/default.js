/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var _ = require('lodash');

var Default = React.createClass({displayName: "Default",

	render: function(){
		return (React.createElement("div", null, 
	        this.props.children
	      )
    	);
	}
});

module.exports = Default;