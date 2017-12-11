export class GalacticAge {
	constructor(age, birthdate) {
	 this.birthdate = new Date(birthdate);
	 this.earthAge = age;
	}

	mercuryConversion(){
		return (0.24 * this.earthAge);
	}

	venusConversion(){
		return(0.62 * this.earthAge);
	}

	marsConversion(){
		const marsAge = 1.88 * this.earthAge;
		return marsAge.toPrecision(3);
	}

	jupiterConversion(){
		const jupiterAge = 11.86 * this.earthAge;
		return jupiterAge.toPrecision(3);
	}

	timeDifference(firstDate, secondDate) {
		let difference = (firstDate.getTime() - secondDate.getTime());
		return difference;
	}

	checkExpectancy() {
		let maxEarthAge = 79;
		if (this.earthAge >= maxEarthAge) {
			return "sorry, can't calculate";
		} else {
			let earthExpectancy = 79 - this.earthAge;
			return earthExpectancy;
		}
	}

	mercuryExpectancy() {
		return (0.24 * (79 - this.earthAge));
	}

	venusExpectancy() {
		return (0.62 * (79 - this.earthAge));
	}

	marsExpectancy(){
		let marsExpect = (1.88 * (79 - this.earthAge));
		return marsExpect.toPrecision(5);
	}

	jupiterExpectancy(){
		const jupiterExpect = (11.86 * (79 - this.earthAge));
		return jupiterExpect.toPrecision(5);
	}
}
