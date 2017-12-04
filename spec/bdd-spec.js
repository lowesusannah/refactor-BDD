import { GalacticAge } from './../js/bdd.js';

describe('GalacticAge', function() {

  it('should return false when the user age is greater than or equal to the approximate expected life expectancy in the US', function() {
    let newAgeInput = new GalacticAge(90)
    console.log(newAgeInput);
    expect(newAgeInput.checkExpectancy()).toEqual("false");
    });


  });
