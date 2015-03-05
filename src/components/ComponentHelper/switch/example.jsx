/**
 * @jsx React.DOM
 */

'use strict';
var React = require('react')
var Switch = require('./index.jsx');
var When = require('./when.jsx');
var Default = require('./default.jsx');

var value=2;
module.exports = <div>
				<Switch expression={value}>
					<When switchCase={1}>one</When>
					<When switchCase={2}>two</When>
					<When switchCase={3}>three</When>
					<When switchCase={4}>four</When>
					<When switchCase={5}>five</When>
					<When switchCase={6}>six</When>
					<Default>default</Default>
				</Switch>

		</div>;
