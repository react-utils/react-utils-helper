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
        var $__0=    this.props,model=$__0.model,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{model:1});
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