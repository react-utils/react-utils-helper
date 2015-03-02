/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var Input = React.createClass({

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

        var {model, onChange, ...other } = this.props;

        var props = other;

        if(!props.value) {
            if(!props.defaultValue){
                props.value = this.props.model.getValue();
            
            } else {
                props.defaultValue = this.props.model.defaultValue;
            }
        }

        return <input {...props} type="text" onChange={this.handleChange}/>;
    }
});

module.exports = Input;