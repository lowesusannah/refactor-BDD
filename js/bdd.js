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
		return (.24 * this.earthAge);
	}

	venusConversion(){
		return(.62 * this.earthAge);
	}

	marsConversion(){
		const marsAge = 1.88 * this.earthAge;
		return marsAge.toPrecision(3);
	}

	jupiterConversion(){
		const jupiterAge = 11.86 * this.earthAge;
		return jupiterAge.toPrecision(3);
	}
}
