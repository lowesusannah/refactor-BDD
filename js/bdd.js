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
		return marsAge.toFixed(2);
	}

	jupiterConversion(){
		const jupiterAge = 11.86 * this.earthAge;
		return jupiterAge.toFixed(2);
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
		let maxEarthAge = 79;
		if (this.earthAge >= maxEarthAge) {
			return "sorry, can't calculate";
		} else {
		return (0.24 * (79 - this.earthAge));
		}
	}

	venusExpectancy() {
		let maxEarthAge = 79;
		if (this.earthAge >= maxEarthAge) {
			return "sorry, can't calculate";
		} else {
		return (0.62 * (79 - this.earthAge));
		}
	}

	marsExpectancy(){
		let maxEarthAge = 79;
		if (this.earthAge >= maxEarthAge) {
			return "sorry, can't calculate";
		} else {
		const marsExpectancy = (1.88 * (79 - this.earthAge))
		return marsExpectancy.toFixed(2);
		}
	}

	jupiterExpectancy(){
		let maxEarthAge = 79;
		if (this.earthAge >= maxEarthAge) {
			return "sorry, can't calculate";
		} else {
		const jupiterExpectancy = (11.86 * (79 - this.earthAge))
		return jupiterExpectancy.toFixed(2);
		}
	}
}
