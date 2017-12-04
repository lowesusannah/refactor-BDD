export class GalacticAge {
	constructor(ageInput) {
	 this.earthAge = ageInput;
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

	timeDifference() {
		let date1 = new Date('Dec 3, 2017 07:30:00');
		let date2 = new Date('Jan 20, 1988 07:30:00');
		let difference = (date1.getTime() - date2.getTime());
		return difference.toPrecision();
	}

}
