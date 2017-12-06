import { GalacticAge } from './../js/bdd.js';

$(document).ready(function() {
console.log("hi");
	$('#time').text(moment().format('LLLL'));
	$(".age-form").submit(function(event){
		event.preventDefault();
		alert("hi");
		let birthdate = $("#birthdate").val();
		let age = parseInt($("#age").val());
		let ageConversion = new GalacticAge(age, birthdate);
		console.log(ageConversion.birthdate +", "+ageConversion.age);
		$("#output-display").text(ageConversion.jupiterConversion());
		// chosenAge.timeDifference(standInDate, newBirthday);
	});


});
