/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Input = require('./index.jsx');
var formMixin = require('mixins/formMixin');

var MyComponent = React.createClass({displayName: "MyComponent",

	mixins: [formMixin],

    getInitialState: function(){
        return {
            "name": "Something"
        }; 
    },

    handleChange: function(e){
        this.state.textbox = e.target.value;
    },

    changeState: function(){
        this.setState({
            name : this.state.textbox 
        }) ;
    },

    dummyAjaxCall: function(){
      console.log("ajax call");
    },

    render: function(){
        return React.createElement("div", null, 
                    "Input:", 
        			React.createElement(Input, {model: this.link("name"), onChange: this.dummyAjaxCall}), 
                    React.createElement("br", null), React.createElement("br", null), 
                    "Current State: ", this.state.name, 
                    React.createElement("br", null), React.createElement("br", null), 
                    "Set State: ", React.createElement("input", {type: "text", onChange: this.handleChange}), React.createElement("button", {type: "button", onClick: this.changeState}, "Change State")
         		);
    }

});

module.exports = React.createElement(MyComponent, null);
