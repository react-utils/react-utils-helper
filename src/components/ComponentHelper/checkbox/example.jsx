/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Checkbox = require('./index.jsx');
var formMixin = require('mixins/formMixin');

var MyComponent = React.createClass({

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
        return <div>
                    <Checkbox model={this.link("isValid")} /> 
                    <br />
                    Current State: {String(this.state.isValid)} <br />
                    Set State: <button type="button" onClick={this.handleChange.bind(null, 'isValid')} >Change State</button>
                    <br />

                    <Checkbox model={this.link("isChecked")} trueValue={"Yes"} falseValue={"No"} />
                    <br />
                    Current State: {this.state.isChecked} <br />
                     Set State: <button type="button" onClick={this.handleChange.bind(null, 'isChecked')} >Change State</button>
                </div>;
    }

});

module.exports = <MyComponent />;
