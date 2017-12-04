import { GalacticAge } from './../js/bdd.js';

describe('GalacticAge', function() {

  it('should return false when the user age is greater than or equal to the approximate expected life expectancy in the US', function() {
    let newAgeInput = new GalacticAge(90)
    console.log(newAgeInput);
    expect(newAgeInput.checkExpectancy()).toEqual("false");
    });

  it('should return .24 of the user earth age when mercury conversion is performed', function() {
    let newAgeInput = new GalacticAge(20);
    console.log(newAgeInput);
    expect(newAgeInput.mercuryConversion()).toEqual(4.8);
  });

  it('should return .62 of the user earth age when venus conversion is performed', function() {
    let newAgeInput = new GalacticAge(20);
    console.log(newAgeInput);
    expect(newAgeInput.venusConversion()).toEqual(12.4);
  });

  it('should return 1.88 times the user earth age when mars conversion is performed', function() {
    let newAgeInput = new GalacticAge(20);
    console.log(newAgeInput);
    expect(newAgeInput.marsConversion()).toEqual("37.6");
  });

  it('should return 11.86 times the user age when jupiter conversion is performed', function() {
  let newAgeInput = new GalacticAge(20);
    console.log(newAgeInput);
    expect(newAgeInput.jupiterConversion()).toEqual('237');
  });
  it('')

});
