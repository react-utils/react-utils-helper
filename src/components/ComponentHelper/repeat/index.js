/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var _ = require('lodash');

module.exports = function(array, callback ){
	return _.forEach(array,callback);
};