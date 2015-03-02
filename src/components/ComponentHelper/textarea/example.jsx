/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Textarea = require('./index');
var formMixin = require('mixins/formMixin');

var MyComponent = React.createClass({

	mixins: [formMixin],

    getInitialState: function(){
        return {
            "description": "Something"
        }; 
    },

    handleChange: function(e){
        this.state.textarea = e.target.value;
    },

    changeState: function(){
        this.setState({
            description : this.state.textarea 
        }) ;
    },

    dummyAjaxCall: function(){
      console.log("ajax call");
    },


    render: function(){
        return <div>
                    Input: <br />   
        			<Textarea model={this.link("description")} onChange={this.dummyAjaxCall} rows={5} cols={40} />
                    <br/> <br/>
                    Current State: {this.state.description}
                    <br/> <br/>

                    Set State:  <br/>
                    <textarea rows={5} cols={40} onChange={this.handleChange}></textarea>
                    <br/>
                    <button type="button" onClick={this.changeState}>Change State</button>

                </div>;
    }

});

module.exports = <MyComponent />;
