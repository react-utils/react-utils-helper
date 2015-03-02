/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var _ = require('lodash');

module.exports = React.createClass({displayName: "exports",

	getDefaultProps: function(){
		condition: ''

	},

	render: function(){
		var that = this;

		var child = this.props.children ? this.props.children : null;

		var renderWhen = function(){
			var cases = _.find(child, function(val){
						if(val.type.displayName == "When" && val.props.switchCase == that.props.expression){
							return val;
						} else 
						return null;
					});	
			if(cases){
				return cases;
			} else {
				return _.find(child, function(val){
					if(val.type.displayName == "Default")
						return val;
					else
						return null;
				});
			}	
		};

		return React.createElement("div", null, 
			renderWhen()
		)
	}
});