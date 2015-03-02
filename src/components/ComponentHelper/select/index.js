/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var _ = require('lodash');


var Select = React.createClass({

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
                return <option value={i}>{that.props.formatSelection? that.props.formatSelection(val) : ''}</option>;               
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
        return <select {...other} value={value} onChange={that.handleChange}>
                    {renderOptions()}
                </select>;   
    }
});

module.exports = Select;