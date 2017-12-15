import { GalacticAge } from './../js/bdd.js';

describe('GalacticAge', function() {

  it('should return 0.24 of the user earth age when mercury conversion is performed', function() {
    let newAgeInput = new GalacticAge(20);
    console.log(newAgeInput);
    expect(newAgeInput.mercuryConversion()).toEqual(4.8);
  });

  it('should return 0.62 of the user earth age when venus conversion is performed', function() {
    let newAgeInput = new GalacticAge(20);
    console.log(newAgeInput);
    expect(newAgeInput.venusConversion()).toEqual(12.4);
  });

  it('should return 1.88 times the user earth age when mars conversion is performed', function() {
    let newAgeInput = new GalacticAge(20);
    console.log(newAgeInput);
    expect(newAgeInput.marsConversion()).toEqual("37.60");
  });

  it('should return 11.86 times the user age when jupiter conversion is performed', function() {
  let newAgeInput = new GalacticAge(20);
    console.log(newAgeInput);
    expect(newAgeInput.jupiterConversion()).toEqual("237.20");
  });

  it('should take two dates and determine the difference, in seconds, between the two', function() {
    let newBirthday = new Date('Jan 20, 1988 07:30:00');
    let standInDate = new Date('Dec 3, 2017 07:30:00');
    let chosenAge = new GalacticAge(30);
    expect(chosenAge.timeDifference(standInDate, newBirthday)).toEqual(942624000000);
  });

//test for expectancy on each planet

it('should display a sorry message if the user age is greater than or equal to the approximate expected life expectancy in the US', function() {
  let newAgeInput = new GalacticAge(90)
  console.log(newAgeInput);
  expect(newAgeInput.checkExpectancy()).toEqual("sorry, can't calculate");
  });

it('should return 0.24 of the user earth life expectancy when mercury expectancy function is performed', function() {
    let newAgeInput = new GalacticAge(20);
    console.log(newAgeInput);
    expect(newAgeInput.mercuryExpectancy()).toEqual(14.16);
  });

it('should return 0.62 of the user earth life expectancy when venus expectancy function is performed', function() {
    let newAgeInput = new GalacticAge(20);
    console.log(newAgeInput);
    expect(newAgeInput.venusExpectancy()).toEqual(36.58);
  });

it('should return 1.88 times the user earth life expectancy when mars expectancy function is performed', function() {
    let newAgeInput = new GalacticAge(20);
    console.log(newAgeInput);
    expect(newAgeInput.marsExpectancy()).toEqual("110.92");
  });

it('should return 11.86 times the user earth life expectancy when jupiter expectancy function is performed', function() {
    let newAgeInput = new GalacticAge(20);
    console.log(newAgeInput);
    expect(newAgeInput.jupiterExpectancy()).toEqual("699.74");
  });

it('should display a sorry message if the user age is greater than or equal to the approximate expected life expectancy in the US for the mercury years life expectancy calculation', function() {
  let newAgeInput = new GalacticAge(90)
  console.log(newAgeInput);
  expect(newAgeInput.mercuryExpectancy()).toEqual("sorry, can't calculate");
  });

it('should display a sorry message if the user age is greater than or equal to the approximate expected life expectancy in the US for the venus years life expectancy calculation', function() {
    let newAgeInput = new GalacticAge(90)
    console.log(newAgeInput);
    expect(newAgeInput.venusExpectancy()).toEqual("sorry, can't calculate");
    });

it('should display a sorry message if the user age is greater than or equal to the approximate expected life expectancy in the US for the mars years life expectancy calculation', function() {
    let newAgeInput = new GalacticAge(90)
    console.log(newAgeInput);
    expect(newAgeInput.marsExpectancy()).toEqual("sorry, can't calculate");
    });

it('should display a sorry message if the user age is greater than or equal to the approximate expected life expectancy in the US for the jupiter years life expectancy calculation', function() {
    let newAgeInput = new GalacticAge(90)
    console.log(newAgeInput);
    expect(newAgeInput.jupiterExpectancy()).toEqual("sorry, can't calculate");
    });

});
