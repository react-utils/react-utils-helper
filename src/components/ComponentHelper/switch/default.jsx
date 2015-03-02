/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var _ = require('lodash');

var Default = React.createClass({

	render: function(){
		return (<div>
	        {this.props.children}
	      </div>
    	);
	}
});

module.exports = Default;