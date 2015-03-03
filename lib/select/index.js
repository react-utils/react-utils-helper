/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var _ = require('lodash');


var Select = React.createClass({displayName: "Select",

    getDefaultProps: function(){
        return {
            model: {
                onChange: function(){
                    
                },
                getValue: function(){
                    
                }
            },
            formatResult: function(row) {
                if(row.id)
                    return row.id;
                else
                    return row;
            },

            formatSelection: function(row) {
                if(row.text)
                    return row.text;
                else if(row.value)
                    return row.value;
                else
                    return row;
            }
        }
    },

    handleChange: function(e){

        var selectedObj = _.find(this.props.options, function(row, i){
            return i == e.target.value;
        });
        var result = this.props.formatResult(selectedObj);
        this.props.model.onChange(result, e);
    },

    render: function(){
        var that = this;

        var renderOptions = function(){

            return _.map(that.props.options, function(val, i){
                return React.createElement("option", {value: i}, that.props.formatSelection? that.props.formatSelection(val) : '');               
            });
        };

        var $__0=   this.props,model=$__0.model,option=$__0.option,optionsKey=$__0.optionsKey,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{model:1,option:1,optionsKey:1});

        var value;

        if(this.props.formatResult){
            var selectedObj = _.findIndex(this.props.options, function(row){
               return that.props.formatResult(row) == that.props.model.getValue(); 
            });
            value = selectedObj;
        }
        else 
            value = this.props.model.getValue();
        return React.createElement("select", React.__spread({},  other, {value: value, onChange: that.handleChange}), 
                    renderOptions()
                );   
    }
});

module.exports = Select;