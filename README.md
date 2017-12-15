# BDD: Super Galactic Age Calculator

#### _Behavior Driven Development: Friday Project using Node.js, Bower, Gulp and Jasmine, November 17, 2017_


#### By _**Susannah Lowe**_

## Description
_This is an application which calculate's a user's age in several different planet "years." This application is mainly a test of knowledge learned in week 1 of the Epicodus JavaScript course. The focus is on Node.js functionality, ES6 concepts like "let" or "const" and Red-Green-Refactor Behavior Driven Development test flow._


## Setup/Installation Requirements
   * Node and Bower are installed on your machine globally
   * Knowledge of ES6 vocabulary and syntax

  ### Installation Instructions:
    1. Clone project from GitHub repository, by copying and pasting the url of this GitHub repository following the $git clone command into your favorite command line program, such as Terminal on Mac.  
        $git clone https://github.com/lowesusannah/refactor-BDD.git

    2. In the command line run the following commands at the root level of your cloned repository folder:
        - $npm install
        - $bower install
        - $gulp build
        - $gulp watch (to preview live server updates)

    3. If needed, ready for production by running command $gulp build --production


## Specifications

| Spec        | Example Input           | Example Output  |
| ------------- |:-------------:| -----:|
| Determine the user's age according to Mercury solar years (.24 of an earth solar year)      | User's age in earth years = 20      |   User's age in Mercury years = 4.8  |
| Determine the user's age according to Venus solar years (.62 of an earth solar year)      | User's age in earth years = 20      |   User's age in Venus years = 12.4  |
| Determine the user's age according to Mars solar years (1.88 of an earth solar year)      | User's age in earth years = 20      |   User's age in Mars years = 37.6  |
| Determine the user's age according to Jupiter solar years (11.86 of an earth solar year)      | User's age in earth years = 20      |   User's age in Jupiter years = 237.2 |
| Determine if user's age has exceeded approx. average life expectancy in the US based on 2015 data (79 years).      | User's earth age = 80 | Display error (age exceeds life expectancy) |
| Determine current earth date and time, using Pacific timezone and earth units of measurement.      | Get date & time | Current Year: 2017, Current month: November, Current Date: 17th, Current time: 3:00pm, Current mintues: 00, Current seconds: 00 |
| Determine the user's life expectancy on each planet | Age: 20; current life expectancy in us is 79 | 14.16, 36.58, 110.92 and 699.74 life expectancy in Mercury, Venus, Mars and Jupiter years; 50 years additional life expectancy on earth|
| Determine the user's age on Mercury has exceeded approx. average life expectancy in the US based on 2015 data (79 EARTH years and 18.96 Mercury years).| User's Mercury age = 19.2 |  Display error (age exceeds life expectancy) |
| Determine the user's age on Venus has exceeded approx. average life expectancy in the US based on 2015 data (79 EARTH years and 48.98 Venus years).| User's Venus age = 49.6 | Display error (age exceeds life expectancy) |
| Determine the user's age on Mars has exceeded approx. average life expectancy in the US based on 2015 data (79 EARTH years and 148.52  Mars years).| User's Mars age = 150.4 | Display error (age exceeds life expectancy) |
| Determine the user's life expectancy on Jupiter has exceeded approx. average life expectancy in the US based on 2015 data (79 EARTH years and 936.94 Jupiter years).| User's Jupiter age = 948.8 | Display error (age exceeds life expectancy) | 

## Known Bugs

_None at this time._


## Support and contact details

_Please feel free to reach out with any questions, etc. to lowesusannah@gmail.com._


## Technologies Used

* ES6 (JavaScript)
* Node.js, including:
  - Jasmine testing
  - Karma test runner
  - Bower
  - Gulp
* jQuery
* Bootstrap (CSS, JavaScript)


### License

*Developed under the MIT license.*

Copyright (c) 2017 **_Susannah Lowe_**
