/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var Toggle = React.createClass({displayName: "Toggle",

    getDefaultProps: function(){
        return {
            model: {
                onChange: function(){
                    
                },
                getValue: function(){
                    
                }
            }
        }
    },
    render: function(){
        var {model, ...other } = this.props;
        return React.createElement("div", null, 
                    (this.props.model.getValue()==1) ?
                        React.createElement("button", {type: "button", value: 0, onClick: this.props.model.onChange}, 
                            "Yes"
                        )
                    :
                        React.createElement("button", {type: "button", value: 1, onClick: this.props.model.onChange}, 
                            "No"
                        )
                    
                );
    }
});

module.exports = Toggle;