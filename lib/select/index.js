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

        var {model,option,optionsKey, ...other} = this.props;

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