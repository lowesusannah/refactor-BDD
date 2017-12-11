import { GalacticAge } from './../js/bdd.js';

$(document).ready(function() {
	$('#time').text(moment().format('LLLL'));
	$("#output-display-age").hide();
	$("#output-display-expectancy").hide();
	$(".age-form").submit(function(event){
		event.preventDefault();
		let birthdate = $("#birthdate").val();
		let age = parseInt($("#age").val());
		let ageConversion = new GalacticAge(age, birthdate);

		$("#output-display-age").show();
		$("#output-display-age").append("Mercury: " + ageConversion.mercuryConversion() + "<br>");
		$("#output-display-age").append("Venus: " + ageConversion.venusConversion() + "<br>");
		$("#output-display-age").append("Mars: " + ageConversion.marsConversion() + "<br>");
		$("#output-display-age").append("Jupiter: " + ageConversion.jupiterConversion());

		$("#output-display-expectancy").show();
		$("#output-display-expectancy").append("Mercury: "+ ageConversion.mercuryExpectancy() + "<br>");
		$("#output-display-expectancy").append("Venus: "+ ageConversion.venusExpectancy() + "<br>");
		$("#output-display-expectancy").append("Earth (US): "+ ageConversion.checkExpectancy() + "<br>");
		$("#output-display-expectancy").append("Mars: "+ ageConversion.marsExpectancy() + "<br>");
		$("#output-display-expectancy").append("Jupiter: "+ ageConversion.jupiterExpectancy() + "<br>");
	});
});
