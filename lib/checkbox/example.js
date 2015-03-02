/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Checkbox = require('./index.jsx');
var formMixin = require('mixins/formMixin');

var MyComponent = React.createClass({displayName: "MyComponent",

    mixins: [formMixin],

    getInitialState: function(){
        return {
            "isValid": true,
            "isChecked": "Yes" 
        }; 
    },

    handleChange: function(field, e){
        var state = {};
        switch(field){
            case 'isValid':
                if(this.state[field] == false)
                    state[field] = true;
                else 
                    state[field] = false;
            break;
            case 'isChecked':
                if(this.state[field] == "No")
                    state[field] = "Yes";
                else 
                    state[field] = "No"
            break;

        }
 
        this.setState(state) ;          
    },

    render: function(){
        return React.createElement("div", null, 
                    React.createElement(Checkbox, {model: this.link("isValid")}), 
                    React.createElement("br", null), 
                    "Current State: ", String(this.state.isValid), " ", React.createElement("br", null), 
                    "Set State: ", React.createElement("button", {type: "button", onClick: this.handleChange.bind(null, 'isValid')}, "Change State"), 
                    React.createElement("br", null), 

                    React.createElement(Checkbox, {model: this.link("isChecked"), trueValue: "Yes", falseValue: "No"}), 
                    React.createElement("br", null), 
                    "Current State: ", this.state.isChecked, " ", React.createElement("br", null), 
                     "Set State: ", React.createElement("button", {type: "button", onClick: this.handleChange.bind(null, 'isChecked')}, "Change State")
                );
    }

});

module.exports = React.createElement(MyComponent, null);
