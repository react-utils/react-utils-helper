/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Radio = require('./index.jsx');
var formMixin = require('mixins/formMixin');

var MyComponent = React.createClass({displayName: "MyComponent",

	mixins: [formMixin],

    getInitialState: function(){
        return {
            "classroom_id": 2
        }; 
    },

    handleChange: function(e){
        this.state.textbox = e.target.value;
    },

    changeState: function(){
        this.setState({
            classroom_id : this.state.textbox 
        }) ;
    },

    dummyAjaxCall: function(){
      console.log("ajax call");
    },


    render: function(){
        return React.createElement("div", null, " Input: ", React.createElement("br", null), 
        			React.createElement(Radio, {model: this.link("classroom_id"), name: "name", value: {name: 'Suraj'}}), "1 ", React.createElement("br", null), 
                    React.createElement(Radio, {model: this.link("classroom_id"), name: "name", value: 2}), "2 ", React.createElement("br", null), 
                    React.createElement(Radio, {model: this.link("classroom_id"), name: "name", value: 3}), "3 ", React.createElement("br", null), 
          			"Current State: ", this.state.classroom_id, " ", React.createElement("br", null), 
                     "Set State: ", React.createElement("input", {type: "text", onChange: this.handleChange}), React.createElement("button", {type: "button", onClick: this.changeState}, "Change State")

         		);
    }

});

module.exports = React.createElement(MyComponent, null);
