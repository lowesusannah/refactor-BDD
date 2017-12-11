import { GalacticAge } from './../js/bdd.js';

$(document).ready(function() {
	$('#time').text(moment().format('LLLL'));
	$(".age-form").submit(function(event){
		event.preventDefault();
		let birthdate = $("#birthdate").val();
		let age = parseInt($("#age").val());
		let ageConversion = new GalacticAge(age, birthdate);

		$("#output-display-expectancy").append("Earth (US): "+ ageConversion.checkExpectancy() + "<br>");
		$("#output-display-expectancy").append("Jupiter"+ ageConversion.checkExpectancy() + "<br>");
		$("#output-display-expectancy").append("Your earth life expectancy for earth (United States) is: "+ ageConversion.checkExpectancy() + "<br>");
		$("#output-display-expectancy").append("Your earth life expectancy for the US is: "+ ageConversion.checkExpectancy() + "<br>");

		$("#output-display-age").append("Jupiter: " + ageConversion.jupiterConversion() + "<br>");
		$("#output-display-age").append("Mercury: " + ageConversion.mercuryConversion() + "<br>");
		$("#output-display-age").append("Venus: " + ageConversion.venusConversion() + "<br>");
		$("#output-display-age").append("Mars: " + ageConversion.marsConversion());
	});
});
