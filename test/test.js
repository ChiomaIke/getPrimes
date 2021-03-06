(function(){
	'use strict';

	var jasmine = require('jasmine');
	
	var myApp = require('../app/library.js');
	
 describe("Get Primes tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return 'Invalid input received' for input less than 0", function() {
      expect(myApp.getPrimes(-3)).toBe('Invalid input received');
    });
	
	it("should return 'Invalid input received' for input equal to 0", function() {
      expect(myApp.getPrimes(0)).toBe('Invalid input received');
    });
	
    it("should return 'Primes of 1 cannot be found based on definition of a prime number' for input 1", function() {
      expect(myApp.getPrimes(1)).toBe('Primes of 1 cannot be found based on definition of a prime number');
    });

    it("should return 'Only integer values allowed' for non interger inputs", function() {
      expect(myApp.getPrimes([20])).toBe('Only integer values allowed');
    });
	
	it("should return 'Only integer values allowed' for no input provided", function() {
      expect(myApp.getPrimes()).toBe('Only integer values allowed');
    });
	
	it("should return 'Only integer values allowed' for string inputs", function() {
      expect(myApp.getPrimes('hi')).toBe('Only integer values allowed');
    });
	
	it("should return '[2, 3, 5]' for prime numbers between 1 and 6", function() {
      expect(myApp.getPrimes(6)).toEqual([2, 3, 5]);
    });
	
	it("should return '[2, 3, 5, 7]' for prime numbers between 1 and 10", function() {
      expect(myApp.getPrimes(10)).toEqual([2, 3, 5, 7]);
    });

    it("should return '[2, 3, 5, 7, 11, 13, 17, 19]' for prime numbers between 1 and 20", function() {
      expect(myApp.getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });

    it("should return '[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]' for prime numbers between 1 and 30", function() {
      expect(myApp.getPrimes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });

  });


});


})();