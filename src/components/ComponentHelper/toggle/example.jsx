/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Toggle = require('./index.jsx');
var formMixin = require('mixins/formMixin');

var MyComponent = React.createClass({

	mixins: [formMixin],

    getInitialState: function(){
        return {
            "isVerified": 0
        }; 
    },

    render: function(){
        return <div>
        			<Toggle 
                        model={this.link("isVerified")}
                         />
          			Current State: {this.state.isVerified}
         		</div>;
    }

});

module.exports = <MyComponent />;
