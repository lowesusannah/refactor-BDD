(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GalacticAge = exports.GalacticAge = function () {
	function GalacticAge(age, birthdate) {
		_classCallCheck(this, GalacticAge);

		this.birthdate = new Date(birthdate);
		this.earthAge = age;
	}

	_createClass(GalacticAge, [{
		key: "checkExpectancy",
		value: function checkExpectancy() {
			var maxEarthAge = 79;
			if (this.earthAge >= maxEarthAge) {
				return "false";
			} else {
				return "true";
			}
		}
	}, {
		key: "mercuryConversion",
		value: function mercuryConversion() {
			return 0.24 * this.earthAge;
		}
	}, {
		key: "venusConversion",
		value: function venusConversion() {
			return 0.62 * this.earthAge;
		}
	}, {
		key: "marsConversion",
		value: function marsConversion() {
			var marsAge = 1.88 * this.earthAge;
			return marsAge.toPrecision(3);
		}
	}, {
		key: "jupiterConversion",
		value: function jupiterConversion() {
			var jupiterAge = 11.86 * this.earthAge;
			return jupiterAge.toPrecision(3);
		}
	}, {
		key: "timeDifference",
		value: function timeDifference(firstDate, secondDate) {
			var difference = firstDate.getTime() - secondDate.getTime();
			return difference;
		}
	}]);

	return GalacticAge;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _bdd = require('./../js/bdd.js');

$(document).ready(function () {
	console.log("hi");
	$('#time').text(moment().format('LLLL'));
	$(".age-form").submit(function (event) {
		event.preventDefault();
		alert("hi");
		var birthdate = $("#birthdate").val();
		var age = parseInt($("#age").val());
		var ageConversion = new _bdd.GalacticAge(age, birthdate);
		console.log(ageConversion.birthdate + ", " + ageConversion.age);
		$("#output-display").text(ageConversion.jupiterConversion());
		// chosenAge.timeDifference(standInDate, newBirthday);
	});
});

},{"./../js/bdd.js":1}]},{},[2]);
