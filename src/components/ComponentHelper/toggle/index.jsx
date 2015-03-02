/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var Toggle = React.createClass({

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
        return <div>
                    {(this.props.model.getValue()==1) ?
                        <button type="button" value={0} onClick={this.props.model.onChange}>
                            Yes
                        </button>
                    :
                        <button type="button" value={1} onClick={this.props.model.onChange}>
                            No
                        </button>
                    }
                </div>;
    }
});

module.exports = Toggle;