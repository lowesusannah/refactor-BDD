export class GalacticAge {
	constructor(ageInput) {
	 this.earthAge = ageInput;
	}

	checkExpectancy() {
		let maxEarthAge = 79;
		if (this.earthAge >= maxEarthAge) {
			return "true";
			} else {
			return "false";
		}
	}

	mercuryConversion(){
		
	}
}