export class GalacticAge {
	constructor(age, birthdate) {
	 this.birthdate = new Date(birthdate);
	 this.earthAge = age;
	}

	checkExpectancy() {
		let maxEarthAge = 79;
		if (this.earthAge >= maxEarthAge) {
			return "false";
			} else {
			return "true";
		}
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

}
