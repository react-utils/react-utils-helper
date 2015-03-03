/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var Radio = React.createClass({displayName: "Radio",

   getDefaultProps: function(){
        return {
            model: {
                onChange: function(){
                    
                },
                getValue: function(){
                    
                }
            },
            value: null,
            onChange: null  
        }
    },

    handleChange: function(e){
        var value = e.target.value;

        this.props.model.onChange.call(null, value, e);

        if(this.props.onChange)
            this.props.onChange.apply(null, arguments);
        
    },


    render: function(){
        
        var $__0=     this.props,model=$__0.model,onChange=$__0.onChange,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{model:1,onChange:1});

        var props = other;


        if(!props.value) {

            if(!props.defaultValue){
                props.value = this.props.model.getValue();
            
            } else {
                props.defaultValue = this.props.model.getValue();
            }
        }

        var checked ;
        if(this.props.model.getValue() == this.props.value) 
            checked = true;
        else
            checked = false;

        return  React.createElement("input", React.__spread({},  props, {type: "radio", checked: checked, onChange: this.handleChange}));
    }
});

module.exports = Radio;