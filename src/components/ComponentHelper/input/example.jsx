/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Input = require('./index.jsx');
var formMixin = require('mixins/formMixin');

var MyComponent = React.createClass({

	mixins: [formMixin],

    getInitialState: function(){
        return {
            "name": "Something"
        }; 
    },

    handleChange: function(e){
        this.state.textbox = e.target.value;
    },

    changeState: function(){
        this.setState({
            name : this.state.textbox 
        }) ;
    },

    dummyAjaxCall: function(){
      console.log("ajax call");
    },

    render: function(){
        return <div>
                    Input:
        			<Input model={this.link("name")} onChange={this.dummyAjaxCall}/>
                    <br/><br/>
                    Current State: {this.state.name}
                    <br/><br/>
                    Set State: <input type="text" onChange={this.handleChange}/><button type="button" onClick={this.changeState}>Change State</button>
         		</div>;
    }

});

module.exports = <MyComponent />;
