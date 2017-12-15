(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GalacticAge = exports.GalacticAge = function () {
	function GalacticAge(birthdate, age) {
		_classCallCheck(this, GalacticAge);

		this.birthdate = new Date(birthdate);
		this.earthAge = age;
	}

	_createClass(GalacticAge, [{
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
			return marsAge.toFixed();
		}
	}, {
		key: "jupiterConversion",
		value: function jupiterConversion() {
			var jupiterAge = 11.86 * this.earthAge;
			return jupiterAge.toFixed();
		}
	}, {
		key: "timeDifference",
		value: function timeDifference(firstDate, secondDate) {
			var difference = firstDate.getTime() - secondDate.getTime();
			return difference;
		}
	}, {
		key: "checkExpectancy",
		value: function checkExpectancy() {
			var maxEarthAge = 79;
			if (this.earthAge >= maxEarthAge) {
				return "sorry, can't calculate";
			} else {
				var earthExpectancy = 79 - this.earthAge;
				return earthExpectancy.toFixed();
			}
		}
	}, {
		key: "mercuryExpectancy",
		value: function mercuryExpectancy() {
			var maxEarthAge = 79;
			if (this.earthAge >= maxEarthAge) {
				return "sorry, can't calculate";
			} else {
				return (0.24 * (79 - this.earthAge)).toFixed();
			}
		}
	}, {
		key: "venusExpectancy",
		value: function venusExpectancy() {
			var maxEarthAge = 79;
			if (this.earthAge >= maxEarthAge) {
				return "sorry, can't calculate";
			} else {
				return (0.62 * (79 - this.earthAge)).toFixed();
			}
		}
	}, {
		key: "marsExpectancy",
		value: function marsExpectancy() {
			var maxEarthAge = 79;
			if (this.earthAge >= maxEarthAge) {
				return "sorry, can't calculate";
			} else {
				return (1.88 * (79 - this.earthAge)).toFixed();
			}
		}
	}, {
		key: "jupiterExpectancy",
		value: function jupiterExpectancy() {
			var maxEarthAge = 79;
			if (this.earthAge >= maxEarthAge) {
				return "sorry, can't calculate";
			} else {
				return (11.86 * (79 - this.earthAge)).toFixed();
			}
		}
	}]);

	return GalacticAge;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _bdd = require('./../js/bdd.js');

$(document).ready(function () {
	$('#time').text(moment().format('LLLL'));
	$("#output-display-age").hide();
	$("#output-display-expectancy").hide();
	$(".age-form").submit(function (event) {
		event.preventDefault();
		var birthdate = $("#birthdate").val();
		var age = parseInt($("#age").val());
		var ageConversion = new _bdd.GalacticAge(age, birthdate);

		$("#output-display-age").show();
		$("#output-display-age").append("Mercury: " + ageConversion.mercuryConversion() + "<br>");
		$("#output-display-age").append("Venus: " + ageConversion.venusConversion() + "<br>");
		$("#output-display-age").append("Mars: " + ageConversion.marsConversion() + "<br>");
		$("#output-display-age").append("Jupiter: " + ageConversion.jupiterConversion());

		$("#output-display-expectancy").show();
		$("#output-display-expectancy").append("Mercury: " + ageConversion.mercuryExpectancy() + "<br>");
		$("#output-display-expectancy").append("Venus: " + ageConversion.venusExpectancy() + "<br>");
		$("#output-display-expectancy").append("Earth (US): " + ageConversion.checkExpectancy() + "<br>");
		$("#output-display-expectancy").append("Mars: " + ageConversion.marsExpectancy() + "<br>");
		$("#output-display-expectancy").append("Jupiter: " + ageConversion.jupiterExpectancy() + "<br>");
	});
});

},{"./../js/bdd.js":1}]},{},[2]);
