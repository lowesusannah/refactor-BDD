(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// var GalacticAge = require('./../js/bdd.js').galacticAgeModule;

//new in Node, after running node tasks, this will end up in the tmp/allConcat.js file


$(document).ready(function() {
	event.preventDefault();
	$("#current-time").text(moment().format());
	// 	var goal = $(‘#goal’).val();
	// 	var simpleCalculator = new Calculator(“hot pink”);
	// 	var output = simpleCalculator.pingPong(goal);
	// 	output.forEach(function(element) {
	// 		$(‘solution’).append(“<li>’ + element + ‘</li>’);
	// 	});
	// });
});

},{}]},{},[1]);
