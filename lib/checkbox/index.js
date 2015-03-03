/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var Checkbox = React.createClass({displayName: "Checkbox",

    getDefaultProps: function(){
        return {
            model: {
                onChange: function(){
                    
                },
                getValue: function(){
                    
                }
            },
            trueValue: true,
            falseValue: false,
            value: null,
            onChange: null  
        }
    },

    handleChange: function(e){
        var value;
        if(e.target.checked == true){
            value = this.props.trueValue;
        } else 
            value = this.props.falseValue;

        this.props.model.onChange.call(null, value, e);

        if(this.props.onChange)
            this.props.onChange.apply(null, arguments);
        
    },


    render: function(){
        
        var $__0=        this.props,model=$__0.model,checked=$__0.checked,onChange=$__0.onChange,trueValue=$__0.trueValue,falseValue=$__0.falseValue,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{model:1,checked:1,onChange:1,trueValue:1,falseValue:1});

        var props = other;


        if(!props.value) {

            if(!props.defaultValue){
                props.value = this.props.model.getValue();
            
            } else {
                props.defaultValue = this.props.model.getValue();
            }
        }
        var checked ;
        if(this.props.model.getValue() == this.props.trueValue) 
            checked = true;
        else
            checked = false;
    
        return React.createElement("div", null, 
                    React.createElement("input", React.__spread({},  props, {type: "checkbox", checked: checked, onChange: this.handleChange}))
            );
    }
});

module.exports = Checkbox;