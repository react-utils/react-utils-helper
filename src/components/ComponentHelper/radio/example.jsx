/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Radio = require('./index.jsx');
var formMixin = require('mixins/formMixin');

var MyComponent = React.createClass({

	mixins: [formMixin],

    getInitialState: function(){
        return {
            "classroom_id": 2
        }; 
    },

    handleChange: function(e){
        this.state.textbox = e.target.value;
    },

    changeState: function(){
        this.setState({
            classroom_id : this.state.textbox 
        }) ;
    },

    dummyAjaxCall: function(){
      console.log("ajax call");
    },


    render: function(){
        return <div> Input: <br />
        			<Radio model={this.link("classroom_id")} name="name" value={{name: 'Suraj'}}/>1 <br/>
                    <Radio model={this.link("classroom_id")} name="name" value={2}/>2 <br/>
                    <Radio model={this.link("classroom_id")} name="name" value={3}/>3 <br/>
          			Current State: {this.state.classroom_id} <br />
                     Set State: <input type="text" onChange={this.handleChange}/><button type="button" onClick={this.changeState}>Change State</button>

         		</div>;
    }

});

module.exports = <MyComponent />;
