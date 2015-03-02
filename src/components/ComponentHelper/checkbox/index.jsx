/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var Checkbox = React.createClass({

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
        
        var {model, checked, onChange, trueValue, falseValue, ...other } = this.props;

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
    
        return <div>
                    <input {...props} type="checkbox" checked={checked} onChange={this.handleChange}/>
            </div>;
    }
});

module.exports = Checkbox;