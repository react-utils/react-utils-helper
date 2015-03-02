/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Toggle = require('./index.jsx');
var formMixin = require('mixins/formMixin');

var MyComponent = React.createClass({displayName: "MyComponent",

	mixins: [formMixin],

    getInitialState: function(){
        return {
            "isVerified": 0
        }; 
    },

    render: function(){
        return React.createElement("div", null, 
        			React.createElement(Toggle, {
                        model: this.link("isVerified")}
                         ), 
          			"Current State: ", this.state.isVerified
         		);
    }

});

module.exports = React.createElement(MyComponent, null);
