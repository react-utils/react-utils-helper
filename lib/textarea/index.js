/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var Textarea = React.createClass({displayName: "Textarea",

    getDefaultProps: function(){
        return {
            model: {
                onChange: function(){
                    
                },
                getValue: function(){
                        }
            },
            value: null,
            onChange: null,
            defaultValue: null
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
 
        return React.createElement("textarea", React.__spread({},  props, {onChange: this.handleChange}));
    }
});

module.exports = Textarea;