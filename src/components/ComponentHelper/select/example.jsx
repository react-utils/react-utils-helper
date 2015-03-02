/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Select = require('./index');
var formMixin = require('mixins/formMixin');

var MyComponent = React.createClass({

	mixins: [formMixin],

    getInitialState: function(){
        return {
            "classroom_id": 2
        }; 
    },

    handleChange: function(e){
        this.state.select = e.target.value;
    },

    changeState: function(){
        this.setState({
            classroom_id : this.state.select 
        }) ;
    },

    dummyAjaxCall: function(){
      console.log("ajax call");
    },


    render: function(){
        return <div>
                    <Select 
            			model={this.link("classroom_id")}
            			options={
    			        	[
    							{id: 1, value: "One"},
                                {id: 2, value: "Two"},
    							{id: 3, value: "Three"}
    			        	]
    			        }
                        />
                     Current State: {this.state.classroom_id} <br />
                     Set State: <input type="text" onChange={this.handleChange}/><button type="button" onClick={this.changeState}>Change State</button>

                </div>;
    }

});

module.exports = <MyComponent />;
