
/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var Radio = React.createClass({

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
        
        var {model, onChange, ...other } = this.props;

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

        return  <input {...props} type="radio" checked={checked} onChange={this.handleChange} />;
    }
});

module.exports = Radio;