/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Textarea = require('./index.jsx');
var formMixin = require('mixins/formMixin');

var MyComponent = React.createClass({displayName: "MyComponent",

	mixins: [formMixin],

    getInitialState: function(){
        return {
            "description": "Something"
        }; 
    },

    handleChange: function(e){
        this.state.textarea = e.target.value;
    },

    changeState: function(){
        this.setState({
            description : this.state.textarea 
        }) ;
    },

    dummyAjaxCall: function(){
      console.log("ajax call");
    },


    render: function(){
        return React.createElement("div", null, 
                    "Input: ", React.createElement("br", null), 
        			React.createElement(Textarea, {model: this.link("description"), onChange: this.dummyAjaxCall, rows: 5, cols: 40}), 
                    React.createElement("br", null), " ", React.createElement("br", null), 
                    "Current State: ", this.state.description, 
                    React.createElement("br", null), " ", React.createElement("br", null), 

                    "Set State:  ", React.createElement("br", null), 
                    React.createElement("textarea", {rows: 5, cols: 40, onChange: this.handleChange}), 
                    React.createElement("br", null), 
                    React.createElement("button", {type: "button", onClick: this.changeState}, "Change State")

                );
    }

});

module.exports = React.createElement(MyComponent, null);
